"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export function ResumeSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const docRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const doc = docRef.current;
    if (!card || !doc) return;

    const ctx = gsap.context(() => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(doc, {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="resume"
      className="section-padding relative"
      aria-labelledby="resume-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          label="Resume"
          title="Experience on paper"
          description="A concise overview of my skills, projects, and achievements — ready to share with recruiters and collaborators."
        />

        <div
          ref={cardRef}
          className="glass-strong glow-border relative overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 20% 0%, rgba(99,102,241,0.12), transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(139,92,246,0.08), transparent 50%)",
            }}
          />

          <div className="relative grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <div ref={docRef} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03, rotateY: 5 }}
                transition={{ duration: 0.4 }}
                className="relative"
                style={{ perspective: 1000 }}
              >
                <div className="glass glow-border relative w-56 rounded-xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.4)] md:w-64">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-400/80" />
                    <div className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <div className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-3/4 rounded bg-white/20" />
                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-5/6 rounded bg-white/10" />
                    <div className="mt-4 h-2 w-1/2 rounded bg-accent/40" />
                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-4/5 rounded bg-white/10" />
                    <div className="h-2 w-full rounded bg-white/10" />
                  </div>
                  <p className="mt-6 text-center text-xs font-medium uppercase tracking-widest text-muted">
                    Resume.pdf
                  </p>
                </div>
                <div
                  className="absolute -right-3 -bottom-3 -z-10 h-full w-full rounded-xl bg-accent/10 blur-sm"
                  aria-hidden="true"
                />
              </motion.div>
            </div>

            <div>
              <h3
                id="resume-heading"
                className="text-2xl font-semibold text-foreground md:text-3xl"
              >
                {siteConfig.name}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                AI Engineer · Software Developer · Startup Builder. Download or
                preview my full resume with project highlights, technical skills,
                and achievements.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton
                  href={siteConfig.resumePath}
                  variant="primary"
                  external
                  className="download-resume"
                >
                  Download Resume
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M8 2v8M5 7l3 3 3-3M3 12h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </MagneticButton>
                <MagneticButton
                  href={siteConfig.resumePath}
                  variant="secondary"
                  external
                >
                  View Resume
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M3 11L11 3M11 3H5M11 3v6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </MagneticButton>
              </div>

              <p className="mt-4 text-xs text-muted">
                Place your PDF at{" "}
                <code className="rounded bg-white/5 px-1.5 py-0.5 text-foreground">
                  /public/resume/Dhruv_Gupta_Resume.pdf
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
