import { CATEGORY_ORDER, PRODUCTS, type Product } from "@/lib/products";

export const SITE_URL = "https://www.cliffhangerleb.com";

export function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function productSlug(product: Product) {
  return `${slugify(product.name)}-${product.code.toLowerCase()}`;
}

export function categorySlug(category: string) {
  return slugify(category);
}

export function productsInCategory(category: string) {
  return PRODUCTS.filter(
    (product) => product.category === category || product.alsoInCategories?.includes(category),
  );
}

export function getCategoryBySlug(slug: string) {
  return CATEGORY_ORDER.find((category) => categorySlug(category) === slug);
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((product) => productSlug(product) === slug);
}
