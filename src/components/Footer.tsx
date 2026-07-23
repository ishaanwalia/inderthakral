import Link from "next/link";
import { site } from "@/data/site";

const columns: [string, [string, string][]][] = [
  [
    "Explore",
    [
      ["Properties", "/properties/"],
      ["About", "/about/"],
      ["Services", "/services/"],
      ["Insights", "/insights/"],
    ],
  ],
  [
    "Contact",
    [
      ["Enquire", "/#contact"],
      ["Call", `tel:${site.phoneE164}`],
      ["Email", `mailto:${site.email}`],
    ],
  ],
  [
    "Legal",
    [
      ["Privacy Policy", "/privacy/"],
      ["Terms of Use", "/terms/"],
    ],
  ],
];

const labelStyle: React.CSSProperties = {
  color: "var(--accent)",
  fontSize: "10px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  fontFamily: "var(--font-mono)",
  fontWeight: 600,
  marginBottom: "16px",
};

const linkStyle: React.CSSProperties = {
  display: "block",
  color: "rgba(var(--fg-rgb),0.5)",
  fontSize: "13px",
  textDecoration: "none",
  padding: "6px 0",
  letterSpacing: "0.3px",
};

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(var(--fg-rgb),0.04)",
      background: "rgba(var(--bg-rgb),0.5)",
    }}>
      <div
        className="section-pad about-grid-desktop"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "56px 48px 40px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: "40px",
        }}
      >
        <div>
          <div style={{
            color: "var(--fg)",
            fontSize: "14px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: 700,
            fontFamily: "var(--font-mono)",
            marginBottom: "12px",
          }}>
            {site.brandShort}
          </div>
          <p style={{ color: "rgba(var(--fg-rgb),0.35)", fontSize: "12px", lineHeight: 1.8, maxWidth: "260px" }}>
            {site.address.oneLine}
          </p>
        </div>

        {columns.map(([heading, links]) => (
          <div key={heading}>
            <p style={labelStyle}>{heading}</p>
            {links.map(([label, href]) => (
              <Link key={label} href={href} className="hover-line" style={linkStyle}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div style={{
        borderTop: "1px solid rgba(var(--fg-rgb),0.04)",
        padding: "24px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }} className="section-pad">
        <div style={{ color: "rgba(var(--fg-rgb),0.3)", fontSize: "11px", letterSpacing: "0.5px" }}>
          © {new Date().getFullYear()} {site.brand}
        </div>
        <div style={{
          color: "rgba(var(--fg-rgb),0.2)",
          fontSize: "10px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          fontFamily: "var(--font-mono)",
          fontWeight: 500,
        }}>
          Verified Title Deeds · By Appointment Only
        </div>
      </div>
    </footer>
  );
}
