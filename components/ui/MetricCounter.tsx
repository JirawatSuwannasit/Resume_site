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

function formatNumber(n: number, decimals: number): string {
  if (decimals > 0) return n.toFixed(decimals);
  return Math.round(n).toLocaleString("en-US");
}

export default function MetricCounter({
  value,
  unit,
  label,
  decimals = 0,
  variant = "green",
}: MetricCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, 1800, inView, decimals);

  const color = variant === "neon" ? "#ADFF2F" : "#39D353";

  // Scale font down for large formatted numbers to prevent overflow
  const formatted = formatNumber(count, decimals);
  const charCount = formatted.length;
  const fontSize =
    charCount >= 7
      ? "clamp(0.85rem, 2vw, 1rem)"
      : charCount >= 5
      ? "clamp(1rem, 2.5vw, 1.25rem)"
      : "clamp(1.25rem, 3vw, 1.75rem)";

  return (
    <div ref={ref} className="text-center min-w-0">
      <div
        className="font-mono font-bold leading-tight gradient-counter break-words"
        style={{ fontSize }}
      >
        {formatted}
        {unit && (
          <span className="ml-1 font-mono font-medium" style={{ color, fontSize: "0.75em" }}>
            {unit}
          </span>
        )}
      </div>
      <div className="text-text-muted text-xs mt-1 font-mono leading-snug">{label}</div>
    </div>
  );
}
