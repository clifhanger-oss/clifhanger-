import { Component, lazy, Suspense, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

// Heavy Three.js scene is code-split so first paint isn't blocked on it.
const MountainScene = lazy(() => import("@/components/mountain-scene"));

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

function webglSupported() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

// Static poster for reduced-motion, no-WebGL, first paint, or a WebGL failure/
// retry. Pure CSS — no image download, so it paints instantly with zero
// loading latency on the fallback path that most needs to be fast.
// (Was briefly hero-climber.webp — the same photo used for the About
// section's climber reveal further down the page, so on every load it read
// as that section's content flashing in at the top before the real hero
// took over. Reverted to the original branded gradient.)
function StaticPoster() {
  return (
    <div
      data-testid="mountain-static-poster"
      className="size-full"
      style={{
        background:
          "radial-gradient(120% 80% at 70% 10%, #12141a 0%, #0a0b0e 45%, #050506 100%)",
      }}
    />
  );
}

class SceneErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

// WebGL context loss is a designed-to-be-recoverable browser event, not a
// hardware failure — mobile Safari in particular evicts contexts aggressively
// under memory pressure, and Android GPU drivers reset under load. A device
// that hits it once is very likely to render fine again moments later. A
// fresh <Canvas> gets a fresh context (simpler and more reliable than trying
// to restore the dead one in place), so retry by remounting via `key` a
// bounded number of times before giving up permanently — otherwise a single
// transient loss would (as it did before this fix) strand the device on the
// static poster for the rest of the session with no way back.
const MAX_CONTEXT_LOSS_RETRIES = 2;
const CONTEXT_LOSS_RETRY_DELAY_MS = 1500;

export function MountainBackground() {
  // null = undecided (first paint) → render poster to avoid jank.
  const [mode, setMode] = useState<"live" | "poster" | null>(null);
  const [sceneKey, setSceneKey] = useState(0);
  const retriesRef = useRef(0);

  useEffect(() => {
    setMode(prefersReducedMotion() || !webglSupported() ? "poster" : "live");
  }, []);

  const handleContextLost = useCallback(() => {
    setMode("poster");
    if (retriesRef.current >= MAX_CONTEXT_LOSS_RETRIES) return;
    retriesRef.current += 1;
    window.setTimeout(() => {
      setSceneKey((k) => k + 1);
      setMode("live");
    }, CONTEXT_LOSS_RETRY_DELAY_MS);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full" aria-hidden="true">
      {mode === "live" ? (
        <SceneErrorBoundary key={sceneKey} fallback={<StaticPoster />}>
          <Suspense fallback={<StaticPoster />}>
            <MountainScene fallback={<StaticPoster />} onContextLost={handleContextLost} />
          </Suspense>
        </SceneErrorBoundary>
      ) : (
        <StaticPoster />
      )}

      {/* Contrast scrims so text stays legible against varying rock tones. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      {/* Cinematic vignette to focus the frame */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 220px 60px rgba(0,0,0,0.85)" }}
      />
      {/* Fine film grain for texture / depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
