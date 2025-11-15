// src/components/layout/Footer.tsx
import React from "react";

const currentYear = new Date().getFullYear();

/**
 * Global site footer.
 *
 * - Uses simple semantic structure.
 * - Year is fixed in a constant for testability.
 * - Lightweight and fully SSR-safe.
 */
const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      className="border-t border-slate-800/70 mt-10 bg-slate-950/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-center text-xs text-slate-400 space-y-1">
        <p>© {currentYear} Naveen Kumar Lakkaram</p>
        <p>
          Built with React, Tailwind CSS & Three.js · Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
};

export default Footer;
export { currentYear };
