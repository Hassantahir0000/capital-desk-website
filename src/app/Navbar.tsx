"use client";

import { useState } from "react";
import svgPaths from "../imports/Home-2/svg-mvwhm2i239";

function CapitalDeskLogo({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" preserveAspectRatio="xMinYMid meet" viewBox="0 0 223.994 69.1116">
      <g>
        <path d={svgPaths.p3ae1e780} fill="#007BDA" />
        <path d={svgPaths.pfbdf900} fill="black" />
        <path d={svgPaths.p2a24cd00} fill="black" />
        <path d={svgPaths.p1831b480} fill="#007BDA" />
      </g>
    </svg>
  );
}

interface NavbarProps {
  currentPage: "home" | "about";
  onNavigateHome?: () => void;
  onNavigateAbout?: () => void;
}

export default function Navbar({ currentPage, onNavigateHome, onNavigateAbout }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAbout = currentPage === "about";

  const navItems: { label: string; href?: string; onClick?: () => void; active?: boolean }[] = [
    { label: "Home",         href: isAbout ? undefined : "#home",         onClick: isAbout ? onNavigateHome : undefined },
    { label: "Product",      href: isAbout ? undefined : "#product",      onClick: isAbout ? onNavigateHome : undefined },
    { label: "How it works", href: isAbout ? undefined : "#how-it-works", onClick: isAbout ? onNavigateHome : undefined },
    { label: "Beta Access",  href: isAbout ? undefined : "#beta",         onClick: isAbout ? onNavigateHome : undefined },
    { label: "FAQs",         href: isAbout ? undefined : "#faqs",         onClick: isAbout ? onNavigateHome : undefined },
    { label: "About Us",     onClick: isAbout ? undefined : onNavigateAbout, active: isAbout },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            className={`h-12 sm:h-16 w-auto ${isAbout ? "cursor-pointer" : ""}`}
            onClick={isAbout ? onNavigateHome : undefined}
          >
            <CapitalDeskLogo className="h-full w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-['Inter'] text-[#06113c] text-lg">
            {navItems.map((item) => {
              const activeClass = item.active ? "text-[#007bda] font-medium" : "hover:text-[#007bda] transition-colors";
              return item.href ? (
                <a key={item.label} href={item.href} className={activeClass}>
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  disabled={item.active}
                  className={`${activeClass} disabled:cursor-default`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <button className="hidden sm:block bg-gradient-to-r from-[#007BDA] to-black text-white px-6 sm:px-8 py-3 rounded-full font-['Inter'] font-medium text-base sm:text-lg hover:opacity-90 transition-opacity">
            Contact
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#06113c] hover:text-[#007bda] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-3 font-['Inter'] text-[#06113c] text-lg border-t border-gray-200 pt-4">
            {navItems.map((item) => {
              const activeClass = item.active
                ? "block py-2 text-[#007bda] font-medium cursor-default"
                : "block hover:text-[#007bda] transition-colors py-2";
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={activeClass}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => { if (!item.active) { item.onClick?.(); setMobileMenuOpen(false); } }}
                  className={`${activeClass} w-full text-left`}
                >
                  {item.label}
                </button>
              );
            })}
            <button className="w-full bg-gradient-to-r from-[#007BDA] to-black text-white px-6 py-3 rounded-full font-['Inter'] font-medium text-base hover:opacity-90 transition-opacity mt-2">
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
