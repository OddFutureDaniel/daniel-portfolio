"use client";

import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  motion,
  type PanInfo,
  useMotionValue,
  animate,
} from "motion/react";

export type CarouselHandle = {
  next: () => void;
  prev: () => void;
};

type CarouselProps = {
  slides: React.ReactNode[];
  ariaLabel?: string;
  className?: string;
};

const DRAG_THRESHOLD = 60;

const Carousel = forwardRef<CarouselHandle, CarouselProps>(
  ({ slides, ariaLabel = "Carousel", className = "" }, ref) => {
    const regionId = useId();
    const trackRef = useRef<HTMLDivElement | null>(null);

    // Internal deck
    const [deck, setDeck] = useState<React.ReactNode[]>(slides);
    const total = deck.length;

    // Motion value for x translation
    const x = useMotionValue(0);

    // Measured slide width
    const [slideWidth, setSlideWidth] = useState(0);

    // Guard so it doesntt start a new animation while one is running
    const [isAnimating, setIsAnimating] = useState(false);

    // If the slides prop ever changes, reset the deck
    useEffect(() => {
      setDeck(slides);
    }, [slides]);

    // Measure the width of a single slide so can move in px
    useEffect(() => {
      if (!trackRef.current) return;

      const updateWidth = () => {
        const firstSlide =
          trackRef.current?.querySelector<HTMLElement>("[data-carousel-slide]");
        if (firstSlide) {
          setSlideWidth(firstSlide.offsetWidth);
        }
      };

      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const rotateNext = () => {
      setDeck((prev) => {
        if (prev.length <= 1) return prev;
        return [...prev.slice(1), prev[0]];
      });
    };

    const rotatePrev = () => {
      setDeck((prev) => {
        if (prev.length <= 1) return prev;
        return [prev[prev.length - 1], ...prev.slice(0, -1)];
      });
    };

    const next = () => {
      if (!slideWidth || isAnimating || total <= 1) return;
      setIsAnimating(true);

      // Animate from current x to -slideWidth
      animate(x, -slideWidth, {
        type: "spring",
        stiffness: 260,
        damping: 30,
        onComplete: () => {
          rotateNext();
          x.set(0); // snap back without user seeing
          setIsAnimating(false);
        },
      });
    };

    const prev = () => {
      if (!slideWidth || isAnimating || total <= 1) return;
      setIsAnimating(true);

      // Animate from current x to +slideWidth
      animate(x, slideWidth, {
        type: "spring",
        stiffness: 260,
        damping: 30,
        onComplete: () => {
          rotatePrev();
          x.set(0);
          setIsAnimating(false);
        },
      });
    };

    // Expose controls to parent, currently project.tsx
    useImperativeHandle(ref, () => ({
      next,
      prev,
    }));

    const handleDragEnd = (
      _event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (!slideWidth || isAnimating || total <= 1) return;

      const offsetX = info.offset.x;

      // Dragged left → next
      if (offsetX < -DRAG_THRESHOLD) {
        next();
        return;
      }

      // Dragged right → prev
      if (offsetX > DRAG_THRESHOLD) {
        prev();
        return;
      }

     
      setIsAnimating(true);
      animate(x, 0, {
        type: "spring",
        stiffness: 260,
        damping: 30,
        onComplete: () => setIsAnimating(false),
      });
    };

    return (
      <section
        className={`relative ${className}`}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
      >
        <div className="overflow-hidden">
          <motion.div
            ref={trackRef}
            id={`${regionId}-track`}
            className="flex"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            aria-live="polite"
          >
            {deck.map((slide, index) => (
              <div
                key={index}
                data-carousel-slide
                className="shrink-0 px-4 w-[380px] md:w-[418px]  h-[380px]"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${total}`}
              >
                {slide}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  },
);

Carousel.displayName = "Carousel";

export default Carousel;