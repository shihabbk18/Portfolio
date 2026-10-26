"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function RouteScrollReset() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useLayoutEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;

    const reset = () => {
      const fragment = window.location.hash.slice(1);
      let target: HTMLElement | null = null;
      if (fragment) {
        try { target = document.getElementById(decodeURIComponent(fragment)); } catch { /* Ignore malformed fragments. */ }
      }
      if (target) {
        target.scrollIntoView({ block: "start", behavior: "instant" });
      } else {
        // Explicitly bypass CSS smooth scrolling and Next's retained scroll position.
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        const heading = document.querySelector<HTMLElement>("main h1");
        heading?.setAttribute("tabindex", "-1");
        heading?.focus({ preventScroll: true });
      }
    };

    reset();
    // Reapply after the router's scroll/focus effects have completed.
    const frame = requestAnimationFrame(reset);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
