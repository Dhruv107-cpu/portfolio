"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: siteConfig.linkedin,
    description: "Connect professionally",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M18.5 0h-17C.7 0 0 .7 0 1.5v17c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM6 17H3V8h3v9zM4.5 6.3C3.4 6.3 2.5 5.4 2.5 4.2S3.4 2 4.5 2 6.5 3 6.5 4.2 5.6 6.3 4.5 6.3zM17 17h-3v-4.5c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V17H7.5V8h3v1.2c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8V17z" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    href: siteConfig.github,
    description: "View open source work",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10 0C4.48 0 0 4.48 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0110 4.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.59.67.5A10 10 0 0020 10c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
  },
  {
    id: "resume",
    label: "Resume",
    href: siteConfig.resumePath,
    description: "Download full resume",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M6 2h5l5 5v9a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M11 2v5h5M8 11h4M8 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function ContactSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative"
      aria-labelledby="contact-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          label="Contact"
          title="Let's build something remarkable"
          description="Open to collaborations, opportunities, and conversations about AI, products, and engineering."
        />

        <div
          ref={cardRef}
          className="glass-strong glow-border relative overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 30% 0%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(ellipse at 70% 100%, rgba(139,92,246,0.1), transparent 50%)",
            }}
          />

          <div className="relative grid gap-8 md:grid-cols-2">
            <div>
              <h3
                id="contact-heading"
                className="text-2xl font-semibold text-foreground"
              >
                Get in touch
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Whether you have a project in mind, a role to discuss, or just
                want to connect — I&apos;d love to hear from you.
              </p>

              <div className="mt-8">
                <MagneticButton href="#projects" variant="primary">
                  View My Work
                </MagneticButton>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass glow-border rounded-xl p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="M2.5 6.667L10 11.667l7.5-5M3.333 15h13.334c.92 0 1.666-.746 1.666-1.667V6.667c0-.92-.746-1.667-1.666-1.667H3.333c-.92 0-1.666.746-1.666 1.667v6.666c0 .921.746 1.667 1.666 1.667z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm text-muted">Email</p>
                      <p className="font-medium text-foreground">
                        {siteConfig.email}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    type="button"
                    onClick={copyEmail}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full border border-border bg-white/5 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-white/10"
                    aria-label="Copy email address"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.span
                          key="copied"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                        >
                          Copied!
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                        >
                          Copy
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>

              {contactLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-white/[0.02] p-4 transition-all duration-300 hover:border-border-hover hover:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    {link.icon}
                  </span>
                  <div>
                    <p className="text-sm text-muted">{link.label}</p>
                    <p className="font-medium text-foreground">
                      {link.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
