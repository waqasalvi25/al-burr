import { ContactHeroSection } from "@/components/sections/ContactHeroSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Contact() {
  usePageMeta({
    title: "Contact | Al Burr",
    description: "Contact Al Burr.",
  });

  return (
    <main>
      <ContactHeroSection />
    </main>
  );
}
