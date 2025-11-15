import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/70 mt-10 bg-slate-950/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-center text-xs text-slate-400 space-y-1">
        <p>© {new Date().getFullYear()} Naveen Kumar Lakkaram</p>
        <p>
          Built with React, Tailwind CSS & Three.js · Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
};

export default Footer;
