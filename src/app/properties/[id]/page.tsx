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
  const { id } = await params;
  const cleanId = id.replace(/\/$/, '');
  const property = properties.find(p => p.id === cleanId);

  if (!property) {
    return (
      <main style={{ background: "#000000", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#00D4FF", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px", fontFamily: "var(--font-mono)", fontSize: "11px" }}>Property Not Found</p>
          <a href="/properties/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>← Back to Properties</a>
        </div>
      </main>
    );
  }

  return <PropertyDetailClient property={property} />;
}