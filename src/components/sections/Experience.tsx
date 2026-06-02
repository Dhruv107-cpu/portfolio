"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll("[data-exp-card]");

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      className="section-padding relative"
      aria-labelledby="experience-heading"
    >
      <div className="container-narrow" ref={sectionRef}>
        <SectionHeading
          label="Experience"
          title="Building in public"
          description="Projects, leadership, hackathons, and technical achievements that shaped my engineering journey."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp) => (
            <article
              key={exp.title}
              data-exp-card
              className="glass glow-border group rounded-2xl p-6 transition-all duration-500 hover:border-border-hover md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-accent">
                  {exp.period}
                </span>
                <span className="text-sm text-muted">{exp.org}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground transition-colors group-hover:text-gradient-accent">
                {exp.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                {exp.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
