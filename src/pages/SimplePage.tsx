import { PageHero } from "@/components/site/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";

type SimplePageProps = {
  crumb: string;
  title: string;
  text: string;
  description: string;
};

export function SimplePage({ crumb, title, text, description }: SimplePageProps) {
  usePageMeta({ title: `${title} | Al Burr`, description });

  return (
    <main>
      <PageHero crumb={crumb} title={title} text={text} />
    </main>
  );
}
