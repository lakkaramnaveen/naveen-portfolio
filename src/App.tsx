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
        <section id="three">
          <Suspense
            fallback={
              <div className="three-loading">Loading 3D experience…</div>
            }
          >
            <PortfolioScene />
          </Suspense>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
