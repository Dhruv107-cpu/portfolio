"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { motion } from "framer-motion";

export function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      aria-hidden="true"
    >
      <motion.div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          left: x,
          top: y,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
        animate={{ left: x, top: y }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
    </motion.div>
  );
}
