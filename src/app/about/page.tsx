import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About — 38+ Years of Tricity Real Estate",
  description:
    "Independent advisor with 38+ years of Mohali expertise, ₹450Cr+ in transactions, 3000+ clients. Office: Thakral Towers, Sector 108, Mohali.",
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
