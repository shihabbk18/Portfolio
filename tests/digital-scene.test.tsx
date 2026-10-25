import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { DigitalScene } from "@/components/digital-scene";

describe("DigitalScene", () => {
  it("lets visitors pause and resume continuous animation", async () => {
    const user = userEvent.setup();
    const { container } = render(<DigitalScene />);
    await user.click(screen.getByRole("button", { name: "Pause 3D animation" }));
    expect(container.firstChild).toHaveClass("digital-scene--paused");
    expect(screen.getByRole("button", { name: "Play 3D animation" })).toHaveAttribute("aria-pressed", "true");
    await user.click(screen.getByRole("button", { name: "Play 3D animation" }));
    expect(container.firstChild).not.toHaveClass("digital-scene--paused");
  });
});
