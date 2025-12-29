// src/components/sections/HeroCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { carouselSlides } from "@/lib/carouselSlides";

export default function HeroCarousel() {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const gradients = [
    "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
    "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
    "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
    "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );

  return (
    <div className="relative h-96 lg:h-screen max-h-screen overflow-hidden group">
      {carouselSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: gradients[index] }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="relative h-full flex items-center justify-center text-white px-6">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl lg:text-3xl mb-4 text-gray-100">
                {slide.subtitle}
              </p>
              <p className="text-lg lg:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <button
                className={`${theme.accent} ${theme.textOnAccent} px-8 py-4 rounded-lg text-lg font-semibold ${theme.accentHover} transition flex items-center mx-auto`}
              >
                Learn More <ArrowRight className="ml-3 w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
