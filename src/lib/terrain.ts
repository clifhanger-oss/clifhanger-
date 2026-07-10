// Lightweight procedural noise used to displace the rocky mountain terrain.
// Hash-based value noise + ridged fractal Brownian motion for sharp climbing ridges.

function hash(x: number, y: number): number {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

function smoothNoise(x: number, y: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);
  return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
}

// Ridged fbm — produces sharp, sheer mountain ridges rather than rolling hills.
function ridgedFbm(x: number, y: number): number {
  let amp = 0.5;
  let freq = 1;
  let sum = 0;
  // 4 octaves, not 6 — each further octave halves in amplitude, so #5/#6
  // contributed <5% of the total signal for 33% more cost. Cut for perf.
  for (let i = 0; i < 4; i++) {
    const n = smoothNoise(x * freq, y * freq);
    const ridge = 1 - Math.abs(2 * n - 1);
    sum += amp * ridge * ridge;
    amp *= 0.5;
    freq *= 2.03;
  }
  return sum;
}

/**
 * Cheap per-point hash in [0,1), independent of the fbm octaves above.
 * Used for fine-grained, non-repeating surface variation (rock/snow grain)
 * that shouldn't line up with the ridge structure itself.
 */
export function grain(x: number, z: number): number {
  return hash(x * 3.1 + 4.7, z * 3.1 - 8.2);
}

/**
 * Terrain height in world units for a given planar coordinate.
 * Combines a broad ridge structure with fine rocky detail and carves a
 * central "route corridor" so the camera has technical faces to zoom into.
 */
export function terrainHeight(x: number, z: number): number {
  // Domain warp — shove the sample point around so ridges read craggy and
  // irregular rather than like evenly-spaced dunes.
  const wx = x + ridgedFbm(x * 0.02 + 11, z * 0.02) * 6;
  const wz = z + ridgedFbm(x * 0.02, z * 0.02 - 7) * 6;

  const base = ridgedFbm(wx * 0.045, wz * 0.045) * 14;
  // Mid-scale spurs and shoulders hanging off the main ridge lines.
  const mid = ridgedFbm(wx * 0.09 + 20, wz * 0.09 + 5) * 3.6;
  const detail = ridgedFbm(x * 0.16 + 40, z * 0.16 - 20) * 3.2;
  // Fine rocky chatter for close-up texture.
  const fine = ridgedFbm(x * 0.34 - 15, z * 0.34 + 25) * 0.9;
  // Sheer central cliff face rising toward the back of the scene.
  const cliff = Math.max(0, (z + 10) * 0.14) * (0.6 + ridgedFbm(x * 0.03, z * 0.03));
  return base + mid + detail + fine + cliff;
}
