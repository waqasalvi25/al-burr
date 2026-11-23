import { ProductsHeroSection } from "@/components/sections/ProductsHeroSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Products() {
  usePageMeta({
    title: "Products | Al Burr",
    description: "Products from Al Burr.",
  });

  return (
    <main>
      <ProductsHeroSection />
    </main>
  );
}
