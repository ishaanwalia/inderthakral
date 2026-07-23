import type { Metadata, Viewport } from "next";
import { Cinzel, Prata } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/data/site";
import SmoothScroll from "@/components/SmoothScroll";
import MagneticButtons from "@/components/MagneticButtons";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-day",
});

// Cinematic display serif for cine-scroll overlays. Prata stands in for the
// licensed Kaftan face — drop Kaftan-Regular.woff2 into src/fonts and switch
// this to next/font/local to use the real thing.
const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cine",
});

const SITE_URL = "https://www.inderthakral.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Inder Thakral — Property Consultants | Mohali, Chandigarh Tricity",
    template: "%s | Inder Thakral",
  },
  description:
    "Verified plots and commercial showrooms across Mohali, New Chandigarh & Panchkula. Direct advisory by Inder Thakral — 38+ years of Tricity expertise.",
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
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  authors: [{ name: site.brand }],
  creator: site.brand,
  publisher: site.brand,
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
    siteName: site.brand,
    locale: "en_IN",
    title: "Inder Thakral — Property Consultants | Mohali, Chandigarh Tricity",
    description:
      "Verified residential plots and premium commercial showrooms across Mohali, New Chandigarh & Panchkula. Personal advisory, 100% verified titles.",
    images: [
      {
        url: "/showroom-exterior.jpeg",
        width: 1792,
        height: 2400,
        alt: "Inder Thakral Property Consultants office — Thakral Towers, Sector 108, Mohali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inder Thakral — Property Consultants | Mohali, Chandigarh Tricity",
    description:
      "Verified residential plots and premium commercial showrooms across Mohali, New Chandigarh & Panchkula.",
    images: ["/showroom-exterior.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#16191F",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.brand,
  url: SITE_URL,
  image: `${SITE_URL}/showroom-exterior.jpeg`,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+91-98159-01234",
  email: site.email,
  founder: { "@type": "Person", name: "Inder Thakral" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
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
    <html lang="en" className={`${cinzel.variable} ${prata.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('theme')==='day'){document.documentElement.setAttribute('data-theme','day')}}catch(e){}})()",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <MagneticButtons />
        {children}
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
