import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ExperienceProvider } from "@/components/experience/experience-provider";
import { ThemePicker } from "@/components/experience/theme-picker";
import { themeStorageKey } from "@/data/themes";

beforeEach(() => { localStorage.clear(); delete document.documentElement.dataset.theme; });
afterEach(() => { vi.restoreAllMocks(); localStorage.clear(); delete document.documentElement.dataset.theme; });
const Picker = () => <ExperienceProvider><ThemePicker /></ExperienceProvider>;

describe("Website colour themes", () => {
  it("lets visitors choose White and remembers it after remounting", async () => {
    const user = userEvent.setup();
    const first = render(<Picker />);
    await user.click(screen.getByRole("button", { name: "Choose website colours" }));
    await user.click(screen.getByRole("button", { name: "White", exact: true }));
    expect(document.documentElement).toHaveAttribute("data-theme", "white");
    expect(localStorage.getItem(themeStorageKey)).toBe("white");
    first.unmount();
    render(<Picker />);
    await user.click(screen.getByRole("button", { name: "Choose website colours" }));
    expect(screen.getByRole("button", { name: "White", exact: true })).toHaveAttribute("aria-pressed", "true");
    await user.keyboard("{Escape}");
    expect(screen.getByRole("button", { name: "Choose website colours" })).toHaveFocus();
    expect(screen.queryByRole("group", { name: "Website colour theme" })).not.toBeInTheDocument();
  });
  it("ignores an unsupported stored theme", () => {
    localStorage.setItem(themeStorageKey, "not-a-theme");
    render(<Picker />);
    expect(document.documentElement).toHaveAttribute("data-theme", "white");
  });
  it("still changes colours when browser storage is unavailable", async () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("Storage unavailable"); });
    const user = userEvent.setup();
    render(<Picker />);
    await user.click(screen.getByRole("button", { name: "Choose website colours" }));
    await user.click(screen.getByRole("button", { name: "Black", exact: true }));
    expect(document.documentElement).toHaveAttribute("data-theme", "black");
  });
});
