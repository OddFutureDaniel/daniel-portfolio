"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode, HTMLAttributes } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  animateOnScroll?: boolean;
  flush?: boolean;
};

export default function Section({
  children,
  className = "",
  id,
  animateOnScroll = true,
  flush = false,
}: SectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const base = `
    w-full
    ${flush ? "" : "px-8 md:px-35 py-16"}
    ${className}
  `;

  if (prefersReducedMotion || !animateOnScroll) {
    return (
      <section id={id} className={base}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={base}
    >
      {children}
    </motion.section>
  );
}