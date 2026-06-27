"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
    <nav
      className="nav-container"
      style={{
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="nav-inner">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <div className="nav-brand-name">Inder Thakral</div>
          <div className="nav-brand-sub">Tricity Land Advisory</div>
        </Link>

        <div className="nav-links">
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
          <a href="/#contact" className="nav-cta">
            Enquire
          </a>
        </div>

        <button
          type="button"
          className={`hamburger ${open ? "hamburger-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      <div className={`mobile-dropdown ${open ? "mobile-dropdown-open" : ""}`}>
        {navLinks.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="mobile-nav-link"
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <a
          href="/#contact"
          className="mobile-nav-link"
          onClick={() => setOpen(false)}
        >
          Contact
        </a>
        <a
          href="/#contact"
          className="mobile-nav-cta"
          onClick={() => setOpen(false)}
        >
          Enquire Now
        </a>
      </div>
    </nav>
  );
}