"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import TimelineCard from "@/components/ui/TimelineCard";
import { resumeData } from "@/lib/resume";

export default function ExperienceSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="// work_history"
          title="Experience"
          subtitle="Building reliable systems from lab benches to energy-saving infrastructure."
        />

        <div className="relative">
          {/* Animated timeline vertical line */}
          <div ref={lineRef} className="absolute left-0 top-0 bottom-0 w-px overflow-hidden">
            <motion.div
              className="w-full timeline-line"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: inView ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ height: "100%", transformOrigin: "top" }}
            />
          </div>

          {/* Cards */}
          <div className="space-y-8 pl-6">
            {resumeData.experience.map((exp, i) => (
              <TimelineCard key={exp.company} data={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
