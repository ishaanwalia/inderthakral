"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

// Horizontal scroll-snap carousel: native touch/trackpad scrolling with snap
// points, glass arrow buttons on desktop, and edge fades that only appear on
// sides with more content. Each child is wrapped in a fixed-width snap cell.
export default function Carousel({ label, children }: { label: string; children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  // Optimistic defaults (prev disabled, next enabled) so the controls are
  // correct before the ResizeObserver delivers the first measurement.
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  // Arrows are pointless clutter when every cell already fits in view —
  // only show them once there's actually somewhere to scroll to.
  const [canScroll, setCanScroll] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
    setCanScroll(el.scrollWidth > el.clientWidth + 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // ResizeObserver fires once after observe, giving the initial state
    // without a synchronous setState in the effect body.
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const cell = el.querySelector<HTMLElement>(".carousel-cell");
    const gap = 28;
    el.scrollBy({ left: dir * ((cell?.offsetWidth ?? el.clientWidth * 0.8) + gap), behavior: "smooth" });
  };

  const fades = `${atStart ? "" : " fade-left"}${atEnd ? "" : " fade-right"}`;

  return (
    <div className="carousel-wrap">
      <div
        ref={trackRef}
        className={`carousel-track${fades}`}
        onScroll={update}
        role="region"
        aria-label={label}
      >
        {Children.map(children, (child) => (
          <div className="carousel-cell">{child}</div>
        ))}
      </div>
      {canScroll && (
        <>
          <button
            type="button"
            className="carousel-btn carousel-btn-prev"
            onClick={() => step(-1)}
            disabled={atStart}
            aria-label={`Previous ${label}`}
          >
            ←
          </button>
          <button
            type="button"
            className="carousel-btn carousel-btn-next"
            onClick={() => step(1)}
            disabled={atEnd}
            aria-label={`Next ${label}`}
          >
            →
          </button>
        </>
      )}
    </div>
  );
}
