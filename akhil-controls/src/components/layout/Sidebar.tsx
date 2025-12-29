// src/components/layout/Sidebar.tsx
"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void; // Add this prop
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { theme } = useTheme();

  return (
    <>
      {/* Desktop Sidebar - Always visible on lg+ */}
      <aside className="hidden lg:block w-72 bg-gray-50 border-r border-gray-200 p-6 overflow-y-auto h-screen fixed left-0 top-16 bottom-0">
        <h3 className="font-bold text-gray-700 mb-6 text-sm uppercase tracking-wider">
          Categories
        </h3>

        <div className="space-y-3">
          {/* Control Panels */}
          <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between cursor-pointer">
              <span className="font-semibold text-gray-800">
                Control Panels
              </span>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </div>
            <div className="mt-3 ml-4 space-y-2 text-sm text-gray-600">
              <div className="py-1 hover:text-blue-700 cursor-pointer">
                PLC Panels
              </div>
              <div className="py-1 hover:text-blue-700 cursor-pointer">
                Motor Control
              </div>
              <div className="py-1 hover:text-blue-700 cursor-pointer">
                Power Distribution
              </div>
            </div>
          </div>

          {["Automation", "Custom Solutions", "Support & Services"].map(
            (item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">{item}</span>
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </div>
              </div>
            )
          )}

          {/* Contact Card */}
          <div
            className={`${theme.cardBg} rounded-xl p-6 mt-8 border-l-4 ${theme.border}`}
          >
            <h4 className="font-bold text-gray-800 mb-2">Need Help?</h4>
            <p className="text-sm text-gray-600 mb-4">
              Our experts are ready to assist
            </p>
            <button
              className={`${theme.accent} ${theme.textOnAccent} px-4 py-2 rounded-lg text-sm font-semibold w-full ${theme.accentHover} transition`}
            >
              Contact Us
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar - Slide from Left */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose} // Now uses the passed prop
          />

          {/* Sidebar Panel */}
          <aside
            className="lg:hidden fixed left-0 top-16 bottom-0 w-72 bg-gray-50 shadow-2xl z-50 transform transition-transform duration-700 ease-out"
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <div className="p-6 overflow-y-auto h-full">
              <h3 className="font-bold text-gray-700 mb-6 text-sm uppercase tracking-wider">
                Categories
              </h3>

              <div className="space-y-3">
                {/* Control Panels */}
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-between cursor-pointer">
                    <span className="font-semibold text-gray-800">
                      Control Panels
                    </span>
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="mt-3 ml-4 space-y-2 text-sm text-gray-600">
                    <div className="py-1 hover:text-blue-700 cursor-pointer">
                      PLC Panels
                    </div>
                    <div className="py-1 hover:text-blue-700 cursor-pointer">
                      Motor Control
                    </div>
                    <div className="py-1 hover:text-blue-700 cursor-pointer">
                      Power Distribution
                    </div>
                  </div>
                </div>

                {["Automation", "Custom Solutions", "Support & Services"].map(
                  (item) => (
                    <div
                      key={item}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800">
                          {item}
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      </div>
                    </div>
                  )
                )}

                {/* Need Help Card */}
                <div
                  className={`${theme.cardBg} rounded-xl p-6 mt-8 border-l-4 ${theme.border}`}
                >
                  <h4 className="font-bold text-gray-800 mb-2">Need Help?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Our experts are ready to assist
                  </p>
                  <button
                    className={`${theme.accent} ${theme.textOnAccent} px-4 py-2 rounded-lg text-sm font-semibold w-full ${theme.accentHover} transition`}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
