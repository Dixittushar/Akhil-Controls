// src/components/sections/FeaturesSection.tsx
"use client";

import { Zap, Shield, Settings } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function FeaturesSection() {
  const { theme } = useTheme();

  const features = [
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Industry-leading efficiency and reliability in every panel we manufacture",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Compliant with all international safety standards and certifications",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description:
        "Tailored designs to meet your specific operational requirements",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${theme.cardBg} border-2 ${theme.border} rounded-2xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2`}
            >
              <div
                className={`w-20 h-20 ${theme.iconBg} rounded-xl flex items-center justify-center mb-6 mx-auto`}
              >
                <feature.icon className={`w-10 h-10 ${theme.icon}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
