"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(10,10,10,0.97)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>Inder Thakral</div>
          <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px" }}>Tricity Land Advisory</div>
        </Link>

        {/* DESKTOP NAV - Visibility controlled by your CSS class */}
        <div className="desktop-nav" style={{ gap: "40px", alignItems: "center" }}>
          {[["Properties", "/properties"], ["About", "/about"], ["Services", "/services"]].map(([label, href]) => (
            <Link key={label} href={href} style={{ color: active === label ? "var(--gold)" : "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>{label}</Link>
          ))}
          <Link href="/#contact" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Contact</Link>
          <Link href="/#contact" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "10px 24px", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Enquire</Link>
        </div>

        {/* MOBILE MENU BUTTON - Visibility controlled by your CSS class */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(o => !o)}
          style={{ cursor: "pointer", padding: "10px", flexDirection: "column", gap: "6px", background: "none", border: "none", WebkitTapHighlightColor: "transparent" }}
        >
          <div style={{ width: "25px", height: "2px", background: "var(--gold)", transition: "all 0.3s", transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none" }} />
          <div style={{ width: "25px", height: "2px", background: "var(--gold)", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
          <div style={{ width: "25px", height: "2px", background: "var(--gold)", transition: "all 0.3s", transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN - Also uses your mobile class to auto-hide if window is stretched to desktop size */}
      {menuOpen && (
        <div className="mobile-menu-btn" style={{ padding: "32px 24px", borderTop: "1px solid rgba(201,168,76,0.1)", background: "rgba(10,10,10,0.99)", flexDirection: "column", gap: "28px", height: "100vh", width: "100%" }}>
          <Link href="/properties" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Properties</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Services</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Contact</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} style={{ display: "block", background: "var(--gold)", color: "var(--dark)", padding: "16px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", textAlign: "center", fontWeight: 600 }}>Enquire Now</Link>
        </div>
      )}
    </nav>
  );
}