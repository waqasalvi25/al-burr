import { PackagingHeroSection } from "@/components/sections/PackagingHeroSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function PrivateLabelPackaging() {
  usePageMeta({
    title: "Private Label & Packaging | Al Burr",
    description: "Private label and packaging at Al Burr.",
  });

  return (
    <main>
      <PackagingHeroSection />
    </main>
  );
}
