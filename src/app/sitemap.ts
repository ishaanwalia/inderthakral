import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";

const SITE_URL = "https://www.inderthakral.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const propertyUrls = properties.map((property) => ({
    url: `${SITE_URL}/properties/${property.id}/`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${SITE_URL}/properties/`, lastModified, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/services/`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/about/`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    ...propertyUrls,
  ];
}
