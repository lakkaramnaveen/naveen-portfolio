import React from "react";
import Tag from "../common/Tag";
import profile from "../../assets/profile.png";

const Hero: React.FC = () => (
  <section
    id="top"
    className="pt-16 pb-12 px-4 sm:px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-transparent"
  >
    <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[2fr,1fr] items-center">
      <div className="space-y-6">
        <Tag label="Full Stack Java Developer" />
        <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
          Building fast, scalable and secure web experiences.
        </h1>
        <p className="text-lg text-slate-300 max-w-prose">
          I’m Naveen, a full-stack engineer with 6+ years of experience
          designing and shipping microservices, cloud-native apps, and modern
          front-ends with React & Angular. I love turning complex problems into
          simple, reliable systems.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition shadow-lg"
          >
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/naveen-k-l/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-slate-600 text-white hover:bg-slate-800 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="justify-self-center lg:justify-self-end">
        <div className="rounded-full p-2 bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-xl">
          <img
            src={profile}
            alt="Naveen Kumar Lakkaram"
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
