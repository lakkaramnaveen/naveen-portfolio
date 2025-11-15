// src/components/sections/Projects.test.tsx
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects, { projects } from "./Projects";

// Keep focus on Projects; Tag is a simple visual chip.
vi.mock("../common/Tag", () => ({
  __esModule: true,
  default: ({ label }: { label: string }) => <span>Tag: {label}</span>,
}));

describe("Projects Section", () => {
  it("renders the section heading and kicker", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Selected work" })
    ).toBeInTheDocument();

    expect(screen.getByText("What I’ve built")).toBeInTheDocument();
  });

  it("renders an article for each project", () => {
    render(<Projects />);

    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(projects.length);
  });

  it("renders each project's title and description", () => {
    render(<Projects />);

    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it("renders tags for each project", () => {
    render(<Projects />);

    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        expect(
          screen.getByText((content) => content === `Tag: ${tag}`)
        ).toBeInTheDocument();
      });
    });
  });

  it("renders view details link only for projects with a link", () => {
    render(<Projects />);

    // Projects with links -> should have CTA
    projects
      .filter((p) => p.link)
      .forEach((p) => {
        const link = screen.getByRole("link", {
          name: `View details for ${p.title}`,
        });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", p.link);
      });

    // Projects without links -> no CTA
    projects
      .filter((p) => !p.link)
      .forEach((p) => {
        const query = screen.queryByRole("link", {
          name: `View details for ${p.title}`,
        });
        expect(query).toBeNull();
      });
  });
});
