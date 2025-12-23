"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";

type AccordionProps = {
  children: React.ReactNode;
  multiple?: boolean;
  defaultIndex?: number | number[];
};

type AccordionItemProps = {
  children: React.ReactNode;
};

type AccordionHeaderProps = {
  children: React.ReactNode;
};

type AccordionPanelProps = {
  children: React.ReactNode;
};

type AccordionContextType = {
  isActive: boolean;
  index: number;
  onChangeIndex: (index: number) => void;
};

const AccordionContext = React.createContext<AccordionContextType | null>(null);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion components must be used inside an <Accordion> component"
    );
  }
  return context;
}

export function Accordion({
  children,
  multiple = false,
  defaultIndex,
}: AccordionProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | number[]>(() => {
    if (multiple) {
      if (Array.isArray(defaultIndex)) return defaultIndex;
      if (typeof defaultIndex === "number") return [defaultIndex];
      return [];
    } else {
      if (typeof defaultIndex === "number") return defaultIndex;
      return -1;
    }
  });

  function onChangeIndex(index: number) {
    setActiveIndex((current) => {
      if (!multiple) {
        return current === index ? -1 : index;
      }

      const arr = Array.isArray(current) ? current : [];
      if (arr.includes(index)) {
        return arr.filter((i) => i !== index);
      }

      return arr.concat(index);
    });
  }

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const isActive = Array.isArray(activeIndex)
          ? activeIndex.includes(index)
          : activeIndex === index;

        return (
          <AccordionContext.Provider
            value={{ isActive, index, onChangeIndex }}
          >
            {child}
          </AccordionContext.Provider>
        );
      })}
    </>
  );
}

export function AccordionItem({ children }: AccordionItemProps) {
  return (
    <div className=" md:w-150 w-auto mb-4 overflow-hidden rounded-xl border border-neutral-200 bg-white/80 shadow-sm backdrop-blur-sm">
      {children}
    </div>
  );
}

export function AccordionHeader({ children }: AccordionHeaderProps) {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <button
      type="button"
      onClick={() => onChangeIndex(index)}
      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50 md:px-6 md:py-4"
    >
      <span>{children}</span>

      <motion.span
        className="inline-flex h-5 w-5 items-center justify-center shrink-0 text-neutral-500"
        animate={{ rotate: isActive ? 180 : 0 }}   // ✅ down → up
        transition={{ duration: 0.2 }}
      >
        {/* Chevron DOWN icon */}
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M6 9l6 6 6-6"   // ✅ down-facing chevron
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
    </button>
  );
}

export function AccordionPanel({ children }: AccordionPanelProps) {
  const { isActive } = useAccordion();
  const panelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (isActive && panelRef.current) {
      panelRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [isActive]);

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          key="panel"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", duration: 0.35, bounce: 0 }}
          className="overflow-hidden "
        >
          <div
            ref={panelRef}
            className="border-t border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 md:px-6 md:py-4"
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}