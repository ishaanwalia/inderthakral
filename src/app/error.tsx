"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main style={{ background: "var(--bg, #16191F)", minHeight: "100vh", color: "var(--fg, #FFF)", fontFamily: "var(--font-sans)" }}>
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}>
        <div>
          <p style={{
            color: "var(--accent, #00D4FF)",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "24px",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 500,
          }}>
            Something Went Wrong
          </p>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, letterSpacing: "-2px", marginBottom: "24px" }}>
            We hit a snag loading this page.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "15px", marginBottom: "40px" }}>
            Please try again, or reach out directly on WhatsApp if the problem continues.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => unstable_retry()}
              className="cta-btn tap-glow"
              style={{ border: "none" }}
            >
              Try Again
            </button>
            <Link href="/" className="outline-btn tap-glow">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
