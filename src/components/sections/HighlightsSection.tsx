import type { CSSProperties } from "react";
import { Arrow } from "@/components/site/icons";
import { Eyebrow, Lines } from "@/components/site/SectionHeading";

const points = [
  {
    index: "01",
    title: "Suitable raw materials",
    text: "An emphasis on selecting wheat that suits each product and its intended use.",
  },
  {
    index: "02",
    title: "Careful processing",
    text: "Cleaning and milling with attention to consistency across flour grades.",
  },
  {
    index: "03",
    title: "Dependable relationships",
    text: "Serving household consumers and professional buyers with care.",
  },
];

export function HighlightsSection() {
  return (
    <section id="about" className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <Eyebrow>Our Philosophy</Eyebrow>
          <Lines
            className="mt-6 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.01em]"
            lines={[
              <span key="a">
                <em className="text-gold">Quality</em> begins
              </span>,
              "with the wheat.",
            ]}
          />
        </div>
        <p className="reveal max-w-md text-[15px] leading-relaxed text-muted lg:justify-self-end" style={{ "--d": "150ms" } as CSSProperties}>
          Wheat is at the heart of everyday food and many essential ingredients. AL BURR brings together a focused range of
          wheat flour and milling products.
        </p>
      </div>
      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="reveal-img relative overflow-hidden rounded-3xl md:row-span-2 lg:col-span-2 lg:row-span-2">
          <img
            alt="Hands holding wheat grains and flour"
            className="absolute inset-0 size-full object-cover"
            data-parallax="-0.08"
            src="/images/hands.jpg"
          />
          <div className="relative min-h-[420px]" />
        </div>
        {points.map((item, index) => (
          <article
            key={item.index}
            className="reveal group flex min-h-[200px] flex-col justify-between rounded-3xl bg-paper p-7 transition-colors duration-500 hover:bg-sand"
            style={{ "--d": `${index * 120}ms` } as CSSProperties}
          >
            <span className="font-serif text-lg text-gold italic">{item.index}</span>
            <div>
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          </article>
        ))}
        <article
          className="reveal flex min-h-[200px] flex-col justify-between rounded-3xl bg-cocoa p-7 text-cream"
          style={{ "--d": "360ms" } as CSSProperties}
        >
          <p className="text-sm leading-relaxed text-cream/75">
            As a brand by <span className="text-wheat">AG Grain Industries (Private) Limited</span>, AL BURR is being
            developed to serve both household consumers and professional buyers.
          </p>
          <a href="#quality" className="group mt-6 inline-flex items-center gap-3 text-sm text-wheat">
            Discover our approach
            <Arrow className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" />
          </a>
        </article>
      </div>
    </section>
  );
}
