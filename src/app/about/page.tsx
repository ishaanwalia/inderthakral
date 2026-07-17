import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Inder Thakral — Principal Advisor, Chandigarh Tricity",
  description:
    "Meet Inder Thakral — independent real estate advisor with 15+ years of Mohali market expertise, ₹450Cr+ in transactions, and 500+ clients served. Visit our office at SCO 124, Sector-108, Pine Wood Center Emaar, Mohali.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Inder Thakral — Principal Advisor, Chandigarh Tricity",
    description:
      "Independent real estate advisory with 15+ years of Tricity expertise. Every transaction personally overseen, every title verified.",
    url: "/about/",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
