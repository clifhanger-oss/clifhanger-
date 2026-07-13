import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import pagesData from "@/content/pages.json";
import { CONTACT } from "@/lib/contact";
import { useSEO } from "@/lib/use-seo";

const wordmark = "/logo-wordmark.webp";

type Section = { heading: string; body?: string[]; bullets?: string[] };
type PageContent = {
  slug: string;
  title: string;
  intro?: string;
  sections: Section[];
  disclaimer?: string;
};

const PAGES = pagesData as Record<string, PageContent>;

export default function LegalPage({ slug }: { slug: string }) {
  const page = PAGES[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useSEO({
    title: page ? `${page.title} — Cliffhanger` : "Page Not Found — Cliffhanger",
    description: page
      ? (page.intro ?? page.title).replace(/\s+/g, " ").trim().slice(0, 155)
      : "This page could not be found.",
    path: page ? `/${page.slug}` : `/${slug}`,
    noindex: !page,
  });

  if (!page) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 font-mono uppercase tracking-widest text-sm">
        <p>Page not found.</p>
        <Link href="/" className="text-primary hover:text-white transition-colors">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-primary focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-black">Skip to content</a>
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-border bg-black/80 backdrop-blur-md px-4 md:px-8 py-4">
        <Link href="/" className="flex min-h-11 items-center">
          <img src={wordmark} alt="Cliffhanger" width={812} height={184} className="h-6 md:h-7 w-auto object-contain" />
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 px-2 font-mono text-[11px] uppercase tracking-widest text-gray-300 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to catalog
        </Link>
      </header>

      {/* Body */}
      <main id="main" tabIndex={-1} className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="mb-3 inline-block border border-primary px-3 py-1 text-primary font-mono text-[11px] uppercase tracking-[0.2em]">
          Cliffhanger
        </div>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">{page.title}</h1>

        {page.intro && (
          <p className="font-mono text-sm text-gray-300 leading-relaxed mb-14 border-l-2 border-primary pl-5">
            {page.intro}
          </p>
        )}

        <div className="flex flex-col gap-12">
          {page.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-5 flex items-baseline gap-3">
                <span className="font-mono text-primary text-sm">{String(i + 1).padStart(2, "0")}.</span>
                {s.heading}
              </h2>
              {s.body?.map((p, j) => (
                <p key={j} className="font-mono text-sm text-gray-300 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {s.bullets && s.bullets.length > 0 && (
                <ul className="mt-2 flex flex-col gap-2.5">
                  {s.bullets.map((b, k) => (
                    <li key={k} className="flex gap-3 font-mono text-sm text-gray-300 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {page.disclaimer && (
          <div className="mt-16 border border-destructive/50 bg-destructive/5 p-6">
            <div className="font-mono text-[11px] uppercase tracking-widest text-destructive mb-3">Safety notice</div>
            <p className="font-mono text-xs text-gray-300 leading-relaxed">{page.disclaimer}</p>
          </div>
        )}

        <div className="mt-16 border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Cliffhanger
          </Link>
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-primary hover:text-white transition-colors">
            Questions? Message us →
          </a>
        </div>
      </main>
    </div>
  );
}
