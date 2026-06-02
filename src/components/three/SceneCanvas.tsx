"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

const AIOrb = dynamic(
  () => import("./AIOrb").then((mod) => mod.AIOrb),
  { ssr: false }
);

const NeuralNetwork = dynamic(
  () => import("./NeuralNetwork").then((mod) => mod.NeuralNetwork),
  { ssr: false }
);

type SceneCanvasProps = {
  variant?: "orb" | "network";
  className?: string;
};

function SceneContent({ variant }: { variant: "orb" | "network" }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#818cf8" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#c084fc" />
      {variant === "orb" ? <AIOrb /> : <NeuralNetwork />}
    </>
  );
}

export function SceneCanvas({
  variant = "orb",
  className = "",
}: SceneCanvasProps) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <Suspense
        fallback={
          <div className="absolute inset-0 animate-pulse rounded-full bg-accent/10" />
        }
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <SceneContent variant={variant} />
        </Canvas>
      </Suspense>
    </div>
  );
}
