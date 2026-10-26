import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ExperienceProvider } from "@/components/experience/experience-provider";
import { WorkGallery } from "@/components/work-gallery";
import { projects } from "@/data/projects";

describe("Spatial project gallery", () => {
  it("includes Fun with Flags as a full project and can filter the full catalogue", async () => {
    const user = userEvent.setup();
    render(<ExperienceProvider><WorkGallery /></ExperienceProvider>);
    const flagsIndex = projects.findIndex((project) => project.id === "fun-with-flags");
    await user.selectOptions(screen.getByRole("combobox", { name: "Choose a project" }), String(flagsIndex));
    expect(screen.getByRole("link", { name: "Read case study" }).getAttribute("href")?.replace(/\/$/, "")).toBe("/work/fun-with-flags");
    await user.type(screen.getByRole("searchbox", { name: "Search projects" }), "Fun with Flags");
    expect(screen.getByRole("status")).toHaveTextContent(`Showing 1 of ${projects.length} projects`);
    expect(screen.getByRole("link", { name: /Apps & web.*Fun with Flags/ })).toBeInTheDocument();
  });
  it("updates the selected case study with buttons and arrow keys", async () => {
    const user = userEvent.setup();
    render(<ExperienceProvider><WorkGallery /></ExperienceProvider>);
    expect(screen.getByRole("link", { name: "Read case study" }).getAttribute("href")?.replace(/\/$/, "")).toBe("/work/gesturecam-fx");
    await user.selectOptions(screen.getByRole("combobox", { name: "Choose a project" }), "2");
    expect(screen.getByRole("link", { name: "Read case study" }).getAttribute("href")?.replace(/\/$/, "")).toBe("/work/model-dna");
    fireEvent.keyDown(screen.getByRole("region", { name: "3D project gallery" }), { key: "ArrowRight" });
    expect(screen.getByRole("link", { name: "Read case study" }).getAttribute("href")?.replace(/\/$/, "")).toBe("/work/sign-sense");
  });
});
