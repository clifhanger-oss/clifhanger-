import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

// Cinematic bloom on the brightest/emissive parts of the frame only — the
// chartreuse rim catching the rock, the aurora, the moon, star highlights, and
// the glowing route waypoint. Gated to the same high-performance tier as
// shadows and never mounted on the reduced-motion/no-WebGL poster path (that
// path never mounts <MountainScene/> at all).
//
// Lives in its own file, dynamically imported (see mountain-scene.tsx), so
// mobile/low-tier devices — where tier.bloom is always false — never fetch or
// parse the EffectComposer/UnrealBloomPass modules at all.
//
// This takes over rendering via a *positive r3f render priority*
// (`useFrame(cb, 1)`), which is the documented, supported way to hand a frame
// to an EffectComposer — it runs inside r3f's own rAF-driven loop and simply
// tells r3f to skip its one built-in `gl.render(scene, camera)` call, rather
// than starting a second, independent `requestAnimationFrame` loop that would
// fight the Canvas's own loop (a classic cause of the double-render/hang class
// of bug). Every other useFrame in mountain-scene.tsx keeps its default
// priority (0) and keeps firing exactly as before.
//
// Composer + all passes are created *and* disposed inside a single effect
// (not split across useMemo-for-creation / useEffect-for-cleanup) so React
// StrictMode's dev-only mount→cleanup→mount double-invoke can't leave a memoized
// composer instance pointing at render targets that a stray cleanup already
// disposed — the second mount always builds a fresh composer from scratch.
export default function Bloom() {
  const { gl, scene, camera } = useThree();
  const composerRef = useRef<EffectComposer | null>(null);

  useEffect(() => {
    const size = gl.getSize(new THREE.Vector2());
    const composer = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    // Subtle, high threshold: only genuinely bright/additive elements (moon,
    // aurora, route glow, sun-struck snow under the rim light) cross it — the
    // general terrain/UI-legibility-critical background stays untouched.
    const bloomPass = new UnrealBloomPass(size, 0.32, 0.45, 0.82);
    const outputPass = new OutputPass();
    composer.addPass(renderPass);
    composer.addPass(bloomPass);
    composer.addPass(outputPass);

    // UnrealBloomPass's own docs require tone mapping to be enabled: three only
    // applies tone mapping / color-space encoding when the active render target
    // is the screen (or XR), so the offscreen scene pass stays fully linear —
    // this only changes how the FINAL composited frame is graded, and is
    // restored on cleanup so the low-tier (no-Bloom) path never sees it.
    const prevToneMapping = gl.toneMapping;
    const prevExposure = gl.toneMappingExposure;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.1;

    composerRef.current = composer;

    return () => {
      composerRef.current = null;
      bloomPass.dispose();
      outputPass.dispose();
      composer.dispose();
      gl.toneMapping = prevToneMapping;
      gl.toneMappingExposure = prevExposure;
    };
  }, [gl, scene, camera]);

  // EffectComposer's render targets don't auto-track the renderer's size/DPR —
  // this has to be driven explicitly on every resize (viewport resize, monitor/
  // DPR change) or the composer silently keeps rendering at a stale resolution.
  const size = useThree((s) => s.size);
  useEffect(() => {
    const composer = composerRef.current;
    if (!composer) return;
    composer.setPixelRatio(gl.getPixelRatio());
    composer.setSize(size.width, size.height);
  }, [size, gl]);

  useFrame((_, delta) => {
    composerRef.current?.render(delta);
  }, 1);

  return null;
}
