import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Inder Thakral — Principal Advisor, Chandigarh Tricity",
  description:
    "Meet Inder Thakral — independent real estate advisor with 38+ years of Mohali market expertise, ₹450Cr+ in transactions, and 3000+ clients served. Visit our office at SCO 124, Thakral Towers, Sector 108, Emaar, Landran Banur Road, Mohali.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Inder Thakral — Principal Advisor, Chandigarh Tricity",
    description:
      "Independent real estate advisory with 38+ years of Tricity expertise. Every transaction personally overseen, every title verified.",
    url: "/about/",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
