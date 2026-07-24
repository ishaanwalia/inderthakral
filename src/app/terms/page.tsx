import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing your use of the Inder Thakral Property Consultants website.",
  robots: { index: false, follow: true },
};

const sectionLabelStyle = {
  color: "var(--accent)",
  fontSize: "11px",
  letterSpacing: "4px",
  textTransform: "uppercase" as const,
  fontFamily: "var(--font-mono)",
  fontWeight: 500,
  marginBottom: "16px",
  display: "block",
};

const bodyStyle = { color: "rgba(var(--fg-rgb),var(--text-muted-a))", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" };
const headingStyle = { color: "var(--fg)", fontSize: "20px", fontWeight: 600, marginTop: "48px", marginBottom: "16px", letterSpacing: "-0.3px" };

export default function TermsPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--fg)", fontFamily: "var(--font-sans)" }}>
      <Nav />
      <section style={{ paddingTop: "136px", paddingBottom: "40px", paddingLeft: "48px", paddingRight: "48px" }} className="section-pad">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={sectionLabelStyle}>Legal</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-2px", marginBottom: "40px", color: "var(--fg)" }}>
            Terms of Use
          </h1>

          <p style={bodyStyle}>
            These terms apply to your use of inderthakral.com, operated by {site.brand}. By browsing this
            site or submitting an enquiry, you agree to the points below.
          </p>

          <h2 style={headingStyle}>Informational purpose</h2>
          <p style={bodyStyle}>
            Property listings, sizes, pricing status, and descriptions on this site are provided for
            general information only and do not constitute a legal offer, contract, or guarantee of
            availability. Details such as price, title status, and specifications are confirmed directly
            with Mr. Inder Thakral before any transaction, and are subject to change without notice.
          </p>

          <h2 style={headingStyle}>No legal or financial advice</h2>
          <p style={bodyStyle}>
            Nothing on this site constitutes legal, financial, or investment advice. Buyers and tenants
            are responsible for conducting their own due diligence, including independent title and legal
            verification, before entering into any transaction.
          </p>

          <h2 style={headingStyle}>Enquiries</h2>
          <p style={bodyStyle}>
            Submitting the enquiry form, WhatsApp message, or a call does not create any binding
            agreement. All transactions are subject to separate, formal documentation agreed to directly
            with {site.brand}.
          </p>

          <h2 style={headingStyle}>Third-party services</h2>
          <p style={bodyStyle}>
            This site uses FormSubmit to deliver enquiry emails and links to WhatsApp and Google Maps.
            We are not responsible for the availability or content of those third-party services.
          </p>

          <h2 style={headingStyle}>Contact</h2>
          <p style={{ ...bodyStyle, marginBottom: 0 }}>
            Questions about these terms can be sent to {site.email} or {site.phoneDisplay}.
          </p>
        </div>
      </section>
      <div style={{ height: "40px" }} />
      <Footer />
    </main>
  );
}
