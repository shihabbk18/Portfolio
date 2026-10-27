import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ClayHome } from "@/components/clay/clay-home";
import { ExperienceProvider } from "@/components/experience/experience-provider";

describe("Clay portfolio", () => {
  it("keeps Fun with Flags featured and links to the complete project collection", () => {
    render(<ExperienceProvider><ClayHome /></ExperienceProvider>);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("AI Researcher");
    expect(screen.getByRole("link", { name: /Fun with Flags/ }).getAttribute("href")?.replace(/\/$/, "")).toBe("/work/fun-with-flags");
    expect(screen.getByRole("link", { name: /View all 16 projects/ }).getAttribute("href")?.replace(/\/$/, "")).toBe("/work");
  });
  it("supports keyboard switching between projects and research", async () => {
    const user = userEvent.setup();
    render(<ExperienceProvider><ClayHome /></ExperienceProvider>);
    screen.getByRole("tab", { name: "Projects" }).focus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Research" })).toHaveFocus();
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Hybrid Xception-LSTM");
    await user.keyboard("{ArrowLeft}");
    expect(screen.getByRole("tab", { name: "Projects" })).toHaveFocus();
    expect(screen.getByRole("link", { name: /Fun with Flags/ })).toBeInTheDocument();
  });
});
