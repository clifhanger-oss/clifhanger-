import { Route, Switch } from "wouter";
import Home from "@/pages/home";
import LegalPage from "@/pages/legal";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/certifications">{() => <LegalPage slug="certifications" />}</Route>
      <Route path="/privacy">{() => <LegalPage slug="privacy" />}</Route>
      <Route path="/terms">{() => <LegalPage slug="terms" />}</Route>
      <Route path="/returns">{() => <LegalPage slug="returns" />}</Route>
      <Route>{() => <LegalPage slug="__notfound__" />}</Route>
    </Switch>
  );
}
