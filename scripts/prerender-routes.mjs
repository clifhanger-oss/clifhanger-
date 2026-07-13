import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const siteUrl = "https://www.cliffhangerleb.com";
const source = readFileSync(new URL("../src/lib/products.ts", import.meta.url), "utf8");
const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const categoryMatch = source.match(/export const CATEGORY_ORDER: string\[\] = \[(.*?)\];/s);
if (!categoryMatch) throw new Error("Could not read CATEGORY_ORDER from products.ts");
const categories = categoryMatch[1].match(/"([^"]+)"/g).map((value) => JSON.parse(value));
const products = [...source.matchAll(/"code": "([^"]+)",[\s\S]*?"name": "([^"]+)",[\s\S]*?"title": (?:"([^"]*)"|null),[\s\S]*?"category": "([^"]+)",[\s\S]*?"image": "([^"]+)",[\s\S]*?"status": "([^"]+)",[\s\S]*?"rating": "([^"]+)",[\s\S]*?"available": (true|false),[\s\S]*?"description": "([^"]*)"/g)]
  .map(([, code, name, title, category, image, status, rating, available, description]) => ({ code, name, title: title || name, category, image, status, rating, available, description }));

const slugify = (value) => value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const escape = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const replaceMeta = (document, selector, value) => document.replace(selector, (tag) => tag.replace(/content="[^"]*"/, `content="${escape(value)}"`));

function writeRoute(path, title, description, body) {
  const url = `${siteUrl}${path}`;
  let document = html.replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`);
  document = replaceMeta(document, /<meta name="description"[^>]*>/, description);
  document = replaceMeta(document, /<meta property="og:title"[^>]*>/, title);
  document = replaceMeta(document, /<meta property="og:description"[^>]*>/, description);
  document = replaceMeta(document, /<meta property="og:url"[^>]*>/, url);
  document = replaceMeta(document, /<meta name="twitter:title"[^>]*>/, title);
  document = replaceMeta(document, /<meta name="twitter:description"[^>]*>/, description);
  document = document.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  document = document.replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript><main>${body}</main></noscript>`);
  const directory = new URL(`../dist${path}/`, import.meta.url);
  mkdirSync(directory, { recursive: true });
  writeFileSync(new URL("index.html", directory), document);
}

writeRoute("/products", "Climbing Equipment & Outdoor Gear | Cliffhanger", `Browse ${products.length} climbing products in Lebanon: ropes, carabiners, belay devices, helmets, shoes and certified outdoor gear.`, `<h1>Climbing Equipment &amp; Outdoor Gear</h1><p>Browse ${products.length} certified climbing and outdoor products from Cliffhanger in Lebanon.</p><ul>${products.map((product) => `<li><a href="/products/${slugify(product.name)}-${product.code.toLowerCase()}">${escape(product.name)}</a> — ${escape(product.category)}</li>`).join("")}</ul>`);

for (const category of categories) {
  const listed = products.filter((product) => product.category === category);
  writeRoute(`/categories/${slugify(category)}`, `${category} | Climbing Gear | Cliffhanger`, `Browse ${listed.length} ${category.toLowerCase()} products from Cliffhanger, Lebanon's climbing equipment specialist.`, `<h1>${escape(category)}</h1><p>${listed.length} climbing products from Cliffhanger.</p><ul>${listed.map((product) => `<li><a href="/products/${slugify(product.name)}-${product.code.toLowerCase()}">${escape(product.name)}</a></li>`).join("")}</ul>`);
}

for (const product of products) {
  const path = `/products/${slugify(product.name)}-${product.code.toLowerCase()}`;
  writeRoute(path, `${product.title} ${product.category} | Cliffhanger`, `${product.title}: ${product.description}`.slice(0, 155), `<article><p>${escape(product.category)}</p><h1>${escape(product.title)}</h1><img src="${escape(product.image)}" alt="${escape(product.title)}" /><p>${escape(product.description)}</p><p>Certification / rating: ${escape(product.rating)}</p><p><a href="https://wa.me/9613276938">Ask Cliffhanger about availability</a></p></article>`);
}

const staticPages = {
  "/about": ["About Cliffhanger", "Cliffhanger has supplied certified climbing and outdoor equipment in Lebanon since 2003.", "Cliffhanger is a Lebanon-based climbing equipment specialist. Since 2003, we have helped climbers choose certified hardware, ropes, helmets, shoes, and accessories."],
  "/partners": ["Official Climbing Gear Partners | Cliffhanger", "Meet Cliffhanger's official climbing equipment partners: Edelrid and Tendon.", "Cliffhanger stocks climbing equipment from EDELRID of Germany and TENDON of the Czech Republic."],
  "/contact": ["Contact Cliffhanger | Climbing Gear Lebanon", "Contact Cliffhanger in Lebanon for climbing equipment availability, product specifications, and gear enquiries.", "Contact Cliffhanger by WhatsApp, phone at 03 276 938, or email Cliffhangerleb@hotmail.com for climbing gear enquiries in Lebanon."],
  "/certifications": ["Climbing Equipment Certifications | Cliffhanger", "Learn how Cliffhanger presents manufacturer-provided climbing equipment certifications in Lebanon.", "Cliffhanger lists manufacturer-provided certification details on relevant product pages. Contact us for product-specific information."],
  "/privacy": ["Privacy Policy | Cliffhanger", "Cliffhanger privacy policy.", "Read the Cliffhanger privacy policy or contact us with questions about your data."],
  "/terms": ["Terms of Service | Cliffhanger", "Cliffhanger terms of service.", "Read the Cliffhanger terms of service for use of this website and product information."],
  "/returns": ["Returns & Exchanges | Cliffhanger", "Cliffhanger returns and exchanges policy.", "Contact Cliffhanger to discuss a return, exchange, warranty, or product concern."],
};
for (const [path, [title, description, body]] of Object.entries(staticPages)) writeRoute(path, title, description, `<h1>${escape(title)}</h1><p>${escape(body)}</p>`);
console.log(`Prerendered ${1 + categories.length + products.length + Object.keys(staticPages).length} crawlable route documents.`);
