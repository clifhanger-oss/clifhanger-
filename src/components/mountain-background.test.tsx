import { act, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MountainBackground } from "@/components/mountain-background";

// The real Three.js Canvas can't initialize a WebGL context in jsdom (no GPU),
// so exercising the *scene* itself isn't practical here — mock it down to a
// stub that exposes its onContextLost callback, so the retry/recovery state
// machine in MountainBackground (the thing we actually need regression
// coverage for) can be driven deterministically.
let liveOnContextLost: (() => void) | undefined;
vi.mock("@/components/mountain-scene", () => ({
  default: ({ onContextLost }: { onContextLost?: () => void }) => {
    liveOnContextLost = onContextLost;
    return <div data-testid="mountain-scene-live" />;
  },
}));

// testing-library's waitFor polls on real timers, which deadlocks once a test
// switches to vi.useFakeTimers() — vi.waitFor is fake-timer-aware, so use it
// instead in every test below that enables fake timers.
async function waitForLiveScene() {
  await vi.waitFor(() => expect(screen.getByTestId("mountain-scene-live")).toBeInTheDocument());
}

describe("MountainBackground", () => {
  const getContext = HTMLCanvasElement.prototype.getContext;

  afterEach(() => {
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", { configurable: true, value: getContext });
    liveOnContextLost = undefined;
    vi.useRealTimers();
  });

  it("keeps a branded visual background when WebGL is unavailable", async () => {
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", { configurable: true, value: vi.fn(() => null) });
    render(<MountainBackground />);

    await waitFor(() => expect(screen.getByTestId("mountain-static-poster")).toBeInTheDocument());
    expect(screen.getByTestId("mountain-static-poster")).toHaveStyle({ backgroundImage: expect.stringContaining("hero-climber.webp") });
  });

  it("recovers the live scene after a transient WebGL context loss instead of being stranded on the poster", async () => {
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", { configurable: true, value: vi.fn(() => ({})) });
    vi.useFakeTimers();
    render(<MountainBackground />);

    await waitForLiveScene();

    // Simulate the browser's webglcontextlost event firing (e.g. mobile Safari
    // evicting the context under memory pressure).
    act(() => liveOnContextLost!());
    expect(screen.getByTestId("mountain-static-poster")).toBeInTheDocument();
    expect(screen.queryByTestId("mountain-scene-live")).not.toBeInTheDocument();

    // Before this fix, that was permanent for the rest of the session. It
    // should instead retry with a fresh Canvas/context after a short delay.
    await act(() => vi.advanceTimersByTimeAsync(1500));
    expect(screen.getByTestId("mountain-scene-live")).toBeInTheDocument();
    expect(screen.queryByTestId("mountain-static-poster")).not.toBeInTheDocument();
  });

  it("gives up after repeated context loss instead of retrying forever", async () => {
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", { configurable: true, value: vi.fn(() => ({})) });
    vi.useFakeTimers();
    render(<MountainBackground />);

    for (let attempt = 0; attempt < 2; attempt++) {
      await waitForLiveScene();
      act(() => liveOnContextLost!());
      await act(() => vi.advanceTimersByTimeAsync(1500));
    }

    // Third loss exceeds the retry budget — should settle on the poster
    // permanently rather than retry forever on genuinely broken hardware.
    await waitForLiveScene();
    act(() => liveOnContextLost!());
    await act(() => vi.advanceTimersByTimeAsync(5000));
    expect(screen.getByTestId("mountain-static-poster")).toBeInTheDocument();
    expect(screen.queryByTestId("mountain-scene-live")).not.toBeInTheDocument();
  });
});
