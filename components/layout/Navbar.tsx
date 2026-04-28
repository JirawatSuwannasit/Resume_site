"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const NAV_LINKS = [
  { id: "skills",       label: "Skills"       },
  { id: "experience",   label: "Experience"   },
  { id: "projects",     label: "Projects"     },
  { id: "education",    label: "Education"    },
  { id: "certifications", label: "Certs"      },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-bg-surface/85 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          aria-label="Scroll to top"
        >
          <span className="font-mono text-accent-green font-medium text-sm border border-accent-green/40 rounded px-2 py-0.5 group-hover:border-accent-green group-hover:glow-green-border transition-all duration-200">
            JS
          </span>
          <span className="text-text-secondary text-xs font-mono hidden sm:block">
            ~/resume
          </span>
        </button>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative px-3 py-1.5 text-sm transition-colors duration-200 rounded-md"
              style={{
                color: active === id ? "#39D353" : "#8B949E",
                fontFamily: "var(--font-jetbrains, monospace)",
              }}
            >
              {label}
              <AnimatePresence>
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 bottom-0 h-px bg-accent-green"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
