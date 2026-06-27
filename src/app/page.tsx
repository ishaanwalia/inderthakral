"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import { properties } from "@/data/properties";

export default function HomePage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const featuredProperties = properties.slice(0, 3);

  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <section className="hero-section">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p
            className="animate-fade-in-up"
            style={{
              color: "var(--gold)",
              fontSize: "11px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}
          >
            Independent Advisory · Mohali, Chandigarh Tricity
          </p>
          <h1
            className="animate-fade-in-up animate-delay-1"
            style={{
              fontSize: "clamp(36px, 8vw, 96px)",
              fontWeight: 300,
              lineHeight: 1.05,
              marginBottom: "24px",
              letterSpacing: "-1px",
            }}
          >
            Verified Land.
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Trusted Advisor.
            </em>
          </h1>
          <p
            className="animate-fade-in-up animate-delay-2"
            style={{
              color: "var(--text-muted)",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.8,
              maxWidth: "560px",
              margin: "0 auto 48px",
              fontWeight: 300,
            }}
          >
            Personal real estate advisory for residential plots, commercial
            showrooms, and NRI investments across Mohali, New Chandigarh, and
            Panchkula. Every title deed verified. Every deal personally
            overseen.
          </p>
          <div
            className="animate-fade-in-up animate-delay-3"
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/properties"
              style={{
                display: "inline-block",
                background: "var(--gold)",
                color: "var(--dark)",
                padding: "16px 40px",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 600,
                transition: "all 0.3s ease",
              }}
            >
              View Properties
            </Link>
            <a
              href="/#contact"
              style={{
                display: "inline-block",
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                padding: "16px 40px",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section
        style={{
          borderTop: "1px solid var(--border-gold)",
          borderBottom: "1px solid var(--border-gold)",
          background: "var(--dark-2)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}
        >
          {[
            { num: "15+", label: "Years Experience" },
            { num: "₹450Cr+", label: "Transactions" },
            { num: "500+", label: "Clients Served" },
            { num: "100%", label: "Title Verified" },
          ].map((stat, i) => (
            <div
              key={i}
              ref={addRef}
              className="reveal"
              style={{
                padding: "48px 24px",
                textAlign: "center",
                borderRight:
                  i < 3 ? "1px solid var(--border-gold)" : "none",
              }}
            >
              <div
                style={{
                  color: "var(--gold)",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 300,
                  marginBottom: "8px",
                  fontFamily: "Georgia, serif",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  color: "var(--text-muted)",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            ref={addRef}
            className="reveal"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "64px",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <p
                style={{
                  color: "var(--gold)",
                  fontSize: "11px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Featured Listings
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                }}
              >
                Available <em style={{ color: "var(--gold)" }}>Properties</em>
              </h2>
            </div>
            <Link
              href="/properties"
              style={{
                color: "var(--text-muted)",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                borderBottom: "1px solid var(--border-gold)",
                paddingBottom: "4px",
                transition: "color 0.3s ease",
              }}
            >
              View All Properties →
            </Link>
          </div>

          <div className="properties-grid">
            {featuredProperties.map((property) => (
              <Link
                key={property.id}
                href={`/properties/${property.id}`}
                className="property-card"
                ref={addRef}
              >
                <div className="property-card-img-wrap">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="property-card-img"
                  />
                </div>
                <div className="property-card-content">
                  <div
                    style={{
                      display: "inline-block",
                      background:
                        property.type === "Commercial"
                          ? "var(--gold)"
                          : "transparent",
                      color:
                        property.type === "Commercial"
                          ? "var(--dark)"
                          : "var(--gold)",
                      border: "1px solid var(--gold)",
                      padding: "3px 10px",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    {property.type}
                  </div>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "11px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    {property.location}
                  </p>
                  <h3
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "17px",
                      fontWeight: 300,
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}
                  >
                    {property.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "13px",
                      marginBottom: "20px",
                      lineHeight: 1.6,
                    }}
                  >
                    {property.highlight}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      borderTop: "1px solid var(--border-gold)",
                      paddingTop: "16px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "10px",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          marginBottom: "4px",
                        }}
                      >
                        Size
                      </div>
                      <div
                        style={{
                          color: "var(--text-primary)",
                          fontSize: "14px",
                        }}
                      >
                        {property.size}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "10px",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          marginBottom: "4px",
                        }}
                      >
                        Price
                      </div>
                      <div
                        style={{
                          color: "var(--gold)",
                          fontSize: "18px",
                          fontWeight: 300,
                        }}
                      >
                        {property.price}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section
        style={{
          padding: "120px 48px",
          background: "var(--dark-2)",
          borderTop: "1px solid var(--border-gold)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div ref={addRef} className="reveal" style={{ textAlign: "center", marginBottom: "80px" }}>
            <p
              style={{
                color: "var(--gold)",
                fontSize: "11px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              What We Offer
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 300,
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              Advisory <em style={{ color: "var(--gold)" }}>Services</em>
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "15px",
                lineHeight: 1.8,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              End-to-end real estate advisory with personal oversight on every
              transaction. No junior agents. No generic advice.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2px",
            }}
          >
            {[
              {
                num: "01",
                title: "Residential Plots & Homes",
                desc: "Buying residential plots, flats, and built-up houses across Mohali, New Chandigarh, and Panchkula.",
              },
              {
                num: "02",
                title: "Commercial Showroom Advisory",
                desc: "High-footfall commercial showroom plots on arterial roads in Mohali IT City, Aerocity, and JLPL corridors.",
              },
              {
                num: "03",
                title: "To-Let & Rental Services",
                desc: "Helping property owners find verified tenants and tenants find the right space across Tricity.",
              },
              {
                num: "04",
                title: "NRI Investment Advisory",
                desc: "Specialized advisory for NRIs with power of attorney support and remote transaction management.",
              },
            ].map((service, i) => (
              <div
                key={i}
                ref={addRef}
                className="reveal"
                style={{
                  padding: "48px",
                  background: "var(--dark-3)",
                  border: "1px solid var(--border-gold)",
                  transition: "all 0.4s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.background = "var(--dark)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-gold)";
                  e.currentTarget.style.background = "var(--dark-3)";
                }}
              >
                <div
                  style={{
                    color: "var(--gold)",
                    fontSize: "48px",
                    fontWeight: 300,
                    opacity: 0.15,
                    marginBottom: "20px",
                    lineHeight: 1,
                  }}
                >
                  {service.num}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 300,
                    marginBottom: "16px",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div ref={addRef} className="reveal" style={{ textAlign: "center", marginTop: "48px" }}>
            <Link
              href="/services"
              style={{
                display: "inline-block",
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                padding: "14px 40px",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="about-grid">
            <div ref={addRef} className="reveal">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid var(--border-gold)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                  alt="Inder Thakral"
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    objectFit: "cover",
                    display: "block",
                    filter: "grayscale(30%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "40px",
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 100%)",
                  }}
                >
                  <p
                    style={{
                      color: "var(--gold)",
                      fontSize: "11px",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Inder Thakral
                  </p>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "13px",
                      lineHeight: 1.6,
                    }}
                  >
                    Principal Advisor · 15+ Years Tricity Expertise
                  </p>
                </div>
              </div>
            </div>

            <div ref={addRef} className="reveal">
              <p
                style={{
                  color: "var(--gold)",
                  fontSize: "11px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                The Principal Advisor
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  marginBottom: "32px",
                }}
              >
                Personal Service.
                <br />
                <em style={{ color: "var(--gold)" }}>Verified Results.</em>
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "16px",
                  lineHeight: 1.9,
                  marginBottom: "24px",
                }}
              >
                Inder Thakral is an independent real estate advisory serving the
                Chandigarh Tricity. Every transaction is personally overseen,
                every title is carefully verified, and every client receives
                direct attention backed by over 15 years of local market
                expertise.
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "16px",
                  lineHeight: 1.9,
                  marginBottom: "40px",
                }}
              >
                The firm provides trusted guidance for buying, selling, leasing,
                and investing in residential and commercial properties — with a
                simple promise: never show a property that would not be
                recommended to family.
              </p>
              <Link
                href="/about"
                style={{
                  display: "inline-block",
                  background: "var(--gold)",
                  color: "var(--dark)",
                  padding: "16px 40px",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section
        style={{
          padding: "120px 48px",
          background: "var(--dark-2)",
          borderTop: "1px solid var(--border-gold)",
          borderBottom: "1px solid var(--border-gold)",
        }}
      >
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <div ref={addRef} className="reveal">
            <p
              style={{
                color: "var(--gold)",
                fontSize: "11px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              Our Philosophy
            </p>
            <p
              style={{
                fontSize: "clamp(20px, 3vw, 32px)",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "var(--text-primary)",
                marginBottom: "32px",
                fontStyle: "italic",
              }}
            >
              "I will never show you a property I would not recommend to my own
              family. Your investment is our responsibility."
            </p>
            <p
              style={{
                color: "var(--gold)",
                fontSize: "13px",
                letterSpacing: "2px",
              }}
            >
              — Inder Thakral
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        style={{ padding: "120px 48px", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.04,
          }}
        />
        <div
          style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}
        >
          <div ref={addRef} className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                color: "var(--gold)",
                fontSize: "11px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Get In Touch
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 300,
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              Ready to <em style={{ color: "var(--gold)" }}>Invest?</em>
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "15px",
                lineHeight: 1.8,
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              Every engagement begins with a personal conversation. Share your
              requirements and we will get back to you within 24 hours.
            </p>
          </div>

          <div
            ref={addRef}
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
            }}
          >
            {/* Contact Info */}
            <div>
              <div style={{ marginBottom: "40px" }}>
                <p
                  style={{
                    color: "var(--gold)",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Call Directly
                </p>
                <a
                  href="tel:+919815901234"
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "20px",
                    textDecoration: "none",
                    fontWeight: 300,
                    transition: "color 0.3s ease",
                  }}
                >
                  +91 98159 01234
                </a>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <p
                  style={{
                    color: "var(--gold)",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Email
                </p>
                <a
                  href="mailto:care@inderthakral.com"
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "16px",
                    textDecoration: "none",
                    fontWeight: 300,
                    transition: "color 0.3s ease",
                  }}
                >
                  care@inderthakral.com
                </a>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <p
                  style={{
                    color: "var(--gold)",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Office
                </p>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "15px",
                    lineHeight: 1.8,
                  }}
                >
                  Mohali, Chandigarh Tricity
                  <br />
                  Punjab, India
                </p>
              </div>

              <div>
                <p
                  style={{
                    color: "var(--gold)",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/919815901234?text=Hi%20Inder,%20I%20am%20interested%20in%20discussing%20a%20property%20in%20Tricity."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#25D366",
                    color: "#fff",
                    padding: "14px 28px",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="form-input"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="form-input"
                />
              </div>
              <div>
                <select
                  name="interest"
                  className="form-input"
                  style={{ color: "var(--text-faint)" }}
                >
                  <option value="">What are you looking for?</option>
                  <option value="residential">Residential Plot / Home</option>
                  <option value="commercial">Commercial Showroom</option>
                  <option value="rental">To-Let / Rental</option>
                  <option value="nri">NRI Investment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  className="form-input form-textarea"
                />
              </div>
              <button type="submit" className="form-btn">
                Send Enquiry
              </button>
              <p
                style={{
                  color: "var(--text-faint)",
                  fontSize: "11px",
                  textAlign: "center",
                  marginTop: "8px",
                }}
              >
                We typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div>
          <div
            style={{
              color: "var(--gold)",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Inder Thakral Properties
          </div>
          <div
            style={{
              color: "var(--text-muted)",
              fontSize: "11px",
              marginTop: "4px",
            }}
          >
            2026 · Independent Advisory · Mohali, Chandigarh Tricity
          </div>
        </div>
        <div
          style={{
            color: "var(--text-muted)",
            fontSize: "10px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Verified Title Deeds · By Appointment Only
        </div>
      </footer>
    </main>
  );
}