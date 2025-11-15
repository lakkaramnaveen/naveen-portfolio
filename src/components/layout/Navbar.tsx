// src/components/layout/Navbar.tsx
import React from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#three", label: "3D" },
  { href: "#contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-slate-950/90 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold text-slate-50"
          aria-label="Back to top"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
          <span className="truncate">Naveen Kumar Lakkaram</span>
        </a>

        <nav aria-label="Main navigation" className="hidden sm:block">
          <ul className="flex items-center gap-3 text-xs">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-2.5 py-1 rounded-full text-slate-300 hover:text-slate-50 hover:bg-indigo-500/15 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile pill nav */}
        <nav
          aria-label="Main navigation mobile"
          className="sm:hidden flex-1 flex justify-end"
        >
          <ul className="flex items-center gap-1 text-[11px] overflow-x-auto no-scrollbar">
            {links.map((link) => (
              <li key={link.href} className="flex-shrink-0">
                <a
                  href={link.href}
                  className="px-2 py-0.5 rounded-full text-slate-300 hover:text-slate-50 hover:bg-indigo-500/15 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
