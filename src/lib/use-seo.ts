import { useEffect } from "react";

const SITE_URL = "https://www.cliffhangerleb.com";

type SeoMeta = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  noindex?: boolean;
};

function setMeta(selector: string, attr: "content" | "href", value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value);
}

/**
 * Client-side route SEO sync. The app is a single static index.html (no SSR/
 * prerender), so without this every wouter route would keep serving the
 * homepage's title/description/canonical/OG tags to JS-executing crawlers and
 * to users navigating between routes in one session.
 */
export function useSEO({ title, description, path, ogTitle, noindex }: SeoMeta) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", ogTitle ?? title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", ogTitle ?? title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="robots"]', "content", noindex ? "noindex, nofollow" : "index, follow");
  }, [title, description, path, ogTitle, noindex]);
}
