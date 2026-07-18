import { properties } from "@/data/properties";
import { insights } from "@/data/insights";
import { site } from "@/data/site";

export const dynamic = "force-static";

// Hand-built sitemap (instead of Next's sitemap.ts) so we can attach the
// xml-stylesheet processing instruction — /sitemap.xsl renders it as a
// readable branded page in browsers while crawlers read the raw XML.

type Entry = { loc: string; lastmod: string; changefreq: string; priority: string };

export function GET() {
  const today = new Date().toISOString().slice(0, 10);

  const entries: Entry[] = [
    { loc: `${site.url}/`, lastmod: today, changefreq: "weekly", priority: "1.0" },
    { loc: `${site.url}/properties/`, lastmod: today, changefreq: "weekly", priority: "0.9" },
    { loc: `${site.url}/services/`, lastmod: today, changefreq: "monthly", priority: "0.8" },
    { loc: `${site.url}/about/`, lastmod: today, changefreq: "monthly", priority: "0.8" },
    { loc: `${site.url}/insights/`, lastmod: today, changefreq: "weekly", priority: "0.7" },
    ...properties.map((p) => ({
      loc: `${site.url}/properties/${p.id}/`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.7",
    })),
    ...insights.map((a) => ({
      loc: `${site.url}/insights/${a.slug}/`,
      lastmod: a.date,
      changefreq: "monthly",
      priority: "0.6",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
