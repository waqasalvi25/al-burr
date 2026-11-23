import { QualityHeroSection } from "@/components/sections/QualityHeroSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function QualityFoodSafety() {
  usePageMeta({
    title: "Quality & Food Safety | Al Burr",
    description: "Quality and food safety at Al Burr.",
  });

  return (
    <main>
      <QualityHeroSection />
    </main>
  );
}
