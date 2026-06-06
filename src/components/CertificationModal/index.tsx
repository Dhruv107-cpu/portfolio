"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Certification } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";

type CertificationModalProps = {
  certification: Certification | null;
  onClose: () => void;
};

export function CertificationModal({
  certification,
  onClose,
}: CertificationModalProps) {
  useEffect(() => {
    if (!certification) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [certification, onClose]);

  return (
    <AnimatePresence>
      {certification && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            aria-label="Close certificate preview"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong glow-border relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 text-foreground transition-colors hover:bg-white/10"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M4 4l8 8M12 4l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="relative aspect-[16/10] bg-surface-elevated">
              <Image
                src={certification.image}
                alt={certification.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain p-4"
                priority
              />
            </div>

            <div className="border-t border-border p-6 md:p-8">
              <h2
                id="cert-modal-title"
                className="text-2xl font-semibold text-foreground"
              >
                {certification.title}
              </h2>
              <p className="mt-2 text-muted">{certification.organization}</p>
              <p className="mt-1 text-sm text-accent">{certification.date}</p>

              <div className="mt-6">
                <MagneticButton
                  href={certification.credentialUrl}
                  variant="primary"
                  external
                >
                  View Credential
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
