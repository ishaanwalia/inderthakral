import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { insights } from "@/data/insights";
import { site } from "@/data/site";

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug.replace(/\/$/, ""));
  if (!article) {
    return { title: "Note Not Found", robots: { index: false } };
  }
  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: `/insights/${article.slug}/` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.dek,
      url: `/insights/${article.slug}/`,
      publishedTime: article.date,
      authors: ["Inder Thakral"],
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug.replace(/\/$/, ""));

  if (!article) {
    return (
      <main style={{ background: "var(--bg)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg)" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "var(--accent)", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 500 }}>Note Not Found</p>
          <Link href="/insights/" style={{ color: "rgba(var(--fg-rgb),var(--text-secondary-a))", textDecoration: "none", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>← Back to Insights</Link>
        </div>
      </main>
    );
  }

  const related = insights
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => (a.tag === article.tag ? -1 : 0) - (b.tag === article.tag ? -1 : 0))
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    datePublished: article.date,
    author: { "@type": "Person", name: "Inder Thakral" },
    publisher: { "@type": "Organization", name: site.brand },
    mainEntityOfPage: `https://www.inderthakral.com/insights/${article.slug}/`,
  };

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--fg)", fontFamily: "var(--font-sans)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Nav active="Insights" />

      {/* Article header */}
      <section style={{
        paddingTop: "128px",
        paddingBottom: "60px",
        paddingLeft: "48px",
        paddingRight: "48px",
        borderBottom: "1px solid rgba(var(--fg-rgb),0.04)",
        background: "radial-gradient(ellipse at 30% 50%, rgba(var(--accent-rgb),0.03) 0%, transparent 60%)",
      }} className="section-pad">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <Link href="/insights/" className="hover-line" style={{
            color: "rgba(var(--fg-rgb),var(--text-secondary-a))",
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textDecoration: "none",
            fontFamily: "var(--font-mono)",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "40px",
          }}>
            ← Tricity Market Notes
          </Link>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "28px", flexWrap: "wrap" }}>
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
            <span style={{ color: "rgba(var(--fg-rgb),var(--text-tertiary-a))", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>
              {article.displayDate} · {article.readTime}
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(30px, 4.5vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-2px",
            color: "var(--fg)",
            marginBottom: "28px",
          }}>
            {article.title}
          </h1>
          <p style={{ color: "rgba(var(--fg-rgb),var(--text-secondary-a))", fontSize: "17px", lineHeight: 1.8 }}>
            {article.dek}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section style={{ padding: "56px 48px" }} className="section-pad">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {article.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: "48px" }}>
              {section.heading && (
                <h2 style={{
                  color: "var(--fg)",
                  fontSize: "clamp(20px, 2.5vw, 26px)",
                  fontWeight: 600,
                  letterSpacing: "-0.5px",
                  lineHeight: 1.3,
                  marginBottom: "24px",
                }}>
                  <span style={{ color: "var(--accent)", marginRight: "12px" }}>◈</span>
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((paragraph, j) => (
                <p key={j} style={{ color: "rgba(var(--fg-rgb),var(--text-muted-a))", fontSize: "16px", lineHeight: 1.95, marginBottom: "20px" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {/* Author + CTA */}
          <div style={{
            marginTop: "24px",
            padding: "40px",
            background: "rgba(var(--accent-rgb),0.03)",
            border: "1px solid rgba(var(--accent-rgb),0.1)",
            borderRadius: "16px",
          }}>
            <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "var(--font-mono)", marginBottom: "12px", fontWeight: 600 }}>
              Written by Inder Thakral
            </p>
            <p style={{ color: "rgba(var(--fg-rgb),var(--text-secondary-a))", fontSize: "14px", lineHeight: 1.8, marginBottom: "28px" }}>
              Principal Advisor — {site.stats.years}+ years in Tricity real estate. Every property recommendation is personally verified, every title checked.
            </p>
            <Link href="/#contact" className="cta-btn magnetic-btn tap-glow">
              Discuss Your Requirement →
            </Link>
          </div>

          {/* Related notes */}
          {related.length > 0 && (
            <div style={{ marginTop: "64px", borderTop: "1px solid rgba(var(--fg-rgb),0.06)", paddingTop: "40px" }}>
              <p className="section-label" style={{ marginBottom: "24px" }}>
                <span className="accent-line" />
                Related Reading
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/insights/${a.slug}/`}
                    className="hover-line"
                    style={{
                      color: "var(--fg)",
                      fontSize: "15px",
                      fontWeight: 500,
                      textDecoration: "none",
                      padding: "12px 0",
                      display: "block",
                    }}
                  >
                    {a.title} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
