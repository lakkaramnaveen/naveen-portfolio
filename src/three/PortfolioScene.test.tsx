// src/three/PortfolioScene.test.tsx
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// Mock react-three-fiber and drei so we don't need a real WebGL context
vi.mock("@react-three/fiber", () => ({
  __esModule: true,
  Canvas: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-canvas">{children}</div>
  ),
  useFrame: () => {
    // noop for tests
  },
}));

vi.mock("@react-three/drei", () => ({
  __esModule: true,
  OrbitControls: () => <div data-testid="mock-orbit-controls" />,
}));

import PortfolioScene from "./PortfolioScene";

describe("PortfolioScene", () => {
  it("renders a container with an accessible label", () => {
    render(<PortfolioScene />);

    const container = screen.getByLabelText("3D portfolio scene");
    expect(container).toBeInTheDocument();
  });

  it("renders a mocked Canvas wrapper", () => {
    render(<PortfolioScene />);

    expect(screen.getByTestId("mock-canvas")).toBeInTheDocument();
  });

  it("includes OrbitControls inside the Canvas", () => {
    render(<PortfolioScene />);

    const canvas = screen.getByTestId("mock-canvas");
    const controls = screen.getByTestId("mock-orbit-controls");
    expect(canvas).toContainElement(controls);
  });

  it("renders at least one mesh element for the cube", () => {
    const { container } = render(<PortfolioScene />);

    // Unknown JSX tags like <mesh> become DOM elements in JSDOM
    const meshes = container.getElementsByTagName("mesh");
    expect(meshes.length).toBeGreaterThan(0);
  });
});
