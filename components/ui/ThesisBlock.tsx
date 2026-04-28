"use client";

import { motion } from "framer-motion";
import SkillTag from "./SkillTag";
import type { ThesisData } from "@/types/resume";

interface ThesisBlockProps {
  data: ThesisData;
}

export default function ThesisBlock({ data }: ThesisBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="rounded-xl bg-bg-elevated border border-accent-emerald/30 overflow-hidden"
      style={{ borderLeft: "3px solid #00D9A3" }}
    >
      <div className="p-6 md:p-8">
        {/* Header chip */}
        <span className="inline-block font-mono text-xs text-accent-emerald border border-accent-emerald/30 rounded-full px-3 py-1 mb-4 bg-accent-emerald/5">
          M.Eng Thesis
        </span>

        <h3
          className="text-text-primary font-bold leading-snug mb-3"
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: "clamp(1rem, 2vw, 1.15rem)" }}
        >
          {data.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-5">{data.summary}</p>

        {/* Findings */}
        <div className="mb-5">
          <p className="text-xs font-mono text-accent-emerald mb-3 uppercase tracking-wider">Key Findings</p>
          <ul className="space-y-2">
            {data.findings.map((f, i) => (
              <li key={i} className="flex gap-2 text-text-secondary text-sm">
                <span className="text-accent-emerald mt-1 shrink-0">▸</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {data.tags.map((t) => (
            <SkillTag key={t} label={t} variant="emerald" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
