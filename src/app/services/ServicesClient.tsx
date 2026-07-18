"use client";

import Nav from "@/components/Nav";

export default function ServicesPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--fg)", fontFamily: "var(--font-sans)" }}>
      <Nav active="Services" />

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
            What We Offer
          </p>
          <h1 style={{ 
            fontSize: "clamp(48px, 8vw, 100px)", 
            fontWeight: 700, 
            lineHeight: 1.05,
            letterSpacing: "-5px",
            color: "var(--fg)",
          }}>
            Advisory<br />
            <span className="gradient-text">Services</span>
          </h1>
          <p style={{ 
            color: "rgba(var(--fg-rgb),0.4)", 
            fontSize: "18px", 
            marginTop: "32px", 
            maxWidth: "500px",
            lineHeight: 1.7,
          }}>
            End-to-end real estate advisory with personal oversight on every transaction.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section style={{ padding: "72px 48px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "88px" }}>
          {[
            {
              num: "01",
              title: "Residential Plots & Homes",
              desc: "End-to-end advisory for buying residential plots, flats, and built-up houses across Mohali, New Chandigarh, and Panchkula. Every title deed is personally verified before presentation to the client.",
              features: ["Sector-by-sector growth analysis", "100% title deed verification", "Direct negotiation with sellers", "Full legal documentation support", "GMADA and RERA compliance check", "Post-purchase registration assistance"],
              image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
              flip: false,
            },
            {
              num: "02",
              title: "Commercial Showroom Advisory",
              desc: "Strategic identification and acquisition of high-footfall commercial showroom plots. Specializing in arterial road frontage properties in Mohali IT City, Aerocity, and JLPL corridors with proven rental yield potential.",
              features: ["Footfall and road-width analysis", "Rental yield projections", "Commercial zoning verification", "Bank loan facilitation", "Lease structuring support", "Tenant sourcing assistance"],
              image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
              flip: true,
            },
            {
              num: "03",
              title: "To-Let & Rental Services",
              desc: "Helping property owners find verified, reliable tenants — and helping tenants find the right residential or commercial space across the Tricity. Full documentation and agreement support included.",
              features: ["Tenant sourcing and verification", "Market-rate rental analysis", "Rental agreement support", "Both residential and commercial", "Quick placement turnaround", "Ongoing support for owners"],
              image: "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
              flip: false,
            },
            {
              num: "04",
              title: "NRI Investment Advisory",
              desc: "Specialized investment advisory for non-resident Indians seeking verified real estate assets in the Chandigarh Tricity. Full power of attorney support, remote transaction management, and documentation guidance.",
              features: ["Remote transaction management", "Power of attorney support", "FEMA compliance guidance", "Repatriation documentation", "Trusted local legal network", "Regular investment updates"],
              image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
              flip: true,
            },
          ].map((service, i) => (
            <div key={i}>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: service.flip ? "1fr 1fr" : "1fr 1fr", 
                gap: "80px",
                alignItems: "center",
              }} className="services-grid-desktop">
                <div style={{ order: service.flip ? 2 : 1 }}>
                  <div style={{ color: "rgba(var(--accent-rgb),0.15)", fontSize: "72px", fontWeight: 700, opacity: 1, marginBottom: "20px", lineHeight: 1, fontFamily: "var(--font-mono)", letterSpacing: "-2px" }}>
                    {service.num}
                  </div>
                  <h2 style={{ 
                    fontSize: "clamp(24px, 3vw, 36px)", 
                    fontWeight: 600, 
                    marginBottom: "24px", 
                    lineHeight: 1.2,
                    letterSpacing: "-1px",
                    color: "var(--fg)",
                  }}>
                    {service.title}
                  </h2>
                  <p style={{ color: "rgba(var(--fg-rgb),0.5)", fontSize: "15px", lineHeight: 1.9, marginBottom: "36px" }}>
                    {service.desc}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "36px" }}>
                    {service.features.map((f, j) => (
                      <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px", fontSize: "12px" }}>◈</span>
                        <span style={{ color: "rgba(var(--fg-rgb),0.5)", fontSize: "13px", lineHeight: 1.6, fontWeight: 500 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/#contact" className="outline-btn tap-glow" style={{ borderColor: "rgba(var(--accent-rgb),0.3)", color: "var(--accent)" }}>
                    Enquire About This →
                  </a>
                </div>
                <div style={{ order: service.flip ? 1 : 2 }}>
                  <div style={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(var(--fg-rgb),0.06)",
                    aspectRatio: "4/3",
                  }} className="card-3d">
                    <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(var(--accent-rgb),0.05) 0%, transparent 50%)" }} />
                    {/* Corner accent */}
                    <div style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      width: "40px",
                      height: "40px",
                      borderTop: "2px solid rgba(var(--accent-rgb),0.3)",
                      borderRight: "2px solid rgba(var(--accent-rgb),0.3)",
                    }} />
                    <div style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      width: "40px",
                      height: "40px",
                      borderBottom: "2px solid rgba(var(--accent-rgb),0.3)",
                      borderLeft: "2px solid rgba(var(--accent-rgb),0.3)",
                    }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: "72px 48px", 
        background: "rgba(var(--accent-rgb),0.015)", 
        borderTop: "1px solid rgba(var(--fg-rgb),0.03)",
      }} className="section-pad">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p className="section-label" style={{ marginBottom: "24px", justifyContent: "center" }}>
            <span className="accent-line" />
            Ready to Begin?
            <span className="accent-line" />
          </p>
          <h2 style={{ 
            fontSize: "clamp(28px, 4vw, 48px)", 
            fontWeight: 700, 
            lineHeight: 1.2, 
            marginBottom: "24px",
            letterSpacing: "-2px",
            color: "var(--fg)",
          }}>
            Let us find your<br />
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>perfect asset</span>
          </h2>
          <p style={{ color: "rgba(var(--fg-rgb),0.4)", fontSize: "15px", lineHeight: 1.8, marginBottom: "40px" }}>
            Every engagement begins with a personal conversation with Inder Thakral — no junior agents, no generic advice.
          </p>
          <a href="/#contact" className="cta-btn magnetic-btn tap-glow">
            Book a Consultation →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: "48px 48px", 
        borderTop: "1px solid rgba(var(--fg-rgb),0.04)", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        flexWrap: "wrap", 
        gap: "24px" 
      }}>
        <div>
          <div style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 700 }}>Inder Thakral Properties</div>
          <div style={{ color: "rgba(var(--fg-rgb),0.3)", fontSize: "12px", marginTop: "6px" }}>2026 · SCO 124, Sector-108, Pine Wood Center Emaar, Mohali - 140306</div>
        </div>
        <div style={{ color: "rgba(var(--fg-rgb),0.2)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>
          Verified Title Deeds · By Appointment Only
        </div>
      </footer>
    </main>
  );
}