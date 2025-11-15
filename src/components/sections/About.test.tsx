import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About, { aboutParagraphs } from "./About";

describe("About Section", () => {
  it("renders the section heading and kicker", () => {
    render(<About />);

    const heading = screen.getByRole("heading", { level: 2, name: "About" });
    const kicker = screen.getByText("Who I am");

    expect(heading).toBeInTheDocument();
    expect(kicker).toBeInTheDocument();
  });

  it("renders all about paragraphs", () => {
    render(<About />);

    aboutParagraphs.forEach((text) => {
      // Using partial match in case of spacing/newlines in array items
      expect(
        screen.getByText((content) => content.includes(text.trim()))
      ).toBeInTheDocument();
    });
  });

  it("renders wrapper with about content aria-label", () => {
    render(<About />);
    const contentContainer = screen.getByLabelText("About section content");

    expect(contentContainer).toBeInTheDocument();
  });
});
