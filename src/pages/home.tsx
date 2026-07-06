import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Instagram, Facebook, ArrowRight, MapPin, Menu, X } from "lucide-react";
import { MountainBackground } from "@/components/mountain-background";
import { ProductModal } from "@/components/product-modal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { CONTACT } from "@/lib/contact";
import { PRODUCTS, CATEGORY_ORDER, type Product } from "@/lib/products";

// Public asset — served from /public at the site root.
const logo = "/logo.webp";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#catalog", label: "Gear" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);
  const [activeCat, setActiveCat] = useState<string>(CATEGORY_ORDER[0]);
  const climberRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

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
          <a href="#top" className="flex items-center gap-2.5 min-w-0">
            <img
              src={logo}
              alt="Cliffhanger logo"
              width={44}
              height={44}
              decoding="async"
              className="w-10 h-10 md:w-11 md:h-11 object-contain shrink-0 drop-shadow-[0_0_10px_hsl(75_100%_50%/0.25)]"
            />
            <span className="flex flex-col leading-none min-w-0">
              <span className="font-sans font-bold text-lg md:text-xl tracking-tighter uppercase truncate">Cliffhanger</span>
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-primary mt-0.5">Since 2003</span>
            </span>
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
              className="md:hidden text-white p-2 -mr-2"
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
              <div className="mb-6 inline-block border border-primary px-3 py-1 text-primary font-mono text-xs uppercase tracking-[0.2em] bg-black/40 backdrop-blur-sm">
                Climbing Equipments &amp; Outdoor Gears
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter uppercase mb-8 flex flex-wrap gap-x-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
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
                    className="font-mono text-xs uppercase tracking-widest text-gray-300 underline underline-offset-4 hover:text-primary transition-colors"
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
          <section id="about" className="py-32 px-6 lg:px-12 relative overflow-hidden border-b border-border glass-panel">
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

          {/* CATALOG */}
          <section id="catalog" className="py-32 px-6 lg:px-12 relative">
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

              {/* Category filter */}
              <div className="mb-12 flex flex-wrap gap-2">
                {CATEGORY_ORDER.map((cat) => {
                  const count = PRODUCTS.filter((p) => p.category === cat).length;
                  if (!count) return null;
                  const active = cat === activeCat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCat(cat)}
                      className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors ${active ? "bg-primary text-black border-primary" : "border-border text-gray-300 hover:border-primary hover:text-primary"}`}
                    >
                      {cat} <span className={active ? "text-black/60" : "text-gray-500"}>{count}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.filter((p) => p.category === activeCat).map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => setSelected(product)}
                    aria-haspopup="dialog"
                    aria-label={`View ${product.name} details`}
                    className="group text-left flex flex-col border border-border glass-card overflow-hidden hover:border-primary focus-visible:border-primary transition-colors active:scale-[0.99]"
                  >
                    <div className="relative aspect-square overflow-hidden bg-black/70 p-6 border-b border-border">
                      <div className="absolute top-4 left-4 text-gray-400 font-mono text-xs">{product.id}</div>
                      <div className="absolute top-4 right-4 max-w-[55%] truncate border border-border px-2 py-1 text-[10px] font-mono text-gray-300 group-hover:border-primary group-hover:text-primary transition-colors">
                        {product.status}
                      </div>
                      <img
                        src={product.image}
                        alt={product.name}
                        width={720}
                        height={720}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain filter contrast-125 group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                    </div>
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
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-32 px-6 lg:px-12 relative border-t border-border glass-panel">
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
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="Cliffhanger badge" width={36} height={36} loading="lazy" decoding="async" className="w-9 h-9 object-contain opacity-90" />
                <span className="flex flex-col leading-none">
                  <span className="font-sans font-bold text-lg tracking-tighter text-gray-200">Cliffhanger</span>
                  <span className="text-[9px] tracking-[0.2em] text-primary mt-0.5">Made for the Vertical · Since 2003</span>
                </span>
              </div>
              <p className="max-w-sm leading-relaxed mb-6">
                Climbing equipments &amp; outdoor gears, engineered for extreme verticality.
                Warning: Climbing is inherently dangerous. Users are responsible for their own
                actions and decisions.
              </p>
              <a href={CONTACT.tel} className="text-gray-200 hover:text-primary transition-colors">{CONTACT.phoneDisplay}</a>
            </div>

            <div>
              <h3 className="text-gray-200 font-bold mb-4 font-sans tracking-tight text-sm">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors inline-block">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors inline-block">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors inline-block">Return Policies</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-200 font-bold mb-4 font-sans tracking-tight text-sm">Compliance</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors inline-block">CE Declarations</a></li>
                <li><a href="#" className="hover:text-white transition-colors inline-block">UIAA Certificates</a></li>
                <li><a href="#" className="hover:text-white transition-colors inline-block">Inspection Logs</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <span>© {new Date().getFullYear()} Cliffhanger — Climbing Equipments &amp; Outdoor Gears. All rights reserved.</span>
            <span className="text-destructive">SYS.OP. NORMAL</span>
          </div>
        </footer>
      </div>

      {/* Product detail dialog */}
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
