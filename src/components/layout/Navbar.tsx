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
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand" aria-label="Back to top">
          <span className="navbar__dot" />
          <span>Naveen Kumar Lakkaram</span>
        </a>

        <nav aria-label="Main navigation">
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
