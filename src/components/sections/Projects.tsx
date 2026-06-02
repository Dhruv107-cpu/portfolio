"use client";

import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative"
      aria-labelledby="projects-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          label="Projects"
          title="Products that ship"
          description="End-to-end solutions spanning AI, blockchain, and full-stack engineering — built to solve real problems."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
