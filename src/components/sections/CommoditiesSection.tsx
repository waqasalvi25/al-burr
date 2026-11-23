import { useRef } from "react";
import type { CSSProperties } from "react";
import { Arrow } from "@/components/site/icons";
import { Eyebrow, Lines } from "@/components/site/SectionHeading";

const products = [
  {
    index: "01",
    title: "Chakki Atta",
    text: "Whole wheat flour for roti, chapati and everyday cooking.",
    image: "/images/p-atta.jpg",
  },
  {
    index: "02",
    title: "Fine Atta",
    text: "Finely milled wheat flour for household and food preparation uses.",
    image: "/images/p-fine.jpg",
  },
  {
    index: "03",
    title: "Sooji / Semolina",
    text: "A versatile wheat product for traditional recipes and food applications.",
    image: "/images/p-sooji.jpg",
  },
  {
    index: "04",
    title: "Wheat Bran",
    text: "A milling by-product for suitable feed and industrial applications.",
    image: "/images/p-bran.jpg",
  },
];

export function CommoditiesSection() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: number) => {
    scroller.current?.scrollBy({ left: direction * 380, behavior: "smooth" });
  };

  return (
    <section id="products" className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow>Our Product Range</Eyebrow>
            <Lines
              className="mt-6 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98]"
              lines={["Wheat products", <em key="b" className="text-gold">for every requirement.</em>]}
            />
            <p className="reveal mt-6 max-w-md text-[15px] leading-relaxed text-muted" style={{ "--d": "150ms" } as CSSProperties}>
              From household flour to commercial milling products, explore the AL BURR range.
            </p>
          </div>
          <div className="reveal flex gap-2" style={{ "--d": "200ms" } as CSSProperties}>
            <button
              type="button"
              aria-label="Previous products"
              onClick={() => scrollByCard(-1)}
              className="grid size-12 place-items-center rounded-full border border-cocoa/20 text-cocoa transition-all hover:border-gold hover:bg-gold hover:text-white"
            >
              <Arrow className="size-4 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next products"
              onClick={() => scrollByCard(1)}
              className="grid size-12 place-items-center rounded-full border border-cocoa/20 text-cocoa transition-all hover:border-gold hover:bg-gold hover:text-white"
            >
              <Arrow />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scroller}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 md:scroll-px-10 md:px-10 xl:px-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))]"
      >
        {products.map((item, index) => (
          <article
            key={item.index}
            className="reveal group w-[78vw] shrink-0 snap-start sm:w-[360px]"
            style={{ "--d": `${index * 80}ms` } as CSSProperties}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand">
              <img
                alt={item.title}
                className="size-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                src={item.image}
              />
              <span className="absolute top-5 left-5 rounded-full bg-cream/85 px-3 py-1 font-serif text-sm italic backdrop-blur">
                {item.index}
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 pt-6">
              <div>
                <h3 className="font-serif text-3xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
              <a
                href="#contact"
                aria-label={`Enquire about ${item.title}`}
                className="grid size-11 shrink-0 place-items-center rounded-full border border-cocoa/20 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-white"
              >
                <Arrow className="size-4 -rotate-45" />
              </a>
            </div>
          </article>
        ))}
        <span className="w-1 shrink-0" />
      </div>
      <p className="reveal mx-auto mt-12 max-w-[1320px] px-5 text-xs text-muted md:px-10">
        Maida and other wheat milling fractions can be added to the catalogue with verified specifications and product
        photography.
      </p>
    </section>
  );
}
