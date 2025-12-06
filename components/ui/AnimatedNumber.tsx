"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  end?: number;
  duration?: number;
  className?: string;
  start?: number;
  decimals?: number;
};

export default function AnimatedNumber({
  start = 0,
  end = 100,
  duration = 5,
  decimals = 0,
  className = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  const rounded = useTransform(count, latest =>
    decimals > 0
      ? Number(latest.toFixed(decimals))
      : Math.round(latest)
  );

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const controls = animate(count, end, { duration });
          return () => controls.stop();
        }
      },
      { threshold: 1,
        rootMargin: "0px 0px -12% 0px"
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [count, end, duration, hasAnimated]);

  return (
    <motion.span ref={ref} style={text} className={className}>
      {rounded}
    </motion.span>
  );
}

const text = {
};