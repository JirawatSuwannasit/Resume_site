interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <span className="inline-block font-mono text-xs text-accent-green border border-accent-green/30 rounded-full px-3 py-1 mb-4 bg-accent-green/5">
        {label}
      </span>
      <h2
        className="text-4xl font-bold mb-3"
        style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "#E6EDF3" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
