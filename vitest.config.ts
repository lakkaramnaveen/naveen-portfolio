/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Required for React & DOM APIs
    setupFiles: "./src/test/setupTests.ts",
    css: false, // speeds up tests
  },
});
