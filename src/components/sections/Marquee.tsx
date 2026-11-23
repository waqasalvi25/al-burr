import { Spark } from "@/components/site/icons";

const items = ["Chakki Atta", "Fine Atta", "Maida", "Sooji / Semolina", "Wheat Bran", "Milling Products"];

export function Marquee() {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-cocoa/10 py-6">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-12">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-12 font-serif text-[40px] text-umber/70 italic">
            {item}
            <Spark />
          </span>
        ))}
      </div>
    </div>
  );
}
