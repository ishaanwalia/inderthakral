import type { Metadata } from "next";
import PropertiesClient from "./PropertiesClient";

export const metadata: Metadata = {
  title: "Verified Plots & Showrooms for Sale in Mohali, New Chandigarh",
  description:
    "Representative residential plots and commercial showroom listings across Mohali, New Chandigarh, Aerocity and IT City. Contact Inder Thakral for current verified inventory — 100% clear titles.",
  alternates: { canonical: "/properties/" },
  openGraph: {
    title: "Verified Plots & Showrooms for Sale in Mohali, New Chandigarh",
    description:
      "Browse verified residential plots and commercial showroom plots across Mohali, New Chandigarh, Aerocity and IT City.",
    url: "/properties/",
  },
};

export default function PropertiesPage() {
  return <PropertiesClient />;
}
