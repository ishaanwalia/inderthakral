"use client";

import Nav from "@/components/Nav";

export default function AboutPage() {
  return (
    <main style={{ background: "#000000", minHeight: "100vh", color: "#FFFFFF", fontFamily: "var(--font-sans)" }}>
      <Nav active="About" />

      {/* Hero */}
      <section style={{ 
        paddingTop: "180px", 
        paddingBottom: "100px", 
        paddingLeft: "48px", 
        paddingRight: "48px", 
        borderBottom: "1px solid rgba(255,255,255,0.04)", 
        position: "relative", 
        overflow: "hidden",
        background: "radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.03) 0%, transparent 60%)",
      }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <p style={{ 
            color: "#00D4FF", 
            fontSize: "11px", 
            letterSpacing: "4px", 
            textTransform: "uppercase", 
            fontFamily: "var(--font-mono)", 
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <span style={{ width: "30px", height: "1px", background: "#00D4FF" }} />
            The Principal Advisor
          </p>
          <h1 style={{ 
            fontSize: "clamp(48px, 8vw, 100px)", 
            fontWeight: 300, 
            lineHeight: 1.05,
            letterSpacing: "-5px",
            color: "#FFFFFF",
          }}>
            Inder<br />
            <span style={{ 
              background: "linear-gradient(135deg, #00D4FF 0%, #0088FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Thakral</span>
          </h1>
          <p style={{ 
            color: "rgba(255,255,255,0.4)", 
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
      <section style={{ padding: "100px 48px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} className="about-grid-desktop">
            <div>
              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)", marginBottom: "32px" }}>
                <img src="/inder.jpeg" alt="Inder Thakral" style={{ width: "100%", objectFit: "cover", objectPosition: "center", display: "block", filter: "grayscale(20%) contrast(1.05)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px" }}>
                  <p style={{ color: "#00D4FF", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "var(--font-mono)", marginBottom: "8px" }}>Inder Thakral</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>Principal Advisor · 15+ Years</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                {[
                  { num: "15+", label: "Years Experience" },
                  { num: "₹450Cr+", label: "Transactions" },
                  { num: "500+", label: "Clients Served" },
                  { num: "100%", label: "Title Verified" },
                ].map((stat, i) => (
                  <div key={i} style={{ 
                    padding: "28px", 
                    background: "rgba(255,255,255,0.02)", 
                    border: "1px solid rgba(255,255,255,0.04)", 
                    textAlign: "center",
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)";
                    e.currentTarget.style.background = "rgba(0,212,255,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                  >
                    <div style={{ color: "#00D4FF", fontSize: "26px", fontWeight: 300, marginBottom: "6px", fontFamily: "var(--font-mono)" }}>{stat.num}</div>
                    <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{ 
                color: "#00D4FF", 
                fontSize: "11px", 
                letterSpacing: "4px", 
                textTransform: "uppercase", 
                fontFamily: "var(--font-mono)", 
                marginBottom: "32px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}>
                <span style={{ width: "30px", height: "1px", background: "#00D4FF" }} />
                The Firm
              </p>
              <p style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: 300, lineHeight: 1.8, marginBottom: "28px", letterSpacing: "-0.5px" }}>
                Independent expertise, personal service.
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>
                Inder Thakral is an independent real estate advisory serving the Chandigarh Tricity. Founded by Inder Thakral, the firm provides trusted guidance for buying, selling, leasing, and investing in residential and commercial properties.
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>
                Every transaction is personally overseen, every title is carefully verified, and every client receives direct attention backed by over 15 years of local market expertise.
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.9, marginBottom: "48px" }}>
                The firm also provides To-Let and rental placement services — helping property owners find the right tenants and helping tenants find the right space across Tricity.
              </p>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "40px", marginBottom: "40px" }}>
                <p style={{ 
                  color: "#00D4FF", 
                  fontSize: "11px", 
                  letterSpacing: "4px", 
                  textTransform: "uppercase", 
                  fontFamily: "var(--font-mono)", 
                  marginBottom: "28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}>
                  <span style={{ width: "30px", height: "1px", background: "#00D4FF" }} />
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
                      <span style={{ color: "#00D4FF", marginTop: "2px", flexShrink: 0, fontSize: "12px" }}>◈</span>
                      <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="/#contact" style={{ 
                display: "inline-flex", 
                alignItems: "center",
                gap: "12px",
                background: "#00D4FF", 
                color: "#000000", 
                padding: "16px 40px", 
                fontSize: "11px", 
                letterSpacing: "3px", 
                textTransform: "uppercase", 
                textDecoration: "none", 
                fontWeight: 600,
                borderRadius: "2px",
                fontFamily: "var(--font-mono)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(0, 212, 255, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              >
                Get In Touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section style={{ padding: "0 48px 100px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "100px" }}>
            <p style={{ 
              color: "#00D4FF", 
              fontSize: "11px", 
              letterSpacing: "4px", 
              textTransform: "uppercase", 
              fontFamily: "var(--font-mono)", 
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}>
              <span style={{ width: "30px", height: "1px", background: "#00D4FF" }} />
              Our Office
            </p>
            <h2 style={{ 
              fontSize: "clamp(28px, 4vw, 48px)", 
              fontWeight: 300, 
              marginBottom: "56px",
              letterSpacing: "-2px",
              color: "#FFFFFF",
            }}>
              Visit us in <span style={{ color: "#00D4FF" }}>Mohali</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}>
              <div style={{ 
                aspectRatio: "4/3", 
                background: "rgba(255,255,255,0.02)", 
                border: "1px solid rgba(255,255,255,0.04)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                flexDirection: "column", 
                gap: "16px",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)";
                e.currentTarget.style.background = "rgba(0,212,255,0.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
              >
                <span style={{ color: "rgba(0,212,255,0.2)", fontSize: "36px" }}>◈</span>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>Office Photo Coming Soon</span>
              </div>
              <div style={{ 
                aspectRatio: "4/3", 
                background: "rgba(255,255,255,0.02)", 
                border: "1px solid rgba(255,255,255,0.04)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                flexDirection: "column", 
                gap: "16px",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)";
                e.currentTarget.style.background = "rgba(0,212,255,0.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
              >
                <span style={{ color: "rgba(0,212,255,0.2)", fontSize: "36px" }}>◈</span>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>Office Interior Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ 
        padding: "100px 48px", 
        background: "rgba(0,212,255,0.015)", 
        borderTop: "1px solid rgba(255,255,255,0.03)",
      }} className="section-pad">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            color: "#00D4FF", 
            fontSize: "11px", 
            letterSpacing: "4px", 
            textTransform: "uppercase", 
            fontFamily: "var(--font-mono)", 
            marginBottom: "40px",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <span style={{ width: "30px", height: "1px", background: "#00D4FF" }} />
            Our Philosophy
            <span style={{ width: "30px", height: "1px", background: "#00D4FF" }} />
          </p>
          <p style={{ 
            fontSize: "clamp(22px, 3vw, 34px)", 
            fontWeight: 300, 
            lineHeight: 1.5, 
            color: "rgba(255,255,255,0.9)", 
            marginBottom: "40px",
            fontStyle: "italic",
          }}>
            "I will never show you a property I would not recommend to my own family. Your investment is our responsibility."
          </p>
          <p style={{ color: "#00D4FF", fontSize: "13px", letterSpacing: "3px", fontFamily: "var(--font-mono)" }}>— Inder Thakral</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: "48px 48px", 
        borderTop: "1px solid rgba(255,255,255,0.04)", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        flexWrap: "wrap", 
        gap: "24px" 
      }}>
        <div>
          <div style={{ color: "#00D4FF", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>Inder Thakral Properties</div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", marginTop: "6px" }}>2026 · Independent Advisory · Mohali, Chandigarh Tricity</div>
        </div>
        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
          Verified Title Deeds · By Appointment Only
        </div>
      </footer>
    </main>
  );
}