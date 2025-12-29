// src/context/ThemeContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { themes, type ThemeKey } from "@/lib/themes";

type ThemeContextType = {
  themeKey: ThemeKey;
  theme: (typeof themes)[ThemeKey];
  setTheme: (key: ThemeKey) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeKey, setThemeKey] = useState<ThemeKey>("blue");

  const theme = themes[themeKey];

  return (
    <ThemeContext.Provider value={{ themeKey, theme, setTheme: setThemeKey }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
