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

export default function Pricing() {
  return (
    <Section
      className="relative min-h-screen max-w-full px-8 flex flex-col items-center text-center z-10"
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
            className="text-[16px] uppercase tracking-[0.2em] text-neutral-400 font-medium"
            align="left"
          >
            Pricing
          </Subheading>

          <Subheading align="left" size="md" className="my-2">
            Simple pricing, no surprises.
          </Subheading>

          <Subheading
            className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-black!"
            align="center"
          >
            One-time payment.
            <br />
            You own everything.
            <br /> No recurring fees.
          </Subheading>
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
            className="flex-1 min-w-[260px] h-[480px] max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.0 }}
          >
            <Card className="relative rounded-2xl p-8 border border-neutral-200 flex flex-col h-full">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
              >
                <CardHeader className="mb-8">
                  <CardTitle align="center">Starter</CardTitle>
                  <CardDescription>Perfect for landing pages</CardDescription>
                  <Subheading size="lg">$500</Subheading>
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
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.24 }}
              >
                <Button className="w-full" variant="primary">
                  Get Started
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          {/* ==================== PROFESSIONAL CARD ==================== */}
          <motion.div
            className="flex-1 min-w-[260px] h-[480px] max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          >
            <Card className="relative rounded-2xl p-8 border border-neutral-200 h-[480px] flex flex-col">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
              >
                <CardHeader className="mb-8">
                  <CardTitle align="center">Professional</CardTitle>
                  <CardDescription>Complete website solution</CardDescription>
                  <Subheading size="lg">$1250</Subheading>
                </CardHeader>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.24 }}
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
                      Up to 5 pages
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
                      Contact forms and CMS
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
                      3 revision rounds
                    </li>
                  </ul>
                </CardContent>
              </motion.div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.32 }}
              >
                <Button className="w-full" variant="primary">
                  Get Started
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          {/* ==================== ENTERPRISE CARD ==================== */}
          <motion.div
            className="flex-1 min-w-[260px] h-[480px] max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
          >
            <Card className="relative rounded-2xl p-8 border border-neutral-200 h-[480px] flex flex-col">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.20 }}
              >
                <CardHeader className="mb-8">
                  <CardTitle align="center">Enterprise</CardTitle>
                  <CardDescription>For complex projects</CardDescription>
                  <Subheading size="lg">Custom</Subheading>
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
                      Live in 48 hours
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
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.36 }}
              >
                <Button className="w-full" variant="primary">
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