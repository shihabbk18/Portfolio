import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ExperienceProvider } from "@/components/experience/experience-provider";
import { Assistant } from "@/components/robot/assistant";

vi.mock("next/dynamic", () => ({ default: () => () => null }));

describe("Shihab Bot assistant", () => {
  it("opens, answers a question, and restores launcher focus on Escape", async () => {
    const user = userEvent.setup();
    render(<ExperienceProvider><Assistant /></ExperienceProvider>);
    await user.click(screen.getByRole("button", { name: "Ask Shihab Bot about Shihab" }));
    const input = screen.getByRole("textbox", { name: "Ask about Shihab" });
    expect(input).toHaveFocus();
    await user.type(input, "Tell me about ModelDNA");
    await user.click(screen.getByRole("button", { name: "Send question" }));
    expect(screen.queryByRole("link", { name: "Read the case study" })).not.toBeInTheDocument();
    expect(screen.getByRole("log")).toHaveAttribute("aria-busy", "true");
    const caseStudy = await screen.findByRole("link", { name: "Read the case study" }, { timeout: 10000 });
    expect(caseStudy.getAttribute("href")?.replace(/\/$/, "")).toBe("/work/model-dna");
    expect(screen.getByRole("log")).toHaveAttribute("aria-busy", "false");
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("complementary", { name: "Shihab Bot" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Ask Shihab Bot about Shihab" })).toHaveFocus();
  }, 15000);
});
