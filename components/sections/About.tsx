"use client";

import { motion } from "motion/react";
import Subheading from "../ui/Subheading";
import Section from "../ui/Section";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { neueHaasDisplay } from "@/app/fonts";

export default function About() {
  return (
    <Section
      id="about"
      className="relative min-h-screen max-w-full px-8 flex flex-col items-center text-center z-10"
    >
      {/* Outer wrapper – entire section animation */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Heading block */}
        <motion.div
          className="mb-16 md:mb-20 w-full"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <div className=" bg-neutral-50 max-w-full px-8 flex flex-col items-center text-center z-10">
            
              <Subheading
                className="text-[16px] uppercase tracking-[0.2em] text-neutral-400 font-medium"
                align="left"
              >
                Position
              </Subheading>
              <Subheading
                className={`${neueHaasDisplay.className} mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-black!`}
                align="left"
              >
                Built with intent. Made to last
              </Subheading>
            </div>
        </motion.div>

        {/* Grid wrapper */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        >
          {/* ================= LEFT TEXT CARD ================= */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.0 }}
          >
            <div className="bg-neutral-100 rounded-2xl p-8 md:p-10 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-75 will-change-transform" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-neutral-500">
                  Accepting new projects
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Who we are</h3>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  THIRD LINE initiates and executes digital work for brands that value clarity, reliability and control.
                </p>
                <p>
                  The focus is on Shopify and e-commerce, combining design, development and commercial awareness into systems that perform without unnecessary complexity.
                </p>
                <p>
                  Work is delivered quickly, structured carefully and built to be straightforward to run once live.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="rounded-full bg-white border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">
                  Speed without rush
                </span>
                <span className="rounded-full bg-white border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">
                  Taste over trends
                </span>
                <span className="rounded-full bg-white border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">
                  A11y by default
                </span>
              </div>
            </div>
          </motion.div>

          {/* ================= BY THE NUMBERS CARD ================= */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          >
            <div className="bg-black rounded-2xl p-8 md:p-10 text-white h-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              >
                <Subheading className="text-white/60" align="left">
                  In practice
                </Subheading>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                >
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                    <AnimatedNumber end={4} duration={3} />+
                  </div>
                  <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                    Years Exp.
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                    <AnimatedNumber end={72} duration={5} />
                    <span className="text-sm font-normal text-white/40">
                      hr
                    </span>
                  </div>
                  <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                    Turnaround
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
                >
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                    <AnimatedNumber end={10} duration={4} />+
                  </div>
                  <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                    Projects
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                    <AnimatedNumber end={90} duration={4} />
                  </div>
                  <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                    Lighthouse
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ================= SMALL WHITE CARD (placeholder) ================= */}
          <motion.div
            className="md:col-span-5 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
          >
            <div className="md:col-span-5 bg-white rounded-2xl p-8 border border-neutral-200 opacity: 1; will-change: transform, opacity; transform: none;">
              <h3 className="text-lg font-semibold mb-6">
                The team
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-neutral-500">D
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium">
                      Daniel
                    </div>
                    <div className="text-sm text-neutral-500">
                      Lead Developer
                    </div>
                  </div>
                  <div className="ml-auto h-2 w-2 rounded-full bg-emerald-500">
                  </div>
                </div>
              </div>
              <div className="h-auto w-auto rounded-2xl mt-10 p-1 bg-neutral-100">
                <p className="m-2 text-neutral-600">Open to collaborations with designers, founders, and people with strong ideas.</p>

              </div>
            </div>
          </motion.div>

          {/* ================= CODE STACK CARD ================= */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.24 }}
          >
            <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden h-full">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#252526] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <div className="h-3 w-3 rounded-full bg-[#28ca42]" />
                  </div>
                  <span className="ml-3 text-[11px] font-mono text-white/40">
                    stack.config.tsx
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-75 will-change-transform" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    prod ready
                  </span>
                </div>
              </div>

              <div className="p-5 font-mono text-[13px] leading-relaxed text-left text-white/90">
                <div className="text-[#569cd6]">
                  const{" "}
                  <span className="text-[#4fc1ff]">
                    stack
                  </span>{" "}
                  =
                  <span className="text-[#dcdcaa]"></span>
                </div>
                <div className="pl-4 mt-1">
                  <span className="text-[#9cdcfe]">frontend</span>
                  <span className="text-white/60">:</span>
                  <span className="text-[#ce9178]">
                    {` ["Next.js", "React", "TypeScript"]`}
                  </span>
                  <span className="text-white/60">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#9cdcfe]">styling</span>
                  <span className="text-white/60">:</span>
                  <span className="text-[#ce9178]">
                    {` ["Tailwind", "Motion.dev"]`}
                  </span>
                  <span className="text-white/60">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#9cdcfe]">design</span>
                  <span className="text-white/60">:</span>
                  <span className="text-[#ce9178]">"Figma"</span>
                  <span className="text-white/60">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#9cdcfe]">deploy</span>
                  <span className="text-white/60">:</span>
                  <span className="text-[#ce9178]">"Vercel"</span>
                  <span className="text-white/60">,</span>

                </div>
                <div className="pl-4">
                  <span className="text-[#9cdcfe]">e-commerce</span>
                  <span className="text-white/60">:</span>
                  <span className="text-[#ce9178]">
                    {`"Shopify"`}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-1">
                  <span className="text-[#6a9955]">
                    // Ship fast, iterate faster
                  </span>
                  <span className="w-2 h-4 bg-white/70 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}