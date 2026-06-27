"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh", overflowX: "hidden" }}>

      {/* NAV */}
      <Nav />

      {/* HERO */}
      <section style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div ref={heroRef} style={{ position: "absolute", inset: "-20px", backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.5 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.85) 60%, rgba(10,10,10,1) 100%)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "0 24px", width: "100%" }}>
          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "20px" }}>Chandigarh Tricity · Est. 2009</p>
          <h1 style={{ fontSize: "clamp(36px, 8vw, 96px)", fontWeight: 300, lineHeight: 1.1, marginBottom: "24px", color: "var(--text-primary)" }}>
            Verified Plots.<br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Premium</em> Advisory.
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", maxWidth: "480px", margin: "0 auto 40px", lineHeight: 1.8 }}>
            Independent real estate advisory across the Mohali expansion corridor. 100% verified title deeds. By appointment only.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", padding: "0 16px" }}>
            <Link href="/properties" style={{ background: "var(--gold)", color: "var(--dark)", padding: "14px 32px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", fontWeight: 600 }}>View Properties</Link>
            <a href="#contact" style={{ border: "1px solid rgba(201,168,76,0.4)", color: "var(--text-primary)", padding: "14px 32px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Book Consultation</a>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "var(--text-muted)", fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "60px 24px", borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px", textAlign: "center" }}>
          {[{ num: "₹450Cr+", label: "Transaction Volume" }, { num: "100%", label: "Verified Title Deeds" }, { num: "15+", label: "Years Local Expertise" }, { num: "500+", label: "Satisfied Clients" }].map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: "clamp(24px, 5vw, 42px)", color: "var(--gold)", fontWeight: 300, marginBottom: "8px" }}>{stat.num}</div>
              <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>What We Do</p>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 300, lineHeight: 1.2 }}>Specialized land and commercial advisory</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[
              { title: "Residential Plots", desc: "Legally vetted residential land parcels in Mohali and New Chandigarh growth corridors. Every title deed personally verified.", icon: "◈" },
              { title: "Commercial Showrooms", desc: "Premium commercial spaces and showroom plots positioned along high-traffic arterial roads for maximum yield.", icon: "◉" },
              { title: "Strategic Leasing", desc: "Corporate leasing and high-end rental management for premium commercial and residential assets.", icon: "◎" }
            ].map((service, i) => (
              <div key={i} style={{ padding: "40px 32px", background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.08)" }}>
                <div style={{ color: "var(--gold)", fontSize: "24px", marginBottom: "16px" }}>{service.icon}</div>
                <h3 style={{ fontSize: "20px", fontWeight: 300, marginBottom: "12px" }}>{service.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.8 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "80px 48px", background: "var(--dark-2)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="about-grid">
            <div>
              <img src="/inder.jpeg" alt="Inder Thakral" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            </div>
            <div>
              <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>The Principal Advisor</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.2, marginBottom: "24px" }}>A reliable dealer,<br /><em style={{ color: "var(--gold)" }}>personal service</em></h2>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>Inder Thakral is not a corporate agency. He is a trusted, personal real estate advisor who helps you buy plots, flats, houses, and commercial showrooms across the Chandigarh Tricity — and assists with ToLet and rental services too.</p>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "40px" }}>Every title deed personally verified. Every client gets direct attention. 15+ years of Tricity expertise, at your service.</p>
              <Link href="/about" style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "14px 36px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Meet Inder</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>Get In Touch</p>
          <h2 style={{ fontSize: "clamp(28px, 6vw, 64px)", fontWeight: 300, lineHeight: 1.1, marginBottom: "24px" }}>Secure your<br /><em style={{ color: "var(--gold)" }}>Tricity asset</em></h2>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8, marginBottom: "48px" }}>Connect directly with Inder Thakral to discuss high-yield commercial showrooms and verified residential plot acquisitions.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "48px" }}>
            {[{ label: "Email", value: "care@inderthakral.com", href: "mailto:care@inderthakral.com" }, { label: "Phone", value: "+91 98159 01234", href: "tel:+919815901234" }, { label: "Location", value: "Mohali, Tricity", href: "" }].map((item, i) => (
                <div key={i} style={{ padding: "24px", background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.08)", textAlign: "left" }}>
                  <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} style={{ color: "var(--gold)", fontSize: "15px", textDecoration: "none" }}>{item.value}</a>
                  ) : (
                    <div style={{ color: "var(--text-primary)", fontSize: "15px" }}>{item.value}</div>
                  )}
                </div>
              ))}
          </div>
          <a href="mailto:care@inderthakral.com" style={{ display: "block", background: "var(--gold)", color: "var(--dark)", padding: "18px", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", textDecoration: "none", fontWeight: 600 }}>Send Enquiry</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 24px", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>Inder Thakral Properties</div>
        <div style={{ color: "var(--text-muted)", fontSize: "11px", marginBottom: "8px" }}>2026 · Independent Advisory · Mohali, Chandigarh Tricity</div>
        <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>Verified Title Deeds · By Appointment Only</div>
      </footer>

    </main>
  );
}