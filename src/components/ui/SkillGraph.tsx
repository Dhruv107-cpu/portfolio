"use client";

import { useState, useRef, useEffect } from "react";
import { skillNodes, skillEdges } from "@/lib/data";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  frontend: "#818cf8",
  backend: "#34d399",
  aiml: "#c084fc",
  programming: "#fbbf24",
};

export function SkillGraph() {
  const [hovered, setHovered] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      setDimensions({
        width: entry.contentRect.width,
        height: Math.max(400, entry.contentRect.width * 0.55),
      });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getPos = (x: number, y: number) => ({
    left: x * dimensions.width,
    top: y * dimensions.height,
  });

  const connectedNodes = hovered
    ? new Set(
        skillEdges
          .filter(([a, b]) => a === hovered || b === hovered)
          .flat()
      )
    : null;

  return (
    <div ref={containerRef} className="relative w-full">
      <svg
        className="absolute inset-0 h-full w-full"
        width={dimensions.width}
        height={dimensions.height}
        aria-hidden="true"
      >
        {skillEdges.map(([a, b]) => {
          const nodeA = skillNodes.find((n) => n.id === a)!;
          const nodeB = skillNodes.find((n) => n.id === b)!;
          const isActive =
            !hovered ||
            a === hovered ||
            b === hovered ||
            connectedNodes?.has(a) ||
            connectedNodes?.has(b);

          return (
            <line
              key={`${a}-${b}`}
              x1={nodeA.x * dimensions.width}
              y1={nodeA.y * dimensions.height}
              x2={nodeB.x * dimensions.width}
              y2={nodeB.y * dimensions.height}
              stroke={isActive ? "rgba(99,102,241,0.4)" : "rgba(255,255,255,0.06)"}
              strokeWidth={isActive ? 2 : 1}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      {skillNodes.map((node) => {
        const pos = getPos(node.x, node.y);
        const isHovered = hovered === node.id;
        const isConnected = connectedNodes?.has(node.id);
        const isDimmed = hovered && !isHovered && !isConnected;

        return (
          <button
            key={node.id}
            type="button"
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
              isDimmed && "opacity-30",
              isHovered && "scale-110 shadow-[0_0_30px_var(--glow)]"
            )}
            style={{
              ...pos,
              borderColor: categoryColors[node.category],
              backgroundColor: `${categoryColors[node.category]}15`,
              color: categoryColors[node.category],
              boxShadow: isHovered
                ? `0 0 30px ${categoryColors[node.category]}60`
                : undefined,
            }}
            onMouseEnter={() => setHovered(node.id)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(node.id)}
            onBlur={() => setHovered(null)}
          >
            {node.label}
          </button>
        );
      })}

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {Object.entries(categoryColors).map(([cat, color]) => (
          <div key={cat} className="flex items-center gap-2 text-sm text-muted">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="capitalize">
              {cat === "aiml" ? "AI/ML" : cat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
