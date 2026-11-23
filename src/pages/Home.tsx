import { CommoditiesSection } from "@/components/sections/CommoditiesSection";
import { DiscussSection } from "@/components/sections/DiscussSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { Marquee } from "@/components/sections/Marquee";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { RelationshipSection } from "@/components/sections/RelationshipSection";
import { ShipmentSection } from "@/components/sections/ShipmentSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "AL BURR",
    description:
      "Thoughtfully presented wheat flour and grain products for everyday tables, food businesses and industrial customers.",
  });

  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <Marquee />
      <CommoditiesSection />
      <PartnerSection />
      <ShipmentSection />
      <RelationshipSection />
      <DiscussSection />
    </main>
  );
}
