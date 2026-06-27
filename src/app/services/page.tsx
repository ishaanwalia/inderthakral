"use client";

import Nav from "@/components/Nav";

export default function ServicesPage() {
  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh" }}>
      <Nav active="Services" />

      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "1px solid rgba(201,168,76,0.1)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.06 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>What We Offer</p>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05 }}>
            Advisory<br /><em style={{ color: "var(--gold)" }}>Services</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>
          {[
            { num: "01", title: "Residential Plot Advisory", desc: "End-to-end advisory for residential plot acquisition across Mohali, New Chandigarh, and Panchkula. We identify high-growth micro-markets, personally verify every title deed, and negotiate directly on your behalf.", features: ["Sector-by-sector growth analysis", "100% title deed verification", "Direct negotiation with sellers", "Full legal documentation support", "GMADA and RERA compliance check", "Post-purchase registration assistance"], image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" },
            { num: "02", title: "Commercial Showroom Advisory", desc: "Strategic identification and acquisition of high-footfall commercial showroom plots. We specialize in arterial road frontage properties in Mohali IT City, Aerocity, and JLPL corridors with proven rental yield potential.", features: ["Footfall and road-width analysis", "Rental yield projections", "Commercial zoning verification", "Bank loan facilitation", "Lease structuring support", "Tenant sourcing assistance"], image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80" },
            { num: "03", title: "NRI Investment Advisory", desc: "Specialized investment advisory for non-resident Indians seeking verified real estate assets in the Chandigarh Tricity region. Full power of attorney support, remote transaction management, and repatriation guidance.", features: ["Remote transaction management", "Power of attorney support", "FEMA compliance guidance", "Repatriation documentation", "Trusted local legal network", "Regular investment updates"], image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80" },
            { num: "04", title: "Strategic Leasing", desc: "Premium leasing and rental management for high-net-worth property owners. We position your commercial or residential asset for maximum occupancy and rental yield through our curated tenant network.", features: ["Premium tenant sourcing", "Market-rate rental analysis", "Lease agreement drafting", "Tenant background verification", "Ongoing rental management", "Yield optimization strategy"], image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
          ].map((service, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "60px" }}>
              <div style={{ color: "var(--gold)", fontSize: "48px", fontWeight: 300, lineHeight: 1, marginBottom: "16px", opacity: 0.3 }}>{service.num}</div>
              <div style={{ width: "100%", height: "240px", backgroundImage: `url('${service.image}')`, backgroundSize: "cover", backgroundPosition: "center", marginBottom: "32px", border: "1px solid rgba(201,168,76,0.1)" }} />
              <h2 style={{ fontSize: "clamp(22px, 4vw, 40px)", fontWeight: 300, marginBottom: "20px", lineHeight: 1.2 }}>{service.title}</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "32px" }}>{service.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                {service.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}>◈</span>
                    <span style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="/#contact" style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "14px 32px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Enquire About This</a>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--dark-2)", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>Ready to Invest?</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.2, marginBottom: "24px" }}>Let us find your<br /><em style={{ color: "var(--gold)" }}>perfect asset</em></h2>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8, marginBottom: "40px" }}>Every advisory engagement begins with a personal consultation with Inder Thakral — no junior agents, no generic advice.</p>
          <a href="/#contact" style={{ display: "inline-block", background: "var(--gold)", color: "var(--dark)", padding: "18px 48px", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", textDecoration: "none", fontWeight: 600 }}>Book a Consultation</a>
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