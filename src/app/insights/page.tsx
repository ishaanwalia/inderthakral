import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Tricity Market Notes — Mohali & New Chandigarh Real Estate Insights",
  description:
    "Ground-level commentary on the Mohali, New Chandigarh and Tricity land markets by Inder Thakral — growth corridors, buyer guides, and NRI investment know-how.",
  alternates: { canonical: "/insights/" },
  openGraph: {
    title: "Tricity Market Notes — Mohali & New Chandigarh Real Estate Insights",
    description:
      "Ground-level commentary on the Mohali, New Chandigarh and Tricity land markets by Inder Thakral.",
    url: "/insights/",
  },
};

export default function InsightsPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--fg)", fontFamily: "var(--font-sans)" }}>
      <Nav active="Insights" />

      {/* Hero */}
      <section style={{
        paddingTop: "136px",
        paddingBottom: "56px",
        paddingLeft: "48px",
        paddingRight: "48px",
        borderBottom: "1px solid rgba(var(--fg-rgb),0.04)",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 30% 50%, rgba(var(--accent-rgb),0.03) 0%, transparent 60%)",
      }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <p className="section-label" style={{ marginBottom: "24px" }}>
            <span className="accent-line" />
            Tricity Market Notes
          </p>
          <h1 style={{
            fontSize: "clamp(48px, 8vw, 100px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-5px",
            color: "var(--fg)",
          }}>
            Market<br />
            <span className="gradient-text">Insights</span>
          </h1>
          <p style={{
            color: "rgba(var(--fg-rgb),0.4)",
            fontSize: "18px",
            marginTop: "32px",
            maxWidth: "540px",
            lineHeight: 1.7,
          }}>
            Ground-level commentary on where the Mohali, New Chandigarh, and Tricity land markets are moving — written from the field, not from a desk.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section style={{ padding: "72px 48px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
          {insights.map((article) => (
            <Link key={article.slug} href={`/insights/${article.slug}/`} style={{ textDecoration: "none" }}>
              <article className="service-card tap-glow" style={{ cursor: "pointer" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
                  <span style={{
                    color: "var(--accent)",
                    fontSize: "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                    border: "1px solid rgba(var(--accent-rgb),0.25)",
                    padding: "6px 14px",
                    borderRadius: "2px",
                  }}>
                    {article.tag}
                  </span>
                  <span style={{ color: "rgba(var(--fg-rgb),0.3)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>
                    {article.displayDate} · {article.readTime}
                  </span>
                </div>
                <h2 style={{
                  color: "var(--fg)",
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing: "-0.5px",
                  marginBottom: "14px",
                }}>
                  {article.title}
                </h2>
                <p style={{ color: "rgba(var(--fg-rgb),0.45)", fontSize: "15px", lineHeight: 1.8, maxWidth: "760px", marginBottom: "20px" }}>
                  {article.dek}
                </p>
                <span style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 600 }}>
                  Read Note →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
