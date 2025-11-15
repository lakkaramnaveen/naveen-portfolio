// src/components/sections/Experience.test.tsx
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Experience, { experiences } from "./Experience";

// Mock TimelineItem to keep tests focused on Experience’s composition, not the card internals
vi.mock("../common/TimelineItem", () => ({
  __esModule: true,
  default: ({ title, company }: { title: string; company: string }) => (
    <article data-testid="timeline-item">
      <h3>{title}</h3>
      <p>{company}</p>
    </article>
  ),
}));

describe("Experience Section", () => {
  it("renders the section heading and kicker", () => {
    render(<Experience />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Experience",
    });
    const kicker = screen.getByText("Where I’ve been");

    expect(heading).toBeInTheDocument();
    expect(kicker).toBeInTheDocument();
  });

  it("renders a TimelineItem for each experience entry", () => {
    render(<Experience />);

    const items = screen.getAllByTestId("timeline-item");
    expect(items).toHaveLength(experiences.length);
  });

  it("passes correct title and company to each TimelineItem", () => {
    render(<Experience />);

    experiences.forEach((exp) => {
      expect(screen.getByText(exp.title)).toBeInTheDocument();
      expect(screen.getByText(exp.company)).toBeInTheDocument();
    });
  });

  it("renders experiences in the defined order", () => {
    render(<Experience />);

    const titlesInDom = screen
      .getAllByRole("heading", { level: 3 })
      .map((el) => el.textContent);

    const expectedTitles = experiences.map((exp) => exp.title);

    expect(titlesInDom).toEqual(expectedTitles);
  });
});
