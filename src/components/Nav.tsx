"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    ["Properties", "/properties"],
    ["About", "/about"],
    ["Services", "/services"],
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(10, 10, 10, 0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border-gold)",
          transition: "all 0.4s ease",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 48px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
          className="nav-inner-mobile"
        >
          <Link
            href="/"
            style={{ textDecoration: "none", display: "block" }}
            onClick={() => setOpen(false)}
          >
            <div
              style={{
                color: "var(--gold)",
                fontSize: "13px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontWeight: 400,
              }}
            >
              Inder Thakral
            </div>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              Tricity Land Advisory
            </div>
          </Link>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
            }}
            className="nav-desktop-links"
          >
            {navLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={`nav-link ${active === label ? "nav-link-active" : ""}`}
              >
                {label}
              </Link>
            ))}
            <a href="/#contact" className="nav-link">
              Contact
            </a>
            <a
              href="/#contact"
              style={{
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                padding: "10px 24px",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
                background: "transparent",
              }}
            >
              Enquire
            </a>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{
              display: "none",
              flexDirection: "column",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "12px",
              gap: "5px",
              WebkitTapHighlightColor: "transparent",
              touchAction: "manipulation",
              zIndex: 1001,
              position: "relative",
            }}
            className="hamburger-btn"
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                background: "var(--gold)",
                transition: "all 0.3s ease",
                transformOrigin: "center",
                transform: open
                  ? "rotate(45deg) translate(4.5px, 4.5px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                background: "var(--gold)",
                transition: "all 0.3s ease",
                transformOrigin: "center",
                opacity: open ? 0 : 1,
                transform: open ? "scaleX(0)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                background: "var(--gold)",
                transition: "all 0.3s ease",
                transformOrigin: "center",
                transform: open
                  ? "rotate(-45deg) translate(4.5px, -4.5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(10, 10, 10, 0.99)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0",
          padding: "80px 24px 40px",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          pointerEvents: open ? "auto" : "none",
        }}
        className="mobile-menu-overlay"
      >
        {navLinks.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            style={{
              color: open ? "var(--text-muted)" : "transparent",
              fontSize: "18px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "block",
              padding: "20px 0",
              borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
              transition: "color 0.3s ease",
              width: "100%",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "var(--text-muted)";
            }}
          >
            {label}
          </Link>
        ))}
        <a
          href="/#contact"
          onClick={() => setOpen(false)}
          style={{
            color: "var(--text-muted)",
            fontSize: "18px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "block",
            padding: "20px 0",
            borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
            transition: "color 0.3s ease",
            width: "100%",
            textAlign: "center",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.color = "var(--gold)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.color = "var(--text-muted)";
          }}
        >
          Contact
        </a>
        <a
          href="/#contact"
          onClick={() => setOpen(false)}
          style={{
            display: "block",
            background: "var(--gold)",
            color: "var(--dark)",
            padding: "18px 48px",
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            textDecoration: "none",
            textAlign: "center",
            fontWeight: 600,
            marginTop: "32px",
            transition: "all 0.3s ease",
          }}
        >
          Enquire Now
        </a>
      </div>
    </>
  );
}