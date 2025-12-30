"use client";

import Section from "../ui/Section";
import Subheading from "../ui/Subheading";
import Button from "../ui/Button";
import { neueHaasDisplay } from "@/app/fonts";
import { scrollToId } from "../ui/ScrollToID";
import { motion } from "motion/react";

const Check = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
      stroke="currentColor"
      strokeWidth="2.5"
    />
  </svg>
);

export default function AIAgent() {
  return (
    <Section id="ai-agent" className="relative bg-neutral-50 text-neutral-950">
      <div className="mx-auto max-w-6xl">
        {/* Big pill wrapper */}
        <div className="relative overflow-hidden rounded-[2.75rem] border border-neutral-200 bg-neutral-950 text-neutral-50 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
          {/* subtle glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
          />
          {/* subtle grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="relative p-8 md:p-12">
            {/* Header */}
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <Subheading
                align="left"
                className="uppercase tracking-[0.2em] text-neutral-400"
              >
                AI automation
              </Subheading>

              <h2
                className={`${neueHaasDisplay.className} mt-4 text-3xl md:text-4xl font-semibold tracking-tight`}
              >
                AI chatbots built for real use
              </h2>

              <p className="mt-4 text-neutral-300">
                An optional extension for brands that want to automate support and
                workflows without losing clarity or control.
              </p>
            </motion.div>

            {/* 3 cards inside the pill */}
            <motion.div
              className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.08 },
                },
              }}
            >
              {/* What it does */}
              <motion.div
                className="rounded-2xl border border-neutral-800/80 bg-white/[0.03] p-6 backdrop-blur-sm"
                variants={{
                  hidden: { opacity: 0, y: 18, scale: 0.98 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <h3 className="font-medium text-lg mb-3">What it does</h3>
                <ul className="space-y-2.5 text-sm text-neutral-300">
                  <li className="flex gap-3">
                    <Check />
                    <span>Captures enquiries 24/7, including evenings and weekends</span>
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    <span>Answers common questions instantly, reducing back-and-forth</span>
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    <span>Qualifies leads before they reach you</span>
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    <span>Surfaces real customer questions you’re currently missing</span>
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    <span>Routes serious enquiries to the right place</span>
                  </li>
                </ul>
              </motion.div>

              {/* How it works */}
              <motion.div
                className="rounded-2xl border border-neutral-800/80 bg-white/[0.03] p-6 backdrop-blur-sm"
                variants={{
                  hidden: { opacity: 0, y: 18, scale: 0.98 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <h3 className="font-medium text-lg mb-3">How it works</h3>
                <ul className="space-y-2.5 text-sm text-neutral-300">
                  <li className="flex gap-3">
                    <Check />
                    <span>Trained directly on your existing site content</span>
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    <span>Uses your pricing, services, and policies as the source of truth</span>
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    <span>Connected to live data if required</span>
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    <span>Lives quietly on your site, no new tools to manage</span>
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    <span>Can be tested privately before going live</span>
                  </li>
                </ul>
              </motion.div>

              {/* Your control */}
              <motion.div
                className="rounded-2xl border border-neutral-800/80 bg-white/[0.03] p-6 backdrop-blur-sm"
                variants={{
                  hidden: { opacity: 0, y: 18, scale: 0.98 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <h3 className="font-medium text-lg mb-3">Why it matters</h3>
                <ul className="space-y-2.5 text-sm text-neutral-300">
                  <li className="flex gap-3">
                    <Check />
                    <span>Fewer missed leads</span>
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    <span>Less manual support work</span>
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    <span>Faster responses for customers</span>
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    <span>Clear visibility into demand</span>
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    <span>Trial-friendly setup before long-term commitment</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* CTA row */}
            <motion.div
              className="mt-10 flex flex-col gap-6 border-t border-neutral-800 pt-8 md:flex-row md:items-center md:justify-between"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            >
              <p className="text-sm text-neutral-400 max-w-xl">
                AI chatbots are offered as an optional extension to your build.
                Scope, training data, and limits are defined upfront.
              </p>

              <Button
                variant="secondary"
                onClick={() => scrollToId("calendar", -20, { duration: 1 })}
                className="w-full md:w-auto"
              >
                Discuss AI automation
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}