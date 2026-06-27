import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inder Thakral | Tricity Land Advisory",
  description: "Verified plots and premium commercial showrooms across the Mohali expansion corridor. Direct advisory by Inder Thakral — 15+ years of Tricity real estate expertise.",
  keywords: ["Inder Thakral", "Mohali real estate", "Chandigarh property", "Tricity land", "residential plots Mohali", "commercial showroom", "NRI investment"],
  authors: [{ name: "Inder Thakral Properties" }],
  openGraph: {
    title: "Inder Thakral | Tricity Land Advisory",
    description: "Verified plots and premium commercial showrooms across the Mohali expansion corridor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}