import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://www.inderthakral.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Inder Thakral — Real Estate & Leasing | Mohali, Chandigarh Tricity",
    template: "%s | Inder Thakral Real Estate",
  },
  description:
    "Verified residential plots and premium commercial showrooms across Mohali, New Chandigarh & Panchkula. Direct advisory by Inder Thakral — 15+ years of Tricity real estate expertise.",
  keywords: [
    "Inder Thakral",
    "Mohali real estate",
    "Chandigarh property",
    "Tricity land",
    "residential plots Mohali",
    "commercial showroom Mohali",
    "property dealer Mohali",
    "NRI investment",
    "New Chandigarh plots",
    "Aerocity Mohali",
    "premium land advisory",
  ],
  authors: [{ name: "Inder Thakral Real Estate & Leasing" }],
  creator: "Inder Thakral Real Estate & Leasing",
  publisher: "Inder Thakral Real Estate & Leasing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Inder Thakral Real Estate & Leasing",
    locale: "en_IN",
    title: "Inder Thakral — Real Estate & Leasing | Mohali, Chandigarh Tricity",
    description:
      "Verified residential plots and premium commercial showrooms across Mohali, New Chandigarh & Panchkula. Personal advisory, 100% verified titles.",
    images: [
      {
        url: "/showroom-exterior.jpeg",
        width: 1148,
        height: 1400,
        alt: "Inder Thakral Real Estate & Leasing office, Sector 108, Mohali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inder Thakral — Real Estate & Leasing | Mohali, Chandigarh Tricity",
    description:
      "Verified residential plots and premium commercial showrooms across Mohali, New Chandigarh & Panchkula.",
    images: ["/showroom-exterior.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Inder Thakral Real Estate & Leasing",
  url: SITE_URL,
  image: `${SITE_URL}/showroom-exterior.jpeg`,
  logo: `${SITE_URL}/showroom-exterior.jpeg`,
  telephone: "+91-98159-01234",
  email: "care@inderthakral.com",
  founder: { "@type": "Person", name: "Inder Thakral" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "SCO 124, Sector-108, Pine Wood Center Emaar",
    addressLocality: "Mohali",
    addressRegion: "Punjab",
    postalCode: "140306",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Mohali" },
    { "@type": "City", name: "Chandigarh" },
    { "@type": "City", name: "New Chandigarh" },
    { "@type": "City", name: "Panchkula" },
  ],
  priceRange: "₹₹₹",
  knowsAbout: [
    "Residential plots",
    "Commercial showrooms",
    "Rental and leasing",
    "NRI real estate investment",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
