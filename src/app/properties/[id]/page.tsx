import { properties } from "@/data/properties";
import PropertyDetailClient from "./PropertyDetailClient";

// For static export, we need to handle the id with trailing slash
export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

// This ensures the page works with trailingSlash: true
export const dynamicParams = false;

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  // Handle both with and without trailing slash
  const cleanId = params.id.replace(/\/$/, '');
  const property = properties.find(p => p.id === cleanId);
  
  if (!property) {
    return (
      <main style={{ background: "var(--dark)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "var(--gold)", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>Property Not Found</p>
          <a href="/properties" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>← Back to Properties</a>
        </div>
      </main>
    );
  }

  return <PropertyDetailClient property={property} />;
}