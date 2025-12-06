// components/ui/FollowPointer.tsx
"use client";

import { frame, motion, useSpring } from "motion/react";
import { RefObject, useEffect, useRef } from "react";

export default function FollowPointer() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      style={{ ...ball, x, y }}
    />
  );
}

const spring = { damping: 10, stiffness: 60, restDelta: 0.005 };

function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        x.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        y.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return { x, y };
}

/**
 * ==============   Styles   ================
 */

const ball: React.CSSProperties = {
  width: 50,
  height: 50,
  backgroundColor: "#ff0088",
  borderRadius: "50%",
  position: "fixed",        // 👈 so it follows over the whole viewport
  top: 0,
  left: 0,
  pointerEvents: "none",    // 👈 so it doesn't block clicks
  zIndex: 50,               // tweak to sit above content if needed
};