"use client";

import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";

function AchievementCard({
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
      className="glass glow-border group rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-[0_0_60px_rgba(99,102,241,0.15)] md:p-8"
    >
      <p className="text-4xl font-semibold text-gradient md:text-5xl">
        {count}
        {suffix}
      </p>
      <h3 className="mt-3 text-lg font-medium text-foreground">{label}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </motion.div>
  );
}

export function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding relative"
      aria-labelledby="achievements-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          label="Achievements"
          title="Impact by the numbers"
          description="Hackathons, AI projects, startup building, and open-source — quantified."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <AchievementCard key={item.label} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
