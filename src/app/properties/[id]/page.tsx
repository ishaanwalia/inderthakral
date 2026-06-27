import { properties } from "@/data/properties";
import PropertyDetailClient from "./PropertyDetailClient";

// Server function - NO "use client" here
export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

// Server component that passes data to client component
export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === params.id);
  
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