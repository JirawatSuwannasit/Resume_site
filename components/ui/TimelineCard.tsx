"use client";

import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/types/resume";

interface TimelineCardProps {
  data: ExperienceEntry;
  index: number;
}

export default function TimelineCard({ data, index }: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="relative pl-8"
    >
      {/* Dot on timeline */}
      <div
        className={`absolute left-0 top-2 w-3 h-3 rounded-full border-2 -translate-x-1/2 z-10
          ${data.current
            ? "bg-accent-green border-accent-green shadow-[0_0_8px_rgba(57,211,83,0.6)]"
            : "bg-bg-surface border-accent-emerald"
          }`}
      />

      <div className="bg-bg-surface border border-border-subtle rounded-xl p-5 hover:shadow-[0_0_24px_rgba(57,211,83,0.12)] transition-shadow duration-300">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3
              className="font-bold text-text-primary text-lg"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              {data.role}
            </h3>
            <p className="text-accent-emerald text-sm font-medium">{data.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="font-mono text-xs text-text-muted bg-bg-elevated px-2 py-0.5 rounded">
              {data.period}
            </span>
            {data.current && (
              <span className="flex items-center gap-1 text-xs text-accent-green font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                Current
              </span>
            )}
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-1.5">
          {data.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-text-secondary text-sm">
              <span className="text-accent-green mt-1 shrink-0">▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
