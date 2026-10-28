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
    expect(screen.getByRole("link", { name: "Read the case study" }).getAttribute("href")?.replace(/\/$/, "")).toBe("/work/model-dna");
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("complementary", { name: "Shihab Bot" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Ask Shihab Bot about Shihab" })).toHaveFocus();
  });
});
