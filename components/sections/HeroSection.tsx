"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Mail, Phone, ChevronDown } from "lucide-react";
import { resumeData } from "@/lib/resume";

export default function HeroSection() {
  const { name, taglines, email, phone } = resumeData.hero;
  const [taglineIdx, setTaglineIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTaglineIdx((i) => (i + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(id);
  }, [taglines.length]);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden:   { opacity: 0, x: -40 },
    visible:  { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Radial gradient backdrop */}
      <div
        className="absolute top-0 right-0 w-2/3 h-2/3 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(0,217,163,0.08) 0%, rgba(57,211,83,0.04) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

          {/* ── Profile Photo ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="shrink-0 order-first lg:order-last lg:ml-auto"
          >
            {/* Outer glow ring */}
            <div
              className="rounded-full p-[3px]"
              style={{
                background: "linear-gradient(135deg, #39D353, #00D9A3, #ADFF2F)",
                boxShadow: "0 0 32px rgba(57,211,83,0.35), 0 0 64px rgba(57,211,83,0.15)",
              }}
            >
              {/* Inner dark ring */}
              <div className="rounded-full p-[3px] bg-bg-base">
                <div className="w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.JPG"
                    alt="Jirawat Suwannasit"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Status dot badge */}
            <div className="flex justify-center mt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-accent-green/10 text-accent-green border border-accent-green/30">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                Available
              </span>
            </div>
          </motion.div>

          {/* ── Text content ─────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Status chip */}
            <motion.div variants={itemVariants} className="mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 font-mono text-xs text-accent-green border border-accent-green/30 rounded-full px-4 py-1.5 bg-accent-green/5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                Open to New Opportunities
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-accent-emerald border border-accent-emerald/30 rounded-full px-4 py-1.5 bg-accent-emerald/5">
                Hardware Test Supervisor · Panasonic Automotive
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-bold text-text-primary mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-space-grotesk, sans-serif)",
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
              }}
            >
              {name.split(" ")[0]}{" "}
              <span className="text-glow-green" style={{ color: "#39D353" }}>
                {name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            {/* Animated tagline */}
            <motion.div variants={itemVariants} className="h-8 mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={taglineIdx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="font-mono text-accent-emerald text-lg"
                >
                  &gt; {taglines[taglineIdx]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-relaxed max-w-xl mb-3"
            >
              Engineer with <span className="text-accent-green font-medium">10+ years in Hardware Reliability</span> and
              an <span className="text-accent-emerald font-medium">M.Eng in Energy Management</span> —
              now actively seeking roles in{" "}
              <span className="text-accent-neon font-medium">Digital Transformation</span>,{" "}
              <span className="text-accent-green font-medium">Energy Management</span>, and{" "}
              <span className="text-accent-emerald font-medium">Carbon Footprint Assessment</span>.
            </motion.p>

            {/* Contact row */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-green text-bg-base font-medium text-sm hover:bg-accent-emerald transition-colors duration-200"
              >
                <Mail size={15} />
                {email}
              </a>
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-surface border border-border-subtle text-text-secondary hover:text-accent-green hover:border-accent-green/40 text-sm transition-colors duration-200"
              >
                <Phone size={15} />
                {phone}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
        >
          {[
            { value: "238",       unit: "MWh",  label: "Energy Saved"        },
            { value: "62.65",     unit: "tCO₂", label: "CO₂ Reduced"         },
            { value: "1,101,492", unit: "THB",  label: "Annual Cost Savings"  },
            { value: "10+",       unit: "yrs",  label: "Experience"           },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-bg-surface border border-border-subtle rounded-xl p-4 text-center flex flex-col items-center justify-center gap-0.5"
            >
              <div className="font-mono font-bold gradient-counter text-base leading-tight">
                {s.value}
              </div>
              {s.unit && (
                <div className="font-mono text-xs text-accent-green font-medium">
                  {s.unit}
                </div>
              )}
              <div className="text-text-muted text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
