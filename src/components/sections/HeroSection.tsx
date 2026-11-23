import type { CSSProperties } from "react";
import { PillLink } from "@/components/site/SectionHeading";

export function HeroSection() {
  return (
    <section id="home" className="px-3 pt-20 md:px-5">
      <div className="relative h-[calc(100svh-6rem)] min-h-[580px] overflow-hidden rounded-[28px]">
        <img
          alt="Golden wheat field at sunset"
          className="absolute inset-0 size-full animate-[kenburns_2.8s_cubic-bezier(0.22,1,0.36,1)_both] object-cover"
          src="/images/hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-cocoa/20 to-transparent" />
        <div className="relative flex h-full flex-col justify-end px-6 pb-10 text-white md:px-14 md:pb-14" data-reveal="true">
          <div className="reveal mb-6 flex flex-wrap gap-2" style={{ "--d": "200ms" } as CSSProperties}>
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[11px] tracking-[0.2em] uppercase backdrop-blur">
              Premium Grain Products
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[11px] tracking-[0.2em] uppercase backdrop-blur">
              Pakistan
            </span>
          </div>
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_340px]">
            <h1 className="font-serif text-[clamp(2.75rem,7.4vw,7rem)] leading-[0.92] font-normal tracking-[-0.02em]">
              <span className="line-mask">
                <span style={{ "--d": "300ms" } as CSSProperties}>The goodness of wheat.</span>
              </span>
              <span className="line-mask">
                <span style={{ "--d": "410ms" } as CSSProperties}>
                  <em className="text-wheat">The promise of quality.</em>
                </span>
              </span>
            </h1>
            <div className="reveal space-y-6" style={{ "--d": "700ms" } as CSSProperties}>
              <p className="text-[15px] leading-relaxed text-white/80">
                Thoughtfully presented wheat flour and grain products for everyday tables, food businesses and industrial
                customers.
              </p>
              <div className="flex flex-wrap gap-3">
                <PillLink href="#products">Explore Products</PillLink>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="absolute top-8 right-8 hidden flex-col items-center gap-3 text-[10px] tracking-[0.3em] text-white/70 uppercase md:flex"
            aria-label="Scroll down"
          >
            <span className="relative h-10 w-6 rounded-full border border-white/40">
              <span className="absolute top-2 left-1/2 size-1 -translate-x-1/2 animate-[scrolldot_1.8s_ease-in-out_infinite] rounded-full bg-white" />
            </span>
            Scroll
          </a>
        </div>
      </div>
    </section>
  );
}
