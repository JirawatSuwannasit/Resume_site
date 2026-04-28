"use client";

import { motion, type Variants } from "framer-motion";
import SkillTag from "./SkillTag";
import type { SkillGroup } from "@/types/resume";

interface SkillPanelProps {
  data: SkillGroup;
  variant: "green" | "emerald";
  direction: "left" | "right";
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export default function SkillPanel({ data, variant, direction }: SkillPanelProps) {
  const accentColor = variant === "green" ? "#39D353" : "#00D9A3";
  const borderColor = variant === "green" ? "border-accent-green/30" : "border-accent-emerald/30";
  const bgColor     = variant === "green" ? "bg-accent-green/5"    : "bg-accent-emerald/5";

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -48 : 48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`rounded-xl border ${borderColor} ${bgColor} p-6 flex flex-col gap-5`}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-lg border"
          style={{ borderColor: `${accentColor}40`, background: `${accentColor}15` }}
        >
          {data.icon === "cpu" ? "⚙" : "🌿"}
        </div>
        <h3 className="font-bold text-text-primary" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
          {data.label}
        </h3>
      </div>

      {/* Tags */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {data.skills.map((skill) => (
          <motion.div key={skill} variants={tagVariants}>
            <SkillTag label={skill} variant={variant} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
