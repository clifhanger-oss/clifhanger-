import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MountainBackground } from "@/components/mountain-background";

describe("MountainBackground", () => {
  const getContext = HTMLCanvasElement.prototype.getContext;

  afterEach(() => {
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", { configurable: true, value: getContext });
  });

  it("keeps a branded visual background when WebGL is unavailable", async () => {
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", { configurable: true, value: vi.fn(() => null) });
    render(<MountainBackground />);

    await waitFor(() => expect(screen.getByTestId("mountain-static-poster")).toBeInTheDocument());
    expect(screen.getByTestId("mountain-static-poster")).toHaveStyle({ backgroundImage: expect.stringContaining("hero-climber.webp") });
  });
});
