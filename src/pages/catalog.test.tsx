import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CATEGORY_ORDER } from "@/lib/products";
import { categorySlug, productsInCategory } from "@/lib/catalog";
import { CategoryPage } from "@/pages/catalog";

describe("CategoryPage", () => {
  it("shows every category and marks the current category without requiring a return to the catalog", () => {
    render(<CategoryPage slug="pulleys" />);

    const switcher = screen.getByRole("navigation", { name: /switch product category/i });
    const categoryLinks = within(switcher).getAllByRole("link");
    expect(categoryLinks).toHaveLength(CATEGORY_ORDER.length);
    expect(within(switcher).getByRole("link", { name: /carabiners/i })).toHaveAttribute("href", "/categories/carabiners");
    expect(within(switcher).getByRole("link", { name: /pulleys/i })).toHaveAttribute("aria-current", "page");
  });

  it("retains cross-listed products in the Pulleys category", () => {
    render(<CategoryPage slug="pulleys" />);
    expect(productsInCategory("Pulleys").map((product) => product.name)).toContain("Warp");
    expect(screen.getByRole("heading", { name: "Warp" })).toBeInTheDocument();
  });

  it("uses stable category URLs for each switcher option", () => {
    render(<CategoryPage slug="belay-devices" />);
    const switcher = screen.getByRole("navigation", { name: /switch product category/i });
    for (const category of CATEGORY_ORDER) {
      expect(
        within(switcher)
          .getAllByRole("link")
          .find((link) => link.getAttribute("href") === `/categories/${categorySlug(category)}`),
      ).toHaveTextContent(category);
    }
  });
});
