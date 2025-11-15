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

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <section id="three" className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl bg-slate-900/70 border border-slate-700/70 shadow-soft-lg overflow-hidden h-64 sm:h-80 md:h-96 flex items-center justify-center">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center text-sm text-slate-400">
                    Loading 3D experience…
                  </div>
                }
              >
                <PortfolioScene />
              </Suspense>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
