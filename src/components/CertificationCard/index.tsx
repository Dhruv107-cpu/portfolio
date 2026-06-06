"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Certification } from "@/lib/data";

type CertificationCardProps = {
  certification: Certification;
  index: number;
  onSelect: (cert: Certification) => void;
};

export function CertificationCard({
  certification,
  index,
  onSelect,
}: CertificationCardProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => onSelect(certification)}
      className="glass glow-border group w-full overflow-hidden rounded-2xl text-left transition-all duration-500 hover:shadow-[0_0_50px_rgba(99,102,241,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`View ${certification.title} certificate`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-elevated">
        <Image
          src={certification.image}
          alt={certification.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="p-5 md:p-6">
        <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-gradient">
          {certification.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{certification.organization}</p>
        <p className="mt-2 text-xs font-medium uppercase tracking-wider text-accent">
          {certification.date}
        </p>
      </div>
    </motion.button>
  );
}
