"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SceneCanvas } from "@/components/three/SceneCanvas";
import { Particles } from "@/components/ui/Particles";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % siteConfig.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      <div className="mesh-gradient absolute inset-0" />
      <Particles count={50} />

      <div className="absolute top-1/2 right-0 hidden h-[500px] w-[500px] -translate-y-1/2 lg:block xl:h-[600px] xl:w-[600px]">
        <SceneCanvas variant="orb" className="h-full w-full" />
      </div>

      <div className="container-wide relative z-10 px-5 pt-32 pb-20 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-muted"
          >
            {siteConfig.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">
              Building AI Products That Solve Real Problems
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex h-10 items-center gap-3"
          >
            <span className="text-lg text-muted md:text-xl">I am a</span>
            <span className="relative inline-block h-8 overflow-hidden md:h-10">
              {siteConfig.roles.map((role, i) => (
                <motion.span
                  key={role}
                  initial={false}
                  animate={{
                    y: roleIndex === i ? 0 : roleIndex > i ? -40 : 40,
                    opacity: roleIndex === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 text-lg font-medium text-gradient-accent md:text-xl"
                >
                  {role}
                </motion.span>
              ))}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            AI Engineer · Software Developer · Startup Builder · Future ML
            Engineer crafting intelligent products at the intersection of design
            and engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted">
            Scroll
          </span>
          <div className="h-10 w-6 rounded-full border border-border p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mx-auto h-2 w-1 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
