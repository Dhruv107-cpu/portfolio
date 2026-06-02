"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGraph } from "@/components/ui/SkillGraph";
import { SceneCanvas } from "@/components/three/SceneCanvas";

export function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="absolute top-0 right-0 h-[400px] w-[400px] opacity-40">
        <SceneCanvas variant="network" className="h-full w-full" />
      </div>

      <div className="container-narrow relative z-10">
        <SectionHeading
          label="Skills"
          title="Technical arsenal"
          description="A interconnected ecosystem of tools and technologies I use to build intelligent, scalable products."
        />

        <div className="glass glow-border rounded-3xl p-6 md:p-10">
          <SkillGraph />
        </div>
      </div>
    </section>
  );
}
