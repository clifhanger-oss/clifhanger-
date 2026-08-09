import { writeFileSync } from "node:fs";
import { categories, categoryPath, productPath, products } from "./catalog-data.mjs";

const siteUrl = "https://www.cliffhangerleb.com";
const sitemapUrl = (path) => `${siteUrl}${path}`;
const urlset = (paths) => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${sitemapUrl(path)}</loc></url>`).join("\n")}\n</urlset>\n`;

const sitemapFiles = {
  "sitemap-pages.xml": [
    "/",
    "/products",
    "/about",
    "/partners",
    "/contact",
    "/certifications",
    "/privacy",
    "/terms",
    "/returns",
  ],
  "sitemap-categories.xml": categories.map(categoryPath),
  "sitemap-products.xml": products.map(productPath),
};

for (const [filename, paths] of Object.entries(sitemapFiles)) {
  writeFileSync(new URL(`../public/${filename}`, import.meta.url), urlset(paths));
}

const indexEntries = Object.keys(sitemapFiles)
  .map((filename) => `  <sitemap><loc>${sitemapUrl(`/${filename}`)}</loc></sitemap>`)
  .join("\n");
writeFileSync(new URL("../public/sitemap.xml", import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexEntries}\n</sitemapindex>\n`);

const totalUrls = Object.values(sitemapFiles).reduce((total, paths) => total + paths.length, 0);
console.log(`Generated sitemap index and ${Object.keys(sitemapFiles).length} sitemaps with ${totalUrls} URLs.`);
