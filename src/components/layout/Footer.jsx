"use client";
import Link from "next/link";
import { SITE_CONFIG, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { MapPin, PhoneCallIcon, MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-hero)] border-t border-[var(--color-border-dark)]">
      {/* ── Main Grid ── */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* ── Col 1: Brand + Description + Socials ── */}
          <div className="md:col-span-4">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4 font-[var(--font-heading)] text-2xl font-extrabold text-white no-underline"
            >
              <svg
                width="220"
                height="40"
                viewBox="0 0 220 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <rect
                  width="150"
                  height="40"
                  rx="8"
                  fill= "rgba(255,255,255,0.1)"
                />

                {/* Text Logo */}
                <text
                  x="15"
                  y="26"
                  fontSize="18"
                  fontWeight="700"
                  fontFamily="Poppins, sans-serif"
                >
                  <tspan fill="#4caf50">Landmine</tspan>
                  <tspan dx="6" fill="#ff9800">
                    Soft
                  </tspan>
                </text>
              </svg>
            </Link>

            <p className="mt-3 leading-relaxed text-sm text-[var(--color-ink-muted)] max-w-[300px]">
              {SITE_CONFIG.description}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 bg-[var(--color-hero-card)] text-[var(--color-ink-muted)] border border-[var(--color-border-dark)] hover:bg-[var(--color-teal)] hover:text-white hover:border-[var(--color-teal)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-5 text-white font-[var(--font-body)]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 text-[var(--color-ink-muted)] no-underline hover:text-[var(--color-teal)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.services.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 text-[var(--color-ink-muted)] no-underline hover:text-[var(--color-teal)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact Info ── */}
          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-5 text-white font-[var(--font-body)]">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-[var(--color-ink-muted)]">
                <span className="mt-[2px] flex-shrink-0 text-[var(--color-teal)]">
                  <MailIcon />
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm transition-colors duration-200 text-[var(--color-ink-muted)] no-underline hover:text-[var(--color-teal)]"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-ink-muted)]">
                <span className="mt-[2px] flex-shrink-0 text-[var(--color-teal)]">
                  <PhoneCallIcon />
                </span>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-sm transition-colors duration-200 text-[var(--color-ink-muted)] no-underline hover:text-[var(--color-teal)]"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[2px] flex-shrink-0 text-[var(--color-teal)]">
                  <MapPin />
                </span>
                <a
                  href="https://maps.google.com/?q=Hyderabad,+Telangana+500081,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed text-[var(--color-ink-muted)] hover:text-[var(--color-teal)] transition-colors duration-200"
                >
                  {SITE_CONFIG.address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="divider border-[var(--color-border-dark)] bg-[var(--color-border-dark)]" />

      {/* ── Bottom Bar ── */}
      <div className="container-main py-5 flex items-center justify-between flex-col md:flex-row gap-4 md:gap-3 text-center md:text-left">
        <p className="text-xs text-[var(--color-ink-2)]">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {FOOTER_LINKS.legal.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs transition-colors duration-200 text-[var(--color-ink-2)] no-underline hover:text-[var(--color-teal)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
