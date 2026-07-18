"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { CineSequence } from "@/data/cineSequences";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const subscribeReducedMotion = (onChange: () => void) => {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};
const usePrefersReducedMotion = () =>
  useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );

// Scroll-scrubbed frame sequence ("cine scroll"): a sticky full-viewport canvas
// inside a tall section; scroll progress selects the frame. Frames load lazily
// (keyframes first, then filled in around the current position) and everything
// is written straight to the DOM from a rAF tick — no React state per scroll.
//
// Renders a static 100vh cinematic panel instead when frames are unavailable
// (frameCount 0, first frame 404s, or the user prefers reduced motion).

const overlayPositionStyle = (
  position: NonNullable<CineSequence["overlays"][number]["position"]>
): React.CSSProperties => {
  switch (position) {
    case "top-left":
      return { top: "120px", left: "clamp(24px, 5vw, 64px)", textAlign: "left" };
    case "bottom-left":
      return { bottom: "96px", left: "clamp(24px, 5vw, 64px)", textAlign: "left" };
    case "bottom-right":
      return { bottom: "96px", right: "clamp(24px, 5vw, 64px)", textAlign: "right" };
    default:
      return {
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      };
  }
};

function OverlayCopy({ heading, caption, onFrames }: { heading: string; caption?: string; onFrames: boolean }) {
  return (
    <div style={{ maxWidth: "640px", padding: "0 24px" }}>
      <h2
        className={onFrames ? "cine-heading-on-frames" : undefined}
        style={{
          fontSize: "clamp(30px, 5vw, 60px)",
          fontWeight: 700,
          letterSpacing: "-2px",
          lineHeight: 1.1,
          marginBottom: "20px",
          color: onFrames ? "#fff" : "var(--fg)",
        }}
      >
        {heading}
      </h2>
      {caption && (
        <p
          style={{
            fontSize: "clamp(14px, 1.6vw, 17px)",
            lineHeight: 1.8,
            letterSpacing: "0.3px",
            color: onFrames ? "rgba(255,255,255,0.75)" : "rgba(var(--fg-rgb),0.5)",
            textShadow: onFrames ? "0 1px 12px rgba(0,0,0,0.6)" : undefined,
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

export default function CineScroll({ sequence }: { sequence: CineSequence }) {
  // `failed` flips when the first frame 404s (wrong folder/count) — set from an
  // image callback, never synchronously inside the effect.
  const [failed, setFailed] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const mode: "cine" | "fallback" =
    sequence.frames.length > 0 && !failed && !prefersReducedMotion ? "cine" : "fallback";
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (mode !== "cine") return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!container || !canvas || !ctx) return;

    const frameCount = sequence.frames.length;

    const images: (HTMLImageElement | undefined)[] = new Array(frameCount);
    const inflight = new Set<number>();
    let loadingStarted = false;
    let disposed = false;
    let current = 0;
    let target = 0;
    let drawnIndex = -1;
    let posterHidden = false;
    let ticking = false;

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };

    const draw = (index: number) => {
      // Draw the nearest loaded frame so the canvas never goes blank mid-load.
      let best = -1;
      for (let d = 0; d < frameCount; d++) {
        if (images[index - d]) { best = index - d; break; }
        if (images[index + d]) { best = index + d; break; }
      }
      if (best < 0 || best === drawnIndex) return;
      const img = images[best]!;
      const cw = canvas.width;
      const ch = canvas.height;
      const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(
        img,
        (cw - img.naturalWidth * s) / 2,
        (ch - img.naturalHeight * s) / 2,
        img.naturalWidth * s,
        img.naturalHeight * s
      );
      drawnIndex = best;
      if (!posterHidden && posterRef.current) {
        posterRef.current.style.opacity = "0";
        posterHidden = true;
      }
    };

    const nearestUnloaded = () => {
      const center = Math.round(current);
      for (let d = 0; d < frameCount; d++) {
        for (const i of [center - d, center + d]) {
          if (i >= 0 && i < frameCount && !images[i] && !inflight.has(i)) return i;
        }
      }
      return -1;
    };

    const pump = () => {
      while (!disposed && inflight.size < 6) {
        const i = nearestUnloaded();
        if (i < 0) break;
        loadFrame(i);
      }
    };

    const loadFrame = (i: number) => {
      if (images[i] || inflight.has(i)) return;
      inflight.add(i);
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        inflight.delete(i);
        if (disposed) return;
        images[i] = img;
        draw(Math.round(current));
        pump();
      };
      img.onerror = () => {
        inflight.delete(i);
        if (disposed) return;
        // A missing first frame means the folder/count is wrong — degrade
        // gracefully instead of scrubbing a blank canvas.
        if (i === 0) setFailed(true);
        else pump();
      };
      img.src = sequence.frames[i];
    };

    const startLoading = () => {
      if (loadingStarted) return;
      loadingStarted = true;
      loadFrame(0);
      for (let i = 8; i < frameCount; i += 8) loadFrame(i);
      loadFrame(frameCount - 1);
      pump();
    };

    const updateOverlays = (progress: number) => {
      sequence.overlays.forEach((overlay, i) => {
        const el = overlayRefs.current[i];
        if (!el) return;
        const [start, end] = overlay.range;
        const span = end - start;
        const fade = Math.max(span * 0.2, 0.01);
        let opacity = 0;
        if (progress >= start && progress <= end) {
          opacity = Math.min((progress - start) / fade, (end - progress) / fade, 1);
        }
        el.style.opacity = String(Math.max(0, Math.min(1, opacity)));
        el.style.transform = `translateY(${(1 - opacity) * 16}px)`;
      });
    };

    const tick = () => {
      ticking = false;
      if (disposed) return;
      const rect = container.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      if (sequence.playback?.mode === "pingpong") {
        // Triangle wave: each cycle plays the frames forward then back.
        const t = (progress * (sequence.playback.cycles ?? 3)) % 1;
        target = (1 - Math.abs(2 * t - 1)) * (frameCount - 1);
      } else {
        // Finish the sequence by 90% of the pin and hold the final frame for
        // the rest, so the ending is actually seen before the section unpins.
        target = Math.min(progress / 0.9, 1) * (frameCount - 1);
      }
      current += (target - current) * 0.4;
      if (Math.abs(target - current) < 0.4) current = target;
      else schedule();
      draw(Math.round(current));
      updateOverlays(progress);
      // Re-focus in-fill loading around wherever the user actually is.
      if (loadingStarted) pump();
    };

    const schedule = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(tick);
      }
    };

    const onResize = () => {
      sizeCanvas();
      drawnIndex = -1;
      draw(Math.round(current));
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          startLoading();
          io.disconnect();
        }
      },
      { rootMargin: "150% 0px" }
    );
    io.observe(container);

    sizeCanvas();
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      disposed = true;
      io.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
    };
  }, [mode, sequence]);

  // ----- Static fallback: a designed 100vh panel, not a frozen scrub track -----
  if (mode === "fallback") {
    return (
      <section
        className="section-pad"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "56px",
          padding: "120px 48px",
          overflow: "hidden",
          borderTop: "1px solid rgba(var(--fg-rgb),0.03)",
          borderBottom: "1px solid rgba(var(--fg-rgb),0.03)",
          background: sequence.poster
            ? undefined
            : "radial-gradient(ellipse at 50% 30%, rgba(var(--accent-rgb),0.07) 0%, transparent 65%)",
        }}
      >
        {sequence.poster && (
          <>
            <img
              src={sequence.poster}
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
          </>
        )}
        {sequence.overlays.map((overlay, i) => (
          <div key={i} style={{ position: "relative", textAlign: "center" }}>
            <OverlayCopy heading={overlay.heading} caption={overlay.caption} onFrames={!!sequence.poster} />
          </div>
        ))}
      </section>
    );
  }

  // ----- Cine mode: tall section with a sticky scrub stage -----
  return (
    <section
      ref={containerRef}
      style={{ position: "relative", height: `${sequence.heightVh}vh`, background: "var(--bg)" }}
    >
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <div
          ref={posterRef}
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 0.6s ease",
            background: sequence.poster
              ? undefined
              : "radial-gradient(ellipse at 50% 40%, rgba(var(--accent-rgb),0.07) 0%, transparent 65%)",
          }}
        >
          {sequence.poster && (
            <img
              src={sequence.poster}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </div>
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
        />
        {/* Legibility scrim over the frames */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 35%, transparent 70%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        {sequence.overlays.map((overlay, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              pointerEvents: "none",
              ...overlayPositionStyle(overlay.position ?? "center"),
            }}
          >
            <div
              ref={(el) => { overlayRefs.current[i] = el; }}
              style={{ opacity: 0, transform: "translateY(16px)" }}
            >
              <OverlayCopy heading={overlay.heading} caption={overlay.caption} onFrames />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
