import type { CSSProperties, ReactNode } from "react";

export function Eyebrow({ children, tone = "muted" }: { children: string; tone?: "muted" | "wheat" }) {
  const light = tone === "wheat";

  return (
    <div className="reveal">
      <div
        className={`flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] ${light ? "text-wheat" : "text-muted"}`}
      >
        <span className={`h-px w-8 ${light ? "bg-wheat" : "bg-gold"}`} />
        {children}
      </div>
    </div>
  );
}

export function Lines({
  lines,
  className,
  as: Tag = "h2",
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  as?: "h1" | "h2";
  delay?: number;
}) {
  return (
    <Tag className={className} data-reveal="true">
      {lines.map((line, index) => (
        <span className="line-mask" key={index}>
          <span style={{ "--d": `${delay + index * 110}ms` } as CSSProperties}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

const pillVariants = {
  solid: "border-cocoa/15 bg-white/60 text-cocoa hover:bg-white",
  ghost: "border-cocoa/20 text-cocoa hover:bg-cocoa/5",
  light: "border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20",
};

export function PillLink({
  href,
  children,
  variant = "light",
}: {
  href: string;
  children: string;
  variant?: keyof typeof pillVariants;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-4 rounded-full border py-1.5 pr-1.5 pl-6 text-sm transition-colors ${pillVariants[variant]}`}
    >
      {children}
      <span className="grid size-10 place-items-center rounded-full bg-gold text-white transition-transform duration-500 group-hover:rotate-[-45deg]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4" aria-hidden="true">
          <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}
