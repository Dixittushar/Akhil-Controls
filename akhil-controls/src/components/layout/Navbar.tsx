// src/components/layout/Navbar.tsx
"use client";

import { Zap, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export default function Navbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    onMenuToggle(); // We'll use this later for sidebar sync
  };

  return (
    <>
      <nav
        className={`bg-gradient-to-r ${theme.primary} text-white px-6 py-4 sticky top-0 z-50 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 ${theme.accent} rounded flex items-center justify-center font-bold ${theme.textOnAccent}`}
            >
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">Akhil Controls</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className={`font-medium hover:${theme.accentText} transition`}
            >
              Home
            </a>
            <a
              href="#"
              className={`font-medium hover:${theme.accentText} transition`}
            >
              Products
            </a>
            <a
              href="#"
              className={`font-medium hover:${theme.accentText} transition`}
            >
              Services
            </a>
            <a
              href="#"
              className={`font-medium hover:${theme.accentText} transition`}
            >
              About
            </a>
            <a
              href="#"
              className={`font-medium hover:${theme.accentText} transition`}
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              className={`hidden lg:block ${theme.accent} ${theme.textOnAccent} px-6 py-2.5 rounded-lg font-semibold ${theme.accentHover} transition transform hover:scale-105 shadow-md`}
            >
              Get Quote
            </button>

            {/* Mobile Hamburger */}
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

      {/* Mobile Menu Overlay (appears below navbar) */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-x-0 top-16 z-40 bg-gradient-to-b ${theme.primary} shadow-xl`}
        >
          <div className="px-6 py-6 space-y-4">
            <a
              href="#"
              className="block text-lg font-medium hover:opacity-80 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-lg font-medium hover:opacity-80 transition"
            >
              Products
            </a>
            <a
              href="#"
              className="block text-lg font-medium hover:opacity-80 transition"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-lg font-medium hover:opacity-80 transition"
            >
              About
            </a>
            <a
              href="#"
              className="block text-lg font-medium hover:opacity-80 transition"
            >
              Contact
            </a>
            <button
              className={`${theme.accent} ${theme.textOnAccent} w-full py-3 rounded-lg font-semibold ${theme.accentHover} transition mt-4`}
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}
