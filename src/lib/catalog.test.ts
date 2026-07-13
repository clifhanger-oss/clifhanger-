import { describe, expect, it } from "vitest";
import { CATEGORY_ORDER, PRODUCTS } from "@/lib/products";
import { categorySlug, getCategoryBySlug, getProductBySlug, productSlug, productsInCategory } from "@/lib/catalog";

describe("catalog SEO routes", () => {
  it("creates a unique, reversible crawlable route for every product", () => {
    const slugs = PRODUCTS.map(productSlug);
    expect(new Set(slugs).size).toBe(PRODUCTS.length);
    expect(slugs.every((slug) => getProductBySlug(slug))).toBe(true);
  });

  it("creates a crawlable route for every catalog category", () => {
    expect(CATEGORY_ORDER.every((category) => getCategoryBySlug(categorySlug(category)) === category)).toBe(true);
    expect(CATEGORY_ORDER.every((category) => productsInCategory(category).length > 0)).toBe(true);
  });
});
