// src/App.tsx
import React, { Suspense, lazy } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const PortfolioScene = lazy(() => import("./three/PortfolioScene"));

/**
 * Encapsulates the 3D portfolio section.
 * This keeps App lean and makes this piece easy to test or swap out later.
 */
const ThreeExperienceSection: React.FC = () => (
  <section id="three" className="py-12 sm:py-16 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto">
      <div className="rounded-3xl bg-slate-900/70 border border-slate-700/70 shadow-soft-lg overflow-hidden h-64 sm:h-80 md:h-96 flex items-center justify-center">
        <Suspense
          fallback={
            <div
              className="w-full h-full flex items-center justify-center text-sm text-slate-400"
              aria-label="3D experience loading"
            >
              Loading 3D experience…
            </div>
          }
        >
          <PortfolioScene />
        </Suspense>
      </div>
    </div>
  </section>
);

/**
 * Root application shell.
 *
 * - Keeps layout concerns (Navbar/Footer/main content).
 * - Sections are composed as simple, readable building blocks.
 * - 3D section is lazy-loaded to avoid blocking initial render and
 *   to reduce bundle size for users who never scroll that far.
 */
const App: React.FC = () => {
  return (
    <div className="app min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ThreeExperienceSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
export { ThreeExperienceSection };
