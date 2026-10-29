import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LampIntro } from "@/components/experience/lamp-intro";
afterEach(() => { cleanup(); vi.useRealTimers(); });
describe("Lamp entrance", () => {
  it("reveals the site and removes the lamp", () => {
    vi.useFakeTimers();
    history.replaceState({}, "", "/Portfolio/");
    render(<LampIntro><main id="main-content">Portfolio</main></LampIntro>);
    fireEvent.click(screen.getByRole("button", {name: /Switch on/}));
    expect(screen.getByRole("dialog")).toHaveClass("lamp-intro--on");
    act(() => { vi.advanceTimersByTime(1900); });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).not.toBe("hidden");
  });
  it("supports Escape and direct page access", () => {
    history.replaceState({}, "", "/Portfolio/");
    const view = render(<LampIntro><main>Portfolio</main></LampIntro>);
    fireEvent.keyDown(document, {key: "Escape"});
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    view.unmount();
    history.replaceState({}, "", "/Portfolio/work/");
    render(<LampIntro><main>Work</main></LampIntro>);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
