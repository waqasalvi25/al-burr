import { Outlet } from "react-router-dom";
import { SiteEffects } from "@/components/motion/SiteEffects";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export function SiteLayout() {
  return (
    <>
      <SiteEffects />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
