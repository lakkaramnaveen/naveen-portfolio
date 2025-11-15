// src/components/sections/Skills.test.tsx
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills, { skillGroups } from "./Skills";

// Mock Tag so tests focus on layout/composition, not the Tag implementation.
vi.mock("../common/Tag", () => ({
  __esModule: true,
  default: ({ label }: { label: string }) => <span>Tag: {label}</span>,
}));

describe("Skills Section", () => {
  it("renders the section heading and kicker", () => {
    render(<Skills />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Skills" })
    ).toBeInTheDocument();

    expect(screen.getByText("What I work with")).toBeInTheDocument();
  });

  it("renders all skill groups as subsections", () => {
    render(<Skills />);

    // Each group has its title as an h3
    skillGroups.forEach((group) => {
      const heading = screen.getByRole("heading", {
        level: 3,
        name: group.title,
      });
      expect(heading).toBeInTheDocument();
    });
  });

  it("renders all skills as tags", () => {
    render(<Skills />);

    skillGroups.forEach((group) => {
      group.skills.forEach((skill) => {
        expect(
          screen.getByText((content) => content === `Tag: ${skill}`)
        ).toBeInTheDocument();
      });
    });
  });

  it("wraps skill groups in a grid container with an accessible label", () => {
    render(<Skills />);

    const grid = screen.getByLabelText("Skill groups");
    expect(grid).toBeInTheDocument();
  });
});
