import { TradeHeroSection } from "@/components/sections/TradeHeroSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function TradingExports() {
  usePageMeta({
    title: "Trade & Exports | Al Burr",
    description: "Trade and exports at Al Burr.",
  });

  return (
    <main>
      <TradeHeroSection />
    </main>
  );
}
