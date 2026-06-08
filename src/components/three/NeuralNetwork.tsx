"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 24;

function createNodes() {
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 2 + Math.random() * 0.8;
    nodes.push(
      new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      )
    );
  }
  return nodes;
}

function createConnections(nodes: THREE.Vector3[]) {
  const connections: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < 2.2 && Math.random() > 0.55) {
        connections.push([i, j]);
      }
    }
  }
  return connections;
}

export function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useMemo(() => createNodes(), []);
  const connections = useMemo(() => createConnections(nodes), [nodes]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  const lineGeometries = useMemo(
    () =>
      connections.map(([a, b]) => {
        const geometry = new THREE.BufferGeometry();
        geometry.setFromPoints([nodes[a], nodes[b]]);
        return geometry;
      }),
    [connections, nodes]
  );

  return (
    <group ref={groupRef}>
      {lineGeometries.map((geometry, i) => (
  <lineSegments key={`edge-${i}`}>
    <primitive attach="geometry" object={geometry} />
    <lineBasicMaterial
      color="#6366f1"
      transparent
      opacity={0.25}
    />
  </lineSegments>
))}
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#6366f1"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}
