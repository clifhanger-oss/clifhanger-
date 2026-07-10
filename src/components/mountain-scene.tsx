import { useMemo, useRef, useState, useEffect, lazy, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { terrainHeight, grain } from "@/lib/terrain";

// Its own chunk: EffectComposer/UnrealBloomPass are only ever mounted on the
// high-tier (desktop) path, so low-tier devices never fetch or parse them.
const Bloom = lazy(() => import("./bloom-pass"));

// ---------------------------------------------------------------------------
// Scroll helper — reads document scroll progress (0..1) without React renders.
// scrollHeight is cached and refreshed on resize so we don't force a layout
// reflow on every animation frame.
// ---------------------------------------------------------------------------
let _maxScroll = 0;
function refreshMaxScroll() {
  _maxScroll = document.documentElement.scrollHeight - window.innerHeight;
}
if (typeof window !== "undefined") {
  refreshMaxScroll();
  window.addEventListener("resize", refreshMaxScroll, { passive: true });
}
function getScrollProgress(): number {
  if (typeof window === "undefined" || _maxScroll <= 0) return 0;
  return Math.min(1, Math.max(0, window.scrollY / _maxScroll));
}

// --- Device tier: scale particle counts, segments, DPR, AA to hardware. ------
type Tier = {
  snow: number;
  dust: number;
  stars: number;
  segments: number;
  dpr: [number, number];
  antialias: boolean;
  // Real-time shadow mapping — expensive, gated to capable hardware only.
  shadows: boolean;
  // Post-process bloom (EffectComposer + UnrealBloomPass) — an extra full-screen
  // pass chain on top of the base render, gated alongside shadows to the same
  // capable-hardware tier.
  bloom: boolean;
  // Segment resolution for the hazy background ridge (DistantRidge) — separate
  // from the main terrain's `segments` since it's already blurred/low-opacity.
  ridgeSegments: number;
};

function detectTier(): Tier {
  const mem = (navigator as unknown as { deviceMemory?: number }).deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency ?? 8;
  const mobile =
    window.matchMedia("(max-width: 768px)").matches || /Mobi|Android/i.test(navigator.userAgent);
  if (mobile || mem <= 4 || cores <= 4) {
    return {
      snow: 100,
      dust: 100,
      stars: 300,
      segments: 80,
      ridgeSegments: 60,
      dpr: [1, 1.25],
      antialias: false,
      shadows: false,
      bloom: false,
    };
  }
  return {
    snow: 400,
    dust: 400,
    stars: 700,
    segments: 160,
    ridgeSegments: 90,
    dpr: [1, 1.75],
    antialias: true,
    shadows: true,
    bloom: true,
  };
}

// Camera keyframes choreographed to the page's five scroll stops:
// Hero → Marquee → About → Gear → Contact. The camera flies a continuous
// route across the rock face, arriving at a high overview by the footer.
const KEYS: { pos: [number, number, number]; target: [number, number, number] }[] = [
  { pos: [0, 18, 40], target: [0, 3, -22] },   // Hero — elevated vista, mountain looms large
  { pos: [-28, 12, 14], target: [6, 6, -26] },  // Made-for-the-vertical band — swing to sheer cliffside
  { pos: [-6, 30, 30], target: [2, 4, -24] },   // About — pull back, rake across the ridge
  { pos: [12, 44, 54], target: [0, 1, -20] },   // Gear grid — sweeping rock face
  { pos: [26, 58, 44], target: [0, 0, -18] },   // Contact — high summit overview
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function sampleKeys(p: number, key: "pos" | "target") {
  const seg = p * (KEYS.length - 1);
  const i = Math.min(KEYS.length - 2, Math.floor(seg));
  const t = seg - i;
  // smoothstep easing for delayed, graceful transitions
  const e = t * t * (3 - 2 * t);
  const a = KEYS[i][key];
  const b = KEYS[i + 1][key];
  return [lerp(a[0], b[0], e), lerp(a[1], b[1], e), lerp(a[2], b[2], e)] as const;
}

// Soft radial glow sprite texture (moon halo, aurora bands, waypoint pulse).
// `stops` lets callers trade a hard-edged disc (few stops) for a physically
// softer atmospheric-scatter falloff (more, closer-packed stops) — real halos
// fall off faster near the core and trail off gradually, not linearly.
function makeGlowTexture(
  inner: string,
  outer = "rgba(0,0,0,0)",
  stops: [number, string][] = [
    [0, inner],
    [0.5, inner],
    [1, outer],
  ],
): THREE.Texture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [offset, color] of stops) g.addColorStop(offset, color);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function Terrain({ segments = 220, shadows = false }: { segments?: number; shadows?: boolean }) {
  const geometry = useMemo(() => {
    const size = 120;
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position as THREE.BufferAttribute;

    // Displace first, then compute normals, so coloring can use surface slope.
    const colors = new Float32Array(pos.count * 3);
    const deep = new THREE.Color("#1f232e"); // crevasse shadow — cool blue, not neutral grey
    const low = new THREE.Color("#3c3f47");
    const mid = new THREE.Color("#7c818b");
    const rock = new THREE.Color("#c3cad4");
    const snow = new THREE.Color("#f4f8ff");
    const snowShadow = new THREE.Color("#c3d2e8"); // blue-tinted snow in its own shade
    const c = new THREE.Color();

    const smoothstep = (e0: number, e1: number, x: number) => {
      const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
      return t * t * (3 - 2 * t);
    };

    let maxH = 0;
    const heights: number[] = [];
    for (let i = 0; i < pos.count; i++) {
      const h = terrainHeight(pos.getX(i), pos.getZ(i));
      heights.push(h);
      pos.setY(i, h);
      if (h > maxH) maxH = h;
    }

    geo.computeVertexNormals();
    const normal = geo.attributes.normal as THREE.BufferAttribute;

    for (let i = 0; i < pos.count; i++) {
      const t = Math.min(1, heights[i] / (maxH || 1));
      const ny = normal.getY(i); // 1 = flat/up-facing, ~0 = sheer face
      const nx = normal.getX(i);

      // Base granite ramp by elevation.
      if (t < 0.5) c.copy(low).lerp(mid, t / 0.5);
      else c.copy(mid).lerp(rock, (t - 0.5) / 0.5);

      // Deepen the low crevasses for contrast.
      c.lerp(deep, smoothstep(0.22, 0, t) * 0.5);

      // Fine grain: break up the flat elevation bands with subtle per-vertex
      // variance so large faces don't read as a flat color-fill gradient —
      // real rock/snow has speckle at this scale even before lighting.
      const jitter = (grain(pos.getX(i), pos.getZ(i)) - 0.5) * 0.06;
      c.r = Math.min(1, Math.max(0, c.r + jitter));
      c.g = Math.min(1, Math.max(0, c.g + jitter));
      c.b = Math.min(1, Math.max(0, c.b + jitter * 0.8));

      // Snow settles where it's HIGH and relatively FLAT; steep faces stay bare rock.
      // Patchiness (rather than a clean smoothstep band) reads more like wind-scoured
      // alpine snow than a uniform cap.
      const patch = 0.75 + grain(pos.getX(i) * 1.7, pos.getZ(i) * 1.7) * 0.5;
      const snowAmount = smoothstep(0.52, 0.9, t) * smoothstep(0.55, 0.85, ny) * patch;
      // Faces angled away from the key light (nx < 0, catching less raking light)
      // fall into their own shade — blend toward the cooler snow-shadow tone
      // instead of flattening straight to bright white.
      const snowTone = snowShadow.clone().lerp(snow, smoothstep(-0.3, 0.4, nx));
      c.lerp(snowTone, Math.min(1, snowAmount));

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [segments]);

  return (
    <mesh
      geometry={geometry}
      position={[0, -8, -18]}
      castShadow={shadows}
      receiveShadow={shadows}
    >
      <meshStandardMaterial vertexColors roughness={0.9} metalness={0.1} flatShading />
    </mesh>
  );
}

// A darker, hazier ridge far behind the main massif for aerial-perspective depth.
function DistantRidge({ segX = 120 }: { segX?: number }) {
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(280, 90, segX, Math.round(segX / 3));
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const h = terrainHeight(x * 0.5 + 100, z * 0.5) * 2.2;
      pos.setY(i, h);
    }
    geo.computeVertexNormals();
    return geo;
  }, [segX]);

  return (
    <mesh geometry={geometry} position={[0, -6, -120]}>
      {/* Cooler and closer to the fog color than the main massif — aerial
          perspective desaturates and blues distant rock so it visually
          recedes behind the near terrain instead of reading as a flat cutout. */}
      <meshStandardMaterial color="#262c3a" roughness={1} metalness={0} flatShading transparent opacity={0.78} />
    </mesh>
  );
}

// Thin drifting atmosphere particles for depth / AR-scan feel. Each mote carries
// its own slow current-drift vector and a light bobbing sway, so the cloud reads
// as loose air current rather than a rigid disc spinning in place.
function Dust({ count = 400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const data = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const drift = new Float32Array(count * 2); // per-particle [vx, vz] wind current
    const phase = new Float32Array(count);
    const bob = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 90;
      arr[i * 3 + 1] = Math.random() * 40;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 90 - 10;
      // Gentle prevailing current (mostly +x) with per-particle variance, rather
      // than every mote orbiting the same axis in lockstep.
      drift[i * 2] = 0.05 + Math.random() * 0.09;
      drift[i * 2 + 1] = (Math.random() - 0.5) * 0.05;
      phase[i] = Math.random() * Math.PI * 2;
      bob[i] = 0.3 + Math.random() * 0.5;
    }
    return { arr, drift, phase, bob };
  }, [count]);

  useFrame((state, delta) => {
    const pts = ref.current;
    if (!pts) return;
    const attr = pts.geometry.attributes.position as THREE.BufferAttribute;
    const t = state.clock.elapsedTime;
    const half = 45; // half of the ~90-unit spawn volume, for wraparound
    for (let i = 0; i < count; i++) {
      let x = attr.getX(i) + data.drift[i * 2] * delta;
      let z = attr.getZ(i) + data.drift[i * 2 + 1] * delta;
      const y = attr.getY(i) + Math.sin(t * 0.35 + data.phase[i]) * delta * data.bob[i];
      // Wrap drifted motes back to the far edge instead of thinning the cloud out.
      if (x > half) x = -half;
      if (z > half + 10) z = -half - 10;
      attr.setX(i, x);
      attr.setY(i, y);
      attr.setZ(i, z);
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.arr, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.14} color={"#c9ff2f"} transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

// Falling alpine snow — slow vertical drift with horizontal sway, wrapped in a volume.
// Each flake gets its own fall speed, sway amplitude/frequency/phase, and a slight
// per-flake wind bias, so the fall reads as gravity-plus-gusts rather than a
// mechanically uniform curtain (every flake previously swayed on the exact same
// sine, offset only by index).
function Snow({ count = 400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const data = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const speed = new Float32Array(count);
    const swayAmp = new Float32Array(count);
    const swayFreq = new Float32Array(count);
    const phase = new Float32Array(count);
    const wind = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 140;
      arr[i * 3 + 1] = Math.random() * 70;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 120 - 20;
      speed[i] = 1.5 + Math.random() * 3;
      swayAmp[i] = 0.25 + Math.random() * 0.45;
      swayFreq[i] = 0.35 + Math.random() * 0.5;
      phase[i] = Math.random() * Math.PI * 2;
      wind[i] = 0.08 + Math.random() * 0.16; // gentle prevailing drift, heavier flakes drift less
    }
    return { arr, speed, swayAmp, swayFreq, phase, wind };
  }, [count]);

  useFrame((state, delta) => {
    const pts = ref.current;
    if (!pts) return;
    const attr = pts.geometry.attributes.position as THREE.BufferAttribute;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      let y = attr.getY(i) - data.speed[i] * delta;
      // Two overlapping sway terms (slow primary drift + faster micro-flutter)
      // beat against each other for a less metronomic path than a single sine.
      const sway =
        Math.sin(t * data.swayFreq[i] + data.phase[i]) * data.swayAmp[i] +
        Math.sin(t * data.swayFreq[i] * 2.3 + data.phase[i] * 1.7) * data.swayAmp[i] * 0.25;
      const x = attr.getX(i) + (sway * 0.6 + data.wind[i]) * delta;
      if (y < -6) y = 70;
      attr.setY(i, y);
      attr.setX(i, x);
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.arr, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.32} color={"#eaf2ff"} transparent opacity={0.65} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function makeStarPositions(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 200 + Math.random() * 60;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 0.5; // upper hemisphere only
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.cos(phi) * 0.8 + 20;
    arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta) - 40;
  }
  return arr;
}

// One independently-twinkling subset of the sky. Splitting the starfield into a
// few layers, each pulsing on its own frequency/phase, avoids the "whole sky
// breathing in unison" look of a single shared opacity animation — real
// atmospheric scintillation is per-star and uncorrelated.
function StarLayer({
  count,
  size,
  freq,
  phase,
  baseOpacity,
}: {
  count: number;
  size: number;
  freq: number;
  phase: number;
  baseOpacity: number;
}) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => makeStarPositions(count), [count]);

  useFrame((state) => {
    const m = ref.current?.material as THREE.PointsMaterial | undefined;
    if (m) m.opacity = baseOpacity + Math.sin(state.clock.elapsedTime * freq + phase) * 0.15;
  });

  return (
    <points ref={ref} renderOrder={-1}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      {/* fog disabled — the night sky sits above the ground-level haze the fog
          models, so it shouldn't dim toward the fog color with distance. */}
      <pointsMaterial
        size={size}
        color={"#cfd8ea"}
        transparent
        opacity={baseOpacity}
        sizeAttenuation={false}
        depthWrite={false}
        fog={false}
      />
    </points>
  );
}

// Distant starfield on a large dome, split into a few asynchronously-twinkling layers.
function Stars({ count = 700 }: { count?: number }) {
  const a = Math.round(count * 0.5);
  const b = Math.round(count * 0.32);
  const c = count - a - b;
  return (
    <>
      <StarLayer count={a} size={0.42} freq={0.6} phase={0} baseOpacity={0.55} />
      <StarLayer count={b} size={0.5} freq={0.9} phase={2.1} baseOpacity={0.5} />
      <StarLayer count={c} size={0.62} freq={1.35} phase={4.4} baseOpacity={0.45} />
    </>
  );
}

// Cold moon high in the sky, matched to the key-light direction, with a soft halo.
function Moon() {
  // A tight bright core plus a wide, gradually-thinning skirt reads more like real
  // atmospheric scatter around a moon than the previous hard-edged disc-then-fade.
  const halo = useMemo(
    () =>
      makeGlowTexture("rgba(205,214,230,0.9)", "rgba(0,0,0,0)", [
        [0, "rgba(230,236,248,0.95)"],
        [0.12, "rgba(210,220,240,0.55)"],
        [0.3, "rgba(190,205,232,0.22)"],
        [0.6, "rgba(180,198,228,0.08)"],
        [1, "rgba(0,0,0,0)"],
      ]),
    [],
  );
  return (
    <group position={[-70, 78, -150]}>
      <mesh>
        <sphereGeometry args={[6, 32, 32]} />
        <meshBasicMaterial color={"#eef2fa"} fog={false} />
      </mesh>
      <sprite scale={[95, 95, 1]}>
        <spriteMaterial
          map={halo}
          transparent
          opacity={0.8}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          fog={false}
        />
      </sprite>
    </group>
  );
}

// Chartreuse aurora ribbons — the brand highlight painted across the night sky.
function Aurora() {
  const g1 = useRef<THREE.Sprite>(null);
  const g2 = useRef<THREE.Sprite>(null);
  const tex = useMemo(() => makeGlowTexture("rgba(184,255,47,0.5)"), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (g1.current) {
      g1.current.position.x = -40 + Math.sin(t * 0.08) * 12;
      (g1.current.material as THREE.SpriteMaterial).opacity = 0.28 + Math.sin(t * 0.4) * 0.1;
    }
    if (g2.current) {
      g2.current.position.x = 55 + Math.cos(t * 0.06) * 14;
      (g2.current.material as THREE.SpriteMaterial).opacity = 0.2 + Math.cos(t * 0.5) * 0.08;
    }
  });

  return (
    <group position={[0, 46, -140]}>
      <sprite ref={g1} scale={[120, 60, 1]}>
        <spriteMaterial
          map={tex}
          transparent
          opacity={0.3}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          fog={false}
        />
      </sprite>
      <sprite ref={g2} position={[55, 6, 6]} scale={[100, 46, 1]}>
        <spriteMaterial
          map={tex}
          transparent
          opacity={0.22}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          fog={false}
        />
      </sprite>
    </group>
  );
}

// A glowing climbing "route" tracing up the central cliff, with a waypoint that
// ascends the line — a subtle nod to the brand story ("made for the vertical").
function Route() {
  const waypoint = useRef<THREE.Sprite>(null);
  const glow = useMemo(() => makeGlowTexture("rgba(184,255,47,0.95)"), []);

  const { line, curve } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const n = 60;
    for (let i = 0; i <= n; i++) {
      const f = i / n;
      const z = lerp(-2, -26, f);
      const x = Math.sin(f * 6) * 3.2 * (1 - f * 0.4);
      const y = terrainHeight(x, z) + 1.2 - 8; // sit just off the rock face (mesh offset -8)
      pts.push(new THREE.Vector3(x, y, z - 18));
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(120));
    const mat = new THREE.LineBasicMaterial({ color: "#c9ff2f", transparent: true, opacity: 0.55 });
    return { line: new THREE.Line(geo, mat), curve };
  }, []);

  useFrame((state) => {
    const t = (state.clock.elapsedTime * 0.06) % 1;
    const p = curve.getPoint(t);
    if (waypoint.current) {
      waypoint.current.position.set(p.x, p.y, p.z);
      const s = 2.4 + Math.sin(state.clock.elapsedTime * 3) * 0.4;
      waypoint.current.scale.set(s, s, 1);
    }
  });

  return (
    <group>
      <primitive object={line} />
      <sprite ref={waypoint}>
        <spriteMaterial map={glow} transparent opacity={0.9} depthWrite={false} blending={THREE.AdditiveBlending} />
      </sprite>
    </group>
  );
}

// Subtle life in the lighting — the chartreuse rim breathes.
function Lights({ shadows = false }: { shadows?: boolean }) {
  const rim = useRef<THREE.DirectionalLight>(null);
  const { gl } = useThree();

  // The shadow-casting key light and the terrain it shadows are both static —
  // only the rim light (non-shadow-casting) and the camera move. Three.js's
  // default `shadowMap.autoUpdate` re-renders the whole shadow depth pass every
  // frame regardless, which is pure waste for a shadow that never changes.
  // Render it once and freeze it: setting `needsUpdate` renders exactly one more
  // shadow pass, then three.js resets it to false on its own since autoUpdate
  // is off, so this doesn't need a cleanup/reset.
  useEffect(() => {
    if (!shadows) return;
    gl.shadowMap.autoUpdate = false;
    gl.shadowMap.needsUpdate = true;
  }, [shadows, gl]);

  useFrame((state) => {
    if (rim.current) rim.current.intensity = 1.4 + Math.sin(state.clock.elapsedTime * 0.6) * 0.4;
  });
  return (
    <>
      {/* Cold key light raking across the rock faces — repositioned to share the
          Moon's direction (upper-back-left, see <Moon/> at [-70,78,-150]) so the
          dominant light on the terrain reads as moonlight, not a mismatched sun. */}
      <directionalLight
        position={[-42, 58, -85]}
        intensity={2.6}
        color={"#cdd4de"}
        castShadow={shadows}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-72}
        shadow-camera-right={72}
        shadow-camera-top={72}
        shadow-camera-bottom={-72}
        shadow-camera-near={1}
        shadow-camera-far={260}
        shadow-bias={-0.0018}
        shadow-normalBias={0.025}
      />
      {/* Chartreuse rim glow — the brand highlight, gently pulsing */}
      <directionalLight ref={rim} position={[28, 22, -18]} intensity={1.6} color={"#c9ff2f"} />
      {/* Crimson accent bounce for structural drama */}
      <pointLight position={[10, 8, 12]} intensity={70} distance={70} color={"#e0182a"} />
      {/* Cool blue-shifted ground bounce — approximates light scattering back up
          off snow/rock into the crevasses rather than a neutral grey fill. */}
      <hemisphereLight args={["#8b94a3", "#141826", 0.8]} />
      <ambientLight intensity={0.38} color={"#525d70"} />
    </>
  );
}

function Rig() {
  const { camera } = useThree();
  const current = useRef(getScrollProgress());
  const tmpPos = useRef(new THREE.Vector3());
  const tmpTarget = useRef(new THREE.Vector3());
  // Seed the smoothed look-at at the hero keyframe target so frame 1 doesn't swing.
  const smoothTarget = useRef(new THREE.Vector3(...KEYS[0].target));

  useFrame((state, delta) => {
    // Clamp dt so a dropped frame / tab refocus can't jolt the camera.
    const dt = Math.min(delta, 1 / 30);
    const target = getScrollProgress();
    // Damp scroll progress for smooth, delayed easing.
    current.current = THREE.MathUtils.damp(current.current, target, 2.2, dt);
    const p = current.current;

    const [px, py, pz] = sampleKeys(p, "pos");
    const [tx, ty, tz] = sampleKeys(p, "target");

    // Gentle continuous idle drift so the scene is always subtly alive.
    const t = state.clock.elapsedTime;
    const driftX = Math.sin(t * 0.12) * 1.6;
    const driftY = Math.cos(t * 0.1) * 0.8;

    tmpPos.current.set(px + driftX, py + driftY, pz);
    camera.position.lerp(tmpPos.current, 1 - Math.exp(-5 * dt));

    // Let the look-at trail the position slightly for a graceful, cinematic feel.
    tmpTarget.current.set(tx, ty, tz);
    smoothTarget.current.lerp(tmpTarget.current, 1 - Math.exp(-4 * dt));
    camera.lookAt(smoothTarget.current);
  });

  return null;
}

// Pauses the render loop only when the tab is hidden. The background is
// position:fixed and reads through the translucent panels for the ENTIRE page
// (including the footer), so it must keep animating on every scroll position —
// pausing on scroll would freeze the visible scene at the bottom.
function RenderGate() {
  const set = useThree((s) => s.set);
  const invalidate = useThree((s) => s.invalidate);
  useEffect(() => {
    const onVis = () => {
      set({ frameloop: document.hidden ? "never" : "always" });
      if (!document.hidden) invalidate();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [set, invalidate]);
  return null;
}

export default function MountainScene() {
  const [tier] = useState(detectTier);
  return (
    <Canvas
      dpr={tier.dpr}
      camera={{ position: [0, 18, 40], fov: 55, near: 0.1, far: 400 }}
      gl={{ antialias: tier.antialias, powerPreference: "high-performance" }}
      shadows={tier.shadows}
    >
      <color attach="background" args={["#0a0d13"]} />
      {/* Exponential fog (rather than the old linear 90-260 falloff, which left
          everything under 90 units completely untouched by atmosphere) gives a
          continuous aerial-perspective gradient starting close to the camera —
          near rock stays crisp, the mid-distance terrain gently desaturates and
          cools, and the distant ridge folds smoothly into the sky instead of
          reading as a separately-hazed cutout layer. */}
      <fogExp2 attach="fog" args={["#0a0d13", 0.0075]} />

      <Lights shadows={tier.shadows} />

      <Stars count={tier.stars} />
      <Moon />
      <Aurora />
      <DistantRidge segX={tier.ridgeSegments} />
      <Terrain segments={tier.segments} shadows={tier.shadows} />
      <Route />
      <Dust count={tier.dust} />
      <Snow count={tier.snow} />
      <Rig />
      <RenderGate />
      {tier.bloom && (
        <Suspense fallback={null}>
          <Bloom />
        </Suspense>
      )}
    </Canvas>
  );
}
