"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import Subheading from "../ui/Subheading";
import Section from "../ui/Section";
import { neueHaasDisplay } from "@/app/fonts";
import { scrollToId } from "../ui/ScrollToID";

export default function Pricing() {
  return (
    <Section
      className="relative min-h-screen max-w-full px-8 flex flex-col items-center text-center z-10 scroll-mt-20"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      {/* Linear Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.016] -z-5"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 2px, transparent 2.5px), linear-gradient(to bottom, #000 2.5px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Outer content wrapper – whole section animation */}
      <motion.div
        className="w-full flex flex-col items-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Heading block */}
        <motion.div
          className="flex flex-col mb-10 w-full justify-center items-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <Subheading
            className="text-[16px] uppercase tracking-[0.2em] mb-1"
            align="left"
          >
            Pricing
          </Subheading>

          <Subheading id="pricing-title" className={`${neueHaasDisplay.className} mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-black!`} align="center"
          >
            Clear terms. No recurring fees.
          </Subheading>

          {/* <Subheading
            className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-black!"
            align="center"
          >
            One-time payment.
            <br />
            You own everything.
            <br /> No recurring fees.
          </Subheading> */}
        </motion.div>

        {/* Cards row */}
        <motion.div
          className="flex flex-wrap items-start justify-center gap-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        >
          {/* ======================= STARTER CARD ======================= */}
          <motion.div
            className="flex-1 min-w-[300px]  max-w-[350px] h-[520px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.20 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.0 }}
          >
            <Card className="relative rounded-2xl p-8 border w-full border-neutral-200 flex flex-col h-full">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
              >
                <CardHeader className="mb-8">
                  <CardTitle align="center">Single Page Build</CardTitle>
                  <CardDescription className="text-neutral-600!">Perfect for landing pages</CardDescription>
                  <Subheading className={`${neueHaasDisplay.className} font-medium  text-black!`} size="lg">£749</Subheading>
                </CardHeader>
              </motion.div>

              {/* Content */}
              <motion.div
                className="flex flex-col flex-1"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
              >
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 flex-1">
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-600">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-neutral-400 shrink-0"
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
                      Purpose-driven layout built around a single narrative
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-600">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-neutral-400 shrink-0"
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
                      Seamless, responsive experience across devices
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-600">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-neutral-400 shrink-0"
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
                      Designed for speed and clarity, not complexity
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-600">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-neutral-400 shrink-0"
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
                      Ideal for portfolios, launches, events, and product showcases
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-600">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-neutral-400 shrink-0"
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
                      Fast turnaround when content is ready
                    </li>
                  </ul>
                </CardContent>
              </motion.div>

              {/* Button */}
              <motion.div
                className="mt-auto pt-1 h-11"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.24 }}
              >
                <Button className="w-full" variant="primary" aria-label="Get started with the Starter plan"
                  onClick={() => scrollToId("calendar", -20, { duration: 1 })}>
                  Get Started
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          {/* ==================== PROFESSIONAL CARD ==================== */}
          <motion.div
            className="flex-1 min-w-[300px] max-w-[350px] h-[520px] "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          >
            <Card className="relative rounded-2xl p-8 border w-full bg-neutral-900! border-neutral-200 flex flex-col h-full">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
              >
                <CardHeader className="mb-8">
                  <CardTitle className="text-neutral-50!" align="center">Website Build</CardTitle>
                  <CardDescription className="text-neutral-50!">Complete multi-page website</CardDescription>
                  <Subheading className={`${neueHaasDisplay.className} font-medium  text-neutral-50!`} size="lg">£1250</Subheading>
                </CardHeader>
              </motion.div>

              {/* Content */}
              <motion.div
                className="flex flex-col flex-1"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.24 }}
              >
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 flex-1">
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-50!">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-emerald-400 shrink-0"
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
                      Clear page structure with defined roles and user journeys
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-50!">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-emerald-400 shrink-0"
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
                      Consistent design system applied across key pages
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-50!">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-emerald-400 shrink-0"
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
                      Built to scale as your content or business evolves
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-50!">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-emerald-400 shrink-0"
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
                      Full control over your content after launch
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-50!">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-emerald-400 shrink-0"
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
                      Suitable for most businesses and organisations
                    </li>
                  </ul>
                </CardContent>
              </motion.div>

              {/* Button */}
              <motion.div
                className="mt-auto pt-1 h-11!"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.32 }}
              >
                <Button className="w-full" variant="secondary" aria-label="Get started with the Professional plan"
                  onClick={() => scrollToId("calendar", -20, { duration: 1 })}>
                  Get Started
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          {/* ==================== ENTERPRISE CARD ==================== */}
          <motion.div
            className="flex-1 min-w-[300px] max-w-[350px] h-[520px] "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
          >
            <Card className="relative rounded-2xl p-8 border w-full border-neutral-200 flex flex-col h-full">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.20 }}
              >
                <CardHeader className="mb-8">
                  <CardTitle align="center">Custom Build</CardTitle>
                  <CardDescription className="text-neutral-600!">Complex or bespoke requirements</CardDescription>
                  <Subheading className={`${neueHaasDisplay.className} font-medium  text-black!`} size="lg">Custom</Subheading>
                </CardHeader>
              </motion.div>

              {/* Content */}
              <motion.div
                className="flex flex-col flex-1"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
              >
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 flex-1">
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-600">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-neutral-400 shrink-0"
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
                      Scope defined collaboratively based on your needs
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-600">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-neutral-400 shrink-0"
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
                      Flexible architecture for complex content or interactions
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-600">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-neutral-400 shrink-0"
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
                      Suitable for large sites, e-commerce, or bespoke functionality
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-600">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-neutral-400 shrink-0"
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
                      Designed and built without predefined limits
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-600">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 text-neutral-400 shrink-0"
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
                      Quoted individually following discovery
                    </li>
                  </ul>
                </CardContent>
              </motion.div>

              {/* Button */}
              <motion.div
                className="mt-auto h-11"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.36 }}
              >
                <Button className="w-full" variant="primary" aria-label="Get started with the Enterprise plan"
                  onClick={() => scrollToId("calendar", -20, { duration: 1 })}>
                  Get Started
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Bottom "No hidden fees / You own the code" row */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <svg
              className="h-4 w-4 text-emerald-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            No hidden fees
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <svg
              className="h-4 w-4 text-emerald-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            You own the code
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}