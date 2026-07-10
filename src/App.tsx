import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import Home from "@/pages/home";

// Code-split like MountainScene: the legal pages (+ their pages.json content)
// are rarely visited, so keep them out of the main chunk every "/" visitor pays for.
const LegalPage = lazy(() => import("@/pages/legal"));
const legalFallback = <div className="min-h-screen bg-black" />;

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
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
