"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume";
import type { FocusArea } from "@/types/resume";

const accentMap = {
  green:   { border: "border-accent-green/30",   bg: "bg-accent-green/5",   text: "text-accent-green",   glow: "hover:shadow-[0_0_28px_rgba(57,211,83,0.18)]"   },
  emerald: { border: "border-accent-emerald/30", bg: "bg-accent-emerald/5", text: "text-accent-emerald", glow: "hover:shadow-[0_0_28px_rgba(0,217,163,0.18)]"   },
  neon:    { border: "border-accent-neon/30",    bg: "bg-accent-neon/5",    text: "text-accent-neon",    glow: "hover:shadow-[0_0_28px_rgba(173,255,47,0.18)]"  },
};

function FocusCard({ area, index }: { area: FocusArea; index: number }) {
  const c = accentMap[area.color];
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`rounded-xl border ${c.border} ${c.bg} ${c.glow} p-6 flex flex-col gap-3 transition-shadow duration-300`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{area.icon}</span>
        <h3
          className={`font-bold text-lg ${c.text}`}
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
        >
          {area.title}
        </h3>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed">{area.description}</p>
    </motion.div>
  );
}

export default function StrategicFocusSection() {
  const { strategicFocus } = resumeData;

  return (
    <section id="strategic-focus" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-mono text-xs text-accent-green border border-accent-green/30 rounded-full px-3 py-1 mb-4 bg-accent-green/5">
            // career_objective
          </span>
          <h2
            className="text-4xl font-bold mb-3 text-text-primary"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Strategic Focus
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Where I am headed — and the value I bring to organisations pursuing Net Zero.
          </p>
        </motion.div>

        {/* Career objective quote block */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-xl bg-bg-elevated border border-accent-green/25 overflow-hidden mb-10"
          style={{ borderLeft: "3px solid #39D353" }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              {/* Quote icon */}
              <span
                className="text-4xl leading-none text-accent-green/40 font-serif select-none shrink-0 mt-1"
                aria-hidden
              >
                "
              </span>
              <p
                className="text-text-primary text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
              >
                {strategicFocus.objective}
              </p>
            </div>
            {/* Highlight tags */}
            <div className="flex flex-wrap gap-2 mt-5 pl-10">
              {["IoT Systems", "Power Automate (RPA)", "ISO 14064-1", "Net Zero", "Digital Transformation"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-accent-emerald border border-accent-emerald/30 rounded-full px-3 py-0.5 bg-accent-emerald/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Three focus area cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {strategicFocus.areas.map((area, i) => (
            <FocusCard key={area.title} area={area} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
