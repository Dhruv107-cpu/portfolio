"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "glass glow-border relative overflow-hidden rounded-2xl transition-all duration-500",
          `bg-gradient-to-br ${project.gradient}`
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.15), transparent 40%)",
          }}
        />

        <div className="relative p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mt-1 text-muted">{project.tagline}</p>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-white/5 transition-colors hover:bg-white/10"
              aria-expanded={expanded}
              aria-label={expanded ? "Collapse details" : "Expand details"}
            >
              <motion.svg
                animate={{ rotate: expanded ? 45 : 0 }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 4v12M4 10h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </motion.svg>
            </button>
          </div>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-4 border-t border-border pt-6">
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-accent">
                  Problem
                </h4>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-accent">
                  Solution
                </h4>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-accent">
                  Features
                </h4>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-border-hover hover:bg-white/5"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-white/90"
            >
              Live Demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 11L11 3M11 3H5M11 3v6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
