// src/components/sections/Contact.tsx
import React from "react";
import Section from "../common/Section";

export interface ContactLink {
  label: string;
  href: string;
  isPrimary?: boolean;
  external?: boolean;
}

export const contactLinks: ContactLink[] = [
  {
    label: "Email me",
    href: "mailto:naveenkumarl1361@gmail.com",
    isPrimary: true,
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/naveen-k-l/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/lakkaramnaveen",
    external: true,
  },
];

/**
 * Contact section allows visitors to reach out via email or social links.
 * Uses <Section> layout wrapper for consistent spacing + accessibility.
 */
const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Contact" kicker="Let’s work together">
      <div
        className="space-y-4 text-sm sm:text-base text-slate-300"
        aria-label="Contact options"
      >
        <p>
          I’m open to full-time roles and collaborations on impactful products,
          especially around large-scale systems, AdTech, and modern web
          platforms.
        </p>

        <div className="flex flex-wrap gap-3">
          {contactLinks.map((link) => {
            const commonClasses =
              "inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all";

            const primaryClasses =
              "text-slate-50 bg-gradient-to-tr from-indigo-500 to-indigo-400 " +
              "shadow-[0_14px_30px_rgba(79,70,229,0.45)] hover:shadow-[0_18px_40px_rgba(79,70,229,0.7)] hover:-translate-y-[1px]";

            const secondaryClasses =
              "border border-slate-600 text-slate-50 hover:bg-slate-900/80";

            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={`${commonClasses} ${
                  link.isPrimary ? primaryClasses : secondaryClasses
                }`}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer noopener" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
