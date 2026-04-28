"use client";

import { motion } from "framer-motion";

interface SkillTagProps {
  label: string;
  variant?: "green" | "emerald" | "default";
}

export default function SkillTag({ label, variant = "default" }: SkillTagProps) {
  const base = "inline-block font-mono text-xs px-3 py-1.5 rounded-md border cursor-default transition-all duration-200";

  const variants = {
    green:   "bg-accent-green/10 text-accent-green border-accent-green/30 hover:bg-accent-green hover:text-bg-base hover:border-accent-green",
    emerald: "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/30 hover:bg-accent-emerald hover:text-bg-base hover:border-accent-emerald",
    default: "bg-bg-elevated text-text-secondary border-border-subtle hover:bg-accent-green/10 hover:text-accent-green hover:border-accent-green/30",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${base} ${variants[variant]}`}
    >
      {label}
    </motion.span>
  );
}
