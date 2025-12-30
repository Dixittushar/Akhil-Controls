// src/components/sections/HeroCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { carouselSlides } from "@/lib/carouselSlides";

export default function HeroCarousel() {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );

  return (
    <div className="relative h-96 lg:h-screen max-h-screen overflow-hidden">
      {carouselSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${
            index === currentSlide ? "z-20" : "z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundImages[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-white px-6">
            <div className="text-center max-w-5xl">
              <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                {slide.title}
              </h1>
              <p className="text-xl lg:text-3xl mb-6 text-gray-100 drop-shadow-lg">
                {slide.subtitle}
              </p>
              <p className="text-lg lg:text-xl mb-10 max-w-3xl mx-auto text-gray-200 drop-shadow-md">
                {slide.description}
              </p>
              <button
                className={`${theme.accent} ${theme.textOnAccent} px-10 py-5 rounded-xl text-lg lg:text-xl font-bold ${theme.accentHover} transition transform hover:scale-110 shadow-2xl flex items-center mx-auto`}
              >
                Learn More <ArrowRight className="ml-4 w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Always visible */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-4 rounded-full transition z-20"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-4 rounded-full transition z-20"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Dots Indicator - Always visible */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-12 h-4 rounded-full"
                : "bg-white/50 w-4 h-4 rounded-full hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
