"use client";

import Nav from "@/components/Nav";

export default function AboutPage() {
  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh" }}>
      <Nav active="About" />

      {/* HERO */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "48px", paddingRight: "48px", borderBottom: "1px solid rgba(201,168,76,0.1)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.06 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>The Principal Advisor</p>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05 }}>
            Inder<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>Thakral</em>
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="about-grid">

            {/* LEFT — Photo + Stats */}
            <div>
              <img src="/inder.jpeg" alt="Inder Thakral" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "center top", marginBottom: "24px", display: "block" }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                {[{ num: "15+", label: "Years Experience" }, { num: "₹450Cr+", label: "Transactions" }, { num: "500+", label: "Clients Served" }, { num: "100%", label: "Title Verified" }].map((stat, i) => (
                  <div key={i} style={{ padding: "24px", background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.08)", textAlign: "center" }}>
                    <div style={{ color: "var(--gold)", fontSize: "28px", fontWeight: 300, marginBottom: "4px" }}>{stat.num}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Story */}
            <div>
              <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>The Story</p>
              <p style={{ color: "var(--text-primary)", fontSize: "18px", fontWeight: 300, lineHeight: 1.8, marginBottom: "24px" }}>
                For over 15 years, Inder Thakral has been a trusted name in real estate across the Chandigarh Tricity — not as a corporate agency, but as a personal, reliable advisor you can count on.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>
                Whether you're looking to buy a residential plot, a flat, a built-up house, or a commercial showroom plot — Inder handles it personally. No junior agents. No call centers. Just a dependable dealer who knows the Tricity market block by block.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>
                He also assists with ToLet and rental services, making him a one-stop advisor for both buyers and property owners looking to lease their assets at the best market rates.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "48px" }}>
                Every title deed is personally verified before presentation. Every valuation is transparent. Every client gets Inder's direct attention — because your investment deserves nothing less.
              </p>

              <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "40px", marginBottom: "40px" }}>
                <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>What Inder Helps With</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Residential plots — verified, legal, ready to register",
                    "Flats and built-up houses across Tricity",
                    "Commercial showroom plots on high-traffic roads",
                    "ToLet and rental services for owners and tenants",
                    "NRI investment advisory with remote support",
                    "15+ years of direct Mohali micro-market expertise",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0 }}>◈</span>
                      <span style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="/#contact" style={{ display: "inline-block", background: "var(--gold)", color: "var(--dark)", padding: "16px 40px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", fontWeight: 600 }}>Get In Touch</a>
            </div>

          </div>
        </div>
      </section>

      {/* OFFICE SECTION */}
      <section style={{ padding: "0 48px 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "80px" }}>
            <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>Our Office</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, marginBottom: "48px" }}>Visit us in <em style={{ color: "var(--gold)" }}>Mohali</em></h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}>
              <div style={{ aspectRatio: "4/3", background: "var(--dark-3)", border: "1px solid rgba(201,168,76,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "12px" }}>
                <span style={{ color: "var(--gold)", fontSize: "32px", opacity: 0.3 }}>◈</span>
                <span style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>Office Photo Coming Soon</span>
              </div>
              <div style={{ aspectRatio: "4/3", background: "var(--dark-3)", border: "1px solid rgba(201,168,76,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "12px" }}>
                <span style={{ color: "var(--gold)", fontSize: "32px", opacity: 0.3 }}>◈</span>
                <span style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>Office Interior Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ padding: "120px 48px", background: "var(--dark-2)", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "32px" }}>Philosophy</p>
          <p style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 300, lineHeight: 1.6, color: "var(--text-primary)", marginBottom: "32px" }}>
            "I am not just a dealer. I am the person who will walk the plot with you, check every document, and make sure you never regret your investment."
          </p>
          <p style={{ color: "var(--gold)", fontSize: "13px", letterSpacing: "2px" }}>— Inder Thakral</p>
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