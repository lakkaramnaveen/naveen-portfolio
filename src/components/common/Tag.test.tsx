import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Tag from "./Tag";

describe("Tag component", () => {
  it("renders with the correct label text", () => {
    render(<Tag label="React" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("applies proper accessibility role", () => {
    render(<Tag label="Java" />);
    const tag = screen.getByRole("status");
    expect(tag).toBeInTheDocument();
  });

  it("supports any string label", () => {
    render(<Tag label="C++/Algorithms + AI" />);
    expect(screen.getByText("C++/Algorithms + AI")).toBeInTheDocument();
  });

  it("does not render empty labels", () => {
    const { container } = render(<Tag label="" />);
    // Should still render the element (UI badge) but be empty.
    expect(container.querySelector("span")).toBeInTheDocument();
    expect(container.querySelector("span")?.textContent).toBe("");
  });
});
