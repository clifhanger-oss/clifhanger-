import type { Product } from "@/lib/products";

// Same placeholder domain as use-seo.ts / index.html — swap before deploy.
const SITE_URL = "https://cliffhanger-gear.com";

/**
 * Builds an ItemList/Product JSON-LD block from the live product catalog, so
 * it is derived from the single source of truth (products.ts) and can never
 * drift out of sync the way the old hand-written index.html block did.
 * No price/offers — the site is non-transactional and has no price data.
 */
export function buildProductListJsonLd(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#catalog`,
    name: "Cliffhanger Product Catalog",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => {
      const hasCertSpec = p.specs.some((s) => s.label.toLowerCase() === "certification");
      const additionalProperty = [
        ...p.specs.map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.value })),
        ...(p.certification && !hasCertSpec
          ? [{ "@type": "PropertyValue", name: "Certification", value: p.certification }]
          : []),
      ];
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          "@id": `${SITE_URL}/#product-${p.code}`,
          sku: p.code,
          name: p.name,
          category: p.category,
          description: (p.description || p.name).slice(0, 300),
          image: `${SITE_URL}${p.image}`,
          ...(additionalProperty.length ? { additionalProperty } : {}),
          seller: { "@id": `${SITE_URL}/#organization` },
        },
      };
    }),
  };
}
