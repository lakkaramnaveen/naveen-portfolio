import React from "react";
import Section from "../common/Section";

const About: React.FC = () => (
  <Section id="about" title="About" kicker="Who I am">
    <p>
      I’m an accomplished Full Stack Java Developer with experience across
      Walmart, Infosys, and HCL. I focus on scalable architectures, clean APIs,
      and clear communication with product, design, and data teams.
    </p>
    <p>
      My recent work includes handling latency-critical reads and writes for
      over 900M user accounts, reducing cloud costs by millions, and leading
      migrations from monoliths to microservices.
    </p>
  </Section>
);

export default About;
