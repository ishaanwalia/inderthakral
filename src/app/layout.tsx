import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inder Thakral | Tricity Land Advisory",
  description: "Verified plots and premium commercial showrooms across the Mohali expansion corridor. Direct advisory by Inder Thakral.",
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