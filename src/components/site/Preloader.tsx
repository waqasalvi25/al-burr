import { useEffect } from "react";

export function Preloader() {
  useEffect(() => {
    document.documentElement.classList.add("ab-ready");
    window.dispatchEvent(new Event("ab-ready"));
  }, []);

  return null;
}
