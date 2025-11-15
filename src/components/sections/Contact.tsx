import React from "react";
import Section from "../common/Section";

const Contact: React.FC = () => (
  <Section id="contact" title="Contact" kicker="Let’s work together">
    <div className="space-y-4 text-sm sm:text-base text-slate-300">
      <p>
        I’m open to full-time roles and collaborations on impactful products,
        especially around large-scale systems, AdTech, and modern web platforms.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:naveenkumarl1361@gmail.com"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium text-slate-50 bg-gradient-to-tr from-indigo-500 to-indigo-400 shadow-[0_14px_30px_rgba(79,70,229,0.45)] hover:shadow-[0_18px_40px_rgba(79,70,229,0.7)] transform hover:-translate-y-[1px] transition-all"
        >
          Email me
        </a>
        <a
          href="https://www.linkedin.com/in/naveen-k-l/"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border border-slate-600 text-slate-50 hover:bg-slate-900/80 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/lakkaramnaveen"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border border-slate-600 text-slate-50 hover:bg-slate-900/80 transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  </Section>
);

export default Contact;
