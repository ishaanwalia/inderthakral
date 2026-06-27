"use client";

import Nav from "@/components/Nav";

export default function ServicesPage() {
  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh" }}>
      <Nav active="Services" />

      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "48px", paddingRight: "48px", borderBottom: "1px solid rgba(201,168,76,0.1)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.06 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>What We Offer</p>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05 }}>
            Advisory<br /><em style={{ color: "var(--gold)" }}>Services</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "120px" }}>
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
              <div className="services-grid" style={{ direction: service.flip ? "rtl" : "ltr" }}>
                <div style={{ direction: "ltr" }}>
                  <div style={{ color: "var(--gold)", fontSize: "56px", fontWeight: 300, opacity: 0.2, marginBottom: "16px", lineHeight: 1 }}>{service.num}</div>
                  <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 300, marginBottom: "20px", lineHeight: 1.2 }}>{service.title}</h2>
                  <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "32px" }}>{service.desc}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "32px" }}>
                    {service.features.map((f, j) => (
                      <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}>◈</span>
                        <span style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.6 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/#contact" style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "14px 32px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Enquire About This</a>
                </div>
                <div style={{ direction: "ltr" }}>
                  <img src={service.image} alt={service.title} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", border: "1px solid rgba(201,168,76,0.1)", display: "block" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 48px", background: "var(--dark-2)", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>Ready to Begin?</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.2, marginBottom: "24px" }}>Let us find your<br /><em style={{ color: "var(--gold)" }}>perfect asset</em></h2>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8, marginBottom: "40px" }}>Every engagement begins with a personal conversation with Inder Thakral — no junior agents, no generic advice.</p>
          <a href="/#contact" style={{ display: "inline-block", background: "var(--gold)", color: "var(--dark)", padding: "18px 48px", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", textDecoration: "none", fontWeight: 600 }}>Book a Consultation</a>
        </div>
      </section>

      <footer style={{ padding: "40px 48px", borderTop: "1px solid rgba(201,168,76,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <div style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" }}>Inder Thakral Properties</div>
          <div style={{ color: "var(--text-muted)", fontSize: "11px", marginTop: "4px" }}>2026 · Independent Advisory · Mohali, Chandigarh Tricity</div>
        </div>
        <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>Verified Title Deeds · By Appointment Only</div>
      </footer>
    </main>
  );
}