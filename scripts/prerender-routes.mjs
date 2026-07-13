import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import {
  categories,
  categoryPath,
  productPath,
  products,
  productsInCategory,
} from "./catalog-data.mjs";

const siteUrl = "https://www.cliffhangerleb.com";
const baseHtml = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");

function escape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceMeta(document, selector, value) {
  return document.replace(selector, (tag) => tag.replace(/content="[^"]*"/, `content="${escape(value)}"`));
}

function productListSchema(list, path, name) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}${path}#webpage`,
    name,
    url: `${siteUrl}${path}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: list.length,
      itemListElement: list.map((product, position) => ({
        "@type": "ListItem",
        position: position + 1,
        url: `${siteUrl}${productPath(product)}`,
        name: product.title ?? product.name,
      })),
    },
  };
}

function categorySwitcher(activeCategory) {
  return `<nav aria-label="Switch product category"><ul>${categories.map((category) => `<li><a href="${categoryPath(category)}"${category === activeCategory ? " aria-current=\"page\"" : ""}>${escape(category)} (${productsInCategory(category).length})</a></li>`).join("")}</ul></nav>`;
}

function productMarkup(product) {
  const title = product.title ?? product.name;
  const specs = product.specs.map((spec) => `<div><dt>${escape(spec.label)}</dt><dd>${escape(spec.value)}</dd></div>`).join("");
  const features = product.features.length ? `<section><h2>Key features</h2><ul>${product.features.map((feature) => `<li>${escape(feature)}</li>`).join("")}</ul></section>` : "";
  return `<article><nav aria-label="Breadcrumb"><a href="/products">Gear</a> / <a href="${categoryPath(product.category)}">${escape(product.category)}</a></nav><p>${escape(product.category)}</p><h1>${escape(title)}</h1><img src="${escape(product.image)}" alt="${escape(title)} — ${escape(product.category)}" width="900" height="900" /><p>${escape(product.description)}</p>${features}<section><h2>Technical information</h2><dl>${specs}</dl></section><p><a href="https://wa.me/9613276938">Ask Cliffhanger about availability</a></p></article>`;
}

function productSchema(product, path) {
  const title = product.title ?? product.name;
  const url = `${siteUrl}${path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${url}#product`,
      name: title,
      sku: product.code,
      category: product.category,
      description: product.description,
      image: `${siteUrl}${product.image}`,
      additionalProperty: product.specs.map((spec) => ({ "@type": "PropertyValue", name: spec.label, value: spec.value })),
      seller: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Gear", item: `${siteUrl}/products` },
        { "@type": "ListItem", position: 2, name: product.category, item: `${siteUrl}${categoryPath(product.category)}` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  ];
}

function writeRoute(path, title, description, body, schemas = []) {
  const url = `${siteUrl}${path}`;
  let document = baseHtml.replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`);
  document = replaceMeta(document, /<meta name="description"[^>]*>/, description);
  document = replaceMeta(document, /<meta property="og:title"[^>]*>/, title);
  document = replaceMeta(document, /<meta property="og:description"[^>]*>/, description);
  document = replaceMeta(document, /<meta property="og:url"[^>]*>/, url);
  document = replaceMeta(document, /<meta name="twitter:title"[^>]*>/, title);
  document = replaceMeta(document, /<meta name="twitter:description"[^>]*>/, description);
  document = document.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  document = document.replace("<div id=\"root\"></div>", `<div id="root"><div class="prerender-fallback">${body}</div></div>`);
  document = document.replace(/<noscript>[\s\S]*?<\/noscript>/, "<noscript><style>#root > .prerender-fallback { display: block; }</style></noscript>");
  document = document.replace("</head>", `${schemas.map((schema) => `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`).join("")}\n  </head>`);
  const directory = new URL(path === "/" ? "../dist/" : `../dist${path}/`, import.meta.url);
  mkdirSync(directory, { recursive: true });
  writeFileSync(new URL("index.html", directory), document);
}

const catalogBody = `<main><h1>Climbing Equipment &amp; Outdoor Gear</h1><p>Browse ${products.length} certified climbing and outdoor products from Cliffhanger in Lebanon.</p>${categorySwitcher()}<ul>${products.map((product) => `<li><a href="${productPath(product)}">${escape(product.title ?? product.name)}</a> — ${escape(product.category)}</li>`).join("")}</ul></main>`;
writeRoute("/", "Cliffhanger — Climbing Equipments & Outdoor Gears", "Cliffhanger — technical climbing hardware and outdoor gear. Made for the vertical. Since 2003. Based in Lebanon.", catalogBody, [productListSchema(products, "/", "Cliffhanger Product Catalog")]);
writeRoute("/products", "Climbing Equipment & Outdoor Gear | Cliffhanger", `Browse ${products.length} climbing products in Lebanon: ropes, carabiners, belay devices, helmets, shoes and certified outdoor gear.`, catalogBody, [productListSchema(products, "/products", "Cliffhanger climbing equipment catalog")]);

for (const category of categories) {
  const listed = productsInCategory(category);
  const path = categoryPath(category);
  const body = `<main><h1>${escape(category)}</h1><p>${listed.length} climbing products from Cliffhanger.</p>${categorySwitcher(category)}<ul>${listed.map((product) => `<li><a href="${productPath(product)}">${escape(product.title ?? product.name)}</a></li>`).join("")}</ul></main>`;
  writeRoute(path, `${category} | Climbing Gear | Cliffhanger`, `Browse ${listed.length} ${category.toLowerCase()} products from Cliffhanger, Lebanon's climbing equipment specialist.`, body, [productListSchema(listed, path, `${category} | Cliffhanger`)]);
}

for (const product of products) {
  const path = productPath(product);
  const title = product.title ?? product.name;
  writeRoute(path, `${title} ${product.category} | Cliffhanger`, `${title}: ${product.description}`.slice(0, 155), productMarkup(product), productSchema(product, path));
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
for (const [path, [title, description, body]] of Object.entries(staticPages)) {
  writeRoute(path, title, description, `<main><h1>${escape(title)}</h1><p>${escape(body)}</p></main>`);
}

console.log(`Prerendered ${1 + categories.length + products.length + Object.keys(staticPages).length} crawlable route documents.`);
