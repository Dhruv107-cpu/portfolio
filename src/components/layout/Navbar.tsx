"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <nav
        className="container-wide flex items-center justify-between px-5 md:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-white/15 md:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all",
              mobileOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all",
              mobileOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-foreground"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
