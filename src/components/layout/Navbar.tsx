// src/components/layout/Navbar.tsx
import React from "react";

export interface NavLinkItem {
  href: string;
  label: string;
}

/**
 * Single source of truth for navigation links.
 * Exported for reuse (e.g., tests, future mobile menus, sitemap, etc.).
 */
export const NAV_LINKS: NavLinkItem[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#three", label: "3D" },
  { href: "#contact", label: "Contact" },
];

interface NavListProps {
  links: NavLinkItem[];
  itemClassName?: string;
  linkClassName?: string;
}

/**
 * Reusable navigation list to avoid duplicating link mapping
 * between desktop and mobile navs.
 */
const NavList: React.FC<NavListProps> = ({
  links,
  itemClassName = "",
  linkClassName = "",
}) => {
  return (
    <ul className="flex items-center gap-3 text-xs">
      {links.map((link) => (
        <li key={link.href} className={itemClassName}>
          <a href={link.href} className={linkClassName}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

/**
 * Sticky top navigation bar.
 *
 * - Desktop and mobile navs share the same NAV_LINKS data.
 * - Uses semantic header + nav landmarks.
 * - Anchor links scroll to in-page sections (About, Experience, etc.).
 */
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

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden sm:block">
          <NavList
            links={NAV_LINKS}
            itemClassName=""
            linkClassName="px-2.5 py-1 rounded-full text-slate-300 hover:text-slate-50 hover:bg-indigo-500/15 transition-colors"
          />
        </nav>

        {/* Mobile pill nav */}
        <nav
          aria-label="Main navigation mobile"
          className="sm:hidden flex-1 flex justify-end"
        >
          <NavList
            links={NAV_LINKS}
            itemClassName="flex-shrink-0"
            linkClassName="px-2 py-0.5 rounded-full text-slate-300 hover:text-slate-50 hover:bg-indigo-500/15 transition-colors"
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
