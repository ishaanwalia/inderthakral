"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const update = () => setMobile(window.innerWidth < 769);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(10,10,10,0.97)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>Inder Thakral</div>
          <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px" }}>Tricity Land Advisory</div>
        </Link>

        {!mobile && (
          <button onClick={() => setMenuOpen(o => !o)} style={{ cursor: "pointer", padding: "10px", display: "flex", flexDirection: "column", gap: "5px", background: "none", border: "none", WebkitAppearance: "none" }}>            {[["Properties", "/properties"], ["About", "/about"], ["Services", "/services"]].map(([label, href]) => (
              <Link key={label} href={href} style={{ color: active === label ? "var(--gold)" : "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>{label}</Link>
            ))}
            <a href="/#contact" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Contact</a>
            <a href="/#contact" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "10px 24px", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Enquire</a>
          </button>
        )}

        {mobile && (
          <div onClick={() => setMenuOpen(o => !o)} style={{ cursor: "pointer", padding: "10px", display: "flex", flexDirection: "column", gap: "5px" }}>
            <div style={{ width: "25px", height: "2px", background: "var(--gold)", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <div style={{ width: "25px", height: "2px", background: "var(--gold)", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
            <div style={{ width: "25px", height: "2px", background: "var(--gold)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </div>
        )}
      </div>

      {mobile && menuOpen && (
        <div style={{ padding: "24px", borderTop: "1px solid rgba(201,168,76,0.1)", background: "rgba(10,10,10,0.99)", display: "flex", flexDirection: "column", gap: "24px" }}>
          <Link href="/properties" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Properties</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Services</Link>
          <a href="/#contact" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Contact</a>
          <a href="/#contact" onClick={() => setMenuOpen(false)} style={{ display: "block", background: "var(--gold)", color: "var(--dark)", padding: "14px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", textAlign: "center", fontWeight: 600 }}>Enquire Now</a>
        </div>
      )}
    </nav>
  );
}