import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Phone, Mail, Instagram, Facebook, ArrowRight, MapPin, Menu, X } from "lucide-react";
import { MountainBackground } from "@/components/mountain-background";
import { ProductModal } from "@/components/product-modal";
import { ColorGallery } from "@/components/color-gallery";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { CONTACT } from "@/lib/contact";
import { PRODUCTS, CATEGORY_ORDER, type Product } from "@/lib/products";
import { useSEO } from "@/lib/use-seo";
import { buildProductListJsonLd } from "@/lib/product-jsonld";

// Public assets — served from /public at the site root.
const logo = "/logo.webp"; // white circular badge (original colors)
const wordmark = "/logo-wordmark.webp"; // on-dark wordmark (lime CLIFF + white HANGER)

const NAV = [
  { href: "#about", label: "About" },
  { href: "#catalog", label: "Gear" },
  { href: "#contact", label: "Contact" },
];

// A product belongs to a category if it's the primary category or one of the
// product's secondary cross-listed categories (e.g. Warp is a Hardware
// Accessory that's also listed under Pulleys) — no data duplication needed.
function inCategory(product: Product, cat: string) {
  return product.category === cat || product.alsoInCategories?.includes(cat) === true;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);
  const [activeCat, setActiveCat] = useState<string>(CATEGORY_ORDER[0]);
  const climberRef = useRef<HTMLDivElement>(null);
  const [pastHero, setPastHero] = useState(false);

  useSEO({
    title: "Cliffhanger — Climbing Equipments & Outdoor Gears",
    description: "Cliffhanger — technical climbing hardware and outdoor gear. Made for the vertical. Since 2003. Based in Lebanon.",
    path: "/",
  });

  useEffect(() => setMounted(true), []);

  // Structured data for the full catalog — derived live from PRODUCTS so it can
  // never drift out of sync with the actual categories/counts.
  useEffect(() => {
    const id = "product-list-jsonld";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(buildProductListJsonLd(PRODUCTS));
    return () => {
      document.getElementById(id)?.remove();
    };
  }, []);

  // Briefly reveal the climber silhouette as the About section scrolls past.
  // Opacity follows a bell curve (peak mid-section) and the climber "ascends".
  useEffect(() => {
    const el = document.getElementById("about");
    const climber = climberRef.current;
    if (!el || !climber) return;

    const cards = el.querySelectorAll<HTMLElement>(".about-card");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      climber.style.opacity = "0.16";
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const p = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)),
      );
      const bell = Math.sin(Math.PI * p); // 0 → 1 → 0 across the pass
      climber.style.opacity = String(bell * 0.6);
      climber.style.transform = `translateY(${(0.5 - p) * 70}px)`;
      // Fade the banners transparent as the climber peaks so it reads through them.
      const alpha = (0.9 - bell * 0.78).toFixed(3);
      cards.forEach((card) => {
        card.style.backgroundColor = `hsl(0 0% 4% / ${alpha})`;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Mobile-only floating WhatsApp button, shown once the visitor has scrolled past
  // the hero's own CTAs so it doesn't compete with them above the fold.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setPastHero(window.scrollY > window.innerHeight * 0.9);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const heroText = "MADE FOR THE VERTICAL";

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-primary selection:text-black">
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-primary focus:text-black focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest"
      >
        Skip to content
      </a>

      {/* Fixed scroll-driven 3D mountain terrain behind everything */}
      <MountainBackground />

      <div className="relative z-10">
        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 lg:px-12 py-3 md:py-4 flex justify-between items-center gap-3 bg-black/70 backdrop-blur-md border-b border-border/60">
          <a href="#top" className="flex flex-col min-w-0 leading-none">
            <img
              src={wordmark}
              alt="Cliffhanger"
              width={812}
              height={184}
              decoding="async"
              className="h-6 md:h-8 w-auto object-contain shrink-0 drop-shadow-[0_0_12px_hsl(75_100%_50%/0.15)]"
            />
            <span className="font-mono text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-primary mt-1 pl-0.5">Since 2003</span>
          </a>

          <nav aria-label="Primary" className="hidden md:flex gap-8 text-sm font-mono uppercase tracking-widest text-gray-300">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-block shrink-0 whitespace-nowrap bg-primary text-black px-4 md:px-6 py-2 font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white transition-colors active:scale-95 transform duration-100"
            >
              Get in Touch
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden text-white p-2 -mr-2 active:scale-90 transition-transform duration-100"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* MOBILE MENU */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-x-0 top-16 z-40 bg-black/95 backdrop-blur-md border-b border-border transition-transform duration-200 ${
            menuOpen ? "translate-y-0" : "-translate-y-[150%] pointer-events-none"
          }`}
        >
          <nav aria-label="Mobile" className="flex flex-col font-mono uppercase tracking-widest text-lg">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-5 border-b border-border/60 text-gray-200 hover:text-primary hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="m-6 text-center bg-primary text-black px-6 py-3 font-bold hover:bg-white transition-colors"
            >
              Get in Touch
            </a>
          </nav>
        </div>

        <main id="main">
          {/* HERO */}
          <section id="top" className="relative min-h-[100dvh] flex flex-col justify-center pt-28 pb-12 px-6 lg:px-12">
            <div className="relative z-10 max-w-6xl mx-auto w-full">
              <div className="mb-6 inline-block border border-primary px-3 py-1 text-primary font-mono text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] bg-black/40 backdrop-blur-sm">
                Climbing Equipments &amp; Outdoor Gears
              </div>

              <h1 className="text-5xl min-[400px]:text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter uppercase mb-8 flex flex-wrap gap-x-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                {heroText.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-flex overflow-hidden">
                    {word.split("").map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className={
                          mounted
                            ? "inline-block animate-in slide-in-from-bottom-full fade-in duration-500 fill-mode-both"
                            : "inline-block"
                        }
                        style={mounted ? { animationDelay: `${(wordIndex * 5 + charIndex) * 50}ms` } : undefined}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>

              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-16 border-t border-border/50 pt-8">
                <p className="font-mono text-gray-300 max-w-md text-sm leading-relaxed uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  Technical climbing hardware and outdoor gear for those who trust their equipment
                  with their life. No compromises. No weekend warriors.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="#catalog"
                    className="group inline-flex items-center gap-4 bg-primary text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors active:scale-95 transform duration-100"
                  >
                    Explore the Gear
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-block py-3 -my-3 font-mono text-xs uppercase tracking-widest text-gray-300 underline underline-offset-4 hover:text-primary active:scale-95 transition-colors"
                  >
                    or talk to us
                  </a>
                </div>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 font-mono text-[10px] uppercase tracking-[0.3em] animate-in fade-in duration-1000 delay-700 fill-mode-both">
              <span>Scroll to ascend</span>
              <span className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
            </div>
          </section>

          {/* MARQUEE */}
          <div
            aria-hidden="true"
            className="w-full overflow-hidden bg-primary text-black py-4 border-y border-white"
            style={{ minHeight: "72px" }}
          >
            <div className="flex whitespace-nowrap animate-marquee w-[200%]">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <span className="font-sans font-bold text-2xl uppercase tracking-tighter px-8">
                    Made for the Vertical
                  </span>
                  <span className="w-2 h-2 bg-black" />
                </div>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <section id="about" className="py-20 md:py-32 px-6 lg:px-12 relative overflow-hidden border-b border-border glass-panel">
            {/* Climber silhouette — briefly revealed as this section scrolls past */}
            <div
              ref={climberRef}
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full sm:w-4/5 md:w-2/3 opacity-0 will-change-transform"
              style={{
                maskImage: "linear-gradient(to left, black 45%, transparent 92%)",
                WebkitMaskImage: "linear-gradient(to left, black 45%, transparent 92%)",
              }}
            >
              <img
                src="/images/hero-climber.webp"
                alt=""
                width={1280}
                height={698}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
                    Built
                    <br />
                    <span className="text-primary">Different.</span>
                  </h2>
                  <p className="font-mono text-xs text-gray-300 uppercase leading-relaxed mb-8 max-w-xs">
                    Two decades on the rock. Since 2003, Cliffhanger has outfitted climbers who
                    refuse to gamble on their gear.
                  </p>
                  <div className="w-32 h-32 border border-border p-3 bg-black/50">
                    <img src={logo} alt="Cliffhanger badge" width={128} height={128} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="about-card border border-border p-8 hover:border-primary transition-colors glass-card group">
                  <div className="text-primary font-mono text-xl mb-4">01.</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">Innovation</h3>
                  <p className="font-mono text-sm text-gray-300 uppercase leading-relaxed">
                    Machined to the micro-millimeter. We redefine the physical limits of hardware so you can push yours.
                  </p>
                </div>

                <div className="about-card border border-border p-8 hover:border-destructive transition-colors glass-card group">
                  <div className="text-destructive font-mono text-xl mb-4 flex items-center justify-between">
                    <span>02.</span>
                    <span className="text-[10px] border border-destructive px-2 py-0.5">WARNING</span>
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-destructive transition-colors">Safety</h3>
                  <p className="font-mono text-sm text-gray-300 uppercase leading-relaxed">
                    Over-engineered for the worst-case scenario. When failure is not an option, you clip into Cliffhanger.
                  </p>
                </div>

                <div className="about-card border border-border p-8 hover:border-white transition-colors glass-card group">
                  <div className="text-white font-mono text-xl mb-4">03.</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-white transition-colors">Reliability</h3>
                  <p className="font-mono text-sm text-gray-300 uppercase leading-relaxed">
                    Tested in the harshest vertical environments on Earth. Consistent performance, pitch after pitch.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PARTNERS */}
          <section aria-label="Official partners" className="border-b border-border glass-panel py-12 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-1 text-center md:text-left">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Official Partners</span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">
                  Certified hardware &amp; ropes, straight from the source
                </span>
              </div>
              <div className="flex items-center gap-8 md:gap-12">
                <span className="font-sans font-bold text-3xl md:text-4xl uppercase tracking-tighter text-white hover:text-primary transition-colors cursor-default">
                  Edelrid
                </span>
                <span className="w-2.5 h-2.5 bg-primary shrink-0" aria-hidden="true" />
                <span className="font-sans font-bold text-3xl md:text-4xl uppercase tracking-tighter text-white hover:text-primary transition-colors cursor-default">
                  Tendon
                </span>
              </div>
            </div>
          </section>

          {/* CATALOG */}
          <section id="catalog" className="py-20 md:py-32 px-6 lg:px-12 relative">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                  Tactical
                  <br />
                  Hardware
                </h2>
                <div className="flex items-center gap-4 text-primary font-mono text-xs uppercase glass-card px-4 py-2 border border-border">
                  <span className="w-3 h-3 bg-primary animate-pulse" />
                  {PRODUCTS.length} products online
                </div>
              </div>

              {/* Category filter — a tap-to-choose block on phone (2-col grid, all 12
                  categories visible at once, no swipe needed); reverts to inline wrap
                  from sm: up. */}
              <div className="mb-12 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                {CATEGORY_ORDER.map((cat) => {
                  const count = PRODUCTS.filter((p) => inCategory(p, cat)).length;
                  if (!count) return null;
                  const active = cat === activeCat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCat(cat)}
                      className={`border px-4 py-3 min-h-11 font-mono text-[11px] uppercase tracking-widest text-center sm:text-left transition-colors active:scale-95 ${active ? "bg-primary text-black border-primary" : "border-border text-gray-300 hover:border-primary hover:text-primary"}`}
                    >
                      {cat} <span className={active ? "text-black/60" : "text-gray-500"}>{count}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.filter((p) => inCategory(p, activeCat)).map((product) => {
                  const hasGallery = !!(product.colorImages && product.colorImages.length > 1);

                  const imageBlock = (
                    <div className="relative aspect-square overflow-hidden bg-black/70 p-6 border-b border-border">
                      <div className="absolute top-4 left-4 z-10 pointer-events-none text-gray-400 font-mono text-xs">
                        {product.id}
                      </div>
                      <div className="absolute top-4 right-4 z-10 pointer-events-none max-w-[55%] truncate border border-border px-2 py-1 text-[10px] font-mono text-gray-300 group-hover:border-primary group-hover:text-primary transition-colors">
                        {product.status}
                      </div>
                      {hasGallery ? (
                        <ColorGallery images={product.colorImages!} productName={product.name} compact />
                      ) : (
                        <img
                          src={product.image}
                          alt={`${product.name} — ${product.category}${product.certification ? `, ${product.certification}` : ""}`}
                          width={720}
                          height={720}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain filter contrast-125 group-hover:scale-110 transition-transform duration-500 ease-out"
                        />
                      )}
                    </div>
                  );

                  const detailsFooter = (
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{product.name}</h3>
                      <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
                        <span className="font-mono text-xs text-gray-400">Rating</span>
                        <span className="font-mono text-xs text-white">{product.rating}</span>
                      </div>
                      <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-primary transition-colors">
                        View details
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                      </span>
                    </div>
                  );

                  // Gallery products: the image is its own swipeable region (never
                  // opens the modal, so browsing colors never risks triggering it) —
                  // only the footer is a button. Everything else keeps the original
                  // whole-card button, unchanged.
                  if (hasGallery) {
                    return (
                      <div
                        key={product.id}
                        className="group flex flex-col border border-border glass-card overflow-hidden hover:border-primary focus-within:border-primary transition-colors"
                      >
                        {imageBlock}
                        <button
                          type="button"
                          onClick={() => setSelected(product)}
                          aria-haspopup="dialog"
                          aria-label={`View ${product.name} details`}
                          className="text-left flex flex-col justify-between flex-grow active:scale-[0.99] transition-transform"
                        >
                          {detailsFooter}
                        </button>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => setSelected(product)}
                      aria-haspopup="dialog"
                      aria-label={`View ${product.name} details`}
                      className="group text-left flex flex-col border border-border glass-card overflow-hidden hover:border-primary focus-visible:border-primary transition-colors active:scale-[0.99]"
                    >
                      {imageBlock}
                      {detailsFooter}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-20 md:py-32 px-6 lg:px-12 relative border-t border-border glass-panel">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="mb-6 inline-block border border-primary px-3 py-1 text-primary font-mono text-xs uppercase tracking-[0.2em]">
                  Reach Base Camp
                </div>
                <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
                  Let's Get You
                  <br />
                  <span className="text-primary">Vertical.</span>
                </h2>
                <p className="font-mono text-sm text-gray-300 uppercase leading-relaxed max-w-md mb-10">
                  Talk gear with people who climb. Call, message, or find us online — we'll get you
                  clipped in with the right hardware.
                </p>
                <div className="flex items-center gap-3 text-gray-300 font-mono text-xs uppercase tracking-widest">
                  <MapPin className="w-4 h-4 text-primary" />
                  Lebanon
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {/* Primary contact — one button, straight to WhatsApp */}
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact us on WhatsApp"
                  className="flex items-center justify-center gap-4 bg-primary text-black p-6 font-sans font-bold text-lg md:text-xl uppercase tracking-widest hover:bg-white focus-visible:bg-white transition-colors active:scale-[0.99]"
                >
                  <WhatsAppIcon className="w-7 h-7 shrink-0" />
                  Contact us on WhatsApp
                </a>

                <a href={CONTACT.tel} className="flex items-center gap-5 border border-border glass-card p-6 hover:border-primary focus-visible:border-primary transition-colors active:scale-[0.99] group">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <span className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Call us</span>
                    <span className="font-sans font-bold text-xl tracking-tight group-hover:text-primary transition-colors">{CONTACT.phoneDisplay}</span>
                  </span>
                </a>

                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-5 border border-border glass-card p-6 hover:border-primary focus-visible:border-primary transition-colors active:scale-[0.99] group">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <span className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Email</span>
                    <span className="font-sans font-bold text-lg tracking-tight group-hover:text-primary transition-colors break-all">{CONTACT.email}</span>
                  </span>
                </a>

                <div className="flex gap-4">
                  <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 border border-border glass-card p-5 hover:border-primary hover:text-primary focus-visible:border-primary transition-colors font-mono text-xs uppercase tracking-widest">
                    <Instagram className="w-5 h-5" /> Instagram
                  </a>
                  <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 border border-border glass-card p-5 hover:border-primary hover:text-primary focus-visible:border-primary transition-colors font-mono text-xs uppercase tracking-widest">
                    <Facebook className="w-5 h-5" /> Facebook
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-border glass-panel text-gray-400 font-mono text-xs uppercase py-12 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex flex-col gap-2 mb-6">
                <img src={wordmark} alt="Cliffhanger" width={812} height={184} loading="lazy" decoding="async" className="h-7 w-auto self-start object-contain opacity-95" />
                <span className="text-[9px] tracking-[0.2em] text-primary">Made for the Vertical · Since 2003</span>
              </div>
              <p className="max-w-sm leading-relaxed mb-4">
                Climbing equipments &amp; outdoor gears, engineered for extreme verticality.
                Warning: Climbing is inherently dangerous. Users are responsible for their own
                actions and decisions.
              </p>
              <p className="mb-6">
                Official partner of <span className="text-gray-200">Edelrid</span> &amp;{" "}
                <span className="text-gray-200">Tendon</span>
              </p>
              <a href={CONTACT.tel} className="text-gray-200 hover:text-primary transition-colors">{CONTACT.phoneDisplay}</a>
            </div>

            <div>
              <h3 className="text-gray-200 font-bold mb-4 font-sans tracking-tight text-sm">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="hover:text-white transition-colors inline-block">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors inline-block">Terms of Service</Link></li>
                <li><Link href="/returns" className="hover:text-white transition-colors inline-block">Returns &amp; Exchanges</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-200 font-bold mb-4 font-sans tracking-tight text-sm">Compliance</h3>
              <ul className="space-y-3">
                <li><Link href="/certifications" className="hover:text-white transition-colors inline-block">Certifications</Link></li>
                <li><Link href="/certifications" className="hover:text-white transition-colors inline-block">CE &amp; UIAA Standards</Link></li>
                <li><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-block">Product Enquiries</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <span>© {new Date().getFullYear()} Cliffhanger — Climbing Equipments &amp; Outdoor Gears. All rights reserved.</span>
            <span className="text-destructive">SYS.OP. NORMAL</span>
          </div>
        </footer>
      </div>

      {/* Floating WhatsApp button — mobile only, appears once past the hero's own
          CTAs so it doesn't compete with them, hidden while the product modal is open */}
      {pastHero && !selected && (
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="sm:hidden fixed bottom-4 right-4 z-40 flex items-center justify-center w-14 h-14 bg-primary text-black border border-black active:scale-95 transition-transform shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </a>
      )}

      {/* Product detail dialog */}
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
