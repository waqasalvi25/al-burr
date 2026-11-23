import type { CSSProperties } from "react";
import { Arrow } from "@/components/site/icons";

const explore = [
  { label: "Our Story", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Quality & Milling", href: "#quality" },
  { label: "B2B Solutions", href: "#business" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1320px] px-5 pt-20 pb-10 md:px-10">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="reveal">
          <img alt="AL BURR logo" className="w-56 mix-blend-multiply" src="/images/logo-full.jpg" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Premium grain products for households and businesses. The goodness of wheat. The promise of quality.
          </p>
        </div>
        <div className="reveal" style={{ "--d": "100ms" } as CSSProperties}>
          <h3 className="mb-5 text-[11px] tracking-[0.24em] text-muted uppercase">Explore</h3>
          <ul className="space-y-3 font-serif text-xl">
            {explore.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal" style={{ "--d": "200ms" } as CSSProperties}>
          <h3 className="mb-5 text-[11px] tracking-[0.24em] text-muted uppercase">Company</h3>
          <p className="text-sm leading-relaxed text-muted">
            AL BURR is a brand by
            <br />
            <strong className="font-medium text-cocoa">AG Grain Industries (Private) Limited</strong>
            <br />
            Pakistan
          </p>
          <a href="#contact" className="group mt-6 inline-flex items-center gap-3 font-serif text-2xl text-cocoa">
            Contact & Enquiries
            <span className="grid size-10 place-items-center rounded-full bg-gold text-white transition-transform duration-500 group-hover:rotate-[-45deg]">
              <Arrow />
            </span>
          </a>
        </div>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-3 border-t border-cocoa/10 pt-6 text-xs text-muted md:flex-row">
        <span>© 2026 AL BURR. All rights reserved.</span>
        <span>Premium Grain Products · A brand by AG Grain Industries (Private) Limited</span>
      </div>
    </footer>
  );
}
