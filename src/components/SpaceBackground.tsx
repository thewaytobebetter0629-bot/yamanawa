"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  depth: number;
  offsetX: number;
  offsetY: number;
  velocityX: number;
  velocityY: number;
  driftX: number;
  driftY: number;
  phase: number;
  size: number;
  opacity: number;
};

/** A layered interactive field: particles drift like sand, part around the pointer, then settle back. */
export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: 0, y: 0, active: false };
    const radius = mobile ? 105 : 170;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;

    const buildParticles = () => {
      const density = mobile ? 1 / 6200 : 1 / 3300;
      const maximum = mobile ? 150 : 460;
      const count = Math.min(maximum, Math.floor(width * height * density));

      particles = Array.from({ length: count }, () => {
        const depth = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          depth,
          offsetX: 0,
          offsetY: 0,
          velocityX: 0,
          velocityY: 0,
          driftX: 0.008 + depth * 0.045,
          driftY: -0.002 + depth * 0.018,
          phase: Math.random() * Math.PI * 2,
          size: 0.45 + depth * 1.85,
          opacity: 0.12 + depth * 0.68,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        // Near particles move more quickly; the slow sine drift keeps the field organic.
        particle.x += particle.driftX + Math.sin(time * 0.00022 + particle.phase) * particle.depth * 0.014;
        particle.y += particle.driftY + Math.cos(time * 0.00018 + particle.phase) * particle.depth * 0.011;
        if (particle.x > width + 8) particle.x = -8;
        if (particle.y > height + 8) particle.y = -8;
        if (particle.y < -8) particle.y = height + 8;

        if (pointer.active) {
          const particleX = particle.x + particle.offsetX;
          const particleY = particle.y + particle.offsetY;
          const dx = particleX - pointer.x;
          const dy = particleY - pointer.y;
          const distance = Math.hypot(dx, dy);

          if (distance > 0.1 && distance < radius) {
            const force = (1 - distance / radius) * 1.45;
            particle.velocityX += (dx / distance) * force;
            particle.velocityY += (dy / distance) * force;
          }
        }

        // A small spring returns each dot to its original position after the pointer passes.
        particle.velocityX += -particle.offsetX * 0.045;
        particle.velocityY += -particle.offsetY * 0.045;
        particle.velocityX *= 0.82;
        particle.velocityY *= 0.82;
        particle.offsetX += particle.velocityX;
        particle.offsetY += particle.velocityY;

        context.beginPath();
        const shimmer = 0.86 + Math.sin(time * 0.0008 + particle.phase) * 0.14;
        context.fillStyle = `rgba(255, 255, 255, ${particle.opacity * shimmer})`;
        context.arc(
          particle.x + particle.offsetX,
          particle.y + particle.offsetY,
          particle.size,
          0,
          Math.PI * 2
        );
        context.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    const drawStatic = () => {
      context.clearRect(0, 0, width, height);
      for (const particle of particles) {
        context.beginPath();
        context.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }
    };

    const updatePointer = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const clearPointer = () => {
      pointer.active = false;
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    if (reducedMotion) {
      drawStatic();
    } else {
      frame = requestAnimationFrame(draw);
      window.addEventListener("pointermove", updatePointer, { passive: true });
      window.addEventListener("blur", clearPointer);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("blur", clearPointer);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
