// ...existing code...
"use client";

import { useTheme } from "@/context/ThemeContext";
import { themes, type ThemeKey } from "@/lib/themes";
import { Zap } from "lucide-react";

export default function Home() {
  const { themeKey, theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Theme System Working! ⚡
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          Current Theme: <span className="font-bold">{theme.name}</span>
        </p>

        {/* Theme Switcher Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {Object.keys(themes).map((key) => {
            const tk = key as ThemeKey;
            return (
              <button
                key={tk}
                onClick={() => setTheme(tk)}
                className={`px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
                  themeKey === tk
                    ? "bg-gray-900 text-white shadow-xl"
                    : "bg-white text-gray-800 shadow-lg hover:shadow-xl"
                }`}
              >
                {themes[tk].name}
              </button>
            );
          })}
        </div>

        {/* Live Preview Box */}
        <div
          className={`p-10 rounded-2xl bg-gradient-to-r ${theme.primary} text-white shadow-2xl`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Zap className="w-12 h-12" />
            <h2 className="text-3xl font-bold">ElectroControl Pro</h2>
          </div>
          <p className="text-lg opacity-90 text-center">
            This gradient and accent colors change instantly with your theme!
          </p>
        </div>
      </div>
    </main>
  );
}
// ...existing code...
