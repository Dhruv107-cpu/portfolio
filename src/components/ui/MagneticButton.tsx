"use client";

import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  external,
}: MagneticButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.25);

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-white text-background hover:bg-white/90 shadow-[0_0_40px_rgba(99,102,241,0.3)]",
    secondary:
      "glass text-foreground hover:border-border-hover hover:bg-white/5",
    ghost: "text-muted hover:text-foreground",
  };

  return (
    <a
      href={href}
      ref={ref as React.Ref<HTMLAnchorElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </a>
  );
}
