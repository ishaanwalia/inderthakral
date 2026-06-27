"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Hide nav on scroll down, show on scroll up (Zera-style)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    ["Properties", "/properties/"],
    ["About", "/about/"],
    ["Services", "/services/"],
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: hidden ? "-100px" : "0",
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(0, 0, 0, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0, 212, 255, 0.08)" : "1px solid transparent",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: scrolled ? "14px 48px" : "24px 48px",
            transition: "padding 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="nav-inner-wrap"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLinkClick}
            style={{ textDecoration: "none", flexShrink: 0, position: "relative" }}
          >
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "14px",
                letterSpacing: "6px",
                textTransform: "uppercase",
                fontWeight: 500,
                lineHeight: 1.2,
                fontFamily: "var(--font-mono)",
              }}
            >
              Inder Thakral
            </div>
            <div
              style={{
                color: "rgba(0, 212, 255, 0.6)",
                fontSize: "9px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginTop: "4px",
                fontFamily: "var(--font-mono)",
              }}
            >
              Tricity Land Advisory
            </div>
            {/* Animated underline */}
            <div style={{
              position: "absolute",
              bottom: "-4px",
              left: 0,
              width: "30%",
              height: "1px",
              background: "linear-gradient(90deg, #00D4FF, transparent)",
              transition: "width 0.5s ease",
            }} />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="desktop-nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
          >
            {navLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                style={{
                  color: active === label ? "#00D4FF" : "rgba(255, 255, 255, 0.5)",
                  fontSize: "11px",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  position: "relative",
                  padding: "4px 0",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00D4FF";
                }}
                onMouseLeave={(e) => {
                  if (active !== label) {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
                  }
                }}
              >
                {label}
                <span style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  width: active === label ? "100%" : "0%",
                  height: "1px",
                  background: "#00D4FF",
                  transition: "width 0.3s ease",
                  boxShadow: "0 0 8px rgba(0, 212, 255, 0.5)",
                }} />
              </Link>
            ))}
            <a
              href="/#contact"
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "11px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
                padding: "4px 0",
                fontFamily: "var(--font-mono)",
                fontWeight: 400,
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#00D4FF"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)"}
            >
              Contact
            </a>
            <a
              href="/#contact"
              style={{
                border: "1px solid rgba(0, 212, 255, 0.3)",
                color: "#00D4FF",
                padding: "10px 28px",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                background: "transparent",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)";
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.6)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0, 212, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.3)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Enquire
            </a>
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="hamburger-toggle"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "12px",
              margin: "-12px",
              zIndex: 1001,
              position: "relative",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: menuOpen ? "#00D4FF" : "#FFFFFF",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: menuOpen ? "#00D4FF" : "#FFFFFF",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: menuOpen ? "#00D4FF" : "#FFFFFF",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full screen overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          background: "rgba(0, 0, 0, 0.98)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0",
          padding: "100px 24px 40px",
          transition: "opacity 0.5s ease",
        }}
      >
        {/* Animated grid lines */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.8s ease",
        }} />

        {navLinks.map(([label, href], i) => (
          <Link
            key={label}
            href={href}
            onClick={handleLinkClick}
            style={{
              color: active === label ? "#00D4FF" : "#FFFFFF",
              fontSize: "28px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "20px 24px",
              transition: "all 0.3s ease",
              display: "block",
              textAlign: "center",
              width: "100%",
              maxWidth: "400px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              fontFamily: "var(--font-mono)",
              fontWeight: 300,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 0.1 + 0.2}s`,
            }}
          >
            {label}
          </Link>
        ))}
        <a
          href="/#contact"
          onClick={handleLinkClick}
          style={{
            color: "#FFFFFF",
            fontSize: "28px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "20px 24px",
            transition: "all 0.3s ease",
            display: "block",
            textAlign: "center",
            width: "100%",
            maxWidth: "400px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            fontFamily: "var(--font-mono)",
            fontWeight: 300,
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.5s",
          }}
        >
          Contact
        </a>
        <a
          href="/#contact"
          onClick={handleLinkClick}
          style={{
            marginTop: "40px",
            border: "1px solid rgba(0, 212, 255, 0.4)",
            color: "#00D4FF",
            padding: "18px 56px",
            fontSize: "13px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 500,
            textAlign: "center",
            display: "block",
            fontFamily: "var(--font-mono)",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.6s",
            transition: "all 0.5s ease",
          }}
        >
          Enquire Now
        </a>
      </div>
    </>
  );
}