"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    ["Properties", "/properties"],
    ["About", "/about"],
    ["Services", "/services"],
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className="site-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(10, 10, 10, 0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(201, 168, 76, 0.1)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 48px",
          }}
          className="nav-inner-wrap"
        >
          <Link
            href="/"
            onClick={handleLinkClick}
            style={{ textDecoration: "none", flexShrink: 0 }}
          >
            <div
              style={{
                color: "#C9A84C",
                fontSize: "13px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Inder Thakral
            </div>
            <div
              style={{
                color: "#8A8578",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              Tricity Land Advisory
            </div>
          </Link>

          <nav
            className="desktop-nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {navLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                style={{
                  color: active === label ? "#C9A84C" : "#8A8578",
                  fontSize: "11px",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  position: "relative",
                  padding: "4px 0",
                }}
              >
                {label}
              </Link>
            ))}
            <a
              href="/#contact"
              style={{
                color: "#8A8578",
                fontSize: "11px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.3s ease",
                padding: "4px 0",
              }}
            >
              Contact
            </a>
            <a
              href="/#contact"
              style={{
                border: "1px solid #C9A84C",
                color: "#C9A84C",
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
          </nav>

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
              className="hamburger-line"
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#C9A84C",
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <span
              className="hamburger-line"
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#C9A84C",
                transition: "all 0.3s ease",
                opacity: menuOpen ? 0 : 1,
                margin: menuOpen ? "-2px 0" : "0",
              }}
            />
            <span
              className="hamburger-line"
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#C9A84C",
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div
        className="mobile-nav-dropdown"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          background: "rgba(10, 10, 10, 0.98)",
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0",
          padding: "100px 24px 40px",
        }}
      >
        {navLinks.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            onClick={handleLinkClick}
            style={{
              color: active === label ? "#C9A84C" : "#F5F0E8",
              fontSize: "20px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "20px 24px",
              transition: "color 0.2s ease",
              display: "block",
              textAlign: "center",
              width: "100%",
              maxWidth: "300px",
              borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
            }}
          >
            {label}
          </Link>
        ))}
        <a
          href="/#contact"
          onClick={handleLinkClick}
          style={{
            color: "#F5F0E8",
            fontSize: "20px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "20px 24px",
            transition: "color 0.2s ease",
            display: "block",
            textAlign: "center",
            width: "100%",
            maxWidth: "300px",
            borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
          }}
        >
          Contact
        </a>
        <a
          href="/#contact"
          onClick={handleLinkClick}
          style={{
            marginTop: "32px",
            background: "#C9A84C",
            color: "#0A0A0A",
            padding: "16px 48px",
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: 600,
            textAlign: "center",
            display: "block",
          }}
        >
          Enquire Now
        </a>
      </div>
    </>
  );
}