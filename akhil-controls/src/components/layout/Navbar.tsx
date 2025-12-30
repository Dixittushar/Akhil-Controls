// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link"; // Add this import
import { Zap, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export default function Navbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    onMenuToggle();
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`bg-gradient-to-r ${theme.primary} text-white px-6 py-4 sticky top-0 z-50 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 ${theme.accent} rounded flex items-center justify-center font-bold ${theme.textOnAccent}`}
            >
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">Akhil Controls</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium hover:${theme.accentText} transition`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden lg:block ${theme.accent} ${theme.textOnAccent} px-6 py-2.5 rounded-lg font-semibold ${theme.accentHover} transition transform hover:scale-105 shadow-md`}
            >
              Get Quote
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-x-0 top-16 z-40 bg-gradient-to-b ${theme.primary} shadow-xl`}
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
                className="block text-lg font-medium hover:opacity-80 transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`${theme.accent} ${theme.textOnAccent} w-full py-3 rounded-lg font-semibold ${theme.accentHover} transition block text-center mt-4`}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
