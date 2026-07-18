"use client";

import Nav from "@/components/Nav";

export default function AboutPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--fg)", fontFamily: "var(--font-sans)" }}>
      <Nav active="About" />

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
            The Principal Advisor
          </p>
          <h1 style={{ 
            fontSize: "clamp(48px, 8vw, 100px)", 
            fontWeight: 700, 
            lineHeight: 1.05,
            letterSpacing: "-5px",
            color: "var(--fg)",
          }}>
            Inder<br />
            <span className="gradient-text">Thakral</span>
          </h1>
          <p style={{ 
            color: "rgba(var(--fg-rgb),0.4)", 
            fontSize: "18px", 
            marginTop: "32px", 
            maxWidth: "500px",
            lineHeight: 1.7,
            letterSpacing: "0.5px",
          }}>
            Independent expertise, personal service. 15+ years of Tricity real estate mastery.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section style={{ padding: "72px 48px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} className="about-grid-desktop">
            <div>
              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(var(--fg-rgb),0.06)", marginBottom: "32px" }} className="card-3d">
                <img src="/inder.jpeg" alt="Inder Thakral" style={{ width: "100%", objectFit: "cover", objectPosition: "center", display: "block", filter: "grayscale(20%) contrast(1.05)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px" }}>
                  <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "var(--font-mono)", marginBottom: "8px", fontWeight: 500 }}>Inder Thakral</p>
                  <p style={{ color: "rgba(var(--fg-rgb),0.5)", fontSize: "14px" }}>Principal Advisor · 15+ Years</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                {[
                  { num: "15+", label: "Years Experience" },
                  { num: "₹450Cr+", label: "Transactions" },
                  { num: "500+", label: "Clients Served" },
                  { num: "100%", label: "Title Verified" },
                ].map((stat, i) => (
                  <div key={i} className="service-card tap-glow" style={{ 
                    padding: "28px", 
                    textAlign: "center",
                    cursor: "default",
                  }}>
                    <div style={{ color: "var(--accent)", fontSize: "26px", fontWeight: 700, marginBottom: "6px", fontFamily: "var(--font-mono)" }}>{stat.num}</div>
                    <div style={{ color: "rgba(var(--fg-rgb),0.3)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-label" style={{ marginBottom: "32px" }}>
                <span className="accent-line" />
                The Firm
              </p>
              <p style={{ color: "var(--fg)", fontSize: "20px", fontWeight: 600, lineHeight: 1.8, marginBottom: "28px", letterSpacing: "-0.5px" }}>
                Independent expertise, personal service.
              </p>
              <p style={{ color: "rgba(var(--fg-rgb),0.5)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>
                Inder Thakral is an independent real estate advisory serving the Chandigarh Tricity. Founded by Inder Thakral, the firm provides trusted guidance for buying, selling, leasing, and investing in residential and commercial properties.
              </p>
              <p style={{ color: "rgba(var(--fg-rgb),0.5)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>
                Every transaction is personally overseen, every title is carefully verified, and every client receives direct attention backed by over 15 years of local market expertise.
              </p>
              <p style={{ color: "rgba(var(--fg-rgb),0.5)", fontSize: "15px", lineHeight: 1.9, marginBottom: "48px" }}>
                The firm also provides To-Let and rental placement services — helping property owners find the right tenants and helping tenants find the right space across Tricity.
              </p>

              <div style={{ borderTop: "1px solid rgba(var(--fg-rgb),0.05)", paddingTop: "40px", marginBottom: "40px" }}>
                <p className="section-label" style={{ marginBottom: "28px" }}>
                  <span className="accent-line" />
                  What We Help With
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    "Residential plots — verified, legal, ready to register",
                    "Flats and built-up houses across Tricity",
                    "Commercial showroom plots on high-traffic roads",
                    "To-Let and rental placement services",
                    "Investment advisory for NRIs with remote support",
                    "15+ years of direct Mohali micro-market expertise",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0, fontSize: "12px" }}>◈</span>
                      <span style={{ color: "rgba(var(--fg-rgb),0.5)", fontSize: "14px", lineHeight: 1.6, fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="/#contact" className="cta-btn magnetic-btn tap-glow">
                Get In Touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section style={{ padding: "0 48px 72px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ borderTop: "1px solid rgba(var(--fg-rgb),0.04)", paddingTop: "72px" }}>
            <p className="section-label" style={{ marginBottom: "24px" }}>
              <span className="accent-line" />
              Our Office
            </p>
            <h2 style={{ 
              fontSize: "clamp(28px, 4vw, 48px)", 
              fontWeight: 700, 
              marginBottom: "56px",
              letterSpacing: "-2px",
              color: "var(--fg)",
            }}>
              Visit us in <span style={{ color: "var(--accent)", fontWeight: 700 }}>Mohali</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }} className="about-grid-desktop">
              <div style={{ position: "relative", overflow: "hidden", borderRadius: "16px", border: "1px solid rgba(var(--fg-rgb),0.06)" }} className="card-3d tap-glow">
                <img
                  src="/showroom-exterior.jpeg"
                  alt="Inder Thakral Real Estate & Leasing office building — SCO 124, Sector-108, Pine Wood Center Emaar, Mohali"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 40%)" }} />
                <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                  <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>Our Showroom · Sector 108, Mohali</p>
                </div>
              </div>
              <div className="service-card tap-glow" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "28px",
                cursor: "default",
                padding: "48px",
              }}>
                <div>
                  <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "var(--font-mono)", marginBottom: "12px", fontWeight: 500 }}>Address</p>
                  <p style={{ color: "var(--fg)", fontSize: "17px", fontWeight: 500, lineHeight: 1.7, letterSpacing: "0.3px" }}>
                    SCO 124, Sector-108,<br />
                    Pine Wood Center Emaar,<br />
                    Mohali - 140306
                  </p>
                </div>
                <div>
                  <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "var(--font-mono)", marginBottom: "12px", fontWeight: 500 }}>Contact</p>
                  <p style={{ color: "rgba(var(--fg-rgb),0.7)", fontSize: "15px", lineHeight: 1.9 }}>
                    <a href="tel:+919815901234" className="hover-line" style={{ color: "rgba(var(--fg-rgb),0.7)", textDecoration: "none" }}>+91 98159 01234</a><br />
                    <a href="mailto:care@inderthakral.com" className="hover-line" style={{ color: "rgba(var(--fg-rgb),0.7)", textDecoration: "none" }}>care@inderthakral.com</a>
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=SCO+124+Sector+108+Pine+Wood+Center+Emaar+Mohali+140306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-btn tap-glow"
                  style={{ alignSelf: "flex-start" }}
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ 
        padding: "72px 48px", 
        background: "rgba(var(--accent-rgb),0.015)", 
        borderTop: "1px solid rgba(var(--fg-rgb),0.03)",
      }} className="section-pad">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p className="section-label" style={{ marginBottom: "40px", justifyContent: "center" }}>
            <span className="accent-line" />
            Our Philosophy
            <span className="accent-line" />
          </p>
          <p style={{ 
            fontSize: "clamp(22px, 3vw, 34px)", 
            fontWeight: 700, 
            lineHeight: 1.5, 
            color: "rgba(var(--fg-rgb),0.9)", 
            marginBottom: "40px",
            fontStyle: "italic",
          }}>
            "I will never show you a property I would not recommend to my own family. Your investment is our responsibility."
          </p>
          <p style={{ color: "var(--accent)", fontSize: "13px", letterSpacing: "3px", fontFamily: "var(--font-mono)", fontWeight: 500 }}>— Inder Thakral</p>
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