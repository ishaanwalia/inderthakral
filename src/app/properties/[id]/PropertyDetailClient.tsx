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
    <main style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden", width: "100%", color: "var(--fg)", fontFamily: "var(--font-sans)" }}>
      <Nav active="Properties" />

      {/* Back Link */}
      <div style={{ paddingTop: "120px", paddingLeft: "48px", paddingRight: "48px", paddingBottom: "16px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link href="/properties/" className="hover-line" style={{ 
            color: "rgba(var(--fg-rgb),0.4)", 
            fontSize: "11px", 
            letterSpacing: "2px", 
            textTransform: "uppercase", 
            textDecoration: "none",
            fontFamily: "var(--font-mono)",
            fontWeight: 500,
            transition: "color 0.3s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}>
            ← Back to Properties
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section style={{ padding: "16px 48px 56px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "48px" }} className="detail-grid-desktop">

            {/* Left Column - Images & Details */}
            <div>
              {/* Main Image */}
              <div style={{ 
                position: "relative", 
                borderRadius: "16px", 
                overflow: "hidden", 
                border: "1px solid rgba(var(--fg-rgb),0.06)",
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
                  color: "var(--accent)",
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                }}>
                  {activeImage + 1} / {property.gallery.length}
                </div>
              </div>

              {/* Thumbnail Gallery - div with role=button instead of nested button */}
              <div style={{ display: "flex", gap: "10px", marginBottom: "48px", overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: "8px" }}>
                {property.gallery.map((img, i) => (
                  <div
                    key={i}
                    role="button"
                    tabIndex={0}
                    aria-label={`View image ${i + 1}`}
                    onClick={() => setActiveImage(i)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveImage(i); }}
                    className={`gallery-thumb tap-glow ${activeImage === i ? 'active' : ''}`}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <img 
                      src={img} 
                      alt="" 
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
                    />
                  </div>
                ))}
              </div>

              {/* About Section */}
              <div style={{ borderTop: "1px solid rgba(var(--fg-rgb),0.04)", paddingTop: "40px" }}>
                <p className="section-label" style={{ marginBottom: "24px" }}>
                  <span className="accent-line" />
                  About This Property
                </p>
                <p style={{ color: "rgba(var(--fg-rgb),0.5)", fontSize: "15px", lineHeight: 1.9 }}>{property.description}</p>
              </div>

              {/* Features */}
              <div style={{ marginTop: "48px", borderTop: "1px solid rgba(var(--fg-rgb),0.04)", paddingTop: "40px" }}>
                <p className="section-label" style={{ marginBottom: "28px" }}>
                  <span className="accent-line" />
                  Key Features
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }} className="stats-grid-desktop">
                  {property.features.map((feature, i) => (
                    <div key={i} className="service-card tap-glow" style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "14px", 
                      padding: "16px 20px",
                      cursor: "default",
                    }}>
                      <span style={{ color: "var(--accent)", fontSize: "14px" }}>◈</span>
                      <span style={{ color: "rgba(var(--fg-rgb),0.7)", fontSize: "13px", fontWeight: 500 }}>{feature}</span>
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
                background: "rgba(var(--fg-rgb),0.02)", 
                border: "1px solid rgba(var(--fg-rgb),0.06)", 
                padding: "40px",
                borderRadius: "16px",
              }}>
                <div style={{
                  display: "inline-block",
                  border: "1px solid rgba(var(--accent-rgb),0.3)",
                  color: "var(--accent)",
                  padding: "6px 18px",
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  borderRadius: "4px",
                }}>
                  {property.type}
                </div>
                <h1 style={{ 
                  fontSize: "24px", 
                  fontWeight: 600, 
                  lineHeight: 1.3, 
                  marginBottom: "10px",
                  letterSpacing: "-0.5px",
                }}>
                  {property.title}
                </h1>
                <p style={{ color: "rgba(var(--fg-rgb),0.4)", fontSize: "13px", marginBottom: "32px" }}>{property.location}</p>

                <div style={{ borderTop: "1px solid rgba(var(--fg-rgb),0.05)", borderBottom: "1px solid rgba(var(--fg-rgb),0.05)", padding: "24px 0", marginBottom: "28px" }}>
                  <div style={{ color: "rgba(var(--fg-rgb),0.3)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px", fontFamily: "var(--font-mono)", fontWeight: 500 }}>Asking Price</div>
                  <div style={{ color: "var(--accent)", fontSize: "36px", fontWeight: 700, fontFamily: "var(--font-mono)", letterSpacing: "-1px" }}>{property.price}</div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "32px" }}>
                  {[
                    { label: "Size", value: property.size },
                    { label: "Facing", value: property.facing },
                    { label: "Status", value: property.status },
                    { label: "Type", value: property.type },
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{ color: "rgba(var(--fg-rgb),0.3)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px", fontFamily: "var(--font-mono)", fontWeight: 500 }}>{item.label}</div>
                      <div style={{ color: "rgba(var(--fg-rgb),0.8)", fontSize: "14px", fontWeight: 500 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-btn magnetic-btn tap-glow" style={{ 
                  justifyContent: "center", 
                  marginBottom: "12px", 
                  width: "100%",
                  background: "#25D366",
                  color: "#fff",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Enquiry
                </a>

                <a href={"mailto:care@inderthakral.com?subject=Enquiry: " + property.title} className="outline-btn tap-glow" style={{ 
                  justifyContent: "center", 
                  marginBottom: "12px", 
                  width: "100%",
                }}>
                  Send Email Enquiry
                </a>

                <a href="tel:+919815901234" className="outline-btn tap-glow" style={{ 
                  justifyContent: "center", 
                  marginBottom: "24px", 
                  width: "100%",
                  borderColor: "rgba(var(--accent-rgb),0.2)",
                  color: "var(--accent)",
                }}>
                  Call Inder Directly
                </a>

                <div style={{ 
                  padding: "20px", 
                  background: "rgba(var(--accent-rgb),0.03)", 
                  border: "1px solid rgba(var(--accent-rgb),0.08)",
                  borderRadius: "8px",
                }}>
                  <p style={{ color: "rgba(var(--fg-rgb),0.4)", fontSize: "12px", lineHeight: 1.7 }}>
                    Every property is personally verified by <span style={{ color: "var(--accent)", fontWeight: 600 }}>Inder Thakral</span>. 100% clear title deeds guaranteed.
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