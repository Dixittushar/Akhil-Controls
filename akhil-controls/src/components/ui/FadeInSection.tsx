// src/components/ui/FadeInSection.tsx
"use client";

import { motion } from "framer-motion";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay for staggered animations
}

export default function FadeInSection({
  children,
  className = "",
  delay = 0,
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Triggers when 100px in view
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
