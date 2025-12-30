// src/app/page.tsx
"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
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
      <Navbar onMenuToggle={toggleSidebar} />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
          <HeroCarousel />
          <FeaturesSection />
          <StatsSection />
          <div className="flex-1" /> {/* Spacer */}
          <Footer />
        </main>
      </div>
    </>
  );
}
