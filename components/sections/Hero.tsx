"use client";

import Button from "@/components/ui/Button";
import { scrollToId } from "../ui/ScrollToID";
import Section from "../ui/Section";
import { neueHaasDisplay } from "@/app/fonts";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative min-h-screen bg-[#121212] px-6 py-35 flex flex-col items-center text-center z-10 overflow-hidden"
    >
      {/* Content */}
      <div className="mb-16 opacity-100 will-change-transform">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-black/8 bg-white/80 backdrop-blur-sm px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500">
            </span>
          </span>
          <span className="text-[13px] font-medium text-neutral-600">
            Available for Q1 2026
          </span>
        </div>
      </div>
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
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-0 right-0 h-24 bg-neutral-50 rounded-t-[4rem]"
      />
    </Section>
  );
}