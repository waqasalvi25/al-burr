import type { CSSProperties } from "react";
import { Eyebrow, Lines, PillLink } from "@/components/site/SectionHeading";

export function ShipmentSection() {
  return (
    <section className="px-3 md:px-5">
      <div className="relative overflow-hidden rounded-[28px]">
        <img
          alt="Bakery interior with flour sacks and fresh bread"
          className="absolute inset-0 size-full object-cover"
          data-parallax="-0.15"
          src="/images/bakery.jpg"
        />
        <div className="absolute inset-0 bg-cocoa/55" />
        <div
          className="relative mx-auto flex min-h-[560px] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center text-white md:min-h-[680px]"
          data-reveal="true"
        >
          <Eyebrow tone="wheat">For professional buyers</Eyebrow>
          <Lines
            delay={100}
            className="mt-8 font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98]"
            lines={["Reliable wheat products", <em key="biz" className="text-wheat">for your business.</em>]}
          />
          <p className="reveal mt-8 max-w-xl text-[15px] leading-relaxed text-white/80" style={{ "--d": "400ms" } as CSSProperties}>
            We welcome enquiries from distributors, wholesalers, bakeries, food manufacturers, institutional customers and
            suitable industrial buyers.
          </p>
          <div className="reveal mt-10" style={{ "--d": "550ms" } as CSSProperties}>
            <PillLink href="#contact">Discuss Your Requirements</PillLink>
          </div>
        </div>
      </div>
    </section>
  );
}
