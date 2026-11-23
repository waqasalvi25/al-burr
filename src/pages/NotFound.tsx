import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NotFound() {
  usePageMeta({
    title: "Page not found | Al Burr",
    description: "This page is not available.",
  });

  return (
    <main>
      <h1>Page not found</h1>
      <Link to="/">Back to home</Link>
    </main>
  );
}
