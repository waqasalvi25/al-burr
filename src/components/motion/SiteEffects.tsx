import { useEffect } from "react";

export function SiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll(".reveal, .reveal-img, [data-reveal]").forEach((node) => observer.observe(node));

    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const height = window.innerHeight;
      for (const node of nodes) {
        const parent = node.parentElement;
        if (!parent) continue;
        const rect = parent.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > height + 200) continue;
        const factor = Number(node.dataset.parallax);
        const y = (rect.top + rect.height / 2 - height / 2) * factor;
        node.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(1.15)`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    if (!reduce) {
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
