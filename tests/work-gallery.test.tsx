import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ExperienceProvider } from "@/components/experience/experience-provider";
import { WorkGallery } from "@/components/work-gallery";

describe("Spatial project gallery", () => {
  it("updates the selected case study with buttons and arrow keys", async () => {
    const user = userEvent.setup();
    render(<ExperienceProvider><WorkGallery /></ExperienceProvider>);
    expect(screen.getByRole("link", { name: "Read case study" }).getAttribute("href")?.replace(/\/$/, "")).toBe("/work/gesturecam-fx");
    await user.click(screen.getByRole("button", { name: "Select ModelDNA" }));
    expect(screen.getByRole("link", { name: "Read case study" }).getAttribute("href")?.replace(/\/$/, "")).toBe("/work/model-dna");
    fireEvent.keyDown(screen.getByRole("region", { name: "3D project gallery" }), { key: "ArrowRight" });
    expect(screen.getByRole("link", { name: "Read case study" }).getAttribute("href")?.replace(/\/$/, "")).toBe("/work/sign-sense");
  });
});
