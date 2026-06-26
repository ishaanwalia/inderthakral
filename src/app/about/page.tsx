"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "24px 48px",
        borderBottom: "1px solid rgba(201,168,76,0.1)",
        backdropFilter: "blur(12px)",
        background: "rgba(10,10,10,0.7)",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>Inder Thakral</span>
            <span style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px" }}>Tricity Land Advisory</span>
          </div>
        </Link>
        <div style={{ display: "flex", gap: "40px" }}>
          {[["Properties", "/properties"], ["About", "/about"], ["Services", "/services"], ["Contact", "/#contact"]].map(([item, href]) => (
            <Link key={item} href={href} style={{
              color: item === "About" ? "var(--gold)" : "var(--text-muted)",
              fontSize: "11px", letterSpacing: "2px",
              textTransform: "uppercase", textDecoration: "none",
            }}>{item}</Link>
          ))}
        </div>
        <Link href="/#contact" style={{
          border: "1px solid var(--gold)", color: "var(--gold)",
          padding: "10px 24px", fontSize: "10px", letterSpacing: "3px",
          textTransform: "uppercase", textDecoration: "none",
        }}>Enquire</Link>
      </nav>

      {/* HERO */}
      <section style={{
        paddingTop: "160px", paddingBottom: "120px",
        paddingLeft: "48px", paddingRight: "48px",
        borderBottom: "1px solid rgba(201,168,76,0.1)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')",
          backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08,
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}
          >The Principal Advisor</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: "clamp(40px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05, maxWidth: "800px" }}
          >Inder<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>Thakral</em></motion.h1>
        </div>
      </section>

      {/* STORY */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              width: "100%", aspectRatio: "3/4",
              backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80')",
              backgroundSize: "cover", backgroundPosition: "center top",
              marginBottom: "24px",
            }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
              {[
                { num: "15+", label: "Years Experience" },
                { num: "₹450Cr+", label: "Transactions" },
                { num: "500+", label: "Clients Served" },
                { num: "100%", label: "Title Verified" },
              ].map((stat, i) => (
                <div key={i} style={{ padding: "24px", background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.08)", textAlign: "center" }}>
                  <div style={{ color: "var(--gold)", fontSize: "28px", fontWeight: 300, marginBottom: "4px" }}>{stat.num}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>The Story</p>
            <p style={{ color: "var(--text-primary)", fontSize: "18px", fontWeight: 300, lineHeight: 1.8, marginBottom: "24px" }}>
              For over 15 years, Inder Thakral has been the trusted name behind some of Mohali and New Chandigarh's most significant land transactions.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>
              Unlike large brokerages that treat clients as numbers, Inder built his practice on a singular principle — every client deserves direct access to the person responsible for their investment. No junior agents. No call centers. Just Inder, personally analyzing every plot, every title deed, every micro-market shift.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>
              His deep roots in the Chandigarh Tricity region — Mohali, Panchkula, and New Chandigarh — give him an unmatched understanding of which sectors are positioned for growth and which carry hidden risks that digital portals would never reveal.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "48px" }}>
              Today, Inder Thakral Properties serves a select clientele of high-net-worth investors, NRIs, and business owners seeking legally airtight, high-yield real estate in one of India's fastest-growing urban corridors.
            </p>

            <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "40px", marginBottom: "40px" }}>
              <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>Credentials & Expertise</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "15+ years exclusive focus on Chandigarh Tricity land advisory",
                  "Specialist in GMADA approved and RERA compliant properties",
                  "Deep expertise in Mohali IT City and Aerocity commercial corridors",
                  "NRI investment advisory with full legal documentation support",
                  "Personal verification of every title deed before client presentation",
                  "Direct relationships with top property lawyers in Tricity",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0 }}>◈</span>
                    <span style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="/#contact" style={{
              display: "inline-block",
              background: "var(--gold)", color: "var(--dark)",
              padding: "16px 40px", fontSize: "11px", letterSpacing: "3px",
              textTransform: "uppercase", textDecoration: "none", fontWeight: 600,
            }}>Book a Consultation</a>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ padding: "120px 48px", background: "var(--dark-2)", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "32px" }}>Philosophy</p>
            <p style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 300, lineHeight: 1.6, color: "var(--text-primary)", marginBottom: "32px" }}>
              "Real estate is not a transaction. It is a transfer of trust. I will never show you a property I would not buy myself."
            </p>
            <p style={{ color: "var(--gold)", fontSize: "13px", letterSpacing: "2px" }}>— Inder Thakral</p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px 48px",
        borderTop: "1px solid rgba(201,168,76,0.1)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div>
          <div style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" }}>Inder Thakral Properties</div>
          <div style={{ color: "var(--text-muted)", fontSize: "11px", marginTop: "4px" }}>© 2026 · Independent Advisory · Mohali, Chandigarh Tricity</div>
        </div>
        <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>Verified Title Deeds · By Appointment Only</div>
      </footer>

    </main>
  );
}