import React from "react";
import profile from "../../assets/profile.png";
import Tag from "../common/Tag";

const Hero: React.FC = () => {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <Tag label="Full Stack Java Developer" />
          <h1>Building fast, scalable and secure web experiences.</h1>
          <p>
            I’m Naveen, a full-stack engineer with 6+ years of experience
            designing and shipping microservices, cloud-native apps, and modern
            front-ends with React and Angular. I love turning complex problems
            into simple, reliable systems.
          </p>

          <div className="hero__actions">
            <a className="btn" href="#projects">
              View projects
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.linkedin.com/in/naveen-k-l/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </div>

          <p className="hero__meta">
            Based in Sunnyvale, CA · open to Seattle, Dallas, Chicago, NYC
          </p>
        </div>

        <div className="hero__image-wrap">
          <img src={profile} alt="Portrait of Naveen Kumar Lakkaram" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
