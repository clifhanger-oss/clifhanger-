import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/lib/products.ts", import.meta.url), "utf8");
const categoryMatch = source.match(/export const CATEGORY_ORDER: string\[\] = \[(.*?)\];/s);
const productsMatch = source.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*\]);\s*$/);

if (!categoryMatch || !productsMatch) {
  throw new Error("Could not read the catalog source data.");
}

export const categories = categoryMatch[1]
  .match(/"([^"]+)"/g)
  .map((value) => JSON.parse(value));
export const products = JSON.parse(productsMatch[1]);

export function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function productPath(product) {
  return `/products/${slugify(product.name)}-${product.code.toLowerCase()}`;
}

export function categoryPath(category) {
  return `/categories/${slugify(category)}`;
}

export function productsInCategory(category) {
  return products.filter(
    (product) => product.category === category || product.alsoInCategories?.includes(category),
  );
}
