"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";
import ThesisBlock from "@/components/ui/ThesisBlock";
import { resumeData } from "@/lib/resume";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="// education"
          title="Education"
          subtitle="Academic foundation in energy engineering and electrical systems."
        />

        {/* Degree cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {resumeData.education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            >
              <GlowCard glow={i === 0 ? "green" : "emerald"} className="h-full">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0
                      ${i === 0 ? "bg-accent-green/15 text-accent-green" : "bg-accent-emerald/15 text-accent-emerald"}`}
                  >
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-text-primary leading-snug"
                      style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                    >
                      {edu.degree}
                    </h3>
                    <p className={`text-sm font-medium ${i === 0 ? "text-accent-green" : "text-accent-emerald"}`}>
                      {edu.field}
                    </p>
                  </div>
                </div>

                <p className="text-text-secondary text-sm mb-1">{edu.university}</p>
                <div className="flex items-center justify-between">
                  <p className="text-text-muted text-xs">{edu.location}</p>
                  <span className="font-mono text-xs text-text-muted bg-bg-elevated px-2 py-0.5 rounded">
                    {edu.year}
                  </span>
                </div>

                {edu.coursework && (
                  <div className="mt-4 pt-4 border-t border-border-subtle">
                    <p className="text-xs font-mono text-accent-green mb-2 uppercase tracking-wider">
                      Coursework
                    </p>
                    <ul className="space-y-1">
                      {edu.coursework.map((c) => (
                        <li key={c} className="text-xs text-text-secondary flex gap-2">
                          <span className="text-accent-green shrink-0">·</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Thesis highlight */}
        <ThesisBlock data={resumeData.thesis} />
      </div>
    </section>
  );
}
