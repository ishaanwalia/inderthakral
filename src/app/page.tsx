"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import { properties } from "@/data/properties";

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} style={{ color: "#00D4FF", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, fontFamily: "monospace", letterSpacing: "-2px" }}>
      {count}{suffix}
    </div>
  );
}

export default function HomePage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const featuredProperties = properties.slice(0, 3);

  return (
    <main style={{ background: "#000000", minHeight: "100vh", overflowX: "hidden", width: "100%", color: "#F0F0F0", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Cursor glow effect */}
      <div style={{
        position: "fixed",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
        transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
        transition: "transform 0.1s ease-out",
      }} />

      <Nav />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: "80px" }}>
        {/* Animated background grid */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }} />
        
        {/* Glowing orb */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(0,100,200,0.05) 40%, transparent 70%)",
          filter: "blur(40px)",
          animation: "pulse 4s ease-in-out infinite",
        }} />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "900px", padding: "0 24px", width: "100%" }}>
          <div style={{ display: "inline-flex", gap: "16px", marginBottom: "40px", flexWrap: "wrap", justifyContent: "center" }}>
            {["Verified", "Trusted", "Personal"].map((tag, i) => (
              <span key={i} style={{
                padding: "8px 20px",
                border: "1px solid rgba(0,212,255,0.3)",
                color: "#00D4FF",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontFamily: "monospace",
                background: "rgba(0,212,255,0.05)",
              }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 style={{
            fontSize: "clamp(40px, 8vw, 96px)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "24px",
            letterSpacing: "-3px",
            background: "linear-gradient(135deg, #FFFFFF 0%, #00D4FF 50%, #0088FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Verified Land.
            <br />
            Trusted Advisor.
          </h1>

          <p style={{
            color: "rgba(240,240,240,0.6)",
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto 48px",
            fontWeight: 400,
          }}>
            Personal real estate advisory for residential plots, commercial showrooms, and NRI investments across Mohali, New Chandigarh, and Panchkula.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/properties" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#00D4FF",
              color: "#000000",
              padding: "16px 40px",
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s ease",
              borderRadius: "4px",
            }}>
              View Properties
              <span>→</span>
            </Link>
            <a href="/#contact" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid rgba(0,212,255,0.4)",
              color: "#00D4FF",
              padding: "16px 40px",
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
              borderRadius: "4px",
              background: "rgba(0,212,255,0.05)",
            }}>
              Book Consultation
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "rgba(0,212,255,0.5)",
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}>
          <span>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #00D4FF, transparent)", animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ borderTop: "1px solid rgba(0,212,255,0.1)", borderBottom: "1px solid rgba(0,212,255,0.1)", background: "rgba(0,212,255,0.02)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }} className="stats-grid-mobile">
          {[
            { end: 15, suffix: "+", label: "Years Experience" },
            { end: 450, suffix: "Cr+", label: "Transactions" },
            { end: 500, suffix: "+", label: "Clients Served" },
            { end: 100, suffix: "%", label: "Title Verified" },
          ].map((stat, i) => (
            <div key={i} ref={addRef} className="reveal" style={{ padding: "60px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(0,212,255,0.08)" : "none" }}>
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              <div style={{ color: "rgba(240,240,240,0.4)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginTop: "12px", fontFamily: "monospace" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section style={{ padding: "120px 48px" }} className="section-mobile">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div ref={addRef} className="reveal" style={{ marginBottom: "64px" }}>
            <p style={{ color: "#00D4FF", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "16px" }}>
              Featured Listings
            </p>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-2px" }}>
              Available <span style={{ color: "#00D4FF" }}>Properties</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="properties-grid-mobile">
            {featuredProperties.map((property, i) => (
              <Link key={property.id} href={`/properties/${property.id}`} ref={addRef} className="reveal" style={{ textDecoration: "none" }}>
                <div style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(0,212,255,0.1)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,212,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                >
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img src={property.image} alt={property.title} style={{ width: "100%", height: "240px", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }} />
                    <div style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      padding: "6px 14px",
                      background: property.type === "Commercial" ? "#00D4FF" : "rgba(0,0,0,0.6)",
                      color: property.type === "Commercial" ? "#000" : "#00D4FF",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      borderRadius: "4px",
                      backdropFilter: "blur(10px)",
                    }}>
                      {property.type}
                    </div>
                  </div>
                  <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <p style={{ color: "rgba(240,240,240,0.4)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px", fontFamily: "monospace" }}>
                      {property.location}
                    </p>
                    <h3 style={{ color: "#F0F0F0", fontSize: "20px", fontWeight: 600, marginBottom: "12px", lineHeight: 1.3 }}>
                      {property.title}
                    </h3>
                    <p style={{ color: "rgba(240,240,240,0.5)", fontSize: "14px", marginBottom: "20px", lineHeight: 1.6, flex: 1 }}>
                      {property.highlight}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px", borderTop: "1px solid rgba(0,212,255,0.1)" }}>
                      <div>
                        <div style={{ color: "rgba(240,240,240,0.3)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Size</div>
                        <div style={{ color: "#F0F0F0", fontSize: "14px", fontFamily: "monospace" }}>{property.size}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ color: "rgba(240,240,240,0.3)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Price</div>
                        <div style={{ color: "#00D4FF", fontSize: "22px", fontWeight: 600, fontFamily: "monospace" }}>{property.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div ref={addRef} className="reveal" style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/properties" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid rgba(0,212,255,0.3)",
              color: "#00D4FF",
              padding: "14px 36px",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
              borderRadius: "4px",
              background: "rgba(0,212,255,0.05)",
            }}>
              View All Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "120px 48px", background: "rgba(0,212,255,0.02)", borderTop: "1px solid rgba(0,212,255,0.08)" }} className="section-mobile">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div ref={addRef} className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{ color: "#00D4FF", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "16px" }}>
              What We Offer
            </p>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-2px", marginBottom: "16px" }}>
              Advisory <span style={{ color: "#00D4FF" }}>Services</span>
            </h2>
            <p style={{ color: "rgba(240,240,240,0.5)", fontSize: "16px", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
              End-to-end real estate advisory with personal oversight on every transaction.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }} className="services-grid-mobile">
            {[
              { num: "01", title: "Residential Plots & Homes", desc: "Buying residential plots, flats, and built-up houses across Mohali, New Chandigarh, and Panchkula." },
              { num: "02", title: "Commercial Showroom Advisory", desc: "High-footfall commercial showroom plots on arterial roads in Mohali IT City, Aerocity, and JLPL corridors." },
              { num: "03", title: "To-Let & Rental Services", desc: "Helping property owners find verified tenants and tenants find the right space across Tricity." },
              { num: "04", title: "NRI Investment Advisory", desc: "Specialized advisory for NRIs with power of attorney support and remote transaction management." },
            ].map((service, i) => (
              <div key={i} ref={addRef} className="reveal" style={{
                padding: "40px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(0,212,255,0.1)",
                borderRadius: "12px",
                transition: "all 0.4s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                e.currentTarget.style.background = "rgba(0,212,255,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
              >
                <div style={{ color: "#00D4FF", fontSize: "14px", fontFamily: "monospace", letterSpacing: "2px", marginBottom: "16px", opacity: 0.6 }}>
                  {service.num}
                </div>
                <h3 style={{ color: "#F0F0F0", fontSize: "22px", fontWeight: 600, marginBottom: "12px", lineHeight: 1.3 }}>
                  {service.title}
                </h3>
                <p style={{ color: "rgba(240,240,240,0.5)", fontSize: "15px", lineHeight: 1.7 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "120px 48px" }} className="section-mobile">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="about-grid-mobile">
            <div ref={addRef} className="reveal">
              <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,212,255,0.15)" }}>
                <img src="/inder.jpeg" alt="Inder Thakral" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block", filter: "grayscale(20%) contrast(1.1)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px" }}>
                  <p style={{ color: "#00D4FF", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "8px" }}>Inder Thakral</p>
                  <p style={{ color: "rgba(240,240,240,0.6)", fontSize: "14px" }}>Principal Advisor · 15+ Years</p>
                </div>
              </div>
            </div>

            <div ref={addRef} className="reveal">
              <p style={{ color: "#00D4FF", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "20px" }}>
                The Principal Advisor
              </p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-2px", marginBottom: "24px" }}>
                Personal Service.
                <br />
                <span style={{ color: "#00D4FF" }}>Verified Results.</span>
              </h2>
              <p style={{ color: "rgba(240,240,240,0.6)", fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
                Inder Thakral is an independent real estate advisory serving the Chandigarh Tricity. Every transaction is personally overseen, every title is carefully verified.
              </p>
              <p style={{ color: "rgba(240,240,240,0.6)", fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
                The firm provides trusted guidance for buying, selling, leasing, and investing — with a simple promise: never show a property that would not be recommended to family.
              </p>
              <Link href="/about" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#00D4FF",
                color: "#000000",
                padding: "14px 36px",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 600,
                borderRadius: "4px",
                transition: "all 0.3s ease",
              }}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ padding: "120px 48px", background: "rgba(0,212,255,0.02)", borderTop: "1px solid rgba(0,212,255,0.08)", borderBottom: "1px solid rgba(0,212,255,0.08)" }} className="section-mobile">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div ref={addRef} className="reveal">
            <p style={{ color: "#00D4FF", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "32px" }}>
              Our Philosophy
            </p>
            <p style={{
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: 300,
              lineHeight: 1.5,
              color: "#F0F0F0",
              marginBottom: "32px",
              fontStyle: "italic",
            }}>
              "I will never show you a property I would not recommend to my own family. Your investment is our responsibility."
            </p>
            <p style={{ color: "#00D4FF", fontSize: "14px", letterSpacing: "2px", fontFamily: "monospace" }}>
              — Inder Thakral
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "120px 48px", position: "relative", overflow: "hidden" }} className="section-mobile">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
          <div ref={addRef} className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{ color: "#00D4FF", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "16px" }}>
              Get In Touch
            </p>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-2px", marginBottom: "16px" }}>
              Ready to <span style={{ color: "#00D4FF" }}>Invest?</span>
            </h2>
            <p style={{ color: "rgba(240,240,240,0.5)", fontSize: "16px", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}>
              Every engagement begins with a personal conversation. Share your requirements and we will get back to you within 24 hours.
            </p>
          </div>

          <div ref={addRef} className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="contact-grid-mobile">
            <div>
              {[
                { label: "Call Directly", value: "+91 98159 01234", href: "tel:+919815901234" },
                { label: "Email", value: "care@inderthakral.com", href: "mailto:care@inderthakral.com" },
                { label: "Office", value: "Mohali, Chandigarh Tricity\nPunjab, India", href: null },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: "32px" }}>
                  <p style={{ color: "#00D4FF", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "8px" }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} style={{ color: "#F0F0F0", fontSize: "18px", textDecoration: "none", fontWeight: 500, transition: "color 0.3s ease" }}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: "#F0F0F0", fontSize: "18px", fontWeight: 500, whiteSpace: "pre-line" }}>
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
              <a
                href="https://wa.me/919815901234?text=Hi%20Inder,%20I%20am%20interested%20in%20discussing%20a%20property%20in%20Tricity."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#25D366",
                  color: "#fff",
                  padding: "14px 28px",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontWeight: 600,
                  borderRadius: "4px",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input type="text" name="name" placeholder="Your Name" required style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0,212,255,0.15)",
                color: "#F0F0F0",
                padding: "16px 20px",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease",
                borderRadius: "8px",
                fontFamily: "system-ui, sans-serif",
              }} />
              <input type="email" name="email" placeholder="Email Address" required style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0,212,255,0.15)",
                color: "#F0F0F0",
                padding: "16px 20px",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease",
                borderRadius: "8px",
                fontFamily: "system-ui, sans-serif",
              }} />
              <input type="tel" name="phone" placeholder="Phone Number" style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0,212,255,0.15)",
                color: "#F0F0F0",
                padding: "16px 20px",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease",
                borderRadius: "8px",
                fontFamily: "system-ui, sans-serif",
              }} />
              <select name="interest" style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0,212,255,0.15)",
                color: "rgba(240,240,240,0.5)",
                padding: "16px 20px",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease",
                borderRadius: "8px",
                fontFamily: "system-ui, sans-serif",
              }}>
                <option value="">What are you looking for?</option>
                <option value="residential">Residential Plot / Home</option>
                <option value="commercial">Commercial Showroom</option>
                <option value="rental">To-Let / Rental</option>
                <option value="nri">NRI Investment</option>
              </select>
              <textarea name="message" placeholder="Tell us about your requirements..." style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0,212,255,0.15)",
                color: "#F0F0F0",
                padding: "16px 20px",
                fontSize: "15px",
                outline: "none",
                transition: "all 0.3s ease",
                borderRadius: "8px",
                minHeight: "120px",
                resize: "vertical",
                fontFamily: "system-ui, sans-serif",
              }} />
              <button type="submit" style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                background: "#00D4FF",
                color: "#000000",
                padding: "16px 48px",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                borderRadius: "4px",
                fontFamily: "system-ui, sans-serif",
              }}>
                Send Enquiry →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 48px", borderTop: "1px solid rgba(0,212,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <div style={{ color: "#00D4FF", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "monospace" }}>Inder Thakral Properties</div>
          <div style={{ color: "rgba(240,240,240,0.4)", fontSize: "12px", marginTop: "4px" }}>2026 · Independent Advisory · Mohali, Chandigarh Tricity</div>
        </div>
        <div style={{ color: "rgba(240,240,240,0.3)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "monospace" }}>
          Verified Title Deeds · By Appointment Only
        </div>
      </footer>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.5; transform: scaleY(0.5); }
        }
        @media (max-width: 768px) {
          .stats-grid-mobile { grid-template-columns: repeat(2, 1fr) !important; }
          .properties-grid-mobile { grid-template-columns: 1fr !important; }
          .services-grid-mobile { grid-template-columns: 1fr !important; }
          .about-grid-mobile { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-grid-mobile { grid-template-columns: 1fr !important; gap: 40px !important; }
          .section-mobile { padding-left: 24px !important; padding-right: 24px !important; }
        }
        @media (max-width: 480px) {
          .section-mobile { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </main>
  );
}