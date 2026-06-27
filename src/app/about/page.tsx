"use client";

import Link from "next/link";
import Nav from "@/components/Nav";

export default function AboutPage() {
  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh" }}>
      <Nav active="About" />

      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "1px solid rgba(201,168,76,0.1)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.06 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>The Principal Advisor</p>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05 }}>
            Inder<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>Thakral</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ width: "100%", height: "360px", backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80')", backgroundSize: "cover", backgroundPosition: "center top", marginBottom: "48px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", marginBottom: "64px" }}>
            {[{ num: "15+", label: "Years Experience" }, { num: "₹450Cr+", label: "Transactions" }, { num: "500+", label: "Clients Served" }, { num: "100%", label: "Title Verified" }].map((stat, i) => (
              <div key={i} style={{ padding: "24px", background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.08)", textAlign: "center" }}>
                <div style={{ color: "var(--gold)", fontSize: "28px", fontWeight: 300, marginBottom: "4px" }}>{stat.num}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>The Story</p>
          <p style={{ color: "var(--text-primary)", fontSize: "18px", fontWeight: 300, lineHeight: 1.8, marginBottom: "24px" }}>For over 15 years, Inder Thakral has been the trusted name behind some of Mohali and New Chandigarh's most significant land transactions.</p>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>Unlike large brokerages that treat clients as numbers, Inder built his practice on a singular principle — every client deserves direct access to the person responsible for their investment. No junior agents. No call centers. Just Inder, personally analyzing every plot, every title deed, every micro-market shift.</p>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>His deep roots in the Chandigarh Tricity region give him an unmatched understanding of which sectors are positioned for growth and which carry hidden risks that digital portals would never reveal.</p>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "48px" }}>Today, Inder Thakral Properties serves a select clientele of high-net-worth investors, NRIs, and business owners seeking legally airtight, high-yield real estate in one of India's fastest-growing urban corridors.</p>

          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>Credentials</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
            {["15+ years exclusive focus on Chandigarh Tricity land advisory", "Specialist in GMADA approved and RERA compliant properties", "Deep expertise in Mohali IT City and Aerocity commercial corridors", "NRI investment advisory with full legal documentation support", "Personal verification of every title deed before client presentation", "Direct relationships with top property lawyers in Tricity"].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}>◈</span>
                <span style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <a href="/#contact" style={{ display: "inline-block", background: "var(--gold)", color: "var(--dark)", padding: "16px 40px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", fontWeight: 600 }}>Book a Consultation</a>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--dark-2)", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "32px" }}>Philosophy</p>
          <p style={{ fontSize: "clamp(18px, 3vw, 32px)", fontWeight: 300, lineHeight: 1.6, color: "var(--text-primary)", marginBottom: "32px" }}>
            "Real estate is not a transaction. It is a transfer of trust. I will never show you a property I would not buy myself."
          </p>
          <p style={{ color: "var(--gold)", fontSize: "13px", letterSpacing: "2px" }}>— Inder Thakral</p>
        </div>
      </section>

      <footer style={{ padding: "40px 24px", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>Inder Thakral Properties</div>
        <div style={{ color: "var(--text-muted)", fontSize: "11px", marginBottom: "8px" }}>2026 · Independent Advisory · Mohali, Chandigarh Tricity</div>
        <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>Verified Title Deeds · By Appointment Only</div>
      </footer>
    </main>
  );
}