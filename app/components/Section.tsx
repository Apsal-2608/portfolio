"use client";

import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

interface SectionProps extends PropsWithChildren {
  id: string;
  title: string;
  eyebrow?: string;
  className?: string;
}

export function Section({ id, title, eyebrow, className, children }: SectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-20% 0px -10% 0px", once: true });

  return (
    <section id={id} className={`relative py-20 md:py-28 ${className ?? ""}`}>
      <div className="pointer-events-none absolute inset-x-0 top-3 z-0 flex justify-center">
        <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-5 md:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <header className="max-w-3xl space-y-3">
          {eyebrow && (
            <p className="badge-pill bg-slate-900/80 text-xs text-cyan-300/90">
              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              {eyebrow}
            </p>
          )}
          <h2 className="section-heading bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-300 bg-clip-text text-transparent">
            {title}
          </h2>
        </header>

        {children}
      </motion.div>
    </section>
  );
}

