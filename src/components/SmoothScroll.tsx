"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Site-wide momentum scrolling (github.com/darkroomengineering/lenis).
// Lenis smooths the real `window` scroll position via rAF rather than
// hijacking layout, so position:sticky (the cine-scroll stage) and
// IntersectionObserver-driven reveals keep working untouched.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      anchors: true,
      autoRaf: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
