// src/components/sections/StatsSection.tsx
"use client";

import { useTheme } from "@/context/ThemeContext";

export default function StatsSection() {
  const { theme } = useTheme();

  const stats = [
    { value: "1000+", label: "Projects Completed" },
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-16">
      <div
        className={`max-w-7xl mx-auto px-6 bg-gradient-to-r ${theme.primary} text-white rounded-3xl shadow-2xl py-12`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl lg:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
