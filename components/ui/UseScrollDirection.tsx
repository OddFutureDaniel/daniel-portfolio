"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollHide(threshold = 80) {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const goingDown = current > lastScrollY.current;
      const goingUp = current < lastScrollY.current;

      if (goingDown && current > threshold) setHidden(true);
      else if (goingUp) setHidden(false);

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return hidden;
}