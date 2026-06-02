"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journeySteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const items = el.querySelectorAll("[data-timeline-item]");

    const ctx = gsap.context(() => {
      items.forEach((item) => {
        gsap.from(item, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from("[data-timeline-line]", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="section-padding relative"
      aria-labelledby="about-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          label="About"
          title="The journey so far"
          description="From student to builder — a path defined by curiosity, craft, and relentless execution."
        />

        <div ref={timelineRef} className="relative pl-8 md:pl-0">
          <div
            data-timeline-line
            className="absolute top-0 left-3 h-full w-px bg-gradient-to-b from-accent via-accent-secondary to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-14">
            {journeySteps.map((step, i) => (
              <div
                key={step.title}
                data-timeline-item
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>div:last-child]:md:col-start-1 md:[&>div:last-child]:md:row-start-1"
                }`}
              >
                <div
                  className={`hidden md:block ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}
                >
                  <span className="text-sm font-medium text-accent">{step.year}</span>
                </div>

                <div className="relative">
                  <div
                    className="absolute -left-8 top-6 flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-background md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>

                  <div className="glass glow-border rounded-2xl p-6 md:p-8">
                    <span className="text-sm font-medium text-accent md:hidden">
                      {step.year}
                    </span>
                    <h3
                      id={i === 0 ? "about-heading" : undefined}
                      className="mt-1 text-xl font-semibold text-foreground md:mt-0"
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
