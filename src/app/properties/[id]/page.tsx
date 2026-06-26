"use client";
import { motion } from "framer-motion";
import { properties } from "@/data/properties";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

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
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "1px solid rgba(201,168,76,0.1)", backdropFilter: "blur(12px)", background: "rgba(10,10,10,0.7)" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>Inder Thakral</span>
            <span style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px" }}>Tricity Land Advisory</span>
          </div>
        </Link>
        <div style={{ display: "flex", gap: "40px" }}>
          <Link href="/properties" style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Properties</Link>
          <Link href="/about" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>About</Link>
          <Link href="/services" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Services</Link>
          <Link href="/#contact" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Contact</Link>
        </div>
        <Link href="/#contact" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "10px 24px", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Enquire</Link>
      </nav>

      <div style={{ paddingTop: "120px", paddingLeft: "48px", paddingRight: "48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link href="/properties" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>← Back to Properties</Link>
        </div>
      </div>

      <section style={{ padding: "40px 48px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: "64px" }}>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ width: "100%", height: "480px", backgroundImage: "url('" + property.gallery[activeImage] + "')", backgroundSize: "cover", backgroundPosition: "center", marginBottom: "12px" }}
            />
            <div style={{ display: "flex", gap: "8px", marginBottom: "48px" }}>
              {property.gallery.map((img, i) => (
                <div key={i} onClick={() => setActiveImage(i)} style={{ width: "120px", height: "80px", backgroundImage: "url('" + img + "')", backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer", border: activeImage === i ? "2px solid var(--gold)" : "2px solid transparent", opacity: activeImage === i ? 1 : 0.6, transition: "all 0.3s" }} />
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ position: "sticky", top: "100px", background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.15)", padding: "40px" }}
            >
              <div style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "4px 16px", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "24px" }}>{property.type}</div>
              <h1 style={{ fontSize: "22px", fontWeight: 300, lineHeight: 1.3, marginBottom: "8px" }}>{property.title}</h1>
              <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "32px" }}>{property.location}</p>
              <div style={{ borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)", padding: "24px 0", marginBottom: "32px" }}>
                <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>Asking Price</div>
                <div style={{ color: "var(--gold)", fontSize: "36px", fontWeight: 300 }}>{property.price}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
                <div>
                  <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Size</div>
                  <div style={{ color: "var(--text-primary)", fontSize: "14px" }}>{property.size}</div>
                </div>
                <div>
                  <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Facing</div>
                  <div style={{ color: "var(--text-primary)", fontSize: "14px" }}>{property.facing}</div>
                </div>
                <div>
                  <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Status</div>
                  <div style={{ color: "var(--text-primary)", fontSize: "14px" }}>{property.status}</div>
                </div>
                <div>
                  <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Type</div>
                  <div style={{ color: "var(--text-primary)", fontSize: "14px" }}>{property.type}</div>
                </div>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", background: "#25D366", color: "#fff", padding: "16px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", fontWeight: 600, marginBottom: "12px" }}>
                WhatsApp Enquiry
              </a>
              <a href={"mailto:care@inderthakral.com?subject=Enquiry: " + property.title} style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.3)", color: "var(--text-muted)", padding: "16px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", marginBottom: "32px" }}>
                Send Email Enquiry
              </a>
              <div style={{ padding: "20px", background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)" }}>
                <p style={{ color: "var(--text-muted)", fontSize: "12px", lineHeight: 1.7 }}>
                  Every property is personally verified by <span style={{ color: "var(--gold)" }}>Inder Thakral</span>. 100% clear title deeds guaranteed.
                </p>
              </div>
            </motion.div>
          </div>

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