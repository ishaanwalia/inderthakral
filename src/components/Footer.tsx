import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer style={{
      padding: "48px 48px",
      borderTop: "1px solid rgba(var(--fg-rgb),0.04)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "24px",
      background: "rgba(var(--bg-rgb),0.5)",
    }}>
      <div>
        <div style={{
          color: "var(--accent)",
          fontSize: "10px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          fontFamily: "var(--font-mono)",
          fontWeight: 700,
        }}>{site.brand}</div>
        <div style={{ color: "rgba(var(--fg-rgb),0.3)", fontSize: "12px", marginTop: "6px", letterSpacing: "0.5px" }}>2026 · {site.address.oneLine}</div>
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
    </footer>
  );
}
