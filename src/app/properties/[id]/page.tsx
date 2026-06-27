"use client";

import { properties } from "@/data/properties";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import Nav from "@/components/Nav";

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) return (
    <main style={{ background: "var(--dark)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "var(--gold)", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>Property Not Found</p>
        <Link href="/properties" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Back to Properties</Link>
      </div>
    </main>
  );

  const whatsappMessage = encodeURIComponent("Hi Inder, I am interested in: " + property.title + " (" + property.size + " at " + property.price + "). Please share details.");
  const whatsappLink = "https://wa.me/919815901234?text=" + whatsappMessage;

  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh" }}>
      <Nav active="Properties" />

      <div style={{ paddingTop: "120px", paddingLeft: "48px", paddingRight: "48px", paddingBottom: "16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link href="/properties" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>← Back to Properties</Link>
        </div>
      </div>

      <section style={{ padding: "24px 48px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="detail-grid">

            <div>
              <img src={property.gallery[activeImage]} alt={property.title} style={{ width: "100%", height: "480px", objectFit: "cover", display: "block", marginBottom: "12px" }} />
              <div style={{ display: "flex", gap: "8px", marginBottom: "48px", overflowX: "auto", paddingBottom: "4px" }}>
                {property.gallery.map((img, i) => (
                  <img key={i} src={img} alt="" onClick={() => setActiveImage(i)} style={{ width: "100px", height: "70px", objectFit: "cover", cursor: "pointer", flexShrink: 0, border: activeImage === i ? "2px solid var(--gold)" : "2px solid transparent", opacity: activeImage === i ? 1 : 0.6, transition: "all 0.3s", display: "block" }} />
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "40px" }}>
                <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>About This Property</p>
                <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9 }}>{property.description}</p>
              </div>

              <div style={{ marginTop: "40px", borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "40px" }}>
                <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>Key Features</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
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
              <div style={{ position: "sticky", top: "100px", background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.15)", padding: "40px" }}>
                <div style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "4px 16px", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "24px" }}>{property.type}</div>
                <h1 style={{ fontSize: "22px", fontWeight: 300, lineHeight: 1.3, marginBottom: "8px" }}>{property.title}</h1>
                <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "32px" }}>{property.location}</p>
                <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)", padding: "24px 0", marginBottom: "32px" }}>
                  <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>Asking Price</div>
                  <div style={{ color: "var(--gold)", fontSize: "36px", fontWeight: 300 }}>{property.price}</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
                  {[{ label: "Size", value: property.size }, { label: "Facing", value: property.facing }, { label: "Status", value: property.status }, { label: "Type", value: property.type }].map((item, i) => (
                    <div key={i}>
                      <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>{item.label}</div>
                      <div style={{ color: "var(--text-primary)", fontSize: "14px" }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", background: "#25D366", color: "#fff", padding: "16px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", fontWeight: 600, marginBottom: "12px" }}>
                  WhatsApp Enquiry
                </a>
                <a href={"mailto:care@inderthakral.com?subject=Enquiry: " + property.title} style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.3)", color: "var(--text-muted)", padding: "16px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", marginBottom: "12px" }}>
                  Send Email Enquiry
                </a>
                <a href="tel:+919815901234" style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)", padding: "16px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", marginBottom: "24px" }}>
                  Call Inder Directly
                </a>
                <div style={{ padding: "20px", background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)" }}>
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