import { useRef, useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import type { ProductColorImage } from "@/lib/products";

/**
 * Swipeable image gallery for products with verified per-color catalog
 * photos. Uses native scroll-snap so swipe/drag works with zero custom
 * gesture handling; dot indicators + a persistent "swipe" hint make the
 * interaction discoverable for users who wouldn't otherwise expect it.
 */
export function ColorGallery({
  images,
  productName,
}: {
  images: ProductColorImage[];
  productName: string;
}) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  function onScroll() {
    const el = trackRef.current;
    if (!el || el.clientWidth === 0) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActive(Math.min(images.length - 1, Math.max(0, idx)));
  }

  function goTo(i: number) {
    trackRef.current?.scrollTo({ left: i * trackRef.current.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="relative h-full w-full">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar flex h-full w-full snap-x snap-mandatory overflow-x-auto"
      >
        {images.map((img) => (
          <div key={img.color} className="flex h-full w-full shrink-0 snap-center items-center justify-center">
            <img
              src={img.image}
              alt={`${productName} — ${img.color}`}
              className="h-full w-full object-contain p-4 sm:p-8 filter contrast-125"
            />
          </div>
        ))}
      </div>

      {/* Swipe affordance — explicit, not just a peeking edge, so it's clear on first view */}
      <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-1.5 border border-border bg-black/60 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-gray-300">
        <ArrowLeftRight className="h-3 w-3" />
        Swipe for colors
      </div>

      {/* Active color label */}
      <div className="pointer-events-none absolute bottom-3 right-4 border border-border bg-black/60 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-gray-300">
        {images[active]?.color}
      </div>

      {/* Dot indicators — also clickable to jump directly */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1">
        {images.map((img, i) => (
          <button
            key={img.color}
            type="button"
            aria-label={`Show ${img.color}`}
            aria-current={i === active}
            onClick={() => goTo(i)}
            className="p-2 -m-2"
          >
            <span
              className={`block h-2 w-2 border transition-colors ${
                i === active ? "border-primary bg-primary" : "border-white/70 bg-black/40"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
