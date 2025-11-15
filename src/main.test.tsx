// src/main.test.tsx
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";

// We import after setting up DOM + mocks to avoid executing bootstrap too early.
describe("bootstrapApp / main entry", () => {
  it("renders the App into #root without crashing", async () => {
    // Arrange: create a root element in the JSDOM
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);

    // Mock App so we control its output and avoid coupling test to real App.
    vi.mock("./App", () => ({
      __esModule: true,
      default: () => <div>Mock App Component</div>,
    }));

    // Import main AFTER setting up DOM + mocks.
    const mainModule = await import("./main");
    // Make sure the bootstrap function is exported.
    expect(typeof mainModule.bootstrapApp).toBe("function");

    // Act: explicitly call bootstrapApp (even though main also calls it by default).
    mainModule.bootstrapApp("root");

    // Assert: App was rendered
    expect(screen.getByText("Mock App Component")).toBeInTheDocument();
  });

  it("logs an error if root element is missing", async () => {
    // Ensure no root element exists
    const existingRoot = document.getElementById("root");
    if (existingRoot) {
      existingRoot.remove();
    }

    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const { bootstrapApp } = await import("./main");

    bootstrapApp("non-existent-root");

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      '[bootstrapApp] Failed to find root element with id "non-existent-root".'
    );

    consoleErrorSpy.mockRestore();
  });
});
