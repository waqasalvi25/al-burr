import type { CSSProperties } from "react";
import { Eyebrow, Lines } from "@/components/site/SectionHeading";

const steps = [
  {
    index: "01",
    title: "Wheat sourcing",
    text: "Identifying suitable wheat according to product requirements and procurement specifications.",
  },
  {
    index: "02",
    title: "Cleaning & milling",
    text: "Preparing and processing wheat into flour grades and milling products for their intended applications.",
  },
  {
    index: "03",
    title: "Packaging & supply",
    text: "Considering appropriate packaging, storage and commercial supply requirements.",
  },
];

export function PartnerSection() {
  return (
    <section id="quality" className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Eyebrow>Our Approach</Eyebrow>
          <Lines
            className="mt-6 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98]"
            lines={[
              <span key="care">
                Care at <em className="text-gold">every stage.</em>
              </span>,
            ]}
          />
        </div>
        <p className="reveal max-w-sm text-[15px] leading-relaxed text-muted" style={{ "--d": "150ms" } as CSSProperties}>
          Our quality approach is centred on the steps that shape a consistent wheat product.
        </p>
      </div>
      <div className="mt-16 border-t border-cocoa/15 lg:ml-[25%]">
        {steps.map((step, index) => (
          <div
            key={step.index}
            className="reveal group relative grid gap-3 border-b border-cocoa/15 py-9 md:grid-cols-[1fr_1.3fr_auto] md:items-center md:gap-10"
            style={{ "--d": `${index * 120}ms` } as CSSProperties}
          >
            <span className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
            <h3 className="font-serif text-3xl transition-transform duration-500 group-hover:translate-x-2">{step.title}</h3>
            <p className="max-w-md text-sm leading-relaxed text-muted">{step.text}</p>
            <span className="font-serif text-lg text-gold italic md:text-right">{step.index}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
