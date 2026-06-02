"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("[data-animate]"), {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="mb-16 md:mb-20">
      <p
        data-animate
        className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent"
      >
        {label}
      </p>
      <h2
        data-animate
        className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p
          data-animate
          className="mt-4 max-w-2xl text-lg text-muted"
        >
          {description}
        </p>
      )}
    </div>
  );
}
