import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--fg)", fontFamily: "var(--font-sans)" }}>
      <Nav />
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "160px 24px 120px",
      }}>
        <div>
          <p style={{
            color: "var(--accent)",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "24px",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 500,
          }}>
            404 — Page Not Found
          </p>
          <h1 style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: 700,
            letterSpacing: "-3px",
            marginBottom: "24px",
          }}>
            This page doesn&apos;t exist.
          </h1>
          <p style={{ color: "rgba(var(--fg-rgb),0.4)", fontSize: "15px", marginBottom: "40px" }}>
            The page you&apos;re looking for may have moved or the link may be out of date.
          </p>
          <Link href="/" className="cta-btn magnetic-btn tap-glow">
            ← Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
