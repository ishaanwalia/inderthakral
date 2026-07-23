"use client";

import { properties } from "@/data/properties";
import Link from "next/link";
import { useState, useCallback } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PropertiesPage() {
  const [filter, setFilter] = useState("All");

  const handleFilter = useCallback((f: string) => {
    setFilter(f);
  }, []);

  const filtered = filter === "All" ? properties : properties.filter(p => p.type === filter);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden", width: "100%", color: "var(--fg)", fontFamily: "var(--font-sans)" }}>
      <Nav active="Properties" />

      {/* Hero */}
      <section style={{ 
        paddingTop: "136px", 
        paddingBottom: "48px", 
        paddingLeft: "48px", 
        paddingRight: "48px", 
        borderBottom: "1px solid rgba(var(--fg-rgb),0.04)",
        position: "relative",
        background: "radial-gradient(ellipse at 30% 50%, rgba(var(--accent-rgb),0.03) 0%, transparent 60%)",
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
            color: "var(--fg)",
          }}>
            Available <span style={{ color: "var(--accent)", fontWeight: 700 }}>Properties</span>
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
      <section style={{ padding: "56px 48px" }} className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }} className="properties-grid-desktop perspective-container">
            {filtered.map((property) => (
              <Link key={property.id} href={`/properties/${property.id}/`} style={{ textDecoration: "none" }}>
                <div className="property-card card-3d tap-glow">
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "1/1" }}>
                    <img
                      src={property.image}
                      alt={property.title}
                      className="property-card-img"
                      loading="lazy"
                      decoding="async"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  <div style={{ padding: "28px" }}>
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
                    <h2 style={{
                      color: "var(--fg)",
                      fontSize: "17px",
                      fontWeight: 600,
                      marginBottom: "12px",
                      lineHeight: 1.3,
                      letterSpacing: "-0.5px",
                    }}>
                      {property.title}
                    </h2>
                    <p style={{ 
                      color: "rgba(var(--fg-rgb),0.4)", 
                      fontSize: "13px", 
                      marginBottom: "24px", 
                      lineHeight: 1.6,
                    }}>
                      {property.highlight}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(var(--fg-rgb),0.05)", paddingTop: "20px" }}>
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}