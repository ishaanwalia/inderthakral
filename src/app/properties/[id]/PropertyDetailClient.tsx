"use client";

import Link from "next/link";
import { useState } from "react";
import Nav from "@/components/Nav";

interface Property {
  id: string;
  title: string;
  type: string;
  size: string;
  price: string;
  priceValue: number;
  location: string;
  facing: string;
  status: string;
  description: string;
  features: string[];
  gallery: string[];
  image: string;
  highlight: string;
}

export default function PropertyDetailClient({ property }: { property: Property }) {
  const [activeImage, setActiveImage] = useState(0);

  const whatsappMessage = encodeURIComponent("Hi Inder, I am interested in: " + property.title + " (" + property.size + " at " + property.price + "). Please share details.");
  const whatsappLink = "https://wa.me/919815901234?text=" + whatsappMessage;

  return (
    <main style={{ background: "#000000", minHeight: "100vh", overflowX: "hidden", width: "100%", color: "#FFFFFF", fontFamily: "var(--font-sans)" }}>
      <Nav active="Properties" />

      {/* Back Link */}
      <div style={{ paddingTop: "120px", paddingLeft: "48px", paddingRight: "48px", paddingBottom: "16px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link href="/properties/" style={{ 
            color: "rgba(255,255,255,0.4)", 
            fontSize: "11px", 
            letterSpacing: "2px", 
            textTransform: "uppercase", 
            textDecoration: "none",
            fontFamily: "var(--font-mono)",
            transition: "color 0.3s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#00D4FF"}
          onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
          >
            ← Back to Properties
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section style={{ padding: "16px 48px 80px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "48px" }} className="detail-grid-desktop">

            {/* Left Column - Images & Details */}
            <div>
              {/* Main Image */}
              <div style={{ 
                position: "relative", 
                borderRadius: "16px", 
                overflow: "hidden", 
                border: "1px solid rgba(255,255,255,0.06)",
                marginBottom: "16px",
              }}>
                <img 
                  src={property.gallery[activeImage]} 
                  alt={property.title} 
                  style={{ width: "100%", height: "500px", objectFit: "cover", display: "block" }} 
                />
                <div style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                  padding: "8px 16px",
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "4px",
                  color: "#00D4FF",
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-mono)",
                }}>
                  {activeImage + 1} / {property.gallery.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div style={{ display: "flex", gap: "10px", marginBottom: "48px", overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: "8px" }}>
                {property.gallery.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    style={{
                      width: "100px",
                      height: "70px",
                      objectFit: "cover",
                      cursor: "pointer",
                      flexShrink: 0,
                      border: activeImage === i ? "2px solid #00D4FF" : "2px solid rgba(255,255,255,0.06)",
                      opacity: activeImage === i ? 1 : 0.5,
                      transition: "all 0.4s ease",
                      display: "block",
                      padding: 0,
                      background: "none",
                      overflow: "hidden",
                      borderRadius: "8px",
                    }}
                  >
                    <img 
                      src={img} 
                      alt="" 
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
                    />
                  </button>
                ))}
              </div>

              {/* About Section */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "40px" }}>
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
                  About This Property
                </p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.9 }}>{property.description}</p>
              </div>

              {/* Features */}
              <div style={{ marginTop: "48px", borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "40px" }}>
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
                  Key Features
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }} className="stats-grid-desktop">
                  {property.features.map((feature, i) => (
                    <div key={i} style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "14px", 
                      padding: "16px 20px", 
                      background: "rgba(255,255,255,0.02)", 
                      border: "1px solid rgba(255,255,255,0.04)",
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
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
                      <span style={{ color: "#00D4FF", fontSize: "14px" }}>◈</span>
                      <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div>
              <div style={{ 
                position: "sticky", 
                top: "100px", 
                background: "rgba(255,255,255,0.02)", 
                border: "1px solid rgba(255,255,255,0.06)", 
                padding: "40px",
                borderRadius: "16px",
              }}>
                <div style={{
                  display: "inline-block",
                  border: "1px solid rgba(0,212,255,0.3)",
                  color: "#00D4FF",
                  padding: "6px 18px",
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                  fontFamily: "var(--font-mono)",
                  borderRadius: "4px",
                }}>
                  {property.type}
                </div>
                <h1 style={{ 
                  fontSize: "24px", 
                  fontWeight: 500, 
                  lineHeight: 1.3, 
                  marginBottom: "10px",
                  letterSpacing: "-0.5px",
                }}>
                  {property.title}
                </h1>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", marginBottom: "32px" }}>{property.location}</p>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "24px 0", marginBottom: "28px" }}>
                  <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px", fontFamily: "var(--font-mono)" }}>Asking Price</div>
                  <div style={{ color: "#00D4FF", fontSize: "36px", fontWeight: 300, fontFamily: "var(--font-mono)", letterSpacing: "-1px" }}>{property.price}</div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "32px" }}>
                  {[
                    { label: "Size", value: property.size },
                    { label: "Facing", value: property.facing },
                    { label: "Status", value: property.status },
                    { label: "Type", value: property.type },
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>{item.label}</div>
                      <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 400 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "12px", 
                  background: "#25D366", 
                  color: "#fff", 
                  padding: "18px", 
                  fontSize: "11px", 
                  letterSpacing: "3px", 
                  textTransform: "uppercase", 
                  textDecoration: "none", 
                  fontWeight: 600, 
                  marginBottom: "12px", 
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  borderRadius: "8px",
                  fontFamily: "var(--font-mono)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(37, 211, 102, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Enquiry
                </a>

                <a href={"mailto:care@inderthakral.com?subject=Enquiry: " + property.title} style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  border: "1px solid rgba(255,255,255,0.1)", 
                  color: "rgba(255,255,255,0.6)", 
                  padding: "18px", 
                  fontSize: "11px", 
                  letterSpacing: "3px", 
                  textTransform: "uppercase", 
                  textDecoration: "none", 
                  marginBottom: "12px", 
                  transition: "all 0.4s ease",
                  borderRadius: "8px",
                  fontFamily: "var(--font-mono)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                  e.currentTarget.style.color = "#00D4FF";
                  e.currentTarget.style.background = "rgba(0,212,255,0.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  e.currentTarget.style.background = "transparent";
                }}
                >
                  Send Email Enquiry
                </a>

                <a href="tel:+919815901234" style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  border: "1px solid rgba(0,212,255,0.2)", 
                  color: "#00D4FF", 
                  padding: "18px", 
                  fontSize: "11px", 
                  letterSpacing: "3px", 
                  textTransform: "uppercase", 
                  textDecoration: "none", 
                  marginBottom: "24px", 
                  transition: "all 0.4s ease",
                  borderRadius: "8px",
                  fontFamily: "var(--font-mono)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
                  e.currentTarget.style.background = "rgba(0,212,255,0.05)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(0,212,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.boxShadow = "none";
                }}
                >
                  Call Inder Directly
                </a>

                <div style={{ 
                  padding: "20px", 
                  background: "rgba(0,212,255,0.03)", 
                  border: "1px solid rgba(0,212,255,0.08)",
                  borderRadius: "8px",
                }}>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", lineHeight: 1.7 }}>
                    Every property is personally verified by <span style={{ color: "#00D4FF" }}>Inder Thakral</span>. 100% clear title deeds guaranteed.
                  </p>
                </div>
              </div>
            </div>

          </div>
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