"use client";

import Button from "../ui/Button";
import { scrollToId } from "../ui/ScrollToID";
import Section from "../ui/Section";
import { neueHaasDisplay } from "@/app/fonts";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative min-h-screen bg-[#121212] px-6 py-65 flex flex-col items-center text-center z-10 overflow-hidden"
    >
      {/* Content */}
      <h1
        className={`${neueHaasDisplay.className} text-[#F5F5F5] text-5xl md:text-8xl tracking-tight`}
      >
        Where projects begin.
      </h1>

      <p className="mt-4 text-lg text-[#f5f5f5ea] max-w-xl">
        Designed with intent. Live in 72 hours.
      </p>

      <div className="flex flex-row gap-4 mt-8">
        <Button
          onClick={() => scrollToId("calendar", -20, { duration: 1 })}
        >
          Initiate a project
        </Button>
        <Button
          variant="secondary"
          onClick={() => scrollToId("previous-work", 55, { duration: 1 })}
        >
          View selected work
        </Button>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-6 left-0 right-0 h-24 bg-neutral-50 rounded-t-[4rem]"
      />
    </Section>
  );
}