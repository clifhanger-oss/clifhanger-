import { useEffect, useRef } from "react";
import { X, Check } from "lucide-react";
import type { Product } from "@/lib/products";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { CONTACT } from "@/lib/contact";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    // Lock background scroll while the dialog is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [product, onClose]);

  if (!product) return null;

  const heading = product.title ?? product.name;
  const waHref = `${CONTACT.whatsapp}?text=${encodeURIComponent(
    `Hi Cliffhanger, I'm interested in the ${heading}. Is it available?`,
  )}`;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-md p-0 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        className="relative w-full max-w-3xl min-h-[100dvh] sm:min-h-0 my-0 sm:my-4 border-0 sm:border border-border bg-[hsl(0_0%_4%/0.96)] backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close — sticky to the viewport (not the scrolling card) so it never scrolls out of reach on long products */}
        <div className="sticky top-0 z-10 flex justify-end p-3 bg-[hsl(0_0%_4%/0.96)] backdrop-blur-xl border-b border-border sm:absolute sm:right-0 sm:top-0 sm:justify-start sm:border-0 sm:bg-transparent sm:backdrop-blur-none sm:p-3">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="min-w-11 min-h-11 flex items-center justify-center border border-border bg-black/60 p-2 text-gray-300 hover:border-primary hover:text-primary focus-visible:border-primary active:scale-95 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-black/70">
          <img
            src={product.image}
            alt={`${heading} — ${product.category}${product.certification ? `, ${product.certification}` : ""}`}
            className="h-full w-full object-contain p-4 sm:p-8 filter contrast-125"
          />
          <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
            <span className="border border-primary px-2 py-1 text-primary">{product.status}</span>
            {product.articleNo && (
              <span className="border border-border px-2 py-1 text-gray-400">
                Art. {product.articleNo}
              </span>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-10">
          {product.category && (
            <div className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {product.category}
            </div>
          )}
          <h2
            id="product-modal-title"
            className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter mb-4"
          >
            {heading}
          </h2>

          <p className="font-mono text-sm text-gray-300 leading-relaxed mb-8">
            {product.description}
          </p>

          {!product.available && (
            <div className="mb-8 border border-border bg-black/40 p-4 font-mono text-xs uppercase tracking-widest text-gray-400">
              Full product details are being prepared — message us for current availability.
            </div>
          )}

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <section className="mb-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">
                Features
              </h3>
              <ul className="flex flex-col gap-3">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-3 font-mono text-sm text-gray-300 leading-relaxed">
                    <Check className="mt-0.5 w-4 h-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Technical specs */}
          {product.specs && product.specs.length > 0 && (
            <section className="mb-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">
                Technical information
              </h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 border-t border-border">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between gap-4 border-b border-border/60 py-3"
                  >
                    <dt className="font-mono text-xs uppercase tracking-wide text-gray-500">
                      {s.label}
                    </dt>
                    <dd className="font-mono text-sm text-white text-right">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* Attribute chips */}
          {product.attributes && product.attributes.length > 0 && (
            <section className="mb-8 flex flex-wrap gap-2">
              {product.attributes.map((a) => (
                <span
                  key={a}
                  className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-gray-300"
                >
                  {a}
                </span>
              ))}
            </section>
          )}

          {/* Colours + weight table */}
          {product.weights && product.weights.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500">
                  Lengths &amp; weight
                </h3>
                {product.colors && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                    {product.colors.join(" · ")}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-px bg-border border border-border">
                {product.weights.map((w) => (
                  <div key={w.length} className="bg-black/70 p-3 text-center">
                    <div className="font-sans font-bold text-sm text-white">{w.length}</div>
                    <div className="font-mono text-[11px] text-gray-400 mt-1">{w.weight}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Origin + certification footer */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 font-mono text-[10px] uppercase tracking-widest text-gray-500">
            <span>Rating · {product.rating}</span>
            {product.origin && <span className="text-gray-300">{product.origin}</span>}
          </div>

          {/* Enquire CTA — straight to WhatsApp with the product prefilled */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-primary text-black p-5 font-sans font-bold text-base sm:text-lg uppercase tracking-widest hover:bg-white focus-visible:bg-white transition-colors active:scale-[0.99]"
          >
            <WhatsAppIcon className="w-6 h-6 shrink-0" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
