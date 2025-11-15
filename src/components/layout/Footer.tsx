import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Naveen Kumar Lakkaram</p>
      <p className="footer__small">
        Built with React · Deployed on GitHub Pages
      </p>
    </footer>
  );
};

export default Footer;
