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

// Build a deck where index 1 is the "active" card, index 0 is previous
function buildInitialDeck(slides: React.ReactNode[]): React.ReactNode[] {
  if (!slides || slides.length <= 1) return slides;
  const last = slides[slides.length - 1];
  const rest = slides.slice(0, slides.length - 1);
  return [last, ...rest]; 
}

const Carousel = forwardRef<CarouselHandle, CarouselProps>(
  ({ slides, ariaLabel = "Carousel", className = "" }, ref) => {
    const regionId = useId();
    const trackRef = useRef<HTMLDivElement | null>(null);

    const [deck, setDeck] = useState<React.ReactNode[]>(() =>
      buildInitialDeck(slides),
    );
    const total = deck.length;

    const x = useMotionValue(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

  
    useEffect(() => {
      setDeck(buildInitialDeck(slides));
    }, [slides]);

    // Measure slide width once deck is rendered
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


    useEffect(() => {
      if (!slideWidth || isAnimating) return;

      if (total > 1) {
        x.set(-slideWidth);
      } else {
        x.set(0);
      }
    }, [slideWidth, total, isAnimating, x]);

    const rotateLeft = () => {
      setDeck((prev) => {
        if (prev.length <= 1) return prev;
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    };

    const rotateRight = () => {
      setDeck((prev) => {
        if (prev.length <= 1) return prev;
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, prev.length - 1);
        return [last, ...rest];
      });
    };

    const next = () => {
      if (!slideWidth || isAnimating || total <= 1) return;
      setIsAnimating(true);

      // Rest x = -slideWidth (deck[1] centred)
      // Next: animate to -2 * slideWidth (deck[2] centred)
      animate(x, -2 * slideWidth, {
        type: "spring",
        stiffness: 260,
        damping: 30,
        onComplete: () => {
          rotateLeft();
          x.set(-slideWidth);
          setIsAnimating(false);
        },
      });
    };

    const prev = () => {
      if (!slideWidth || isAnimating || total <= 1) return;
      setIsAnimating(true);

      // Rest x = -slideWidth (deck[1] centred)
      // Prev: animate to 0 (deck[0] centred)
      animate(x, 0, {
        type: "spring",
        stiffness: 260,
        damping: 30,
        onComplete: () => {
          rotateRight();
          x.set(-slideWidth);
          setIsAnimating(false);
        },
      });
    };

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

      if (offsetX < -DRAG_THRESHOLD) {
        next();
        return;
      }

      if (offsetX > DRAG_THRESHOLD) {
        prev();
        return;
      }

      setIsAnimating(true);
      animate(x, total > 1 ? -slideWidth : 0, {
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
                className="shrink-0 px-4 w-[380px] md:w-[418px] h-[380px]"
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