"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";

interface MetricCounterProps {
  value: number;
  unit: string;
  label: string;
  decimals?: number;
  variant?: "green" | "neon";
}

export default function MetricCounter({ value, unit, label, decimals = 0, variant = "green" }: MetricCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, 1800, inView, decimals);

  const color = variant === "neon" ? "#ADFF2F" : "#39D353";

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-mono font-bold leading-none gradient-counter"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
      >
        {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
        <span className="text-base ml-1" style={{ color }}>{unit}</span>
      </div>
      <div className="text-text-muted text-xs mt-1 font-mono">{label}</div>
    </div>
  );
}
