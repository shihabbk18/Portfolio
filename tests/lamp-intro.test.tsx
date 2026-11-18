import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LampIntro } from "@/components/experience/lamp-intro";
vi.mock("next/navigation", () => ({ usePathname: () => location.pathname }));
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
  it("lets the lamp cord be pulled to switch on the light", () => {
    vi.useFakeTimers();
    history.replaceState({}, "", "/Portfolio/");
    render(<LampIntro><main id="main-content">Portfolio</main></LampIntro>);
    const cord = screen.getByTestId("lamp-cord");
    fireEvent(cord, new MouseEvent("pointerdown", {bubbles: true, clientY: 100}));
    fireEvent(cord, new MouseEvent("pointermove", {bubbles: true, clientY: 145}));
    expect(cord.querySelector("rect")).toHaveAttribute("y", "304");
    fireEvent(cord, new MouseEvent("pointerup", {bubbles: true, clientY: 145}));
    expect(screen.getByRole("dialog")).toHaveClass("lamp-intro--on");
  });
});
