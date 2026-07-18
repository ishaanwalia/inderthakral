<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Sitemap — Inder Thakral Property Consultants</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          body { margin: 0; padding: 48px 24px; background: #16191F; color: #fff;
                 font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif; }
          .wrap { max-width: 880px; margin: 0 auto; }
          h1 { font-size: 22px; font-weight: 700; letter-spacing: -0.5px; margin: 0 0 6px; }
          .sub { color: rgba(255,255,255,0.45); font-size: 13px; margin: 0 0 32px; }
          .sub a { color: #00D4FF; text-decoration: none; }
          table { width: 100%; border-collapse: collapse; font-size: 14px;
                  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
                  border-radius: 12px; overflow: hidden; }
          th { text-align: left; padding: 12px 16px; font-size: 11px; letter-spacing: 2px;
               text-transform: uppercase; color: #00D4FF; background: rgba(0,212,255,0.06);
               border-bottom: 1px solid rgba(255,255,255,0.08); }
          td { padding: 11px 16px; border-bottom: 1px solid rgba(255,255,255,0.05);
               color: rgba(255,255,255,0.8); }
          tr:last-child td { border-bottom: none; }
          td a { color: rgba(255,255,255,0.85); text-decoration: none; }
          td a:hover { color: #00D4FF; }
          .num { color: rgba(255,255,255,0.35); }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>Sitemap — Inder Thakral Property Consultants</h1>
          <p class="sub">
            <xsl:value-of select="count(sm:urlset/sm:url)"/> pages ·
            This file tells search engines what to index. Visit the site at
            <a href="https://www.inderthakral.com/">www.inderthakral.com</a>
          </p>
          <table>
            <tr><th>URL</th><th>Last modified</th><th>Priority</th></tr>
            <xsl:for-each select="sm:urlset/sm:url">
              <tr>
                <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                <td class="num"><xsl:value-of select="sm:lastmod"/></td>
                <td class="num"><xsl:value-of select="sm:priority"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
