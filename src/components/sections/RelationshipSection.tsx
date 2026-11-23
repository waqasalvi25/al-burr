import type { CSSProperties } from "react";
import { Plus } from "@/components/site/icons";
import { Eyebrow, Lines } from "@/components/site/SectionHeading";

const buyers = [
  "Retailers and distributors",
  "Wholesale flour merchants",
  "Bakeries and confectionery manufacturers",
  "Food processors and institutional buyers",
  "Animal feed and ingredient buyers",
];

export function RelationshipSection() {
  return (
    <section id="business" className="px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Eyebrow>Business Solutions</Eyebrow>
          <Lines
            className="mt-5 font-serif text-[clamp(2.6rem,3.8vw,4.4rem)] leading-[1.02]"
            lines={["Built for everyday needs", <em key="supply" className="text-gold">and commercial supply.</em>]}
          />
        </div>
        <p className="reveal max-w-md text-[19.78px] leading-relaxed text-[#7D6A5C]" style={{ "--d": "150ms" } as CSSProperties}>
          Whether you are sourcing packaged flour or evaluating bulk wheat product requirements, share your specifications
          with our team.
        </p>
      </div>
      <ul className="mt-16 border-t border-cocoa/15">
        {buyers.map((label, index) => (
          <li
            key={label}
            className="reveal group grid grid-cols-[48px_1fr_auto] items-center gap-4 border-b border-cocoa/15 py-6 transition-colors duration-500 hover:bg-paper md:grid-cols-[120px_1fr_auto] md:px-4"
            style={{ "--d": `${index * 90}ms` } as CSSProperties}
          >
            <span className="font-serif text-[25.43px] text-[#7D6A5C]">{String(index + 1).padStart(2, "0")}</span>
            <span className="font-serif text-[33.91px] leading-none text-[#4A1F12] transition-colors group-hover:text-umber">{label}</span>
            <span className="grid size-9 place-items-center rounded-full border border-cocoa/15 text-gold transition-all duration-500 group-hover:rotate-45 group-hover:border-gold">
              <Plus />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
