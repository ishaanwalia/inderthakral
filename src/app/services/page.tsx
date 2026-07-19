import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Advisory Services — Plots, Showrooms, Rentals & NRI",
  description:
    "Advisory across the Chandigarh Tricity: residential plots, commercial showrooms, To-Let and rentals, and NRI investment with remote support.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Advisory Services — Plots, Showrooms, Rentals & NRI",
    description:
      "Residential plots, commercial showrooms, To-Let and rental services, and NRI investment advisory across the Chandigarh Tricity.",
    url: "/services/",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
