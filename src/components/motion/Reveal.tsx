import { useEffect, useRef, useState, type ReactNode } from "react";

type RiseOptions = {
  self?: boolean;
  stagger?: boolean;
};

type Rise<T extends HTMLElement> = {
  ref: React.RefObject<T | null>;
  className: string;
};

function isSiteReady() {
  return document.documentElement.classList.contains("ab-ready");
}

export function useRise<T extends HTMLElement = HTMLDivElement>(
  selfOrOptions: boolean | RiseOptions = false,
): Rise<T> {
  const options: RiseOptions =
    typeof selfOrOptions === "boolean" ? { self: selfOrOptions } : selfOrOptions;
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    let observer: IntersectionObserver | null = null;

    const start = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          setVisible(true);
          observer?.disconnect();
        },
        { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
      );
      observer.observe(node);
    };

    if (isSiteReady()) {
      start();
    } else {
      const onReady = () => start();
      window.addEventListener("ab-ready", onReady, { once: true });
      return () => {
        window.removeEventListener("ab-ready", onReady);
        observer?.disconnect();
      };
    }

    return () => observer?.disconnect();
  }, []);

  const base = options.stagger ? "ab-rise-stagger" : options.self ? "ab-rise-self" : "ab-rise";

  return {
    ref,
    className: `${base}${visible ? " is-in" : ""}`,
  };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
};

export function Reveal({ children, className, stagger = false }: RevealProps) {
  const rise = useRise<HTMLDivElement>({ stagger });
  return (
    <div ref={rise.ref} className={[className, rise.className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
