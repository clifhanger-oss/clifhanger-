import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from "react";

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

// Static poster for reduced-motion, no-WebGL, or first paint. Pure CSS — no download.
function StaticPoster() {
  return (
    <div
      data-testid="mountain-static-poster"
      className="size-full bg-cover bg-[62%_center]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 58%, rgba(0,0,0,0.08) 100%), url('/images/hero-climber.webp')",
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

export function MountainBackground() {
  // null = undecided (first paint) → render poster to avoid jank.
  const [mode, setMode] = useState<"live" | "poster" | null>(null);

  useEffect(() => {
    setMode(prefersReducedMotion() || !webglSupported() ? "poster" : "live");
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full" aria-hidden="true">
      {mode === "live" ? (
        <SceneErrorBoundary fallback={<StaticPoster />}>
          <Suspense fallback={<StaticPoster />}>
            <MountainScene fallback={<StaticPoster />} onContextLost={() => setMode("poster")} />
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
