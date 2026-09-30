"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; depth: number; size: number; opacity: number; ox: number; oy: number };

const PERM = (() => {
  const p = new Uint8Array(256); for (let i = 0; i < 256; i++) p[i] = i;
  let seed = 1337; const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  for (let i = 255; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  const out = new Uint8Array(512); for (let i = 0; i < 512; i++) out[i] = p[i & 255]; return out;
})();
const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
const lerp = (a: number, b: number, t: number) => a + t * (b - a);
function grad(hash: number, x: number, y: number) { const h = hash & 3; const u = h < 2 ? x : y; const v = h < 2 ? y : x; return (h & 1 ? -u : u) + (h & 2 ? -2 * v : 2 * v); }
function noise(x: number, y: number) {
  const X = Math.floor(x) & 255; const Y = Math.floor(y) & 255; const xf = x - Math.floor(x); const yf = y - Math.floor(y); const u = fade(xf); const v = fade(yf);
  return lerp(lerp(grad(PERM[PERM[X] + Y], xf, yf), grad(PERM[PERM[X + 1] + Y], xf - 1, yf), u), lerp(grad(PERM[PERM[X] + Y + 1], xf, yf - 1), grad(PERM[PERM[X + 1] + Y + 1], xf - 1, yf - 1), u), v);
}

/** Original YAMANAWA flowing molecular-wave background, restored from d85c1c7. */
export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; const ctx = canvas?.getContext("2d"); if (!canvas || !ctx) return;
    const mobile = matchMedia("(max-width: 767px)").matches; const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches; const dpr = Math.min(devicePixelRatio || 1, 2);
    let width = 0; let height = 0; let frame = 0; let time = 0; let particles: Particle[] = []; const pointer = { x: -9999, y: -9999 };
    const build = () => { const count = Math.min(mobile ? 9000 : 32000, Math.floor(width * height * (mobile ? 1 / 60 : 1 / 26))); particles = Array.from({ length: count }, () => { const depth = Math.random(); return { x: Math.random() * width, y: Math.random() * height, vx: 0, vy: 0, depth, size: .3 + depth * .7 + Math.random() * .22, opacity: .035 + depth * .13 + Math.random() * .035, ox: 0, oy: 0 }; }); };
    const resize = () => { const rect = canvas.getBoundingClientRect(); width = rect.width; height = rect.height; canvas.width = width * dpr; canvas.height = height * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); build(); };
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,.24)"; ctx.fillRect(0, 0, width, height); time++;
      for (const p of particles) {
        const angle = noise(p.x * .0016, p.y * .0016 + time * .00012) * Math.PI * 4; const speed = (.4 + p.depth * .6) * .9;
        p.vx += (Math.cos(angle) * speed - p.vx) * .11; p.vy += (Math.sin(angle) * speed - p.vy) * .11; p.x += p.vx + .16 * (.4 + p.depth * .6); p.y += p.vy;
        if (p.x > width + 10) p.x = -10; if (p.x < -10) p.x = width + 10; if (p.y > height + 10) p.y = -10; if (p.y < -10) p.y = height + 10;
        const dx = p.x - pointer.x; const dy = p.y - pointer.y; const distance = Math.hypot(dx, dy); if (!mobile && distance < 190) { const force = (1 - distance / 190) * 9; p.ox += (distance ? dx / distance : 0) * force; p.oy += (distance ? dy / distance : 0) * force; }
        p.ox *= .88; p.oy *= .88; const intensity = Math.min(Math.abs(p.vx) + Math.abs(p.vy), 1.4) / 1.4; ctx.fillStyle = `rgba(255,255,255,${p.opacity * (.5 + intensity * .6)})`; ctx.fillRect(p.x + p.ox - p.size, p.y + p.oy - p.size, p.size * 2, p.size * 2);
      }
      frame = requestAnimationFrame(draw);
    };
    const drawStatic = () => { ctx.clearRect(0, 0, width, height); for (const p of particles) { ctx.fillStyle = `rgba(255,255,255,${Math.min(p.opacity * 2.6, .7)})`; const size = p.size * 1.5; ctx.fillRect(p.x - size, p.y - size, size * 2, size * 2); } };
    const move = (event: PointerEvent) => { pointer.x = event.clientX; pointer.y = event.clientY; }; const leave = () => { pointer.x = -9999; pointer.y = -9999; };
    resize(); const observer = new ResizeObserver(resize); observer.observe(canvas);
    if (reduced) drawStatic(); else { frame = requestAnimationFrame(draw); if (!mobile) { addEventListener("pointermove", move, { passive: true }); addEventListener("pointerleave", leave, { passive: true }); } }
    return () => { cancelAnimationFrame(frame); observer.disconnect(); removeEventListener("pointermove", move); removeEventListener("pointerleave", leave); };
  }, []);
  return <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true"><div className="absolute inset-0" style={{ background: "radial-gradient(120% 90% at 50% 0%, #0d0d0d 0%, #000 55%, #000 100%)" }} /><canvas ref={canvasRef} className="absolute inset-0 h-full w-full" /></div>;
}
