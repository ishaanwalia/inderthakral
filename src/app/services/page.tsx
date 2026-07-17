import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Real Estate Advisory Services — Plots, Showrooms, Rentals & NRI",
  description:
    "End-to-end real estate advisory in the Chandigarh Tricity: residential plots and homes, commercial showroom acquisition, To-Let and rental services, and NRI investment advisory with remote transaction support.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Real Estate Advisory Services — Plots, Showrooms, Rentals & NRI",
    description:
      "Residential plots, commercial showrooms, To-Let and rental services, and NRI investment advisory across the Chandigarh Tricity.",
    url: "/services/",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
