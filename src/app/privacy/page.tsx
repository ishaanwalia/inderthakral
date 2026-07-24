import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Inder Thakral Property Consultants collects, uses, and protects the information you share through this website.",
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

export default function PrivacyPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--fg)", fontFamily: "var(--font-sans)" }}>
      <Nav />
      <section style={{ paddingTop: "136px", paddingBottom: "40px", paddingLeft: "48px", paddingRight: "48px" }} className="section-pad">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={sectionLabelStyle}>Legal</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-2px", marginBottom: "40px", color: "var(--fg)" }}>
            Privacy Policy
          </h1>

          <p style={bodyStyle}>
            This policy explains what information {site.brand} collects when you use inderthakral.com,
            why we collect it, and how it is handled. We collect the minimum needed to respond to your
            enquiry and never sell your information to third parties.
          </p>

          <h2 style={headingStyle}>What we collect</h2>
          <p style={bodyStyle}>
            When you submit the enquiry form or contact us via WhatsApp, email, or phone, we receive
            whatever you choose to share — typically your name, email address, phone number, and the
            details of what you are looking for. We do not use cookies for tracking or run advertising
            pixels on this site.
          </p>

          <h2 style={headingStyle}>How we use it</h2>
          <p style={bodyStyle}>
            Enquiry details are used solely to respond to you about the property or advisory service
            you asked about — by phone, email, or WhatsApp. The website enquiry form is delivered to{" "}
            {site.email} using FormSubmit, a third-party form-delivery service that transmits your
            submission to our inbox; if that delivery fails, the form opens a pre-filled WhatsApp
            message to Mr. Thakral instead, sent directly from your device.
          </p>

          <h2 style={headingStyle}>Data retention & your rights</h2>
          <p style={bodyStyle}>
            We retain enquiry details only as long as needed to follow up on your request or as long as
            you remain a client. You can ask us to access, correct, or delete any information we hold
            about you at any time by writing to {site.email}.
          </p>

          <h2 style={headingStyle}>Third-party links</h2>
          <p style={bodyStyle}>
            This site links out to WhatsApp and Google Maps. Those services have their own privacy
            policies, which we encourage you to review separately.
          </p>

          <h2 style={headingStyle}>Contact</h2>
          <p style={{ ...bodyStyle, marginBottom: 0 }}>
            Questions about this policy can be sent to {site.email} or {site.phoneDisplay}.
          </p>
        </div>
      </section>
      <div style={{ height: "40px" }} />
      <Footer />
    </main>
  );
}
