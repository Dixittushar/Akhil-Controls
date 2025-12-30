// src/app/page.tsx
"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import HeroCarousel from "@/components/sections/HeroCarousel";
import FeaturesSection from "@/components/sections/FeaturesSection";
import StatsSection from "@/components/sections/StatsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <div className="flex">
        {/* <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} /> */}

        <main className="flex-1 flex flex-col min-h-screen">
          <HeroCarousel />
          <FeaturesSection />
          <StatsSection />
          <div className="flex-1" /> {/* Spacer */}
          {/* <Footer /> */}
        </main>
      </div>
    </>
  );
}
