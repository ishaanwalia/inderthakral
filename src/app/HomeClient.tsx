"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CineScroll from "@/components/CineScroll";
import Carousel from "@/components/Carousel";
import { properties } from "@/data/properties";
import { insights } from "@/data/insights";
import { site } from "@/data/site";
import { cineSequences } from "@/data/cineSequences";

// ===== MOBILE COUNTER (auto-starts on mount) =====
function MobileCounter({ end, suffix = "", duration = 2500 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <div className="mobile-counter" style={{ 
      color: "var(--accent)", 
      fontSize: "clamp(40px, 5vw, 72px)", 
      fontWeight: 700, 
      fontFamily: "var(--font-mono)", 
      letterSpacing: "-2px",
      lineHeight: 1,
    }}>
      {count}{suffix}
    </div>
  );
}

// ===== DESKTOP COUNTER (IntersectionObserver) =====
function DesktopCounter({ end, suffix = "", duration = 2500 }: { end: number; suffix?: string; duration?: number }) {
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
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} style={{ 
      color: "var(--accent)", 
      fontSize: "clamp(40px, 5vw, 72px)", 
      fontWeight: 700, 
      fontFamily: "var(--font-mono)", 
      letterSpacing: "-2px",
      lineHeight: 1,
    }}>
      {count}{suffix}
    </div>
  );
}

// ===== KINETIC SCROLL TEXT (CSS animation, no RAF) =====
function KineticScrollText({ text }: { text: string }) {
  return (
    <div style={{ overflow: "hidden", width: "100%", whiteSpace: "nowrap" }}>
      <div className="kinetic-scroll-track">
        <span style={{ 
          display: "inline-flex", 
          gap: "80px",
          paddingRight: "80px",
          fontSize: "clamp(48px, 8vw, 120px)",
          fontWeight: 700,
          letterSpacing: "-3px",
          color: "rgba(var(--fg-rgb), 0.03)",
          textTransform: "uppercase",
          fontFamily: "var(--font-sans)",
        }}>
          {text}
        </span>
        <span style={{ 
          display: "inline-flex", 
          gap: "80px",
          paddingRight: "80px",
          fontSize: "clamp(48px, 8vw, 120px)",
          fontWeight: 700,
          letterSpacing: "-3px",
          color: "rgba(var(--fg-rgb), 0.03)",
          textTransform: "uppercase",
          fontFamily: "var(--font-sans)",
        }}>
          {text}
        </span>
      </div>
    </div>
  );
}

// ===== FLOATING PARTICLES (50 on all devices) =====
// Positions must be deterministic (not Math.random) so the server-rendered
// HTML matches the client on hydration.
function FloatingParticles() {
  const count = 50;
  const rand = (i: number, salt: number) => {
    const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
    return x - Math.floor(x);
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: i % 3 === 0 ? "3px" : "2px",
          height: i % 3 === 0 ? "3px" : "2px",
          // Alphas live in CSS vars so the day theme can boost them — gold
          // particles need far more opacity on ivory than cyan does on dark.
          background: i % 5 === 0
            ? "rgba(var(--accent-rgb), var(--particle-a-bright))"
            : "rgba(var(--accent-rgb), var(--particle-a))",
          borderRadius: "50%",
          top: `${(rand(i, 1) * 100).toFixed(4)}%`,
          left: `${(rand(i, 2) * 100).toFixed(4)}%`,
          animation: `float ${(8 + rand(i, 3) * 6).toFixed(3)}s ease-in-out infinite`,
          animationDelay: `${(rand(i, 4) * 5).toFixed(3)}s`,
          boxShadow: i % 5 === 0
            ? "0 0 15px rgba(var(--accent-rgb), var(--particle-glow-bright))"
            : "0 0 10px rgba(var(--accent-rgb), var(--particle-glow))",
        }} />
      ))}
    </>
  );
}

// ===== DUAL CURSOR GLOW (800px + 400px rings) =====
// Writes transforms straight to the DOM on mousemove — no React state, no
// re-render cascade — while keeping the exact same look and easing.
function CursorGlow() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (outerRef.current) outerRef.current.style.transform = `translate(${e.clientX - 400}px, ${e.clientY - 400}px)`;
      if (innerRef.current) innerRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div ref={outerRef} className="cursor-glow-outer" style={{ transform: "translate(-400px, -400px)" }} />
      <div ref={innerRef} className="cursor-glow-inner" style={{ transform: "translate(-200px, -200px)" }} />
    </>
  );
}

export default function HomePage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
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

  // Enquiries are emailed to care@inderthakral.com via FormSubmit; if delivery
  // fails for any reason, the enquiry falls back to a prefilled WhatsApp chat.
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleEnquirySubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const interestLabels: Record<string, string> = {
      residential: "Residential Plot / Home",
      commercial: "Commercial Showroom",
      rental: "To-Let / Rental",
      nri: "NRI Investment",
    };
    const interest = interestLabels[String(data.get("interest"))] || "Not specified";

    setFormStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/care@inderthakral.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: (() => {
          data.set("interest", interest);
          data.append("_subject", "New website enquiry — inderthakral.com");
          data.append("_template", "table");
          data.append("_captcha", "false");
          return data;
        })(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setFormStatus("sent");
      form.reset();
    } catch {
      setFormStatus("error");
      const lines = [
        "Hi Inder, I would like to make an enquiry.",
        `Name: ${data.get("name") || "-"}`,
        `Email: ${data.get("email") || "-"}`,
        `Phone: ${data.get("phone") || "-"}`,
        `Looking for: ${interest}`,
        `Requirements: ${data.get("message") || "-"}`,
      ];
      window.open(`https://wa.me/919815901234?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    }
  }, []);

  const featuredProperties = properties.slice(0, 3);
  const CounterComponent = isMobile ? MobileCounter : DesktopCounter;
  const scrollText = "Verified Land • Trusted Advisory • Personal Service • Mohali • Chandigarh • Panchkula • Premium Properties • Verified Land • Trusted Advisory • Personal Service • Mohali • Chandigarh • Panchkula • Premium Properties";

  return (
    // overflow-x must be `clip`, not `hidden`: a hidden ancestor disables
    // position:sticky, which the cine-scroll sections depend on.
    <main style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "clip", width: "100%", color: "var(--fg)", fontFamily: "var(--font-sans)" }}>

      {/* Dual Cursor Glow - 10x larger */}
      <CursorGlow />

      <Nav />

      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: "80px" }}>
        {/* Subtle grid background */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(var(--accent-rgb),0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--accent-rgb),0.015) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 0%, transparent 70%)",
        }} />

        {/* Central glow orb */}
        <div className="hero-orb" style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--accent-rgb),0.12) 0%, rgba(0,100,200,0.03) 40%, transparent 70%)",
          filter: "blur(60px)",
          animation: "pulseGlow 6s ease-in-out infinite",
        }} />

        {/* Floating particles - 150 on mobile, 6 on desktop */}
        <FloatingParticles />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "1000px", padding: "0 24px", width: "100%" }}>
          {/* Tags */}
          <div style={{ display: "inline-flex", gap: "16px", marginBottom: "48px", flexWrap: "wrap", justifyContent: "center" }}>
            {["Verified", "Trusted", "Personal"].map((tag, i) => (
              <span key={i} className="tag-pill tap-glow">
                {tag}
              </span>
            ))}
          </div>

          {/* Main headline - Bolder weights */}
          <h1 style={{
            fontSize: "clamp(42px, 9vw, 100px)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "32px",
            letterSpacing: "-4px",
            color: "var(--fg)",
          }}>
            <span style={{ display: "block" }}>Verified Land.</span>
            <span className="gradient-text" style={{ display: "block" }}>Trusted Advisor.</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            color: "rgba(var(--fg-rgb),0.4)",
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: 1.8,
            maxWidth: "560px",
            margin: "0 auto 56px",
            fontWeight: 400,
            letterSpacing: "0.5px",
          }}>
            Personal real estate advisory for residential plots, commercial showrooms, and NRI investments across Mohali, New Chandigarh, and Panchkula.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/properties/" className="cta-btn magnetic-btn tap-glow">
              View Properties
              <span style={{ fontSize: "16px" }}>→</span>
            </Link>
            <Link href="/#contact" className="outline-btn magnetic-btn tap-glow">
              Book Consultation
            </Link>
          </div>
        </div>

      </section>

      {/* ===== KINETIC SCROLL TEXT (CSS animation, no RAF) ===== */}
      <section style={{ 
        padding: "48px 0", 
        borderTop: "1px solid rgba(var(--fg-rgb),0.03)", 
        borderBottom: "1px solid rgba(var(--fg-rgb),0.03)",
        background: "linear-gradient(180deg, transparent 0%, rgba(var(--accent-rgb),0.01) 50%, transparent 100%)",
        overflow: "hidden",
      }}>
        <KineticScrollText text={scrollText} />
      </section>

      {/* ===== CINE SCROLL: CHANDIGARH — THE CITY BEAUTIFUL ===== */}
      <CineScroll sequence={cineSequences.cityBeautiful} />

      {/* ===== STATS BAR ===== */}
      <section style={{ 
        borderTop: "1px solid rgba(var(--fg-rgb),0.04)", 
        borderBottom: "1px solid rgba(var(--fg-rgb),0.04)", 
        background: "rgba(var(--accent-rgb),0.015)",
        position: "relative",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px" }} className="stats-grid-desktop">
          {[
            { end: site.stats.years, suffix: "+", label: "Years Experience" },
            { end: site.stats.transactionsCr, suffix: "Cr+", label: "Transactions" },
            { end: site.stats.clients, suffix: "+", label: "Clients Served" },
            { end: site.stats.verifiedPct, suffix: "%", label: "Title Verified" },
          ].map((stat, i) => (
            <div key={i} ref={addRef} className="reveal stat-card" style={{ 
              borderRight: i < 3 ? "1px solid rgba(var(--fg-rgb),0.04)" : "none",
            }}>
              <CounterComponent end={stat.end} suffix={stat.suffix} />
              <div style={{ 
                color: "rgba(var(--fg-rgb),0.3)", 
                fontSize: "10px", 
                letterSpacing: "4px", 
                textTransform: "uppercase", 
                marginTop: "16px", 
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
              }}>
                {stat.label}
              </div>
              {/* Subtle accent line */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "40px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(var(--accent-rgb),0.3), transparent)",
              }} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED PROPERTIES ===== */}
      <section style={{ padding: "88px 48px", position: "relative" }} className="section-pad">
        <div aria-hidden className="glass-ambient" style={{ top: "-5%", left: "-8%" }} />
        <div aria-hidden className="glass-ambient glass-ambient-2" style={{ bottom: "-10%", right: "-6%" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div ref={addRef} className="reveal" style={{ marginBottom: "56px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "20px" }}>
                <span className="accent-line" />
                Featured Listings
              </p>
              <h2 style={{ 
                fontSize: "clamp(32px, 5vw, 56px)", 
                fontWeight: 700, 
                lineHeight: 1.1, 
                letterSpacing: "-3px",
                color: "var(--fg)",
              }}>
                Available <span style={{ color: "var(--accent)", fontWeight: 700 }}>Properties</span>
              </h2>
            </div>
            <Link href="/properties/" className="outline-btn tap-glow" style={{ padding: "14px 32px", fontSize: "11px" }}>
              View All →
            </Link>
          </div>

          <Carousel label="featured properties">
            {featuredProperties.map((property) => (
              <Link key={property.id} href={`/properties/${property.id}/`} ref={addRef} className="reveal" style={{ textDecoration: "none" }}>
                <div className="property-card card-3d tap-glow">
                  {/* Image container with overlay */}
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "1/1" }}>
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="property-card-img"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                    />
                  </div>
                  <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                      <p style={{
                        color: "rgba(var(--fg-rgb),0.3)",
                        fontSize: "10px",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 500,
                        margin: 0,
                      }}>
                        {property.location}
                      </p>
                      <span style={{
                        flexShrink: 0,
                        padding: "6px 14px",
                        background: property.type === "Commercial" ? "var(--accent)" : "rgba(var(--fg-rgb),0.06)",
                        color: property.type === "Commercial" ? "var(--on-accent)" : "rgba(var(--fg-rgb),0.6)",
                        fontSize: "9px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        borderRadius: "4px",
                        fontFamily: "var(--font-mono)",
                      }}>
                        {property.type}
                      </span>
                    </div>
                    <h3 style={{ 
                      color: "var(--fg)", 
                      fontSize: "18px", 
                      fontWeight: 600, 
                      marginBottom: "12px", 
                      lineHeight: 1.3,
                      letterSpacing: "-0.5px",
                    }}>
                      {property.title}
                    </h3>
                    <p style={{ 
                      color: "rgba(var(--fg-rgb),0.4)", 
                      fontSize: "14px", 
                      marginBottom: "24px", 
                      lineHeight: 1.6, 
                      flex: 1,
                    }}>
                      {property.highlight}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px", borderTop: "1px solid rgba(var(--fg-rgb),0.05)" }}>
                      <div>
                        <div style={{ color: "rgba(var(--fg-rgb),0.2)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px", fontFamily: "var(--font-mono)", fontWeight: 500 }}>Size</div>
                        <div style={{ color: "rgba(var(--fg-rgb),0.7)", fontSize: "13px", fontFamily: "var(--font-mono)", fontWeight: 500 }}>{property.size}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ color: "rgba(var(--fg-rgb),0.2)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px", fontFamily: "var(--font-mono)", fontWeight: 500 }}>Status</div>
                        <div style={{ color: "var(--accent)", fontSize: "13px", fontFamily: "var(--font-mono)", fontWeight: 600 }}>{property.status}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section style={{ 
        padding: "88px 48px", 
        background: "rgba(var(--accent-rgb),0.015)", 
        borderTop: "1px solid rgba(var(--fg-rgb),0.03)",
        borderBottom: "1px solid rgba(var(--fg-rgb),0.03)",
        position: "relative",
      }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div ref={addRef} className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            <p className="section-label" style={{ marginBottom: "20px", justifyContent: "center" }}>
              <span className="accent-line" />
              What We Offer
              <span className="accent-line" />
            </p>
            <h2 style={{ 
              fontSize: "clamp(32px, 5vw, 56px)", 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: "-3px", 
              marginBottom: "20px",
              color: "var(--fg)",
            }}>
              Advisory <span style={{ color: "var(--accent)", fontWeight: 700 }}>Services</span>
            </h2>
            <p style={{ 
              color: "rgba(var(--fg-rgb),0.4)", 
              fontSize: "16px", 
              lineHeight: 1.8, 
              maxWidth: "560px", 
              margin: "0 auto",
            }}>
              End-to-end real estate advisory with personal oversight on every transaction.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }} className="services-grid-desktop">
            {[
              { num: "01", title: "Residential Plots & Homes", desc: "Buying residential plots, flats, and built-up houses across Mohali, New Chandigarh, and Panchkula." },
              { num: "02", title: "Commercial Showroom Advisory", desc: "High-footfall commercial showroom plots on arterial roads in Mohali IT City, Aerocity, and JLPL corridors." },
              { num: "03", title: "To-Let & Rental Services", desc: "Helping property owners find verified tenants and tenants find the right space across Tricity." },
              { num: "04", title: "NRI Investment Advisory", desc: "Specialized advisory for NRIs with power of attorney support and remote transaction management." },
            ].map((service, i) => (
              <div key={i} ref={addRef} className="reveal service-card card-3d tap-glow">
                {/* Subtle corner accent */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, transparent 50%, rgba(var(--accent-rgb),0.05) 50%)",
                }} />
                <div style={{ color: "rgba(var(--accent-rgb),0.3)", fontSize: "13px", fontFamily: "var(--font-mono)", letterSpacing: "2px", marginBottom: "20px", fontWeight: 500 }}>
                  {service.num}
                </div>
                <h3 style={{ 
                  color: "var(--fg)", 
                  fontSize: "22px", 
                  fontWeight: 600, 
                  marginBottom: "14px", 
                  lineHeight: 1.3,
                  letterSpacing: "-0.5px",
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  color: "rgba(var(--fg-rgb),0.4)", 
                  fontSize: "15px", 
                  lineHeight: 1.7,
                }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section style={{ padding: "88px 48px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }} className="about-grid-desktop">
            <div ref={addRef} className="reveal">
              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(var(--fg-rgb),0.06)" }}>
                <img src="/inder.jpeg" alt="Inder Thakral" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block", filter: "grayscale(30%) contrast(1.05)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: "40px", left: "40px", right: "40px" }}>
                  <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "var(--font-mono)", marginBottom: "8px", fontWeight: 500 }}>Inder Thakral</p>
                  <p style={{ color: "rgba(var(--fg-rgb),0.5)", fontSize: "14px" }}>Principal Advisor · {site.stats.years}+ Years</p>
                </div>
                {/* Accent corner */}
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "40px",
                  height: "40px",
                  borderTop: "2px solid rgba(var(--accent-rgb),0.3)",
                  borderRight: "2px solid rgba(var(--accent-rgb),0.3)",
                }} />
              </div>
            </div>

            <div ref={addRef} className="reveal">
              <p className="section-label" style={{ marginBottom: "24px" }}>
                <span className="accent-line" />
                The Principal Advisor
              </p>
              <h2 style={{ 
                fontSize: "clamp(28px, 4vw, 48px)", 
                fontWeight: 700, 
                lineHeight: 1.1, 
                letterSpacing: "-2px", 
                marginBottom: "32px",
                color: "var(--fg)",
              }}>
                Personal Service.
                <br />
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>Verified Results.</span>
              </h2>
              <p style={{ color: "rgba(var(--fg-rgb),0.5)", fontSize: "16px", lineHeight: 1.9, marginBottom: "24px" }}>
                Inder Thakral is an independent real estate advisory serving the Chandigarh Tricity. Every transaction is personally overseen, every title is carefully verified.
              </p>
              <p style={{ color: "rgba(var(--fg-rgb),0.5)", fontSize: "16px", lineHeight: 1.9, marginBottom: "40px" }}>
                The firm provides trusted guidance for buying, selling, leasing, and investing — with a simple promise: never show a property that would not be recommended to family.
              </p>
              <Link href="/about/" className="cta-btn magnetic-btn tap-glow">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section style={{ 
        padding: "88px 48px", 
        background: "rgba(var(--accent-rgb),0.015)", 
        borderTop: "1px solid rgba(var(--fg-rgb),0.03)", 
        borderBottom: "1px solid rgba(var(--fg-rgb),0.03)",
        position: "relative",
      }} className="section-pad">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div ref={addRef} className="reveal">
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
              letterSpacing: "-0.5px",
            }}>
              “I will never show you a property I would not recommend to my own family. Your investment is our responsibility.”
            </p>
            <p style={{ color: "var(--accent)", fontSize: "13px", letterSpacing: "3px", fontFamily: "var(--font-mono)", fontWeight: 500 }}>
              — Inder Thakral
            </p>
          </div>
        </div>
      </section>

      {/* ===== CINE SCROLL: SUKHNA LAKE TIMELAPSE (day/night variants) ===== */}
      <CineScroll sequence={cineSequences.sukhnaLake} />

      {/* ===== MARKET NOTES ===== */}
      <section style={{ padding: "88px 48px", position: "relative" }} className="section-pad">
        <div aria-hidden className="glass-ambient glass-ambient-2" style={{ top: "-8%", left: "-6%" }} />
        <div aria-hidden className="glass-ambient" style={{ bottom: "-12%", right: "-8%" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div ref={addRef} className="reveal" style={{ marginBottom: "48px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "20px" }}>
                <span className="accent-line" />
                Tricity Market Notes
              </p>
              <h2 style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-3px",
                color: "var(--fg)",
              }}>
                Market <span style={{ color: "var(--accent)", fontWeight: 700 }}>Insights</span>
              </h2>
            </div>
            <Link href="/insights/" className="outline-btn tap-glow" style={{ padding: "14px 32px", fontSize: "11px" }}>
              All Notes →
            </Link>
          </div>

          <Carousel label="market insights">
            {insights.slice(0, 3).map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}/`} ref={addRef} className="reveal" style={{ textDecoration: "none" }}>
                <article className="service-card card-3d tap-glow" style={{ height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
                    <span style={{
                      color: "var(--accent)",
                      fontSize: "9px",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                      border: "1px solid rgba(var(--accent-rgb),0.25)",
                      padding: "5px 12px",
                      borderRadius: "2px",
                    }}>
                      {article.tag}
                    </span>
                    <span style={{ color: "rgba(var(--fg-rgb),0.25)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>
                      {article.displayDate}
                    </span>
                  </div>
                  <h3 style={{
                    color: "var(--fg)",
                    fontSize: "19px",
                    fontWeight: 600,
                    lineHeight: 1.35,
                    letterSpacing: "-0.5px",
                    marginBottom: "14px",
                  }}>
                    {article.title}
                  </h3>
                  <p style={{ color: "rgba(var(--fg-rgb),0.4)", fontSize: "14px", lineHeight: 1.7, flex: 1, marginBottom: "24px" }}>
                    {article.dek.length > 140 ? article.dek.slice(0, 140).trimEnd() + "…" : article.dek}
                  </p>
                  <span style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 600 }}>
                    Read Note →
                  </span>
                </article>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" style={{ padding: "88px 48px", position: "relative", overflow: "hidden" }} className="section-pad">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(var(--accent-rgb),0.06) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
          <div ref={addRef} className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            <p className="section-label" style={{ marginBottom: "20px", justifyContent: "center" }}>
              <span className="accent-line" />
              Get In Touch
              <span className="accent-line" />
            </p>
            <h2 style={{ 
              fontSize: "clamp(32px, 5vw, 56px)", 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: "-3px", 
              marginBottom: "20px",
              color: "var(--fg)",
            }}>
              Ready to <span style={{ color: "var(--accent)", fontWeight: 700 }}>Invest?</span>
            </h2>
            <p style={{ 
              color: "rgba(var(--fg-rgb),0.4)", 
              fontSize: "16px", 
              lineHeight: 1.8, 
              maxWidth: "500px", 
              margin: "0 auto",
            }}>
              Every engagement begins with a personal conversation. Share your requirements and we will get back to you within 24 hours.
            </p>
          </div>

          <div ref={addRef} className="reveal contact-grid-desktop" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div>
              {[
                { label: "Call Directly", value: site.phoneDisplay, href: `tel:${site.phoneE164}` },
                { label: "Email", value: site.email, href: `mailto:${site.email}` },
                { label: "Office", value: site.address.lines.join(",\n"), href: site.address.mapsUrl },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: "40px" }}>
                  <p style={{ 
                    color: "var(--accent)", 
                    fontSize: "10px", 
                    letterSpacing: "4px", 
                    textTransform: "uppercase", 
                    fontFamily: "var(--font-mono)", 
                    marginBottom: "10px",
                    fontWeight: 500,
                  }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover-line"
                      {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      style={{
                      color: "var(--fg)",
                      fontSize: "18px",
                      textDecoration: "none",
                      fontWeight: 500,
                      transition: "color 0.3s ease",
                      letterSpacing: "0.5px",
                      whiteSpace: "pre-line",
                      display: "inline-block",
                    }}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: "var(--fg)", fontSize: "18px", fontWeight: 500, whiteSpace: "pre-line", letterSpacing: "0.5px" }}>
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
              <a
                href="https://wa.me/919815901234?text=Hi%20Inder,%20I%20am%20interested%20in%20discussing%20a%20property%20in%20Tricity."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn magnetic-btn tap-glow"
                style={{ background: "#25D366", color: "#fff" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <form onSubmit={handleEnquirySubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { type: "text", name: "name", placeholder: "Your Name", required: true },
                { type: "email", name: "email", placeholder: "Email Address", required: true },
                { type: "tel", name: "phone", placeholder: "Phone Number", required: false },
              ].map((field) => (
                <input key={field.name} type={field.type} name={field.name} placeholder={field.placeholder} required={field.required} className="form-input tap-glow" />
              ))}
              <select name="interest" className="form-input tap-glow">
                <option value="">What are you looking for?</option>
                <option value="residential">Residential Plot / Home</option>
                <option value="commercial">Commercial Showroom</option>
                <option value="rental">To-Let / Rental</option>
                <option value="nri">NRI Investment</option>
              </select>
              <textarea name="message" placeholder="Tell us about your requirements..." className="form-input tap-glow" style={{ minHeight: "140px", resize: "vertical" }} />
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="cta-btn magnetic-btn tap-glow"
                style={{ marginTop: "8px", justifyContent: "center", opacity: formStatus === "sending" ? 0.6 : 1 }}
              >
                {formStatus === "sending" ? "Sending…" : "Send Enquiry →"}
              </button>
              {formStatus === "sent" ? (
                <p style={{ color: "var(--accent)", fontSize: "13px", lineHeight: 1.6, textAlign: "center", fontWeight: 500 }}>
                  Enquiry sent — Inder will get back to you within 24 hours.
                </p>
              ) : formStatus === "error" ? (
                <p style={{ color: "rgba(var(--fg-rgb),0.4)", fontSize: "12px", lineHeight: 1.6, textAlign: "center" }}>
                  Email delivery hit a snag, so we opened your enquiry in WhatsApp instead.
                </p>
              ) : (
                <p style={{ color: "rgba(var(--fg-rgb),0.3)", fontSize: "12px", lineHeight: 1.6, textAlign: "center" }}>
                  Delivered directly to care@inderthakral.com — replies within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}