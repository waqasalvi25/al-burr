import { useEffect, useState } from "react";
import { navLinks } from "@/components/site/navLinks";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-cream/85 shadow-[0_1px_0_rgba(74,31,18,0.08)] backdrop-blur-md" : "bg-cream"}`}
    >
      <div
        className={`mx-auto flex items-center justify-between px-5 transition-all duration-500 md:px-8 lg:px-10 ${scrolled ? "h-16" : "h-20"}`}
      >
        <a href="#home" className="flex items-center" aria-label="AL BURR home">
          <img alt="AL BURR" className="h-12 w-auto mix-blend-multiply md:h-14" src="/images/header-logo.png" />
        </a>
        <nav className="hidden items-center gap-9 text-[16px] text-umber lg:flex">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="group relative py-1">
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-cocoa px-5 py-2.5 text-[14px] tracking-[0.16em] text-cream uppercase transition-colors hover:bg-gold lg:inline-block"
        >
          Request a Quote
        </a>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-full border border-cocoa/15 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-4">
            <span className={`absolute left-0 h-px w-4 bg-cocoa transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-px w-4 bg-cocoa transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>
      <div
        className={`grid overflow-hidden bg-cream transition-all duration-500 lg:hidden ${open ? "grid-rows-[1fr] border-t border-cocoa/10" : "grid-rows-[0fr]"}`}
      >
        <nav className="min-h-0">
          <div className="flex flex-col gap-1 px-5 py-4">
            {[...navLinks, { href: "#contact", label: "Request a Quote" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-cocoa/10 py-3 font-serif text-2xl"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
