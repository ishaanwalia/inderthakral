"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(10,10,10,0.97)",
        borderBottom: "1px solid rgba(201,168,76,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 24px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>
            Inder Thakral
          </div>
          <div style={{ color: "var(--text-muted)", fontSize: "10px", letterSpacing: "2px" }}>
            Tricity Land Advisory
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="desktop-nav">
          {[
            ["Properties", "/properties"],
            ["About", "/about"],
            ["Services", "/services"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              style={{
                color: active === label ? "var(--gold)" : "var(--text-muted)",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contact"
            style={{
              color: "var(--text-muted)",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
          <Link
            href="/#contact"
            style={{
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              padding: "10px 24px",
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Enquire
          </Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: "25px",
              height: "2px",
              background: "var(--gold)",
              transition: "all 0.3s",
              transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <div
            style={{
              width: "25px",
              height: "2px",
              background: "var(--gold)",
              opacity: menuOpen ? 0 : 1,
              transition: "all 0.3s",
            }}
          />
          <div
            style={{
              width: "25px",
              height: "2px",
              background: "var(--gold)",
              transition: "all 0.3s",
              transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link
            href="/properties"
            onClick={() => setMenuOpen(false)}
            className="mobile-link"
          >
            Properties
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="mobile-link">
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="mobile-link"
          >
            Services
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mobile-link"
          >
            Contact
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mobile-enquire"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </nav>
  );
}