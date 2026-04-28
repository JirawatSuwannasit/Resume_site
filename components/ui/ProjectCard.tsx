"use client";

import GlowCard from "./GlowCard";
import MetricCounter from "./MetricCounter";
import SkillTag from "./SkillTag";
import type { ProjectEntry } from "@/types/resume";

interface ProjectCardProps {
  data: ProjectEntry;
}

export default function ProjectCard({ data }: ProjectCardProps) {
  return (
    <GlowCard featured={data.featured} className="flex flex-col gap-4 h-full">
      {/* Featured badge */}
      {data.featured && (
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono bg-accent-neon/15 text-accent-neon border border-accent-neon/30">
            🏆 Award
          </span>
        </div>
      )}

      {/* Title & description */}
      <div>
        <h3
          className={`font-bold mb-1.5 ${data.featured ? "text-accent-neon" : "text-text-primary"}`}
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "1rem" }}
        >
          {data.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">{data.description}</p>
      </div>

      {/* Metrics */}
      {data.metrics.length > 0 && (
        <div
          className={`grid gap-3 pt-3 border-t border-border-subtle ${
            data.metrics.length === 1
              ? "grid-cols-1"
              : data.metrics.length === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {data.metrics.map((m) => (
            <MetricCounter
              key={m.label}
              value={m.value}
              unit={m.unit}
              label={m.label}
              decimals={m.decimals}
              variant={data.featured ? "neon" : "green"}
            />
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {data.tags.map((t) => (
          <SkillTag key={t} label={t} variant="default" />
        ))}
      </div>
    </GlowCard>
  );
}
