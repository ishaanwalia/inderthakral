"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh" }}>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "1px solid rgba(201,168,76,0.1)", backdropFilter: "blur(12px)", background: "rgba(10,10,10,0.7)" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>Inder Thakral</span>
          <span style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px" }}>Tricity Land Advisory</span>
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          <Link href="/properties" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Properties</Link>
          <Link href="/about" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>About</Link>
          <Link href="/services" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Services</Link>
          <a href="#contact" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Contact</a>
        </div>
        <a href="#contact" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "10px 24px", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Enquire</a>
      </motion.nav>

      <section style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div ref={heroRef} style={{ position: "absolute", inset: "-20px", backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.1s ease-out" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,1) 100%)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "0 24px" }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "6px", textTransform: "uppercase", marginBottom: "24px" }}>Chandigarh Tricity · Est. 2009</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} style={{ fontSize: "clamp(40px, 7vw, 96px)", fontWeight: 300, lineHeight: 1.05, marginBottom: "32px", letterSpacing: "-1px" }}>
            Verified Plots.<br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Premium</em> Advisory.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} style={{ color: "var(--text-muted)", fontSize: "16px", maxWidth: "480px", margin: "0 auto 48px", lineHeight: 1.8 }}>Independent real estate advisory across the Mohali expansion corridor. 100% verified title deeds. By appointment only.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/properties" style={{ background: "var(--gold)", color: "var(--dark)", padding: "16px 40px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", fontWeight: 600 }}>View Properties</Link>
            <a href="#contact" style={{ border: "1px solid rgba(201,168,76,0.4)", color: "var(--text-primary)", padding: "16px 40px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Book Consultation</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "var(--text-muted)", fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase" }}>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
        </motion.div>
      </section>

      <section style={{ padding: "80px 48px", borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", textAlign: "center" }}>
          {[{ num: "₹450Cr+", label: "Transaction Volume" }, { num: "100%", label: "Verified Title Deeds" }, { num: "15+", label: "Years Local Expertise" }, { num: "500+", label: "Satisfied Clients" }].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <div style={{ fontSize: "clamp(28px, 3vw, 42px)", color: "var(--gold)", fontWeight: 300, marginBottom: "8px" }}>{stat.num}</div>
              <div style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "80px" }}>
            <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>What We Do</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, maxWidth: "600px", lineHeight: 1.2 }}>Specialized land and commercial advisory</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
            {[{ title: "Residential Plots", desc: "Legally vetted residential land parcels in Mohali and New Chandigarh growth corridors. Every title deed personally verified.", icon: "◈" }, { title: "Commercial Showrooms", desc: "Premium commercial spaces and showroom plots positioned along high-traffic arterial roads for maximum yield.", icon: "◉" }, { title: "Strategic Leasing", desc: "Corporate leasing and high-end rental management for premium commercial and residential assets.", icon: "◎" }].map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} style={{ padding: "48px 40px", background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.08)" }}>
                <div style={{ color: "var(--gold)", fontSize: "24px", marginBottom: "24px" }}>{service.icon}</div>
                <h3 style={{ fontSize: "20px", fontWeight: 300, marginBottom: "16px" }}>{service.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.8 }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "120px 48px", background: "var(--dark-2)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>The Principal Advisor</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.2, marginBottom: "32px" }}>Direct accountability,<br /><em style={{ color: "var(--gold)" }}>proven expertise</em></h2>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>Unlike transactional agencies or digital portals, Inder Thakral Properties operates on direct personal accountability. Every transaction is personally managed — ensuring 100% verified title deeds and transparent valuations.</p>
            <Link href="/about" style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "14px 36px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Learn More</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ position: "relative" }}>
            <div style={{ width: "100%", aspectRatio: "3/4", backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div style={{ position: "absolute", bottom: "-24px", left: "-24px", background: "var(--dark)", border: "1px solid rgba(201,168,76,0.2)", padding: "24px 32px" }}>
              <div style={{ color: "var(--gold)", fontSize: "28px", fontWeight: 300 }}>15+</div>
              <div style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>Years in Tricity</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>Get In Touch</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 64px)", fontWeight: 300, lineHeight: 1.1, marginBottom: "24px" }}>Secure your<br /><em style={{ color: "var(--gold)" }}>Tricity asset</em></h2>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8, marginBottom: "64px" }}>Connect directly with Inder Thakral to discuss high-yield commercial showrooms and verified residential plot acquisitions.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", marginBottom: "64px" }}>
              {[{ label: "Email", value: "care@inderthakral.com" }, { label: "Phone", value: "+91 98159 01234" }, { label: "Location", value: "Mohali, Tricity" }].map((item, i) => (
                <div key={i} style={{ padding: "32px 24px", background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.08)" }}>
                  <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>{item.label}</div>
                  <div style={{ color: "var(--text-primary)", fontSize: "14px" }}>{item.value}</div>
                </div>
              ))}
            </div>
            <a href="mailto:care@inderthakral.com" style={{ display: "inline-block", background: "var(--gold)", color: "var(--dark)", padding: "18px 56px", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", textDecoration: "none", fontWeight: 600 }}>Send Enquiry</a>
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