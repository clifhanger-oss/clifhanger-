import { existsSync, readFileSync } from "node:fs";
import {
  categories,
  categoryPath,
  productPath,
  products,
  productsInCategory,
} from "./catalog-data.mjs";

const siteUrl = "https://www.cliffhangerleb.com";
const staticPaths = [
  "/",
  "/products",
  ...categories.map(categoryPath),
  ...products.map(productPath),
  "/about",
  "/partners",
  "/contact",
  "/certifications",
  "/privacy",
  "/terms",
  "/returns",
];
const sitemap = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const failures = [];

if (sitemapUrls.length !== staticPaths.length) {
  failures.push(`Sitemap has ${sitemapUrls.length} URLs; expected ${staticPaths.length}.`);
}

for (const path of staticPaths) {
  const file = new URL(path === "/" ? "../dist/index.html" : `../dist${path}/index.html`, import.meta.url);
  if (!existsSync(file)) {
    failures.push(`Missing static route file for ${path}.`);
    continue;
  }
  const document = readFileSync(file, "utf8");
  const url = `${siteUrl}${path}`;
  if (!sitemapUrls.includes(url)) failures.push(`Sitemap is missing ${path}.`);
  if (!document.includes(`<link rel="canonical" href="${url}" />`)) failures.push(`Canonical mismatch for ${path}.`);
  if (!document.includes(`<meta property="og:url" content="${url}"`)) failures.push(`Open Graph URL mismatch for ${path}.`);
}

for (const category of categories) {
  const document = readFileSync(new URL(`../dist${categoryPath(category)}/index.html`, import.meta.url), "utf8");
  const listed = productsInCategory(category);
  const productLinks = [...document.matchAll(/href="\/products\/[^\"]+"/g)];
  if (productLinks.length !== listed.length) failures.push(`${category} has ${productLinks.length} static product links; expected ${listed.length}.`);
  if (category === "Pulleys" && !document.includes(`href="${productPath(products.find((product) => product.name === "Warp"))}"`)) failures.push("Pulleys static page is missing cross-listed Warp.");
  if ((document.match(/aria-current="page"/g) ?? []).length !== 1) failures.push(`${category} must mark exactly one active category link.`);
}

const home = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
if (!home.includes(`"numberOfItems":${products.length}`)) failures.push("Homepage static catalog ItemList is missing or has the wrong count.");

for (const product of products) {
  const path = productPath(product);
  const document = readFileSync(new URL(`../dist${path}/index.html`, import.meta.url), "utf8");
  if (!document.includes(`"@id":"${siteUrl}${path}#product"`)) failures.push(`Product JSON-LD missing for ${path}.`);
  if (!document.includes("Technical information")) failures.push(`Static technical information missing for ${path}.`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Verified ${staticPaths.length} sitemap/static routes, ${categories.length} category switchers, and ${products.length} Product schemas.`);
