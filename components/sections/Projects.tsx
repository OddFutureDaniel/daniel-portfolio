"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/Card";
import Subheading from "@/components/ui/Subheading";
import { neueHaasDisplay } from "@/app/fonts";
import Button from "@/components/ui/Button";

const slides: React.ReactElement[] = [
  <Card key="1" className="h-full flex flex-col overflow-hidden hover:shadow-md">
    <div className="relative h-56 md:h-64 w-full bg-neutral-200">
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
        className="text-[11px] mt-1 uppercase tracking-[0.18em] text-neutral-500"
      >
        Shopify · E-commerce · Portfolio
      </Subheading>
      <CardHeader className="p-0">
        <h3
          className={`${neueHaasDisplay.className} text-base md:text-lg font-medium text-black!`}
        >
          Jaffa Saba
        </h3>
        <CardDescription className="mt-1 text-[15px] text-neutral-600">
          A Shopify e-commerce & portfolio site for multidisciplinary artist Jaffa
          Saba.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="2" className="h-full flex flex-col overflow-hidden hover:shadow-md">
    <div className="relative h-56 md:h-64 w-full bg-neutral-200">
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
        className="text-[11px] mt-1 uppercase tracking-[0.18em] text-neutral-500"
      >
        Shopify · E-commerce · Large-Scale
      </Subheading>
      <CardHeader className="p-0">
        <h3
          className={`${neueHaasDisplay.className} text-base md:text-lg font-medium text-black!`}
        >
          ESTIEE
        </h3>
        <CardDescription className="mt-1 text-[15px] text-neutral-600">
          Custom storefront for a luxury beauty and wellness brand.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="3" className="h-full flex flex-col overflow-hidden hover:shadow-md">
    <div className="relative h-56 md:h-64 w-full bg-neutral-200">
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
        className="text-[11px] mt-1 uppercase tracking-[0.18em] text-neutral-500"
      >
        Brand · porfolio · creative
      </Subheading>
      <CardHeader className="p-0">
        <h3
          className={`${neueHaasDisplay.className} text-base md:text-lg font-medium text-black!`}
        >
          730Carlina
        </h3>
        <CardDescription className="mt-1 text-[15px] text-neutral-600">
          Custom e-commerce site for a contemporary fashion brand.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="4" className="h-full flex flex-col overflow-hidden hover:shadow-md">
    <div className="relative h-56 md:h-64 w-full bg-neutral-200">
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
        className="text-[11px] mt-1 uppercase tracking-[0.18em] text-neutral-500"
      >
        Shopify · E-commerce · GA4
      </Subheading>
      <CardHeader className="p-0">
        <h3
          className={`${neueHaasDisplay.className} text-base md:text-lg font-medium text-black!`}
        >
          Glow IV Drips
        </h3>
        <CardDescription className="mt-1 text-[15px] text-neutral-600">
          Custom booking-integrated Shopify build for a London IV clinic.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="5" className="h-full flex flex-col overflow-hidden hover:shadow-md">
    <div className="relative h-56 md:h-64 w-full bg-neutral-200">
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
        className="text-[11px] mt-1 uppercase tracking-[0.18em] text-neutral-500"
      >
        clinic · E-commerce · wellness
      </Subheading>
      <CardHeader className="p-0">
        <h3
          className={`${neueHaasDisplay.className} text-base md:text-lg font-medium text-black!`}
        >
          SkynMaps
        </h3>
        <CardDescription className="mt-1 text-[15px] text-neutral-600">
          E-commerce website for a premium skin clinic brand.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="6" className="h-full flex flex-col overflow-hidden hover:shadow-md">
    <div className="relative h-56 md:h-64 w-full bg-neutral-200">
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
        className="text-[11px] mt-1 uppercase tracking-[0.18em] text-neutral-500"
      >
        booking · events · luxury
      </Subheading>
      <CardHeader className="p-0">
        <h3
          className={`${neueHaasDisplay.className} text-base md:text-lg font-medium text-black!`}
        >
          The Chique Events
        </h3>
        <CardDescription className="mt-1 text-[15px] text-neutral-600">
          Event booking website for a luxury events brand.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
];

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;

    // Scroll by ~one card width (keeps behaviour consistent across breakpoints)
    const firstCard = el.querySelector<HTMLElement>("[data-slide]");
    const amount = firstCard ? firstCard.offsetWidth + 16 : 420; // +gap fallback
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const handlePrev = () => scrollByCard(-1);
  const handleNext = () => scrollByCard(1);

  return (
    <motion.section
      className="w-full py-20 bg-neutral-100 -mx-8"
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
        <div
          id="previous-work"
          className="flex flex-wrap items-center px-8 md:px-35 w-full justify-between gap-3 scroll-mt-20"
        >
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
              className={`${neueHaasDisplay.className} mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-black!`}
              align="left"
            >
              Recent projects
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
            <Button
              variant="secondary"
              onClick={handlePrev}
              aria-label="Previous slides"
              className="w-25"
            >
              Prev
            </Button>
            <Button
              variant="secondary"
              onClick={handleNext}
              aria-label="Next slides"
              className="w-25"
            >
              Next
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scrollable row (fixed array, no infinite loop) */}
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      >
        <div
          ref={scrollerRef}
          aria-label="Selected client projects"
          className="overflow-x-auto overscroll-x-contain no-scrollbar scroll-smooth"
        >
          <div className="px-8 flex gap-4 md:gap-6">
            {slides.map((slide, i) => (
              <div
                key={slide.key ?? i}
                data-slide
                className="shrink-0 w-[85vw] max-w-[420px]"
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}