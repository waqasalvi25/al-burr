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
    <section id="business" className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Eyebrow>Business Solutions</Eyebrow>
          <Lines
            className="mt-6 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98]"
            lines={["Built for everyday needs", <em key="supply" className="text-gold">and commercial supply.</em>]}
          />
        </div>
        <p className="reveal max-w-sm text-[15px] leading-relaxed text-muted" style={{ "--d": "150ms" } as CSSProperties}>
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
            <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
            <span className="font-serif text-2xl transition-colors group-hover:text-umber md:text-3xl">{label}</span>
            <span className="grid size-9 place-items-center rounded-full border border-cocoa/15 text-gold transition-all duration-500 group-hover:rotate-45 group-hover:border-gold">
              <Plus />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
