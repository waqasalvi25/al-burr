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
  return (
    <section id="products" className="bg-paper py-16 md:py-20 lg:py-24">
      <div className="px-5 md:px-8 lg:px-10">
        <Eyebrow>Our Product Range</Eyebrow>
        <Lines
          className="mt-5 max-w-3xl font-serif text-[clamp(2.6rem,3.8vw,4.4rem)] leading-[1.02]"
          lines={["Wheat products", <em key="b" className="text-gold">for every requirement.</em>]}
        />
        <p className="reveal mt-5 max-w-xl text-[19.78px] leading-relaxed text-[#7D6A5C]" style={{ "--d": "150ms" } as CSSProperties}>
          From household flour to commercial milling products, explore the AL BURR range.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, index) => (
            <article key={item.index} className="reveal group" style={{ "--d": `${index * 80}ms` } as CSSProperties}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand">
                <img
                  alt={item.title}
                  className="size-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  src={item.image}
                />
                <span className="absolute top-4 left-4 rounded-full bg-cream/85 px-3.5 py-1 font-serif text-[22px] italic leading-none backdrop-blur">
                  {item.index}
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 pt-5">
                <div>
                  <h3 className="font-serif text-[33.91px] leading-[1.15] text-[#4A1F12]">{item.title}</h3>
                  <p className="mt-2 text-[19.78px] leading-relaxed text-[#7D6A5C]">{item.text}</p>
                </div>
                <a
                  href="#contact"
                  aria-label={`Enquire about ${item.title}`}
                  className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-cocoa/20 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-white"
                >
                  <Arrow className="size-3.5 -rotate-45" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="reveal mt-10 text-[16px] text-[#7D6A5C]">
          Maida and other wheat milling fractions can be added to the catalogue with verified specifications and product
          photography.
        </p>
      </div>
    </section>
  );
}
