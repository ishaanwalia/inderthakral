"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(10,10,10,0.97)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>Inder Thakral</div>
          <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px" }}>Tricity Land Advisory</div>
        </Link>

        <div className="nav-links">
          {[["Properties", "/properties"], ["About", "/about"], ["Services", "/services"]].map(([label, href]) => (
            <Link key={label} href={href} style={{ color: active === label ? "var(--gold)" : "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>{label}</Link>
          ))}
          <a href="/#contact" style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Contact</a>
          <a href="/#contact" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "10px 24px", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none" }}>Enquire</a>
        </div>

        <button type="button" className="hamburger" onClick={() => setOpen(o => !o)}>
          <span style={{ display: "block", width: "25px", height: "2px", background: "var(--gold)", marginBottom: "5px", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(4px, 5px)" : "none" }} />
          <span style={{ display: "block", width: "25px", height: "2px", background: "var(--gold)", marginBottom: "5px", opacity: open ? 0 : 1, transition: "all 0.3s" }} />
          <span style={{ display: "block", width: "25px", height: "2px", background: "var(--gold)", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(4px, -5px)" : "none" }} />
        </button>
      </div>

      {open && (
        <div className="mobile-dropdown">
          <Link href="/properties" onClick={() => setOpen(false)} style={{ color: "var(--text-muted)", fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", display: "block", padding: "12px 0", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>Properties</Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: "var(--text-muted)", fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", display: "block", padding: "12px 0", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)} style={{ color: "var(--text-muted)", fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", display: "block", padding: "12px 0", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>Services</Link>
          <a href="/#contact" onClick={() => setOpen(false)} style={{ color: "var(--text-muted)", fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", display: "block", padding: "12px 0", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>Contact</a>
          <a href="/#contact" onClick={() => setOpen(false)} style={{ display: "block", background: "var(--gold)", color: "var(--dark)", padding: "16px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", textDecoration: "none", textAlign: "center", fontWeight: 600, marginTop: "16px" }}>Enquire Now</a>
        </div>
      )}
    </nav>
  );
}