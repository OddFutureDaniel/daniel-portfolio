"use client";

import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { motion, type PanInfo } from "motion/react";

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const regionId = useId();
    const total = slides.length;

    useEffect(() => {
      if (!trackRef.current) return;

      const updateWidth = () => {
        const firstSlide = trackRef.current?.querySelector<HTMLElement>(
          "[data-carousel-slide]",
        );
        if (firstSlide) {
          setSlideWidth(firstSlide.offsetWidth);
        }
      };

      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const goTo = (index: number) => {
      if (!total) return;
      const last = total - 1;

      if (index < 0) setCurrentIndex(last);
      else if (index > last) setCurrentIndex(0);
      else setCurrentIndex(index);
    };

    const next = () => goTo(currentIndex + 1);
    const prev = () => goTo(currentIndex - 1);

    useImperativeHandle(ref, () => ({
      next,
      prev,
    }));

    const handleDragEnd = (
      _event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      const offsetX = info.offset.x;

      if (offsetX < -DRAG_THRESHOLD) {
        next();
      } else if (offsetX > DRAG_THRESHOLD) {
        prev();
      }
    };

    const trackX = slideWidth ? -currentIndex * slideWidth : 0;

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
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={{ x: trackX }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            aria-live="polite"
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                data-carousel-slide
               className="shrink-0 px-4 w-[380px] md:w-[418px]  "
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