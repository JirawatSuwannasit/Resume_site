import { Mail, Phone } from "lucide-react";
import { resumeData } from "@/lib/resume";

export default function Footer() {
  const { email, phone } = resumeData.hero;

  return (
    <footer className="relative z-10 border-t border-border-subtle bg-bg-surface/60 py-10 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-accent-green border border-accent-green/40 rounded px-2 py-0.5 text-sm">
            JS
          </span>
          <span className="text-text-secondary text-sm font-mono">
            Jirawat Suwannasit
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent-green transition-colors text-sm"
          >
            <Mail size={14} />
            {email}
          </a>
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent-green transition-colors text-sm"
          >
            <Phone size={14} />
            {phone}
          </a>
          <a
            href="https://www.linkedin.com/in/jirawat-suwannasit-4b606810a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent-green transition-colors text-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-accent-green/10 text-accent-green border border-accent-green/30">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            Open to opportunities
          </span>
        </div>
      </div>
    </footer>
  );
}
