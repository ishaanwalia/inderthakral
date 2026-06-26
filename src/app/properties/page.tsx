"use client";

import { motion } from "framer-motion";
import { properties } from "@/data/properties";
import Link from "next/link";
import { useState } from "react";

export default function PropertiesPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? properties : properties.filter(p => p.type === filter);

  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "24px 48px",
        borderBottom: "1px solid rgba(201,168,76,0.1)",
        backdropFilter: "blur(12px)",
        background: "rgba(10,10,10,0.7)",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>Inder Thakral</span>
            <span style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px" }}>Tricity Land Advisory</span>
          </div>
        </Link>
        <div style={{ display: "flex", gap: "40px" }}>
          {[["Properties", "/properties"], ["About", "/about"], ["Services", "/services"], ["Contact", "/#contact"]].map(([item, href]) => (
            <Link key={item} href={href} style={{
              color: item === "Properties" ? "var(--gold)" : "var(--text-muted)",
              fontSize: "11px", letterSpacing: "2px",
              textTransform: "uppercase", textDecoration: "none",
            }}>{item}</Link>
          ))}
        </div>
        <Link href="/#contact" style={{
          border: "1px solid var(--gold)", color: "var(--gold)",
          padding: "10px 24px", fontSize: "10px", letterSpacing: "3px",
          textTransform: "uppercase", textDecoration: "none",
        }}>Enquire</Link>
      </nav>

      {/* HEADER */}
      <section style={{
        paddingTop: "160px", paddingBottom: "80px",
        paddingLeft: "48px", paddingRight: "48px",
        borderBottom: "1px solid rgba(201,168,76,0.1)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}
          >Verified Listings</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, marginBottom: "48px" }}
          >Available Properties</motion.h1>

          {/* FILTERS */}
          <div style={{ display: "flex", gap: "12px" }}>
            {["All", "Residential", "Commercial"].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "10px 28px", fontSize: "11px", letterSpacing: "2px",
                  textTransform: "uppercase", cursor: "pointer",
                  background: filter === f ? "var(--gold)" : "transparent",
                  color: filter === f ? "var(--dark)" : "var(--text-muted)",
                  border: filter === f ? "1px solid var(--gold)" : "1px solid rgba(201,168,76,0.2)",
                  transition: "all 0.3s",
                }}
              >{f}</button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
            {filtered.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/properties/${property.id}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "var(--dark-2)",
                    border: "1px solid rgba(201,168,76,0.08)",
                    overflow: "hidden",
                    transition: "all 0.4s",
                    cursor: "pointer",
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.3)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.08)";
                    }}
                  >
                    {/* IMAGE */}
                    <div style={{
                      width: "100%", height: "220px",
                      backgroundImage: `url('${property.image}')`,
                      backgroundSize: "cover", backgroundPosition: "center",
                      position: "relative",
                    }}>
                      <div style={{
                        position: "absolute", top: "16px", left: "16px",
                        background: property.type === "Commercial" ? "var(--gold)" : "rgba(10,10,10,0.8)",
                        color: property.type === "Commercial" ? "var(--dark)" : "var(--gold)",
                        border: "1px solid var(--gold)",
                        padding: "4px 12px", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase",
                      }}>{property.type}</div>
                    </div>

                    {/* CONTENT */}
                    <div style={{ padding: "28px" }}>
                      <p style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>{property.location}</p>
                      <h3 style={{ color: "var(--text-primary)", fontSize: "18px", fontWeight: 300, marginBottom: "16px", lineHeight: 1.3 }}>{property.title}</h3>
                      <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "24px", lineHeight: 1.6 }}>{property.highlight}</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "20px" }}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px 48px",
        borderTop: "1px solid rgba(201,168,76,0.1)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div>
          <div style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" }}>Inder Thakral Properties</div>
          <div style={{ color: "var(--text-muted)", fontSize: "11px", marginTop: "4px" }}>© 2026 · Independent Advisory · Mohali, Chandigarh Tricity</div>
        </div>
        <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}>Verified Title Deeds · By Appointment Only</div>
      </footer>

    </main>
  );
}