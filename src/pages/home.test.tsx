import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/home";

// WebGL/Canvas can't run in jsdom — replace the Three.js background with a stub.
vi.mock("@/components/mountain-background", () => ({
  MountainBackground: () => <div data-testid="mountain-bg-stub" />,
}));

describe("Home", () => {
  it("mounts without crashing and renders the background stub", () => {
    render(<Home />);
    expect(screen.getByTestId("mountain-bg-stub")).toBeInTheDocument();
  });

  it("renders key brand copy: slogan, phone, section headings", () => {
    render(<Home />);
    // Slogan appears in the marquee (multiple times) + footer.
    expect(screen.getAllByText(/made for the vertical/i).length).toBeGreaterThan(0);
    // Phone number appears in the contact card + footer.
    expect(screen.getAllByText("03 276 938").length).toBeGreaterThan(0);
    // Brand tagline appears in the hero badge + footer.
    expect(screen.getAllByText(/climbing equipments/i).length).toBeGreaterThan(0);
    // The home page focuses on the brand and contact route; the catalog lives at /products.
    expect(screen.queryByText(/tactical hardware/i)).not.toBeInTheDocument();
    expect(screen.getByText(/reach base camp/i)).toBeInTheDocument();
  });

  it("contact links have correct tel / wa.me / mailto hrefs", () => {
    render(<Home />);

    const call = screen.getByRole("link", { name: /call us/i });
    expect(call).toHaveAttribute("href", "tel:+9613276938");

    const wa = screen.getByRole("link", { name: /whatsapp/i });
    expect(wa).toHaveAttribute("href", "https://wa.me/9613276938");
    expect(wa).toHaveAttribute("target", "_blank");
    expect(wa).toHaveAttribute("rel", expect.stringContaining("noopener"));

    const email = screen.getByRole("link", { name: /email/i });
    expect(email).toHaveAttribute("href", "mailto:Cliffhangerleb@hotmail.com");
  });

  it("sends the hero CTA to the dedicated gear catalog", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /explore the gear/i })).toHaveAttribute("href", "/products");
  });
});
