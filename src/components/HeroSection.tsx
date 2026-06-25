"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const HeroSection: FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-6 py-20"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow accent */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="font-mono text-xs tracking-widest text-muted uppercase">
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Mohammed
          <br />
          <span className="gradient-text">BOULOUD</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted"
        >
          <span className="rounded-full border border-border px-3 py-1">Engineering Student</span>
          <span className="text-accent">/</span>
          <span className="rounded-full border border-border px-3 py-1">Developer</span>
          <span className="text-accent">/</span>
          <span className="rounded-full border border-border px-3 py-1">Security Researcher</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          EHTP Engineering Student passionate about low-level programming, reverse engineering,
          geomatics, and building full-stack applications. Exploring the intersection of
          spatial data, cybersecurity, and software development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-accent/90 active:scale-95"
          >
            View Projects
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-accent hover:text-accent active:scale-95"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Terminal-style info line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 flex items-center gap-2 font-mono text-xs text-muted"
        >
          <span className="text-accent">$</span>
          <span>whoami</span>
          <span className="ml-2 rounded bg-surface px-2 py-0.5 text-foreground">morocco/ehtp/2025</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <svg
            className="h-5 w-5 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
