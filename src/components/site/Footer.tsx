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
    <footer className="px-5 pt-16 pb-8 md:px-8 lg:px-10">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="reveal">
          <img alt="AL BURR logo" className="w-64" src="/images/footer-logo.png" />
          <p className="mt-4 max-w-sm text-[19.78px] leading-relaxed text-[#7D6A5C]">
            Premium grain products for households and businesses. The goodness of wheat. The promise of quality.
          </p>
        </div>
        <div className="reveal" style={{ "--d": "100ms" } as CSSProperties}>
          <h3 className="mb-5 text-[13px] tracking-[0.24em] text-[#7D6A5C] uppercase">Explore</h3>
          <ul className="space-y-3 font-serif text-[28px]">
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
          <h3 className="mb-5 text-[13px] tracking-[0.24em] text-[#7D6A5C] uppercase">Company</h3>
          <p className="text-[19.78px] leading-relaxed text-[#7D6A5C]">
            AL BURR is a brand by
            <br />
            <strong className="font-medium text-cocoa">AG Grain Industries (Private) Limited</strong>
            <br />
            Pakistan
          </p>
          <a href="#contact" className="group mt-6 inline-flex items-center gap-3 font-serif text-[32px] text-[#4A1F12]">
            Contact & Enquiries
            <span className="grid size-10 place-items-center rounded-full bg-gold text-white transition-transform duration-500 group-hover:rotate-[-45deg]">
              <Arrow />
            </span>
          </a>
        </div>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-3 border-t border-cocoa/10 pt-6 text-[16px] text-[#7D6A5C] md:flex-row">
        <span>© 2026 AL BURR. All rights reserved.</span>
        <span>Premium Grain Products · A brand by AG Grain Industries (Private) Limited</span>
      </div>
    </footer>
  );
}
