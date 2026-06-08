"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Particles } from "@/components/ui/Particles";
import { ProfileCard } from "@/components/ProfileCard";

const nameLines = ["DHRUV", "GUPTA"];

function AnimatedName() {
  let charIndex = 0;

  return (
    <h1
      className="hero-name select-none font-bold tracking-tighter"
      aria-label={siteConfig.displayName}
    >
      {nameLines.map((line, lineIdx) => (
        <span key={line} className="block overflow-hidden">
          {line.split("").map((char) => {
            const index = charIndex++;
            return (
              <motion.span
                key={`${lineIdx}-${index}`}
                initial={{ opacity: 0, y: "100%", rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="hero-name-char inline-block text-gradient"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

function RotatingRoles() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % siteConfig.heroRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 flex h-9 items-center gap-3 md:mt-8 md:h-10">
      <span className="relative inline-block min-w-[200px] overflow-hidden md:min-w-[260px]">
        {siteConfig.heroRoles.map((role, i) => (
          <motion.span
            key={role}
            initial={false}
            animate={{
              y: roleIndex === i ? 0 : roleIndex > i ? -36 : 36,
              opacity: roleIndex === i ? 1 : 0,
            }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 text-lg font-medium text-gradient-accent md:text-xl lg:text-2xl"
          >
            {role}
          </motion.span>
        ))}
      </span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="hidden h-6 w-0.5 bg-accent sm:block"
        aria-hidden="true"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Introduction"
    >
      <div className="mesh-gradient absolute inset-0" />
      <Particles count={40} />

      <div className="container-wide relative z-10 px-5 pt-28 pb-20 md:px-8 lg:px-12 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 text-center lg:text-left"
          >
            <AnimatedName />
            <RotatingRoles />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mx-auto mt-6 max-w-lg text-base text-muted md:text-lg lg:mx-0"
            >
              Building intelligent products at the intersection of AI, design,
              and engineering — with the craft of a startup founder and the rigor
              of an engineer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.8 }}
              className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
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

          <div className="order-2">
            <ProfileCard />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
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
