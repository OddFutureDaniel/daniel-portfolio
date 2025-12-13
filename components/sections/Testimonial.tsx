"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <motion.section
      className="py-6 border-y border-neutral-200 w-full items-center bg-neutral-50 -mx-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="mx-auto max-w-6xl px-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* "Trusted by" label */}
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          >
            Trusted by
          </motion.p>

          {/* Logo row */}
          <motion.div
            className="flex justify-center items-center gap-12 md:gap-16"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.14 }}
            >
              <Image
                alt="Jaffa Saba"
                loading="lazy"
                width={120}
                height={40}
                decoding="async"
                className="invert h-10 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity grayscale"
                src="/projects/JaffaSabaLogo.avif"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.18 }}
            >
              <Image
                alt="SkynMaps"
                loading="lazy"
                width={120}
                height={40}
                decoding="async"
                className="invert h-10 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity grayscale"
                src="/projects/SkynMapsLogo.webp"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.22 }}
            >
              <Image
                alt="730Carlina"
                loading="lazy"
                width={120}
                height={20}
                decoding="async"
                className="w-auto object-contain opacity-60 hover:opacity-80 transition-opacity grayscale"
                src="/projects/730CarlinaLogo.webp"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.26 }}
            >
              <Image
                alt="Glow IV Drips"
                loading="lazy"
                width={120}
                height={40}
                decoding="async"
                className="h-20 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity grayscale"
                src="/projects/GlowIvDripsLogo.png"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}