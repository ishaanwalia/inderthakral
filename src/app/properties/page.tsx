import type { Metadata } from "next";
import PropertiesClient from "./PropertiesClient";

export const metadata: Metadata = {
  title: "Verified Plots & Showrooms — Mohali & New Chandigarh",
  description:
    "Residential plots and commercial showrooms across Mohali, New Chandigarh, Aerocity and IT City — 100% verified titles. Ask for current inventory.",
  alternates: { canonical: "/properties/" },
  openGraph: {
    title: "Verified Plots & Showrooms — Mohali & New Chandigarh",
    description:
      "Browse verified residential plots and commercial showroom plots across Mohali, New Chandigarh, Aerocity and IT City.",
    url: "/properties/",
  },
};

export default function PropertiesPage() {
  return <PropertiesClient />;
}
