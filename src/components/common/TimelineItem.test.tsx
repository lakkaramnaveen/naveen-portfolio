import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TimelineItem from "./TimelineItem";

describe("TimelineItem", () => {
  const defaultProps = {
    title: "Software Engineer",
    company: "Acme Corp",
    location: "Remote",
    period: "2022 – Present",
    bullets: [
      "Developed system features using React and TypeScript",
      "Built CI/CD pipelines with GitHub Actions",
    ],
  };

  it("renders the article with correct accessible heading", () => {
    render(<TimelineItem {...defaultProps} />);

    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Software Engineer",
    });

    expect(heading).toBeInTheDocument();

    const article = screen.getByRole("article");
    expect(article).toHaveAttribute("aria-labelledby", heading.id);
  });

  it("renders the company and location text", () => {
    render(<TimelineItem {...defaultProps} />);

    expect(screen.getByText("Acme Corp · Remote")).toBeInTheDocument();
  });

  it("renders the period pill", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.getByText("2022 – Present")).toBeInTheDocument();
  });

  it("renders all bullet points", () => {
    render(<TimelineItem {...defaultProps} />);

    defaultProps.bullets.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("supports items without a location", () => {
    render(<TimelineItem {...defaultProps} location={undefined} />);
    expect(screen.getByText("Acme Corp")).toBeInTheDocument();
    expect(screen.queryByText(/·/)).not.toBeInTheDocument();
  });
});
