// src/components/sections/About.tsx
import React from "react";
import Section from "../common/Section";

const aboutParagraphs = [
  `I’m an accomplished Full Stack Java Developer with experience across Walmart, Infosys, and HCL. 
   I focus on scalable architectures, clean APIs, and clear communication with product, design, 
   and data teams.`,

  `My recent work includes handling latency-critical reads and writes for over 900M user records, 
   reducing cloud costs by millions, and leading migrations from monoliths to microservices.`,
];

/**
 * "About" section describing personal background and engineering focus areas.
 *
 * Wrapped in the shared <Section> layout component for consistent structure, spacing,
 * and accessibility across the site. Content is split into an array for easier updates,
 * translations, or future data-driven rendering.
 */
const About: React.FC = () => {
  return (
    <Section id="about" title="About" kicker="Who I am">
      <div
        className="space-y-3 text-sm sm:text-base text-slate-300"
        aria-label="About section content"
      >
        {aboutParagraphs.map((text, index) => (
          <p key={index} className="leading-relaxed">
            {text}
          </p>
        ))}
      </div>
    </Section>
  );
};

export default About;
export { aboutParagraphs };
