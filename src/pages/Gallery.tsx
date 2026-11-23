import { PageHero } from "@/components/site/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Gallery() {
  usePageMeta({
    title: "Gallery | Al Burr",
    description: "Gallery",
  });

  return (
    <main>
      <PageHero crumb="Gallery" title="Gallery" text="" />
    </main>
  );
}
