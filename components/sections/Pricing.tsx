"use client";

import { motion } from "motion/react";
import Button from "../ui/Button";
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <Subheading
            className="uppercase tracking-[0.2em] mb-1"
            align="left"
          >
            Pricing
          </Subheading>

          <Subheading className={`${neueHaasDisplay.className} mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-black!`} align="center"
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        >
          {/* ======================= STARTER CARD ======================= */}
          <motion.div
            className="flex-1 min-w-[300px]  max-w-[350px] h-[480px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
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
                  <CardTitle align="center">Starter</CardTitle>
                  <CardDescription className="text-neutral-600!">Perfect for landing pages</CardDescription>
                  <Subheading className={`${neueHaasDisplay.className} font-medium  text-black!`} size="lg">$500</Subheading>
                </CardHeader>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
              >
                <CardContent>
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-center gap-3 text-sm text-neutral-600">
                      <svg
                        className="h-4 w-4 text-neutral-400"
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
                      Single landing page
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-600">
                      <svg
                        className="h-4 w-4 text-neutral-400"
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
                      Mobile responsive
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-600">
                      <svg
                        className="h-4 w-4 text-neutral-400"
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
                      Live in 72 hours
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-600">
                      <svg
                        className="h-4 w-4 text-neutral-400"
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
                      SEO optimized
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-600">
                      <svg
                        className="h-4 w-4 text-neutral-400"
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
                      1 revision round
                    </li>
                  </ul>
                </CardContent>
              </motion.div>

              {/* Button */}
              <motion.div
                className="mt-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.24 }}
              >
                <Button className="w-full" variant="primary"
                  onClick={() => scrollToId("calendar", -20, { duration: 1 })}>
                  Get Started
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          {/* ==================== PROFESSIONAL CARD ==================== */}
          <motion.div
            className="flex-1 min-w-[300px] max-w-[350px] h-[480px] "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          >
            <Card className="relative rounded-2xl p-8 border w-full bg-neutral-900! border-neutral-200 h-[480px] flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-black shadow-lg">
                  <svg className="h-3 w-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg>Most Popular
                </span>
              </div>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
              >
                <CardHeader className="mb-8">
                  <CardTitle className="text-neutral-50!" align="center">Professional</CardTitle>
                  <CardDescription className="text-neutral-50!">Complete website solution</CardDescription>
                  <Subheading className={`${neueHaasDisplay.className} font-medium  text-neutral-50!`} size="lg">$1250</Subheading>
                </CardHeader>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.24 }}
              >

                <CardContent >
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-center  gap-3 text-sm text-neutral-50!">
                      <svg
                        className="h-4 w-4 text-emerald-400"
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
                      Up to 5 pages
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-50!">
                      <svg
                        className="h-4 w-4 text-emerald-400"
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
                      GA4 analytics setup
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-50!">
                      <svg
                        className="h-4 w-4 text-emerald-400"
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
                      Live in 72 hours
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-50!">
                      <svg
                        className="h-4 w-4 text-emerald-400"
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
                      CMS setup for easy editing
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-50!">
                      <svg
                        className="h-4 w-4 text-emerald-400"
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
                      Performance optimisation
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-50!">
                      <svg
                        className="h-4 w-4 text-emerald-400"
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
                      3 revision rounds
                    </li>
                  </ul>
                </CardContent>
              </motion.div>

              {/* Button */}
              <motion.div
                className="mt-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.32 }}
              >
                <Button className="w-full" variant="secondary"
                  onClick={() => scrollToId("calendar", -20, { duration: 1 })}>
                  Get Started
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          {/* ==================== ENTERPRISE CARD ==================== */}
          <motion.div
            className="flex-1 min-w-[300px] max-w-[350px] h-[480px] "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
          >
            <Card className="relative rounded-2xl w-full p-8 border border-neutral-200 h-[480px] flex flex-col">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.20 }}
              >
                <CardHeader className="mb-8">
                  <CardTitle align="center">Enterprise</CardTitle>
                  <CardDescription className="text-neutral-600!">For bespoke needs</CardDescription>
                  <Subheading className={`${neueHaasDisplay.className} font-medium  text-black!`} size="lg">Custom</Subheading>
                </CardHeader>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
              >
                <CardContent>
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-center gap-3 text-sm text-neutral-600">
                      <svg
                        className="h-4 w-4 text-neutral-400"
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
                      Custom website build
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-600">
                      <svg
                        className="h-4 w-4 text-neutral-400"
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
                      Custom CMS workflows
                    </li>
                    <li className="flex items-center text-left gap-3 text-sm text-neutral-600">
                      <svg
                        className="h-4 w-4 text-neutral-400"
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
                      Advanced integrations (apps, APIs, bookings, etc.)
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-600">
                      <svg
                        className="h-4 w-4 text-neutral-400"
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
                      Scalable architecture
                    </li>
                    <li className="flex items-center gap-3 text-sm text-neutral-600">
                      <svg
                        className="h-4 w-4 text-neutral-400"
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
                      Priority support & handover
                    </li>
                  </ul>
                </CardContent>
              </motion.div>

              {/* Button */}
              <motion.div
                className="mt-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.36 }}
              >
                <Button className="w-full" variant="primary"
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