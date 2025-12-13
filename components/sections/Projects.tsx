"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Carousel, { CarouselHandle } from "@/components/ui/Carousel";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/Card";
import Subheading from "@/components/ui/Subheading";

const slides = [
  <Card key="1" className="h-full flex flex-col overflow-hidden hover:shadow-md">
    <div className="relative flex-3 w-full bg-neutral-200">
      <Image
        src="/projects/Jaffa Saba Shopify Portfolio Site Project.png"
        alt="Jaffa Safa Shopify Portfolio Website Image"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 418px, 380px"
      />
    </div>
    <CardContent className="flex-2 flex flex-col gap-3 p-4 md:p-5">
      <Subheading
        align="left"
        className="text-[11px] uppercase tracking-[0.18em] text-neutral-500"
      >
        Shopify · E-commerce · GA4
      </Subheading>
      <CardHeader className="p-0">
        <h3 className="text-base md:text-lg font-medium">Jaffa Saba</h3>
        <CardDescription className="mt-1 text-sm text-neutral-600">
          A Shopify e-commerce & portfolio site for multidisciplinary artist Jaffa Saba
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="2" className="h-full flex flex-col overflow-hidden hover:shadow-md">
    <div className="relative flex-3 w-full bg-neutral-200">
      <Image
        src="/projects/ESTIE SHopify E-commerce Website.png"
        alt="Estie Shopify E-commerce Website"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 418px, 380px"
      />
    </div>
    <CardContent className="flex-2 flex flex-col gap-3 p-4 md:p-5">
      <Subheading
        align="left"
        className="text-[11px] uppercase tracking-[0.18em] text-neutral-500"
      >
        Shopify · E-commerce · GA4
      </Subheading>
      <CardHeader className="p-0">
        <h3 className="text-base md:text-lg font-medium">Glow IV Drips</h3>
        <CardDescription className="mt-1 text-sm text-neutral-600">
          Custom booking-integrated Shopify build for a London IV clinic.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="3" className="h-full flex flex-col overflow-hidden hover:shadow-md">
    <div className="relative flex-3 w-full bg-neutral-200">
      <Image
        src="/projects/730carlina Shopify E-commerce Website.png"
        alt="730Carlina Shopify E-commerce Website"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 418px, 380px"
      />
    </div>
    <CardContent className="flex-2 flex flex-col gap-3 p-4 md:p-5">
      <Subheading
        align="left"
        className="text-[11px] uppercase tracking-[0.18em] text-neutral-500"
      >
        Shopify · E-commerce · GA4
      </Subheading>
      <CardHeader className="p-0">
        <h3 className="text-base md:text-lg font-medium">Glow IV Drips</h3>
        <CardDescription className="mt-1 text-sm text-neutral-600">
          Custom booking-integrated Shopify build for a London IV clinic.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="4" className="h-full flex flex-col overflow-hidden hover:shadow-md">
    <div className="relative flex-3 w-full bg-neutral-200">
      <Image
        src="/projects/glowivdrips clinic Shopify Wesbite.png"
        alt="Glow IV Drips Clinic Shopify Website"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 418px, 380px"
      />
    </div>
    <CardContent className="flex-2 flex flex-col gap-3 p-4 md:p-5">
      <Subheading
        align="left"
        className="text-[11px] uppercase tracking-[0.18em] text-neutral-500"
      >
        Shopify · E-commerce · GA4
      </Subheading>
      <CardHeader className="p-0">
        <h3 className="text-base md:text-lg font-medium">Glow IV Drips</h3>
        <CardDescription className="mt-1 text-sm text-neutral-600">
          Custom booking-integrated Shopify build for a London IV clinic.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="5" className="h-full flex flex-col overflow-hidden hover:shadow-md">
    <div className="relative flex-3 w-full bg-neutral-200">
      <Image
        src="/projects/Skynmaps Clinic Shopify Site.png"
        alt="Skynmaps Clinic Shopify Site"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 418px, 380px"
      />
    </div>
    <CardContent className="flex-2 flex flex-col gap-3 p-4 md:p-5">
      <Subheading
        align="left"
        className="text-[11px] uppercase tracking-[0.18em] text-neutral-500"
      >
        Shopify · E-commerce · GA4
      </Subheading>
      <CardHeader className="p-0">
        <h3 className="text-base md:text-lg font-medium">Glow IV Drips</h3>
        <CardDescription className="mt-1 text-sm text-neutral-600">
          Custom booking-integrated Shopify build for a London IV clinic.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="6" className="h-full flex flex-col overflow-hidden hover:shadow-md">
    <div className="relative flex-3 w-full bg-neutral-200">
      <Image
        src="/projects/TheChiqueEvents Webflow Events Booking Site.png"
        alt="The Chique Events Webflow Booking Site"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 418px, 380px"
      />
    </div>
    <CardContent className="flex-2 flex flex-col gap-3 p-4 md:p-5">
      <Subheading
        align="left"
        className="text-[11px] uppercase tracking-[0.18em] text-neutral-500"
      >
        Shopify · E-commerce · GA4
      </Subheading>
      <CardHeader className="p-0">
        <h3 className="text-base md:text-lg font-medium">Glow IV Drips</h3>
        <CardDescription className="mt-1 text-sm text-neutral-600">
          Custom booking-integrated Shopify build for a London IV clinic.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
];

export default function Projects() {
  const carouselRef = useRef<CarouselHandle | null>(null);

  const handlePrev = () => carouselRef.current?.prev();
  const handleNext = () => carouselRef.current?.next();

  return (
    <motion.section
      className="w-full mt-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Title + Nav Row */}
      <motion.div
        className="w-full space-y-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
      >
        <div className="flex flex-wrap items-center px-8 md:px-35 w-full justify-between gap-3">
          {/* Title block */}
          <motion.div
            className="flex flex-col mb-2 md:mb-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <Subheading
              className="text-[16px] uppercase tracking-[0.2em] text-neutral-400 font-medium"
              align="left"
            >
              Selected work
            </Subheading>
            <Subheading
              className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-black!"
              align="left"
            >
              A few recent projects <br /> shipped for clients
            </Subheading>
          </motion.div>

          {/* Nav buttons */}
          <motion.div
            className="flex w-full shrink-0 justify-start gap-2 md:w-auto md:justify-end"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          >
            <button
              type="button"
              onClick={handlePrev}
              className="rounded-full border border-neutral-300 bg-white/80 px-3 py-1 text-xs md:text-sm shadow-sm hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-neutral-400"
              aria-label="Previous slides"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="rounded-full border border-neutral-300 bg-white/80 px-3 py-1 text-xs md:text-sm shadow-sm hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-neutral-400"
              aria-label="Next slides"
            >
              Next
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Carousel wrapper */}
      <motion.div
        className="mt-4 -mx-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      >
        <Carousel
          ref={carouselRef}
          slides={slides}
          ariaLabel="Selected client projects"
        />
      </motion.div>
    </motion.section>
  );
}