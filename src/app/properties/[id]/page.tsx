import { properties } from "@/data/properties";
import PropertyDetailClient from "./PropertyDetailClient";

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Next.js 15+ params is a Promise — must await it
  const { id } = await params;
  
  // Handle both with and without trailing slash
  const cleanId = id.replace(/\/$/, '');
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