"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProfileCardProps = {
  className?: string;
};

export function ProfileCard({ className }: ProfileCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("relative flex justify-center lg:justify-end", className)}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        whileHover={{ scale: 1.04 }}
        className="group relative"
      >
        <div
          className="absolute -inset-4 rounded-full opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(139,92,246,0.15) 50%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="glass-strong glow-border relative h-64 w-64 overflow-hidden rounded-full p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-shadow duration-500 group-hover:shadow-[0_30px_80px_rgba(99,102,241,0.25)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            {!imgError ? (
              <Image
                src={siteConfig.profileImage}
                alt={`${siteConfig.name} — professional profile photo`}
                fill
                priority
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-accent/30 via-surface-elevated to-accent-secondary/20">
                <span className="text-5xl font-bold text-gradient sm:text-6xl">
                  DG
                </span>
                <span className="mt-2 text-xs text-muted">
                  Add photo at /public/profile/profile.jpg
                </span>
              </div>
            )}
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10 transition-all duration-500 group-hover:ring-accent/40"
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}
