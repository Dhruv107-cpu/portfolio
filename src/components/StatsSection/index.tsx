"use client";

import { credibilityStats } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";

function StatCard({
  label,
  value,
  suffix,
  description,
  index,
}: {
  label: string;
  value: number;
  suffix: string;
  description: string;
  index: number;
}) {
  const { count, ref } = useCountUp(value, 2200);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass glow-border group rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-[0_0_60px_rgba(99,102,241,0.15)] md:p-8"
    >
      <p className="text-4xl font-bold text-gradient md:text-5xl lg:text-6xl">
        {count}
        {suffix}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-foreground">{label}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section
      id="credibility"
      className="section-padding relative"
      aria-labelledby="credibility-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          label="Credibility"
          title="Achievements & Learning Journey"
          description="A track record of continuous learning, building, and competing — backed by measurable progress."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {credibilityStats.map((item, i) => (
            <StatCard key={item.label} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
