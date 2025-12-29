"use client";

import { useMemo, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardDescription } from "@/components/ui/Card";
import Subheading from "@/components/ui/Subheading";
import { neueHaasDisplay } from "@/app/fonts";
import Button from "@/components/ui/Button";

type Slide = {
  key: string;
  imageSrc: string;
  imageAlt: string;
  tags: string;
  title: string;
  description: string;
};

const SLIDES: Slide[] = [
  {
    key: "jaffa-saba",
    imageSrc: "/projects/Jaffa Saba Shopify Portfolio Site Project.png",
    imageAlt: "Jaffa Saba Shopify e-commerce and portfolio website preview",
    tags: "Shopify · E-commerce · Portfolio",
    title: "Jaffa Saba",
    description: "A Shopify e-commerce & portfolio site for multidisciplinary artist Jaffa Saba.",
  },
  {
    key: "estiee",
    imageSrc: "/projects/ESTIE SHopify E-commerce Website.png",
    imageAlt: "ESTIEE Shopify e-commerce website preview",
    tags: "Shopify · E-commerce · Large-scale",
    title: "ESTIEE",
    description: "Custom storefront for a luxury beauty and wellness brand.",
  },
  {
    key: "730carlina",
    imageSrc: "/projects/730carlina Shopify E-commerce Website.png",
    imageAlt: "730Carlina e-commerce website preview",
    tags: "Brand · Portfolio · Creative",
    title: "730Carlina",
    description: "Custom e-commerce site for a contemporary fashion brand.",
  },
  {
    key: "glow-iv-drips",
    imageSrc: "/projects/glowivdrips clinic Shopify Wesbite.png",
    imageAlt: "Glow IV Drips Shopify clinic website preview",
    tags: "Shopify · E-commerce · GA4",
    title: "Glow IV Drips",
    description: "Custom booking-integrated Shopify build for a London IV clinic.",
  },
  {
    key: "skynmaps",
    imageSrc: "/projects/Skynmaps Clinic Shopify Site.png",
    imageAlt: "SkynMaps clinic e-commerce website preview",
    tags: "Clinic · E-commerce · Wellness",
    title: "SkynMaps",
    description: "E-commerce website for a premium skin clinic brand.",
  },
  {
    key: "the-chique-events",
    imageSrc: "/projects/TheChiqueEvents Webflow Events Booking Site.png",
    imageAlt: "The Chique Events booking website preview",
    tags: "Booking · Events · Luxury",
    title: "The Chique Events",
    description: "Event booking website for a luxury events brand.",
  },
];

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-slide]");
    const amount = firstCard ? firstCard.offsetWidth + 16 : 420;
    el.scrollBy({ left: dir * amount, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const handlePrev = () => scrollByCard(-1);
  const handleNext = () => scrollByCard(1);

  const onScrollerKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <motion.section
      aria-labelledby="projects-title"
      className="w-full py-20 bg-neutral-100 -mx-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
              id="projects-title"
            >
              Recent projects.
            </Subheading>

            <p id="projects-help" className="sr-only">
              Carousel. Use the Previous and Next buttons, or left and right arrow keys when the carousel is focused.
            </p>
          </motion.div>

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
              aria-label="Previous projects"
              className="w-25"
            >
              Prev
            </Button>
            <Button
              variant="secondary"
              onClick={handleNext}
              aria-label="Next projects"
              className="w-25"
            >
              Next
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      >
        <div
          ref={scrollerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Selected client projects"
          aria-describedby="projects-help"
          tabIndex={0}
          onKeyDown={onScrollerKeyDown}
          className="overflow-x-auto overscroll-x-contain no-scrollbar scroll-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          <ul className="px-8 flex gap-4 md:gap-6" role="list">
            {SLIDES.map((s) => (
              <li
                key={s.key}
                data-slide
                className="shrink-0 w-[85vw] max-w-[420px]"
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-md">
                  <div className="relative h-56 md:h-64 w-full bg-neutral-200">
                    <Image
                      src={s.imageSrc}
                      alt={s.imageAlt}
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
                      {s.tags}
                    </Subheading>

                    <CardHeader className="p-0">
                      <h3 className={`${neueHaasDisplay.className} text-base md:text-lg font-medium text-black!`}>
                        {s.title}
                      </h3>
                      <CardDescription className="mt-1 text-[15px] text-neutral-600">
                        {s.description}
                      </CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}