"use client";

import { motion } from "framer-motion";
import { Award, BarChart2, Zap, Leaf, Layout } from "lucide-react";
import type { CertEntry } from "@/types/resume";

const icons = {
  data:       <BarChart2 size={18} />,
  energy:     <Leaf size={18} />,
  automation: <Zap size={18} />,
  design:     <Layout size={18} />,
};

const colors = {
  data:       { bg: "bg-blue-500/10",   text: "text-blue-400",   border: "border-blue-500/20"   },
  energy:     { bg: "bg-accent-green/10", text: "text-accent-green", border: "border-accent-green/20" },
  automation: { bg: "bg-accent-emerald/10", text: "text-accent-emerald", border: "border-accent-emerald/20" },
  design:     { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
};

interface CertBadgeProps {
  data: CertEntry;
}

export default function CertBadge({ data }: CertBadgeProps) {
  const c = colors[data.category];

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className={`rounded-xl border ${c.border} ${c.bg} p-4 flex gap-3 items-start hover:shadow-[0_0_20px_rgba(57,211,83,0.1)] transition-shadow`}
    >
      <div className={`mt-0.5 shrink-0 ${c.text}`}>{icons[data.category]}</div>
      <div className="min-w-0">
        <p className="text-text-primary text-sm font-medium leading-snug">{data.title}</p>
        <p className="text-text-secondary text-xs mt-0.5">{data.issuer}</p>
        <p className="font-mono text-text-muted text-xs mt-1">{data.date}</p>
      </div>
      <Award size={14} className="shrink-0 text-text-muted mt-0.5 ml-auto" />
    </motion.div>
  );
}
