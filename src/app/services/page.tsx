"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh" }}>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "1px solid rgba(201,168,76,0.1)", backdropFilter: "blur(12px)", background: "rgba(10,10,10,0.7)" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>Inder Thakral</span>
            <span style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px" }}>Tricity Land Advisory</span>
          </div>
        </Link>
        <div style={{ display: "flex", gap: "40px" }}>
          <Link href="/properties" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Properties</Link>
          <Link href="/about" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>About</Link>
          <Link href="/services" style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Services</Link>
          <a href="/#contact" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Contact</a>
        </div>
        <Link href="/#contact" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "10px 24px", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Enquire</Link>
      </nav>

      <section style={{ paddingTop: "160px", paddingBottom: "120px", paddingLeft: "48px", paddingRight: "48px", borderBottom: "1px solid rgba(201,168,76,0.1)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.06 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>What We Offer</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontSize: "clamp(40px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05, maxWidth: "800px" }}>
            Advisory<br /><em style={{ color: "var(--gold)" }}>Services</em>
          </motion.h1>
        </div>
      </section>

      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {[
            {
              num: "01",
              title: "Residential Plot Advisory",
              desc: "End-to-end advisory for residential plot acquisition across Mohali, New Chandigarh, and Panchkula. We identify high-growth micro-markets, personally verify every title deed, and negotiate directly on your behalf.",
              features: ["Sector-by-sector growth analysis", "100% title deed verification", "Direct negotiation with sellers", "Full legal documentation support", "GMADA and RERA compliance check", "Post-purchase registration assistance"],
              image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
            },
            {
              num: "02",
              title: "Commercial Showroom Advisory",
              desc: "Strategic identification and acquisition of high-footfall commercial showroom plots. We specialize in arterial road frontage properties in Mohali IT City, Aerocity, and JLPL corridors with proven rental yield potential.",
              features: ["Footfall and road-width analysis", "Rental yield projections", "Commercial zoning verification", "Bank loan facilitation", "Lease structuring support", "Tenant sourcing assistance"],
              image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
            },
            {
              num: "03",
              title: "NRI Investment Advisory",
              desc: "Specialized investment advisory for non-resident Indians seeking verified real estate assets in the Chandigarh Tricity region. Full power of attorney support, remote transaction management, and repatriation guidance.",
              features: ["Remote transaction management", "Power of attorney support", "FEMA compliance guidance", "Repatriation documentation", "Trusted local legal network", "Regular investment updates"],
              image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
            },
            {
              num: "04",
              title: "Strategic Leasing",
              desc: "Premium leasing and rental management for high-net-worth property owners. We position your commercial or residential asset for maximum occupancy and rental yield through our curated tenant network.",
              features: ["Premium tenant sourcing", "Market-rate rental analysis", "Lease agreement drafting", "Tenant background verification", "Ongoing rental management", "Yield optimization strategy"],
              image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "160px", direction: i % 2 === 0 ? "ltr" : "rtl" }}
            >
              <div style={{ direction: "ltr" }}>
                <div style={{ color: "var(--gold)", fontSize: "64px", fontWeight: 300, lineHeight: 1, marginBottom: "24px", opacity: 0.3 }}>{service.num}</div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 300, marginBottom: "24px", lineHeight: 1.2 }}>{service.title}</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "40px" }}>{service.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "40px" }}>
                  {service.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}>◈</span>
                      <span style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.6 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="/#contact" style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "14px 36px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Enquire About This Service</a>
              </div>
              <div style={{ direction: "ltr" }}>
                <div style={{ width: "100%", aspectRatio: "4/3", backgroundImage: "url('" + service.image + "')", backgroundSize: "cover", backgroundPosition: "center", border: "1px solid rgba(201,168,76,0.1)" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: "120px 48px", background: "var(--dark-2)", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>Ready to Invest?</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.2, marginBottom: "24px" }}>Let us find your<br /><em style={{ color: "var(--gold)" }}>perfect asset</em></h2>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8, marginBottom: "48px" }}>Every advisory engagement begins with a personal consultation with Inder Thakral — no junior agents, no generic advice.</p>
            <a href="/#contact" style={{ display: "inline-block", background: "var(--gold)", color: "var(--dark)", padding: "18px 56px", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", textDecoration: "none", fontWeight: 600 }}>Book a Consultation</a>
          </motion.div>
        </div>
      </section>

      <footer style={{ padding: "40px 48px", borderTop: "1px solid rgba(201,168,76,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" }}>Inder Thakral Properties</div>
          <div style={{ color: "var(--text-muted)", fontSize: "11px", marginTop: "4px" }}>2026 · Independent Advisory · Mohali, Chandigarh Tricity</div>
        </div>
        <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>Verified Title Deeds · By Appointment Only</div>
      </footer>

    </main>
  );
}