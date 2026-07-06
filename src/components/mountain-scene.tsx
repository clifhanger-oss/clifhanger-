import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { terrainHeight } from "@/lib/terrain";

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
};

function detectTier(): Tier {
  const mem = (navigator as unknown as { deviceMemory?: number }).deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency ?? 8;
  const mobile =
    window.matchMedia("(max-width: 768px)").matches || /Mobi|Android/i.test(navigator.userAgent);
  if (mobile || mem <= 4 || cores <= 4) {
    return { snow: 150, dust: 150, stars: 300, segments: 120, dpr: [1, 1.25], antialias: false };
  }
  return { snow: 400, dust: 400, stars: 700, segments: 256, dpr: [1, 1.75], antialias: true };
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
function makeGlowTexture(inner: string, outer = "rgba(0,0,0,0)"): THREE.Texture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.5, inner);
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function Terrain({ segments = 220 }: { segments?: number }) {
  const geometry = useMemo(() => {
    const size = 120;
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position as THREE.BufferAttribute;

    // Displace first, then compute normals, so coloring can use surface slope.
    const colors = new Float32Array(pos.count * 3);
    const deep = new THREE.Color("#26282f"); // crevasse shadow
    const low = new THREE.Color("#3c3f47");
    const mid = new THREE.Color("#7c818b");
    const rock = new THREE.Color("#c3cad4");
    const snow = new THREE.Color("#f4f8ff");
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

      // Base granite ramp by elevation.
      if (t < 0.5) c.copy(low).lerp(mid, t / 0.5);
      else c.copy(mid).lerp(rock, (t - 0.5) / 0.5);

      // Deepen the low crevasses for contrast.
      c.lerp(deep, smoothstep(0.22, 0, t) * 0.5);

      // Snow settles where it's HIGH and relatively FLAT; steep faces stay bare rock.
      const snowAmount = smoothstep(0.52, 0.9, t) * smoothstep(0.55, 0.85, ny);
      c.lerp(snow, snowAmount);

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [segments]);

  return (
    <mesh geometry={geometry} position={[0, -8, -18]}>
      <meshStandardMaterial vertexColors roughness={0.9} metalness={0.1} flatShading />
    </mesh>
  );
}

// A darker, hazier ridge far behind the main massif for aerial-perspective depth.
function DistantRidge() {
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(280, 90, 120, 40);
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
  }, []);

  return (
    <mesh geometry={geometry} position={[0, -6, -120]}>
      <meshStandardMaterial color="#20242c" roughness={1} metalness={0} flatShading transparent opacity={0.85} />
    </mesh>
  );
}

// Thin drifting atmosphere particles for depth / AR-scan feel.
function Dust({ count = 400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 90;
      arr[i * 3 + 1] = Math.random() * 40;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 90 - 10;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.14} color={"#c9ff2f"} transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

// Falling alpine snow — slow vertical drift with horizontal sway, wrapped in a volume.
function Snow({ count = 400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const data = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const speed = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 140;
      arr[i * 3 + 1] = Math.random() * 70;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 120 - 20;
      speed[i] = 1.5 + Math.random() * 3;
    }
    return { arr, speed };
  }, [count]);

  useFrame((state, delta) => {
    const pts = ref.current;
    if (!pts) return;
    const attr = pts.geometry.attributes.position as THREE.BufferAttribute;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      let y = attr.getY(i) - data.speed[i] * delta;
      const x = attr.getX(i) + Math.sin(t * 0.5 + i) * delta * 0.4;
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

// Distant starfield on a large dome, with a gentle twinkle.
function Stars({ count = 700 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
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
  }, [count]);

  useFrame((state) => {
    const m = ref.current?.material as THREE.PointsMaterial | undefined;
    if (m) m.opacity = 0.55 + Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
  });

  return (
    <points ref={ref} renderOrder={-1}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.5} color={"#cfd8ea"} transparent opacity={0.6} sizeAttenuation={false} depthWrite={false} />
    </points>
  );
}

// Cold moon high in the sky, matched to the key-light direction, with a soft halo.
function Moon() {
  const halo = useMemo(() => makeGlowTexture("rgba(205,214,230,0.9)"), []);
  return (
    <group position={[-70, 78, -150]}>
      <mesh>
        <sphereGeometry args={[6, 32, 32]} />
        <meshBasicMaterial color={"#eef2fa"} />
      </mesh>
      <sprite scale={[70, 70, 1]}>
        <spriteMaterial map={halo} transparent opacity={0.7} depthWrite={false} blending={THREE.AdditiveBlending} />
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
        <spriteMaterial map={tex} transparent opacity={0.3} depthWrite={false} blending={THREE.AdditiveBlending} />
      </sprite>
      <sprite ref={g2} position={[55, 6, 6]} scale={[100, 46, 1]}>
        <spriteMaterial map={tex} transparent opacity={0.22} depthWrite={false} blending={THREE.AdditiveBlending} />
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
function Lights() {
  const rim = useRef<THREE.DirectionalLight>(null);
  useFrame((state) => {
    if (rim.current) rim.current.intensity = 1.4 + Math.sin(state.clock.elapsedTime * 0.6) * 0.4;
  });
  return (
    <>
      {/* Cold key light raking across the rock faces */}
      <directionalLight position={[-30, 55, 25]} intensity={2.6} color={"#cdd4de"} />
      {/* Chartreuse rim glow — the brand highlight, gently pulsing */}
      <directionalLight ref={rim} position={[28, 22, -18]} intensity={1.6} color={"#c9ff2f"} />
      {/* Crimson accent bounce for structural drama */}
      <pointLight position={[10, 8, 12]} intensity={70} distance={70} color={"#e0182a"} />
      <hemisphereLight args={["#8b94a3", "#1a1c22", 0.8]} />
      <ambientLight intensity={0.4} color={"#5a6472"} />
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

// Pauses the render loop when the tab is hidden OR the fixed background has been
// scrolled fully out of view — saves battery/CPU with no visual change.
function RenderGate() {
  const set = useThree((s) => s.set);
  const invalidate = useThree((s) => s.invalidate);
  useEffect(() => {
    let active = true;
    const apply = (on: boolean) => {
      if (on === active) return;
      active = on;
      set({ frameloop: on ? "always" : "never" });
      if (on) invalidate();
    };
    const onVis = () => apply(!document.hidden);
    const onScroll = () => apply(!document.hidden && window.scrollY < window.innerHeight * 1.2);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("scroll", onScroll);
    };
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
    >
      <color attach="background" args={["#08090c"]} />
      <fog attach="fog" args={["#08090c", 90, 260]} />

      <Lights />

      <Stars count={tier.stars} />
      <Moon />
      <Aurora />
      <DistantRidge />
      <Terrain segments={tier.segments} />
      <Route />
      <Dust count={tier.dust} />
      <Snow count={tier.snow} />
      <Rig />
      <RenderGate />
    </Canvas>
  );
}
