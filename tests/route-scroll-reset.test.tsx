import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { RouteScrollReset } from "@/components/experience/route-scroll-reset";

const currentRoute = vi.hoisted(() => ({ path: "/" }));
vi.mock("next/navigation", () => ({ usePathname: () => currentRoute.path }));
beforeEach(() => {
  currentRoute.path = "/";
  window.history.replaceState({}, "", "/");
  vi.mocked(window.scrollTo).mockClear();
});

function Page() { return <><main><h1>Page title</h1><section id="skills">Skills</section></main><RouteScrollReset /></>; }

describe("Page navigation scroll", () => {
  it("starts each new route at the top and focuses its heading", () => {
    const { rerender } = render(<Page />);
    for (const route of ["/about/", "/work/", "/research/", "/contact/", "/"]) {
      vi.mocked(window.scrollTo).mockClear();
      currentRoute.path = route;
      rerender(<Page />);
      expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "instant" });
      expect(screen.getByRole("heading", { name: "Page title" })).toHaveFocus();
    }
  });
  it("preserves explicit section links instead of overriding them with a top reset", () => {
    const { rerender } = render(<Page />);
    const target = document.getElementById("skills")!;
    target.scrollIntoView = vi.fn();
    window.history.replaceState({}, "", "/about/#skills");
    currentRoute.path = "/about/";
    rerender(<Page />);
    expect(target.scrollIntoView).toHaveBeenCalledWith({ block: "start", behavior: "instant" });
    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
