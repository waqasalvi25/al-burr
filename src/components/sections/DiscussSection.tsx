import { useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { Arrow } from "@/components/site/icons";
import { Eyebrow, Lines } from "@/components/site/SectionHeading";

const fieldClass =
  "w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3.5 text-[18px] text-cocoa outline-none transition placeholder:text-muted/60 focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/10";

const products = [
  "Chakki Atta",
  "Fine Atta",
  "Maida",
  "Sooji / Semolina",
  "Wheat Bran",
  "Other wheat milling products",
];

function Field({
  label,
  id,
  full = false,
  children,
}: {
  label: string;
  id: string;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="mb-2 block text-[13px] tracking-[0.18em] text-[#7D6A5C] uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}

export function DiscussSection() {
  const [note, setNote] = useState(
    "Demo form: configure the official sales email or connect a form service before launch.",
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [...new FormData(event.currentTarget).entries()].map(([key, value]) => `${key}: ${value}`).join("\r\n");
    window.location.href = `mailto:sales@example.com?subject=AL%20BURR%20business%20enquiry&body=${encodeURIComponent(body)}`;
    setNote("Your email application should open with the enquiry details. Please set the official sales email before publishing.");
  };

  return (
    <section id="contact" className="px-3 pb-3 md:px-4 md:pb-4 lg:px-5 lg:pb-5">
      <div className="grid gap-10 rounded-[28px] bg-paper p-6 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:p-16">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <Eyebrow>Request a quotation</Eyebrow>
            <Lines
              className="mt-5 font-serif text-[clamp(2.6rem,3.6vw,4.15rem)] leading-[1.02]"
              lines={["Share your", <em key="today" className="text-gold">requirements today.</em>]}
            />
          </div>
          <div className="reveal-img relative hidden aspect-[4/3] overflow-hidden rounded-3xl lg:block">
            <img alt="" className="absolute inset-0 size-full object-cover" data-parallax="-0.06" src="/images/p-atta.jpg" />
          </div>
          <p className="reveal max-w-sm text-[19.78px] leading-relaxed text-[#7D6A5C]">
            Packaging, specifications, delivery schedule or other details — our team will review your enquiry.
          </p>
        </div>
        <form onSubmit={onSubmit} className="reveal grid content-start gap-5 sm:grid-cols-2" style={{ "--d": "150ms" } as CSSProperties}>
          <Field label="Your name" id="name">
            <input id="name" name="Name" required placeholder="Full name" className={fieldClass} />
          </Field>
          <Field label="Company" id="company">
            <input id="company" name="Company" placeholder="Company name" className={fieldClass} />
          </Field>
          <Field label="Email" id="email">
            <input id="email" name="Email" type="email" required placeholder="name@company.com" className={fieldClass} />
          </Field>
          <Field label="Phone / WhatsApp" id="phone">
            <input id="phone" name="Phone" placeholder="+92 ..." className={fieldClass} />
          </Field>
          <Field label="Product" id="product">
            <select id="product" name="Product" defaultValue="Chakki Atta" className={fieldClass}>
              {products.map((product) => (
                <option key={product}>{product}</option>
              ))}
            </select>
          </Field>
          <Field label="Estimated quantity" id="quantity">
            <input id="quantity" name="Quantity" placeholder="e.g. 20 MT" className={fieldClass} />
          </Field>
          <Field label="Destination / delivery location" id="destination" full>
            <input id="destination" name="Destination" placeholder="City and country" className={fieldClass} />
          </Field>
          <Field label="Requirements" id="message" full>
            <textarea
              id="message"
              name="Requirements"
              rows={4}
              placeholder="Packaging, specifications, delivery schedule or other details"
              className={`${fieldClass} resize-none`}
            />
          </Field>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="group flex w-full items-center justify-between rounded-full bg-gold py-2 pr-2 pl-7 text-[18px] text-white transition-colors hover:bg-umber"
            >
              Send Business Enquiry
              <span className="grid size-11 place-items-center rounded-full bg-white/15 transition-transform duration-500 group-hover:rotate-[-45deg]">
                <Arrow />
              </span>
            </button>
            <p className="mt-3 text-[14px] text-[#7D6A5C]" aria-live="polite">
              {note}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
