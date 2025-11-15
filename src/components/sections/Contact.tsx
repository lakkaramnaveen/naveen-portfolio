import React from "react";
import Section from "../common/Section";

const Contact: React.FC = () => (
  <Section id="contact" title="Contact" kicker="Let’s work together">
    <p>
      I’m open to full-time roles and collaborations on impactful products,
      especially around large-scale systems, AdTech, and modern web platforms.
    </p>
    <div className="contact__links">
      <a href="mailto:naveenkumarl1361@gmail.com" className="btn">
        Email me
      </a>
      <a
        href="https://www.linkedin.com/in/naveen-k-l/"
        target="_blank"
        rel="noreferrer noopener"
        className="btn btn--ghost"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/naveenkumarl1361-cpu"
        target="_blank"
        rel="noreferrer noopener"
        className="btn btn--ghost"
      >
        GitHub
      </a>
    </div>
  </Section>
);

export default Contact;
