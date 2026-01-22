"use client";

import React from "react";
import { motion } from "motion/react";
import Section from "../ui/Section";
import Subheading from "../ui/Subheading";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "@/components/ui/Accordion";

export default function Faqs() {
  // single active index across both columns
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

  const faqs = [
    {
      q: "Do you offer ongoing support & maintenance?",
      a: "Yes. We offer both monthly retainers for ongoing work and ad-hoc support for one-off fixes or updates, depending on what you need.",
    },
    {
      q: "Can you work with my existing Shopify theme?",
      a: "Absolutely. We can refine and build on your existing theme, or advise if a rebuild would deliver better results.",
    },
    {
      q: "Do you only work with Shopify?",
      a: "Shopify is a core focus, especially for e-commerce, but not the only platform. We also build with modern stacks like Next.js and custom setups where a project calls for more flexibility.",
    },
    {
      q: "How fast do you build Shopify sites?",
      a: "Most Shopify sites are built and ready to launch within 72 hours once we're aligned on scope and content. More complex or design-led projects may take longer, with timelines agreed upfront.",
    },
    {
      q: "Are there any hidden costs?",
      a: "No. Pricing is agreed upfront based on scope. You pay once for the build, and you own the code. Ongoing support, hosting or future changes are optional and discussed separately.",
    },
    {
      q: "Will my site be easy to manage?",
      a: "Yes. Every build is set up so you can update content, products and pages without touching code. You'll get a clear handover so you're in control from day one.",
    },
    {
      q: "Do you handle hosting and deployment?",
      a: "Yes. We'll deploy your site and help set up hosting, whether that's Shopify, Vercel or another provider. Everything is configured for performance, security and reliability.",
    },
    {
      q: "Can you help improve performance or SEO?",
      a: "Absolutely. Sites are built with performance and SEO in mind from the start, and we can also run optimisation passes later to improve speed, structure and search visibility as your site grows.",
    },
    {
      q: "Do you offer AI chatbots or automation?",
      a: "Yes, as an optional add-on. AI chatbots can capture enquiries, answer common questions and qualify leads outside business hours. Scope and limits are defined upfront, with a human fallback available.",
    },
  ];

  // split into two vertical stacks
  const leftColumn = faqs.filter((_, i) => i % 2 === 0);
  const rightColumn = faqs.filter((_, i) => i % 2 === 1);

  return (
    <Section
      id="faqs"
      className="relative max-w-full px-8 flex flex-col items-center text-center z-10"
    >
      <motion.div
        className="w-full max-w-3xl flex flex-col items-center mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Heading */}
        <div className="mb-8 w-full">
          <Subheading
            className="text-[16px] uppercase tracking-[0.2em] text-neutral-400 font-medium"
            align="left"
          >
            What Clients Ask
          </Subheading>
        </div>

        {/* Two real columns */}
        <div className="w-full flex flex-col md:flex-row gap-4 items-start">
          {/* LEFT COLUMN */}
          <Accordion
            multiple={false}
            activeIndex={activeIndex}
            onActiveIndexChange={(v) => setActiveIndex(v as number)}
            className="w-full md:w-1/2 flex flex-col"
          >
            {leftColumn.map((item, colIndex) => {
              const globalIndex = colIndex * 2;

              return (
                <AccordionItem key={item.q} itemIndex={globalIndex}>
                  <AccordionHeader>{item.q}</AccordionHeader>
                  <AccordionPanel>{item.a}</AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* RIGHT COLUMN */}
          <Accordion
            multiple={false}
            activeIndex={activeIndex}
            onActiveIndexChange={(v) => setActiveIndex(v as number)}
            className="w-full md:w-1/2 flex flex-col"
          >
            {rightColumn.map((item, colIndex) => {
              const globalIndex = colIndex * 2 + 1;

              return (
                <AccordionItem key={item.q} itemIndex={globalIndex}>
                  <AccordionHeader>{item.q}</AccordionHeader>
                  <AccordionPanel>{item.a}</AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </motion.div>
    </Section>
  );
}