"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backdropFilter: "blur(12px)", background: "rgba(10,10,10,0.95)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
          <span style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>Inder Thakral</span>
          <span style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px" }}>Tricity Land Advisory</span>
        </Link>

        <div className="desktop-nav" style={{ gap: "40px" }}>
          {[["Properties", "/properties"], ["About", "/about"], ["Services", "/services"]].map(([label, href]) => (
            <Link key={label} href={href} style={{ color: active === label ? "var(--gold)" : "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>{label}</Link>
          ))}
          <a href="/#contact" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Contact</a>
        </div>

        <a href="/#contact" className="desktop-nav" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "10px 24px", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Enquire</a>

        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", flexDirection: "column", gap: "5px" }}>
          <span style={{ display: "block", width: "24px", height: "2px", background: "var(--gold)", marginBottom: "5px", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(0px, 7px)" : "none" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "var(--gold)", marginBottom: "5px", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "var(--gold)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(0px, -7px)" : "none" }} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ padding: "24px", borderTop: "1px solid rgba(201,168,76,0.1)", display: "flex", flexDirection: "column", gap: "24px", background: "rgba(10,10,10,0.98)" }}>
          <Link href="/properties" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Properties</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Services</Link>
          <a href="/#contact" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Contact</a>
          <a href="/#contact" onClick={() => setMenuOpen(false)} style={{ display: "block", background: "var(--gold)", color: "var(--dark)", padding: "14px 24px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", textAlign: "center", fontWeight: 600 }}>Enquire Now</a>
        </div>
      )}
    </nav>
  );
}