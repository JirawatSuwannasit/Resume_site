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
