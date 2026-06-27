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
  location: string;
  facing: string;
  status: string;
  description: string;
  features: string[];
  gallery: string[];
}

export default function PropertyDetailClient({ property }: { property: Property }) {
  const [activeImage, setActiveImage] = useState(0);

  const whatsappMessage = encodeURIComponent("Hi Inder, I am interested in: " + property.title + " (" + property.size + " at " + property.price + "). Please share details.");
  const whatsappLink = "https://wa.me/919815901234?text=" + whatsappMessage;

  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh", overflowX: "hidden", width: "100%" }}>
      <Nav active="Properties" />

      <div style={{ paddingTop: "100px", paddingLeft: "48px", paddingRight: "48px", paddingBottom: "16px" }} className="section-mobile">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link href="/properties" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>← Back to Properties</Link>
        </div>
      </div>

      <section style={{ padding: "16px 48px 60px" }} className="section-mobile">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="detail-grid">

            <div>
              <img 
                src={property.gallery[activeImage]} 
                alt={property.title} 
                className="property-detail-main-img"
                style={{ width: "100%", height: "480px", objectFit: "cover", display: "block", marginBottom: "12px" }} 
              />
              <div className="property-gallery-row" style={{ display: "flex", gap: "8px", marginBottom: "40px", overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: "8px" }}>
                {property.gallery.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`property-gallery-thumb ${activeImage === i ? 'active' : 'inactive'}`}
                    style={{
                      width: "100px",
                      height: "70px",
                      objectFit: "cover",
                      cursor: "pointer",
                      flexShrink: 0,
                      border: activeImage === i ? "2px solid var(--gold)" : "2px solid transparent",
                      opacity: activeImage === i ? 1 : 0.6,
                      transition: "all 0.3s",
                      display: "block",
                      padding: 0,
                      background: "none",
                      overflow: "hidden",
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

              <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "32px" }}>
                <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>About This Property</p>
                <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9 }}>{property.description}</p>
              </div>

              <div style={{ marginTop: "32px", borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "32px" }}>
                <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>Key Features</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }} className="stats-grid-mobile">
                  {property.features.map((feature, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.08)" }}>
                      <span style={{ color: "var(--gold)", fontSize: "16px" }}>◈</span>
                      <span style={{ color: "var(--text-primary)", fontSize: "13px" }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="property-sticky-sidebar" style={{ position: "sticky", top: "100px", background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.15)", padding: "32px" }}>
                <div style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "4px 16px", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>{property.type}</div>
                <h1 style={{ fontSize: "22px", fontWeight: 300, lineHeight: 1.3, marginBottom: "8px" }}>{property.title}</h1>
                <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "24px" }}>{property.location}</p>
                <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)", padding: "20px 0", marginBottom: "24px" }}>
                  <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>Asking Price</div>
                  <div style={{ color: "var(--gold)", fontSize: "32px", fontWeight: 300 }}>{property.price}</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
                  {[{ label: "Size", value: property.size }, { label: "Facing", value: property.facing }, { label: "Status", value: property.status }, { label: "Type", value: property.type }].map((item, i) => (
                    <div key={i}>
                      <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>{item.label}</div>
                      <div style={{ color: "var(--text-primary)", fontSize: "14px" }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", background: "#25D366", color: "#fff", padding: "16px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", fontWeight: 600, marginBottom: "10px", transition: "all 0.3s ease" }}>
                  WhatsApp Enquiry
                </a>
                <a href={"mailto:care@inderthakral.com?subject=Enquiry: " + property.title} style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.3)", color: "var(--text-muted)", padding: "16px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", marginBottom: "10px", transition: "all 0.3s ease" }}>
                  Send Email Enquiry
                </a>
                <a href="tel:+919815901234" style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)", padding: "16px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", marginBottom: "20px", transition: "all 0.3s ease" }}>
                  Call Inder Directly
                </a>
                <div style={{ padding: "16px", background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)" }}>
                  <p style={{ color: "var(--text-muted)", fontSize: "12px", lineHeight: 1.7 }}>Every property is personally verified by <span style={{ color: "var(--gold)" }}>Inder Thakral</span>. 100% clear title deeds guaranteed.</p>
                </div>
              </div>
            </div>

          </div>
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