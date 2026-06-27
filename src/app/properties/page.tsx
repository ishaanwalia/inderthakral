"use client";

import { properties } from "@/data/properties";
import Link from "next/link";
import { useState } from "react";
import Nav from "@/components/Nav";

export default function PropertiesPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? properties : properties.filter(p => p.type === filter);

  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh" }}>
      <Nav active="Properties" />

      <section style={{ paddingTop: "140px", paddingBottom: "60px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>Verified Listings</p>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 72px)", fontWeight: 300, marginBottom: "40px" }}>Available Properties</h1>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["All", "Residential", "Commercial"].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ padding: "10px 24px", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", background: filter === f ? "var(--gold)" : "transparent", color: filter === f ? "var(--dark)" : "var(--text-muted)", border: filter === f ? "1px solid var(--gold)" : "1px solid rgba(201,168,76,0.2)", transition: "all 0.3s" }}>{f}</button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="properties-grid">
            {filtered.map((property) => (
              <Link key={property.id} href={`/properties/${property.id}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.08)", overflow: "hidden", transition: "border-color 0.3s" }}>
                  <div style={{ width: "100%", height: "220px", backgroundImage: `url('${property.image}')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                    <div style={{ position: "absolute", top: "16px", left: "16px", background: property.type === "Commercial" ? "var(--gold)" : "rgba(10,10,10,0.8)", color: property.type === "Commercial" ? "var(--dark)" : "var(--gold)", border: "1px solid var(--gold)", padding: "4px 12px", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>{property.type}</div>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <p style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>{property.location}</p>
                    <h3 style={{ color: "var(--text-primary)", fontSize: "17px", fontWeight: 300, marginBottom: "12px", lineHeight: 1.3 }}>{property.title}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "20px", lineHeight: 1.6 }}>{property.highlight}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "16px" }}>
                      <div>
                        <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Size</div>
                        <div style={{ color: "var(--text-primary)", fontSize: "14px" }}>{property.size}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Price</div>
                        <div style={{ color: "var(--gold)", fontSize: "18px", fontWeight: 300 }}>{property.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: "40px 24px", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>Inder Thakral Properties</div>
        <div style={{ color: "var(--text-muted)", fontSize: "11px", marginBottom: "8px" }}>2026 · Independent Advisory · Mohali, Chandigarh Tricity</div>
        <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>Verified Title Deeds · By Appointment Only</div>
      </footer>
    </main>
  );
}