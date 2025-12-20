"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

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
  const disableAnim = prefersReducedMotion || !animateOnScroll;

  const base = `
    w-full
    ${flush ? "" : "px-8 md:px-35 py-16"}
    ${className}
  `;

  return (
    <motion.section
      id={id}
      className={base}
      initial={disableAnim ? false : { opacity: 0, y: 24 }}
      whileInView={disableAnim ? undefined : { opacity: 1, y: 0 }}
      viewport={disableAnim ? undefined : { once: true, amount: 0.1 }}
      transition={disableAnim ? undefined : { duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}