import { lazy, Suspense, useEffect, useRef } from "react";
import { Route, Switch, useLocation } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import Home from "@/pages/home";
import { CategoryPage, ProductPage, ProductsPage } from "@/pages/catalog";
import CompanyPage from "@/pages/company";

// Code-split like MountainScene: the legal pages (+ their pages.json content)
// are rarely visited, so keep them out of the main chunk every "/" visitor pays for.
const LegalPage = lazy(() => import("@/pages/legal"));
const legalFallback = <div className="min-h-screen bg-black" />;

const SCROLL_STATE_KEY = "cliffhangerScrollPosition";

function RouteTransitionManager() {
  const [location] = useLocation();
  const initial = useRef(true);
  const popNavigation = useRef(false);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const saveScrollPosition = () => {
      window.history.replaceState(
        { ...(window.history.state ?? {}), [SCROLL_STATE_KEY]: { x: window.scrollX, y: window.scrollY } },
        "",
        window.location.href,
      );
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target || link.hasAttribute("download")) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin === window.location.origin && destination.pathname !== window.location.pathname) saveScrollPosition();
    };

    const onPopState = () => {
      popNavigation.current = true;
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);
    window.addEventListener("pagehide", saveScrollPosition);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("pagehide", saveScrollPosition);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const restoringHistoryPosition = popNavigation.current;
    popNavigation.current = false;
    const frame = window.requestAnimationFrame(() => {
      if (restoringHistoryPosition) {
        const saved = window.history.state?.[SCROLL_STATE_KEY];
        window.scrollTo(saved?.x ?? 0, saved?.y ?? 0);
      } else {
        window.scrollTo(0, 0);
        document.querySelector<HTMLElement>("main#main")?.focus({ preventScroll: true });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <>
      <RouteTransitionManager />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/products/:slug">
          {(params) => <ProductPage slug={params.slug} />}
        </Route>
        <Route path="/categories/:slug">
          {(params) => <CategoryPage slug={params.slug} />}
        </Route>
        <Route path="/about"><CompanyPage page="about" /></Route>
        <Route path="/partners"><CompanyPage page="partners" /></Route>
        <Route path="/contact"><CompanyPage page="contact" /></Route>
        <Route path="/certifications">
          {() => <Suspense fallback={legalFallback}><LegalPage slug="certifications" /></Suspense>}
        </Route>
        <Route path="/privacy">
          {() => <Suspense fallback={legalFallback}><LegalPage slug="privacy" /></Suspense>}
        </Route>
        <Route path="/terms">
          {() => <Suspense fallback={legalFallback}><LegalPage slug="terms" /></Suspense>}
        </Route>
        <Route path="/returns">
          {() => <Suspense fallback={legalFallback}><LegalPage slug="returns" /></Suspense>}
        </Route>
        <Route>
          {() => <Suspense fallback={legalFallback}><LegalPage slug="__notfound__" /></Suspense>}
        </Route>
      </Switch>
      {/* Vercel Web Analytics — no-ops outside Vercel's environment (e.g. local
          dev), auto-activates once deployed on the client's Vercel account. */}
      <Analytics />
    </>
  );
}
