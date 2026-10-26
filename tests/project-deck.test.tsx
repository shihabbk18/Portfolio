import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ProjectDeck } from "@/components/project-deck";
import { projects } from "@/data/projects";

describe("ProjectDeck", () => {
  it("renders every project in the stack", () => {
    render(<ProjectDeck />);

    projects.forEach((project) => {
      expect(screen.getAllByText(project.title).length).toBeGreaterThan(0);
    });
  });

  it("brings a selected background card to the front", async () => {
    const user = userEvent.setup();
    render(<ProjectDeck />);

    await user.click(
      screen.getByRole("button", {
        name: "Bring ModelDNA to front",
      }),
    );

    await waitFor(() => expect(screen.getByText("Active study / 03")).toBeInTheDocument());
    expect(screen.getByText(`03 / ${String(projects.length).padStart(2, "0")}`)).toBeInTheDocument();
  });

  it("supports previous and next controls", async () => {
    const user = userEvent.setup();
    render(<ProjectDeck />);

    await user.click(screen.getByRole("button", { name: "Show next project" }));
    expect(screen.getByText(`02 / ${String(projects.length).padStart(2, "0")}`)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Show previous project" }));
    expect(screen.getByText(`01 / ${String(projects.length).padStart(2, "0")}`)).toBeInTheDocument();
  });

  it("changes the active project with arrow keys", () => {
    render(<ProjectDeck />);
    const region = screen.getByRole("region", { name: "Featured projects" });

    fireEvent.keyDown(region, { key: "ArrowRight" });
    expect(screen.getByText(`02 / ${String(projects.length).padStart(2, "0")}`)).toBeInTheDocument();

    fireEvent.keyDown(region, { key: "ArrowLeft" });
    expect(screen.getByText(`01 / ${String(projects.length).padStart(2, "0")}`)).toBeInTheDocument();
  });

  it("starts with GestureCam FX active and shows the MedSafe disclaimer", async () => {
    const user = userEvent.setup();
    render(<ProjectDeck />);

    expect(screen.getByText("Active study / 01")).toBeInTheDocument();
    expect(screen.getAllByText("GestureCam FX").length).toBeGreaterThan(0);

    await user.click(screen.getByRole("button", { name: "Bring MedSafe Lens to front" }));
    await waitFor(() =>
      expect(
        screen.getByText(
          "This project is an informational review assistant, not a medical device, diagnosis tool, or replacement for professional clinical judgment.",
        ),
      ).toBeInTheDocument(),
    );
  });
});
