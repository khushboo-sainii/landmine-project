"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${isScrolled || isMobileMenuOpen ? "navbar-solid" : "navbar-transparent"}`}
    >
      <div className="navbar-inner">
        <Link
          href="/"
          className="flex items-center gap-2 font-[var(--font-heading)] font-extrabold text-[1.4rem] shrink-0"
          style={{ color: isScrolled ? "var(--color-navy)" : "#ffffff" }}
        >
          {/* SVG Logo */}
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
              fill={isScrolled ? "#F7F9FC" : "rgba(255,255,255,0.1)"} 
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
              <tspan dx="6" fill=" #ff9800">
                Soft
              </tspan>
            </text>
          </svg>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-7 ml-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[1rem] font-semibold transition-colors duration-200 hover:text-[#00B4D8]"
              style={{
                color: isScrolled
                  ? "var(--color-ink)"
                  : "rgba(255,255,255,0.85)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* SPACER */}
        <div className="flex-1" />

        {/* DESKTOP CTA */}
        <div
          className="hidden md:flex items-center gap-4 ml-6 border-l pl-6 border-white/20"
          style={{
            borderColor: isScrolled
              ? "rgba(10,36,99,0.1)"
              : "rgba(255,255,255,0.2)",
          }}
        >
          <Link
            href="/login"
            className="text-[.92rem] font-bold transition-colors hover:text-[#00B4D8]"
            style={{ color: isScrolled ? "var(--color-navy)" : "#ffffff" }}
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="btn-primary shadow-lg hover:shadow-xl transition-all hover:-translate-y-[2px]"
            style={{
              background: isScrolled ? "var(--color-navy)" : "#ffffff",
              color: isScrolled ? "#ffffff" : "#0A2463",
            }}
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
          style={{ color: isScrolled ? "var(--color-navy)" : "#ffffff" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#DDE3F0] shadow-lg">
          <div className="container-main py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-[.88rem] font-semibold text-[#0D1B3E] hover:text-[#00B4D8] hover:bg-[#EBF0FF] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#DDE3F0]">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center py-[.65rem] rounded-lg border-2 border-[#DDE3F0] text-[#0A2463] font-bold text-[.9rem]"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary justify-center w-full"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
