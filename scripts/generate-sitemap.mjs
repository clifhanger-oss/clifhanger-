import { readFileSync, writeFileSync } from "node:fs";

const siteUrl = "https://www.cliffhangerleb.com";
const today = new Date().toISOString().slice(0, 10);
const source = readFileSync(new URL("../src/lib/products.ts", import.meta.url), "utf8");
const categoryMatch = source.match(/export const CATEGORY_ORDER: string\[\] = \[(.*?)\];/s);
if (!categoryMatch) throw new Error("Could not read CATEGORY_ORDER from products.ts");
const categories = categoryMatch[1]
  .match(/"([^"]+)"/g)
  .map((value) => JSON.parse(value));
const products = [...source.matchAll(/"code": "([^"]+)",[\s\S]*?"name": "([^"]+)"/g)]
  .map(([, code, name]) => ({ code, name }));

const slugify = (value) => value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const url = (loc, changefreq, priority) => `  <url>\n    <loc>${siteUrl}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

const entries = [
  url("/", "weekly", "1.0"),
  url("/products", "weekly", "0.9"),
  ...categories.map((category) => url(`/categories/${slugify(category)}`, "weekly", "0.8")),
  ...products.map((product) => url(`/products/${slugify(product.name)}-${product.code.toLowerCase()}`, "monthly", "0.7")),
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
