import type { Metadata } from "next";
import Link from "next/link";
import { properties } from "@/data/properties";
import { site } from "@/data/site";
import PropertyDetailClient from "./PropertyDetailClient";

const SITE_URL = "https://www.inderthakral.com";

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((p) => p.id === id.replace(/\/$/, ""));
  if (!property) {
    return { title: "Property Not Found", robots: { index: false } };
  }
  const title = property.title;
  const description = `Representative ${property.type.toLowerCase()} listing: ${property.size} in ${property.location}. ${property.highlight}. Contact Inder Thakral for current verified inventory and availability.`;
  return {
    title,
    description,
    alternates: { canonical: `/properties/${property.id}/` },
    openGraph: {
      title,
      description,
      url: `/properties/${property.id}/`,
      images: [{ url: property.image, alt: property.title }],
    },
  };
}

export default async function PropertyDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const cleanId = id.replace(/\/$/, '');
  const property = properties.find(p => p.id === cleanId);

  if (!property) {
    return (
      <main style={{ background: "#000000", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#00D4FF", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 500 }}>Property Not Found</p>
          <Link href="/properties/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "var(--font-mono)", fontWeight: 500 }}>← Back to Properties</Link>
        </div>
      </main>
    );
  }

  const listingJsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    url: `${SITE_URL}/properties/${property.id}/`,
    image: `${SITE_URL}${property.image}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
    broker: {
      "@type": "RealEstateAgent",
      name: site.brand,
      telephone: site.phoneE164,
      url: SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Properties", item: `${SITE_URL}/properties/` },
      { "@type": "ListItem", position: 3, name: property.title, item: `${SITE_URL}/properties/${property.id}/` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PropertyDetailClient property={property} />
    </>
  );
}