import type { Product } from "@/lib/products";

const SITE_URL = "https://www.cliffhangerleb.com";

/**
 * Builds an ItemList/Product JSON-LD block from the live product catalog, so
 * it is derived from the single source of truth (products.ts) and can never
 * drift out of sync the way the old hand-written index.html block did.
 *
 * INTENTIONALLY NO price / offers / review / aggregateRating — permanent,
 * not a bug. This business is non-transactional (WhatsApp-inquiry-only, no
 * checkout, no public prices, no review system), so there is no honest value
 * for any of those three fields. Google Search Console will keep flagging
 * every item here under "Product snippets":
 *   'Either "offers", "review" or "aggregateRating" should be specified'
 * That warning is expected and does not need "fixing":
 *   - It gates eligibility for an optional rich-result (price/star snippet
 *     in the SERP) — an e-commerce enhancement, not a content-quality or
 *     indexing signal. Leaving it unmet carries no ranking/indexing penalty.
 *   - Adding a partial `offers` object (e.g. only `availability`, no
 *     `price`/`priceCurrency`) does NOT resolve it — Google's Offer schema
 *     requires price + priceCurrency, so that only swaps this warning for a
 *     "missing price" one. There is no schema.org/Google "price on request"
 *     construct that grants eligibility without a real price.
 *   - DO NOT fabricate a price, review, or aggregateRating to silence this.
 *     Structured data must reflect real, visible on-page content — inventing
 *     invisible price/review data is "spammy structured data" under Google's
 *     spam policies and risks a manual action.
 *   - DO NOT wire `Product.rating` in here as `aggregateRating`/`review`.
 *     Despite the field name, `p.rating` holds the EN/UIAA/CE safety-
 *     certification standard (e.g. "EN 15151-2"), not a customer star
 *     rating — it is non-numeric and carries no review sentiment. Mapping
 *     it into aggregateRating would itself be fabricated/misleading markup.
 *
 * If this GSC item ever needs action, the only legitimate options are:
 * (a) leave as-is, treat the report as a permanent informational non-issue —
 *     recommended, keeps full Product/entity semantics for Google + AI
 *     crawlers; or
 * (b) stop typing catalog entries as schema.org/Product so the validator
 *     stops evaluating them at all (loses some entity/GEO value).
 * Never (c): invent data to pass validation.
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
