// src/components/layout/Footer.tsx
"use client";

import { Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+91 9900568857</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>akhilcontrols@gmail.com</span>
            </div>
          </div>

          <div className="flex gap-6">
            <Facebook
              className={`w-6 h-6 cursor-pointer hover:${theme.accentText} transition`}
            />
            <Linkedin
              className={`w-6 h-6 cursor-pointer hover:${theme.accentText} transition`}
            />
            <Twitter
              className={`w-6 h-6 cursor-pointer hover:${theme.accentText} transition`}
            />
          </div>
        </div>

        <div className="text-center mt-8 text-sm opacity-70">
          © 2025 Akhil Controls. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
