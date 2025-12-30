"use client";

import { motion } from "motion/react";
import Subheading from "../ui/Subheading";
import Section from "../ui/Section";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "@/components/ui/Accordion";

export default function Faqs() {
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

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <Subheading className="text-[16px] uppercase tracking-[0.2em] text-neutral-400 font-medium" align="left">What Clients Ask</Subheading>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
        >
          <Accordion multiple>
            {/* 1 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              <AccordionItem>
                <AccordionHeader>
                  Do you offer ongoing support & maintenance?
                </AccordionHeader>
                <AccordionPanel>
                  Yes. We offer both monthly retainers for ongoing
                  work and ad-hoc support for one-off fixes
                  or updates, depending on what you need.
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            {/* 2 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
            >
              <AccordionItem>
                <AccordionHeader>
                  Can you work with my existing Shopify theme?
                </AccordionHeader>
                <AccordionPanel>
                  Absolutely. We can refine and build on your existing theme,
                  or advise if a rebuild would deliver better results.
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            {/* 3 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              <AccordionItem>
                <AccordionHeader>
                  Do you only work with Shopify?
                </AccordionHeader>
                <AccordionPanel>
                  Shopify is a core focus, especially for e-commerce,
                  but not the only platform. We also build with modern stacks like
                  Next.js and custom setups where a project calls for more flexibility.
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            {/* 4 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              <AccordionItem>
                <AccordionHeader>
                  How fast do you build Shopify sites?
                </AccordionHeader>
                <AccordionPanel>
                  Most Shopify sites are built and ready to launch within 72 hours once
                  we&apos;re aligned on scope and content. More complex or design-led projects
                  may take longer, with timelines agreed upfront.
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            {/* 5 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              <AccordionItem>
                <AccordionHeader>
                  Are there any hidden costs?
                </AccordionHeader>
                <AccordionPanel>
                  No. Pricing is agreed upfront based on scope. You pay once for the build,
                  and you own the code. Ongoing support, hosting or
                  future changes are optional and discussed separately.
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            {/* 6 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              <AccordionItem>
                <AccordionHeader>
                  Will my site be easy to manage?
                </AccordionHeader>
                <AccordionPanel>
                  Yes. Every build is set up so you can update content,
                  products and pages without touching code.
                  You&apos;ll get a clear handover so you&apos;re in control from day one.
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            {/* 7 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              <AccordionItem>
                <AccordionHeader>
                  Do you handle hosting and deployment?
                </AccordionHeader>
                <AccordionPanel>
                  Yes. We'll deploy your site and help set up hosting,
                  whether that&apos;s Shopify, Vercel or another provider.
                  Everything is configured for performance, security and reliability.
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            {/* 8 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              <AccordionItem>
                <AccordionHeader>
                  Can you help improve performance or SEO?
                </AccordionHeader>
                <AccordionPanel>
                  Absolutely. Sites are built with performance and SEO
                  in mind from the start, and we can also run optimisation
                  passes later to improve speed, structure and search visibility as your site grows.
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            {/* 9 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              <AccordionItem>
                <AccordionHeader>
                  Do you offer AI chatbots or automation?
                </AccordionHeader>
                <AccordionPanel>
                  Yes, as an optional add-on.

                  AI chatbots can be added to capture enquiries, answer common questions, and qualify leads outside business hours.

                  They’re trained on your existing site content and installed directly into your website. Scope, limits, and data sources are defined upfront, and a human fallback is always available.
                </AccordionPanel>
              </AccordionItem>
            </motion.div>




          </Accordion>
        </motion.div>
      </motion.div>
    </Section>
  );
}