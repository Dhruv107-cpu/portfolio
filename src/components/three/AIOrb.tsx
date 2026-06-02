"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export function AIOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Sphere ref={meshRef} args={[1.8, 64, 64]} scale={1}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.35}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        emissive="#4338ca"
        emissiveIntensity={0.4}
      />
    </Sphere>
  );
}
