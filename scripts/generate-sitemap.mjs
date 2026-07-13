import { writeFileSync } from "node:fs";
import { categories, categoryPath, productPath, products } from "./catalog-data.mjs";

const siteUrl = "https://www.cliffhangerleb.com";
const url = (loc, changefreq, priority) => `  <url>\n    <loc>${siteUrl}${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

const entries = [
  url("/", "weekly", "1.0"),
  url("/products", "weekly", "0.9"),
  ...categories.map((category) => url(categoryPath(category), "weekly", "0.8")),
  ...products.map((product) => url(productPath(product), "monthly", "0.7")),
  url("/about", "monthly", "0.6"),
  url("/partners", "monthly", "0.6"),
  url("/contact", "monthly", "0.6"),
  url("/certifications", "yearly", "0.6"),
  url("/privacy", "yearly", "0.3"),
  url("/terms", "yearly", "0.3"),
  url("/returns", "yearly", "0.3"),
];

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`);
console.log(`Generated sitemap with ${entries.length} URLs.`);
