"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const run = () => {
      if (scrollToHash(window.location.hash)) return;
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    run();
    const t = window.setTimeout(run, 100);

    return () => window.clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
