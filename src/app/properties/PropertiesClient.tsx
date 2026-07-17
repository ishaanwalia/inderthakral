"use client";

import { properties } from "@/data/properties";
import Link from "next/link";
import { useState, useCallback } from "react";
import Nav from "@/components/Nav";

export default function PropertiesPage() {
  const [filter, setFilter] = useState("All");

  const handleFilter = useCallback((f: string) => {
    setFilter(f);
  }, []);

  const filtered = filter === "All" ? properties : properties.filter(p => p.type === filter);

  return (
    <main style={{ background: "#000000", minHeight: "100vh", overflowX: "hidden", width: "100%", color: "#FFFFFF", fontFamily: "var(--font-sans)" }}>
      <Nav active="Properties" />

      {/* Hero */}
      <section style={{ 
        paddingTop: "180px", 
        paddingBottom: "80px", 
        paddingLeft: "48px", 
        paddingRight: "48px", 
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        position: "relative",
        background: "radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.03) 0%, transparent 60%)",
      }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: "24px" }}>
            <span className="accent-line" />
            Verified Listings
          </p>
          <h1 style={{ 
            fontSize: "clamp(40px, 7vw, 80px)", 
            fontWeight: 700, 
            marginBottom: "48px",
            letterSpacing: "-4px",
            color: "#FFFFFF",
          }}>
            Available <span style={{ color: "#00D4FF", fontWeight: 700 }}>Properties</span>
          </h1>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {["All", "Residential", "Commercial"].map(f => (
              <button 
                key={f} 
                type="button"
                onClick={() => handleFilter(f)} 
                className={`filter-btn tap-glow ${filter === f ? 'active' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section style={{ padding: "80px 48px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }} className="properties-grid-desktop perspective-container">
            {filtered.map((property) => (
              <Link key={property.id} href={`/properties/${property.id}/`} style={{ textDecoration: "none" }}>
                <div className="property-card card-3d tap-glow">
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }}>
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="property-card-img"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }} />
                    <div style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      padding: "8px 16px",
                      background: property.type === "Commercial" ? "#00D4FF" : "rgba(0,0,0,0.5)",
                      color: property.type === "Commercial" ? "#000" : "#00D4FF",
                      fontSize: "9px",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      borderRadius: "4px",
                      backdropFilter: "blur(10px)",
                      fontFamily: "var(--font-mono)",
                    }}>
                      {property.type}
                    </div>
                    <div style={{
                      position: "absolute",
                      bottom: "20px",
                      right: "20px",
                      color: "#00D4FF",
                      fontSize: "22px",
                      fontWeight: 700,
                      fontFamily: "var(--font-mono)",
                      textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                    }}>
                      {property.price}
                    </div>
                  </div>
                  <div style={{ padding: "28px" }}>
                    <p style={{ 
                      color: "rgba(255,255,255,0.3)", 
                      fontSize: "10px", 
                      letterSpacing: "3px", 
                      textTransform: "uppercase", 
                      marginBottom: "10px", 
                      fontFamily: "var(--font-mono)",
                      fontWeight: 500,
                    }}>
                      {property.location}
                    </p>
                    <h3 style={{ 
                      color: "#FFFFFF", 
                      fontSize: "17px", 
                      fontWeight: 600, 
                      marginBottom: "12px", 
                      lineHeight: 1.3,
                      letterSpacing: "-0.5px",
                    }}>
                      {property.title}
                    </h3>
                    <p style={{ 
                      color: "rgba(255,255,255,0.4)", 
                      fontSize: "13px", 
                      marginBottom: "24px", 
                      lineHeight: 1.6,
                    }}>
                      {property.highlight}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "20px" }}>
                      <div>
                        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px", fontFamily: "var(--font-mono)", fontWeight: 500 }}>Size</div>
                        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontFamily: "var(--font-mono)", fontWeight: 500 }}>{property.size}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px", fontFamily: "var(--font-mono)", fontWeight: 500 }}>Status</div>
                        <div style={{ color: "#00D4FF", fontSize: "13px", fontFamily: "var(--font-mono)", fontWeight: 600 }}>{property.status}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
          <div style={{ color: "#00D4FF", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 700 }}>Inder Thakral Properties</div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", marginTop: "6px" }}>2026 · SCO 124, Sector-108, Pine Wood Center Emaar, Mohali - 140306</div>
        </div>
        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>
          Verified Title Deeds · By Appointment Only
        </div>
      </footer>
    </main>
  );
}