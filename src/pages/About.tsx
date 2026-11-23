import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function About() {
  usePageMeta({
    title: "About | Al Burr",
    description: "About Al Burr.",
  });

  return (
    <main>
      <AboutHeroSection />
    </main>
  );
}
