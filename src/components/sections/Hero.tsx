import React from "react";
import profile from "../../assets/profile.png";
import Tag from "../common/Tag";

const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="pt-12 sm:pt-16 pb-12 px-4 sm:px-6 bg-gradient-to-b from-slate-950 via-slate-950/70 to-transparent"
    >
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] items-center">
        {/* Text column */}
        <div className="space-y-5">
          <Tag label="Full Stack Java Developer" />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-50">
            Building fast, scalable and secure web experiences.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            I’m Naveen, a full-stack engineer with 6+ years of experience
            designing and shipping microservices, cloud-native apps, and modern
            front-ends with React and Angular. I love turning complex problems
            into simple, reliable systems.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium text-slate-50 bg-gradient-to-tr from-indigo-500 to-indigo-400 shadow-[0_18px_40px_rgba(79,70,229,0.7)] hover:shadow-[0_24px_50px_rgba(79,70,229,0.9)] transform hover:-translate-y-[1px] transition-all"
              href="#projects"
            >
              View projects
            </a>
            <a
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium border border-slate-600 text-slate-50 hover:bg-slate-900/80 transition-colors"
              href="https://www.linkedin.com/in/naveen-k-l/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-1">
            Based in Sunnyvale, CA · open to Seattle, Dallas, Chicago, NYC
          </p>
        </div>

        {/* Avatar column */}
        <div className="justify-self-center lg:justify-self-end">
          <div className="p-1.5 rounded-full bg-slate-950 shadow-soft-lg">
            <div className="p-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700">
              <img
                src={profile}
                alt="Portrait of Naveen Kumar Lakkaram"
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover block bg-slate-900"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
