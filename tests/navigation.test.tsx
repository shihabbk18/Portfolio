import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Navigation } from "@/components/navigation";
import { navigationItems } from "@/data/portfolio";
const currentRoute = vi.hoisted(() => ({ path: "/" }));
vi.mock("next/navigation", () => ({ usePathname: () => currentRoute.path }));
beforeEach(() => { currentRoute.path = "/"; });

describe("Navigation", () => {
  it("keeps Work active on a nested project route", () => {
    currentRoute.path = "/work/model-dna/";
    render(<Navigation />);
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute("aria-current");
  });
  it("opens and closes the mobile menu after a selection", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Navigation />
        <main>{navigationItems.map((item) => <section id={item.section} key={item.section} />)}</main>
      </>,
    );

    const toggle = screen.getByRole("button", { name: "Open navigation" });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    const aboutLink = screen.getByRole("link", { name: "About" });
    aboutLink.addEventListener("click", (event) => event.preventDefault());
    await user.click(aboutLink);
    expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("points every navigation link to its page and marks the current route", () => {
    render(
      <>
        <Navigation />
        <main>{navigationItems.map((item) => <section id={item.section} key={item.section} />)}</main>
      </>,
    );

    navigationItems.forEach((item) => {
      const link = screen.getByRole("link", { name: item.label });
      expect(link.getAttribute("href")?.replace(/\/$/, "")).toBe(item.href.replace(/\/$/, ""));
    });
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "About" })).not.toHaveAttribute("aria-current");
  });
});
