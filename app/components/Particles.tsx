"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const PARTICLE_COUNT = 80;

type Particle = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
};

export function ParticlesBackground() {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  const rotateX = useTransform(tiltY, [-1, 1], [8, -8]);
  const rotateY = useTransform(tiltX, [-1, 1], [-8, 8]);

  // Generate particles only on the client after mount to avoid
  // server/client HTML mismatches from Math.random()
  useEffect(() => {
    const generated: Particle[] = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 12
    }));

    setParticles(generated);
  }, []);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = event.clientX / innerWidth;
      const y = event.clientY / innerHeight;
      tiltX.set(x * 2 - 1);
      tiltY.set(y * 2 - 1);
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX - 210}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY - 210}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [tiltX, tiltY]);

  return (
    <>
      <div className="mouse-glow" />
      <motion.div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/90"
        style={{ rotateX, rotateY }}
      >
        <div className="cyber-grid absolute inset-[-1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),_transparent_65%)]" />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.55]"
          viewBox="0 0 1600 900"
          aria-hidden="true"
        >
          {particles.map((particle) => (
            <motion.circle
              key={particle.id}
              cx={`${particle.x}%`}
              cy={`${particle.y}%`}
              r={particle.size}
              className="fill-cyan-400/20 stroke-cyan-300/40"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 0.7, 0], y: [-30, 10, -30] }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>
    </>
  );
}

