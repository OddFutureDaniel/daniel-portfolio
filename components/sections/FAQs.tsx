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
        className="w-full max-w-3xl mx-auto"
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
          <Subheading align="left">What Clients Ask</Subheading>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
        >
          <Accordion multiple>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              <AccordionItem>
                <AccordionHeader>
                  How fast do you build Shopify sites
                </AccordionHeader>
                <AccordionPanel>
                  Most projects ship within 72 hours once assets and content are
                  ready.
                </AccordionPanel>
              </AccordionItem>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
            >
              <AccordionItem>
                <AccordionHeader>
                  Can you work with my existing theme
                </AccordionHeader>
                <AccordionPanel>
                  Yes. I can refactor your current theme, improve UX and add
                  custom sections.
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
          </Accordion>
        </motion.div>
      </motion.div>
    </Section>
  );
}