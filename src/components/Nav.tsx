"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function Nav({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [theme, setTheme] = useState<"night" | "day">("night");

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") === "day" ? "day" : "night");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "day" ? "night" : "day";
      if (next === "day") {
        document.documentElement.setAttribute("data-theme", "day");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

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
    ["Insights", "/insights/"],
  ];

  const handleLinkClick = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: hidden ? "-100px" : "0",
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(var(--bg-rgb), 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(var(--accent-rgb), 0.08)" : "1px solid transparent",
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
                color: "var(--fg)",
                fontSize: "14px",
                letterSpacing: "6px",
                textTransform: "uppercase",
                fontWeight: 700,
                lineHeight: 1.2,
                fontFamily: "var(--font-mono)",
              }}
            >
              Inder Thakral
            </div>
            <div
              style={{
                color: "rgba(var(--accent-rgb), 0.6)",
                fontSize: "9px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginTop: "4px",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
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
              background: "linear-gradient(90deg, var(--accent), transparent)",
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
                  color: active === label ? "var(--accent)" : "rgba(var(--fg-rgb), 0.5)",
                  fontSize: "11px",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  position: "relative",
                  padding: "4px 0",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  if (active !== label) {
                    e.currentTarget.style.color = "rgba(var(--fg-rgb), 0.5)";
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
                  background: "var(--accent)",
                  transition: "width 0.3s ease",
                  boxShadow: "0 0 8px rgba(var(--accent-rgb), 0.5)",
                }} />
              </Link>
            ))}
            <a
              href="/#contact"
              style={{
                color: "rgba(var(--fg-rgb), 0.5)",
                fontSize: "11px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
                padding: "4px 0",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(var(--fg-rgb), 0.5)"}
            >
              Contact
            </a>
            <a
              href="/#contact"
              style={{
                border: "1px solid rgba(var(--accent-rgb), 0.3)",
                color: "var(--accent)",
                padding: "10px 28px",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                background: "transparent",
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.1)";
                e.currentTarget.style.borderColor = "rgba(var(--accent-rgb), 0.6)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(var(--accent-rgb), 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(var(--accent-rgb), 0.3)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Enquire
            </a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexShrink: 0 }}>
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "day" ? "Switch to night theme" : "Switch to day theme"}
            className="theme-toggle"
          >
            {theme === "day" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            )}
          </button>

          {/* Hamburger - Mobile */}
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
                background: menuOpen ? "var(--accent)" : "var(--fg)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: menuOpen ? "var(--accent)" : "var(--fg)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: menuOpen ? "var(--accent)" : "var(--fg)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
              }}
            />
          </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full screen overlay with animation states */}
      <div className={`mobile-nav-overlay ${menuOpen ? 'visible' : 'hidden'}`}>
        {/* Animated grid lines */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(var(--accent-rgb),0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--accent-rgb),0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.8s ease",
        }} />

        {navLinks.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            onClick={handleLinkClick}
            className="mobile-nav-link"
            style={{
              color: active === label ? "var(--accent)" : "var(--fg)",
            }}
          >
            {label}
          </Link>
        ))}
        <a
          href="/#contact"
          onClick={handleLinkClick}
          className="mobile-nav-link"
        >
          Contact
        </a>
        <a
          href="/#contact"
          onClick={handleLinkClick}
          style={{
            marginTop: "40px",
            border: "1px solid rgba(var(--accent-rgb), 0.4)",
            color: "var(--accent)",
            padding: "18px 56px",
            fontSize: "13px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 600,
            textAlign: "center",
            display: "block",
            fontFamily: "var(--font-mono)",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.5s ease 0.6s",
          }}
        >
          Enquire Now
        </a>
      </div>
    </>
  );
}