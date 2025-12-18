import { animate } from "motion";

type Bezier = [number, number, number, number];

export function scrollToId(
  id: string,
  offset = 0,
  options?: {
    duration?: number;
    ease?: Bezier; 
  }
) {
  const el = document.getElementById(id);
  if (!el) return;

  const targetY = el.getBoundingClientRect().top + window.scrollY - offset;

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    window.scrollTo(0, targetY);
    return;
  }

  animate(window.scrollY, targetY, {
    duration: options?.duration ?? 0.6,
    ease: options?.ease ?? [0.22, 1, 0.36, 1], 
    onUpdate: latest => window.scrollTo(0, latest),
  });
}