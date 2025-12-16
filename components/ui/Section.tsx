"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode, HTMLAttributes } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  animateOnScroll?: boolean;   // optional toggle
};

export default function Section({
  children,
  className = "",
  id,
  animateOnScroll = true,
}: SectionProps) {
  const prefersReducedMotion = useReducedMotion();

  // If reduced-motion is enabled OR animations disabled → render normally
  if (prefersReducedMotion || !animateOnScroll) {
    return (
      <section
        id={id}
        className={`
          w-full
          max-w-5xl mx-auto
          px-8
          md:px-35
          py-16
          ${className}
        `}
      >
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ duration: 1, ease: "easeOut" }}
      className={`
        w-full
        max-w-5xl mx-auto
        px-8
        md:px-35
        py-16
        ${className}
      `}
    >
      {children}
    </motion.section>
  );
}