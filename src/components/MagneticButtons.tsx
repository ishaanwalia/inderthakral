"use client";

import { useEffect } from "react";

// Document-level delegated cursor-follow effect for every `.magnetic-btn`
// element on the page — mounted once here instead of wired up per-button, so
// it keeps working across client-side navigation without touching each call
// site. Writes transforms straight to the DOM on a rAF tick (no React state),
// matching the pattern already used by CursorGlow in HomeClient.tsx.
const STRENGTH = 0.25;
const MAX_OFFSET = 14;
const RADIUS = 90;

export default function MagneticButtons() {
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches || reducedMotion.matches) return;

    let raf = 0;
    let lastX = 0;
    let lastY = 0;

    const apply = () => {
      raf = 0;
      const buttons = document.querySelectorAll<HTMLElement>(".magnetic-btn");
      buttons.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = lastX - cx;
        const dy = lastY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < RADIUS) {
          const pull = 1 - dist / RADIUS;
          const ox = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dx * STRENGTH * pull));
          const oy = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dy * STRENGTH * pull));
          el.style.transform = `translate(${ox}px, ${oy}px)`;
        } else if (el.style.transform) {
          el.style.transform = "";
        }
      });
    };

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
