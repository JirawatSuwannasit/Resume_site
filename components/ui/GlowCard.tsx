"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glow?: "green" | "emerald" | "none";
  featured?: boolean;
}

export default function GlowCard({ children, className = "", glow = "green", featured = false }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        relative rounded-xl border bg-bg-surface p-6
        transition-shadow duration-300
        ${featured ? "border-accent-neon/50" : "border-border-subtle"}
        ${glow === "green" ? "hover:shadow-[0_0_24px_rgba(57,211,83,0.15)]" : ""}
        ${glow === "emerald" ? "hover:shadow-[0_0_24px_rgba(0,217,163,0.15)]" : ""}
        ${className}
      `}
    >
      {featured && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-neon/5 to-transparent pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
}
