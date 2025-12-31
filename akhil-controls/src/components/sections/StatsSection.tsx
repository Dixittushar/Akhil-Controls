// src/components/sections/StatsSection.tsx
"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1000, label: "Projects Completed", suffix: "+" },
  { value: 25, label: "Years Experience", suffix: "+" },
  { value: 500, label: "Happy Clients", suffix: "+" },
  { value: "24/7", label: "Support Available", suffix: "" },
];

export default function StatsSection() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24" ref={ref}>
      <div
        className={`max-w-7xl mx-auto px-6 bg-gradient-to-r ${theme.primary} text-white rounded-3xl shadow-2xl py-16 lg:py-20`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl lg:text-7xl font-bold mb-4">
                {typeof stat.value === "number" ? (
                  <CountUpNumber
                    end={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                    delay={index * 0.2}
                  />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-lg lg:text-xl opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Real Count-Up Component
function CountUpNumber({
  end,
  suffix = "",
  isInView,
  delay = 0,
}: {
  end: number;
  suffix?: string;
  isInView: boolean;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView) return;

    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, end, {
      duration: 2.5,
      delay,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [isInView, end, delay]);

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  );
}
