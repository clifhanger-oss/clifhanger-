import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import {
  CATEGORY_ORDER,
  PRODUCTS,
  type Product,
} from "@/lib/products";
import {
  categorySlug,
  getCategoryBySlug,
  getProductBySlug,
  productSlug,
  productsInCategory,
  SITE_URL,
} from "@/lib/catalog";
import { useSEO } from "@/lib/use-seo";

const wordmark = "/logo-wordmark.webp";

function JsonLd({ value }: { value: object }) {
  useEffect(() => {
    const id = "route-jsonld";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(value);
    return () => script?.remove();
  }, [value]);
  return null;
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      <header className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-border bg-black/90 backdrop-blur-md px-4 md:px-8 py-4">
        <Link href="/" className="flex items-center"><img src={wordmark} alt="Cliffhanger" width={812} height={184} className="h-6 md:h-7 w-auto object-contain" /></Link>
        <Link href="/products" className="font-mono text-[11px] uppercase tracking-widest text-gray-300 hover:text-primary transition-colors">Browse all gear</Link>
      </header>
      {children}
      <footer className="border-t border-border px-6 py-8 text-center font-mono text-[10px] uppercase tracking-widest text-gray-500">
        <Link href="/partners" className="hover:text-primary">Official partners</Link><span className="mx-3">/</span><Link href="/contact" className="hover:text-primary">Contact Cliffhanger</Link>
      </footer>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${productSlug(product)}`} className="group flex flex-col overflow-hidden border border-border bg-[hsl(0_0%_4%)] hover:border-primary transition-colors">
      <div className="aspect-square bg-black p-6"><img src={product.image} alt={`${product.name} climbing gear`} width={720} height={720} loading="lazy" decoding="async" className="h-full w-full object-contain group-hover:scale-105 transition-transform" /></div>
      <div className="border-t border-border p-5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{product.category}</p>
        <h2 className="mt-2 text-xl font-bold uppercase tracking-tight">{product.name}</h2>
        <p className="mt-3 font-mono text-xs text-gray-400">{product.certification ?? product.rating}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gray-300 group-hover:text-primary">Product details <ArrowRight className="h-3.5 w-3.5" /></span>
      </div>
    </Link>
  );
}

export function ProductsPage() {
  const categories = CATEGORY_ORDER.filter((category) => productsInCategory(category).length);
  useSEO({ title: "Climbing Equipment & Outdoor Gear | Cliffhanger", description: `Browse ${PRODUCTS.length} climbing products in Lebanon: ropes, carabiners, belay devices, helmets, shoes and certified outdoor gear.`, path: "/products" });
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${SITE_URL}/products#webpage`, name: "Cliffhanger climbing equipment catalog", url: `${SITE_URL}/products`, mainEntity: { "@type": "ItemList", numberOfItems: PRODUCTS.length, itemListElement: PRODUCTS.map((product, position) => ({ "@type": "ListItem", position: position + 1, url: `${SITE_URL}/products/${productSlug(product)}`, name: product.name })) } };
  return <Layout><JsonLd value={schema} /><main className="mx-auto max-w-7xl px-6 py-16 md:py-24"><p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Cliffhanger catalog</p><h1 className="mt-4 text-5xl font-bold uppercase tracking-tighter md:text-7xl">Climbing equipment<br />& outdoor gear</h1><p className="mt-7 max-w-3xl font-mono text-sm leading-relaxed text-gray-300">Browse {PRODUCTS.length} certified climbing and outdoor products selected for climbers in Lebanon. Choose a category or open any product for specifications and an enquiry link.</p><nav aria-label="Product categories" className="mt-12 flex flex-wrap gap-3">{categories.map((category) => <Link key={category} href={`/categories/${categorySlug(category)}`} className="border border-border px-4 py-3 font-mono text-xs uppercase tracking-wide hover:border-primary hover:text-primary">{category} ({productsInCategory(category).length})</Link>)}</nav><div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{PRODUCTS.map((product) => <ProductCard key={product.id} product={product} />)}</div></main></Layout>;
}

export function CategoryPage({ slug }: { slug: string }) {
  const category = getCategoryBySlug(slug);
  const products = category ? productsInCategory(category) : [];
  useSEO({ title: category ? `${category} | Climbing Gear | Cliffhanger` : "Category Not Found | Cliffhanger", description: category ? `Browse ${products.length} ${category.toLowerCase()} products from Cliffhanger, Lebanon's climbing equipment specialist.` : "This product category could not be found.", path: `/categories/${slug}`, noindex: !category });
  if (!category) return <Layout><main className="mx-auto max-w-3xl px-6 py-24"><h1 className="text-4xl font-bold uppercase">Category not found</h1><Link href="/products" className="mt-8 inline-flex items-center gap-2 text-primary"><ArrowLeft className="h-4 w-4" /> Browse catalog</Link></main></Layout>;
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: `${category} | Cliffhanger`, url: `${SITE_URL}/categories/${slug}`, mainEntity: { "@type": "ItemList", numberOfItems: products.length, itemListElement: products.map((product, position) => ({ "@type": "ListItem", position: position + 1, url: `${SITE_URL}/products/${productSlug(product)}`, name: product.name })) } };
  return <Layout><JsonLd value={schema} /><main className="mx-auto max-w-7xl px-6 py-16 md:py-24"><Link href="/products" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-primary"><ArrowLeft className="h-4 w-4" /> All gear</Link><p className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-primary">Cliffhanger category</p><h1 className="mt-4 text-5xl font-bold uppercase tracking-tighter md:text-7xl">{category}</h1><p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-gray-300">{products.length} {category.toLowerCase()} products currently listed by Cliffhanger. Review each product page for its manufacturer specifications, certification details, and availability enquiry.</p><div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div></main></Layout>;
}

export function ProductPage({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);
  const title = product?.title ?? product?.name;
  useSEO({ title: product ? `${title} ${product.category} | Cliffhanger` : "Product Not Found | Cliffhanger", description: product ? `${title}: ${product.description}`.slice(0, 155) : "This product could not be found.", path: `/products/${slug}`, noindex: !product });
  if (!product || !title) return <Layout><main className="mx-auto max-w-3xl px-6 py-24"><h1 className="text-4xl font-bold uppercase">Product not found</h1><Link href="/products" className="mt-8 inline-flex items-center gap-2 text-primary"><ArrowLeft className="h-4 w-4" /> Browse catalog</Link></main></Layout>;
  const schema = { "@context": "https://schema.org", "@type": "Product", "@id": `${SITE_URL}/products/${slug}#product`, name: title, sku: product.code, category: product.category, description: product.description, image: `${SITE_URL}${product.image}`, additionalProperty: [...product.specs.map((spec) => ({ "@type": "PropertyValue", name: spec.label, value: spec.value })), ...(product.certification ? [{ "@type": "PropertyValue", name: "Certification", value: product.certification }] : [])], seller: { "@id": `${SITE_URL}/#organization` } };
  const waHref = `${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi Cliffhanger, I'm interested in the ${title}. Is it available?`)}`;
  return <Layout><JsonLd value={schema} /><main className="mx-auto max-w-6xl px-6 py-12 md:py-20"><nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-widest text-gray-400"><Link href="/products" className="hover:text-primary">Gear</Link><span className="mx-2">/</span><Link href={`/categories/${categorySlug(product.category)}`} className="hover:text-primary">{product.category}</Link></nav><div className="mt-10 grid gap-10 lg:grid-cols-2"><div className="aspect-square border border-border bg-[hsl(0_0%_4%)] p-8"><img src={product.image} alt={`${title} — ${product.category}`} width={900} height={900} className="h-full w-full object-contain" /></div><div><p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{product.category}</p><h1 className="mt-3 text-5xl font-bold uppercase tracking-tighter md:text-6xl">{title}</h1><p className="mt-6 font-mono text-sm leading-relaxed text-gray-300">{product.description}</p><a href={waHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 bg-primary px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest text-black hover:bg-white"><MessageCircle className="h-5 w-5" /> Ask about availability</a></div></div>{product.features.length > 0 && <section className="mt-16 max-w-3xl"><h2 className="text-2xl font-bold uppercase">Key features</h2><ul className="mt-6 grid gap-3">{product.features.map((feature) => <li key={feature} className="flex gap-3 font-mono text-sm text-gray-300"><Check className="h-4 w-4 shrink-0 text-primary" />{feature}</li>)}</ul></section>}<section className="mt-16"><h2 className="text-2xl font-bold uppercase">Technical information</h2><dl className="mt-6 grid border-t border-border sm:grid-cols-2">{product.specs.map((spec) => <div key={spec.label} className="flex justify-between gap-4 border-b border-border px-1 py-4 font-mono text-sm"><dt className="text-gray-400">{spec.label}</dt><dd className="text-right">{spec.value}</dd></div>)}</dl></section></main></Layout>;
}
