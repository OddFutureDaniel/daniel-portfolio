'use client';

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { DateDisplay } from "../ui/DateDisplay";
import { GridContainer } from "../ui/GridContainer";
import Image from 'next/image';

const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.querySelector("#about")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const FONT_STYLES = [
  { name: 'original', font: 'inherit', size: '0px' },
  { name: 'typewriter', font: 'var(--font-courier)', size: '42px' },
  { name: 'pixel', font: 'var(--font-pixel)', size: '25px' },
  { name: 'varsity', font: 'var(--font-varsity)', size: '42px' },
  { name: 'serif', font: 'var(--font-serif)', size: '42px' },
  { name: 'techno', font: 'var(--font-techno)', size: '39px' },
];

export default function Header() {
  const [isHovering, setIsHovering] = useState(false);
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    if (!isHovering) return;

    const interval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % FONT_STYLES.length);
    }, 120);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <header className="mx-10! mt-4!">
      <GridContainer>
        {/* WORDMARK */}
        <div
          className="col-span-4 mobile:col-span-7 cursor-pointer inline-grid items-center select-none mobile:scale-[0.75] origin-left"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            width: 250,
            height: 40,
          }}
        >
          {/* SVG LOGO */}
          <div
            className="row-start-1 col-start-1"
            style={{ visibility: currentFontIndex === 0 ? 'visible' : 'hidden' }}
          >
            <Image
              src="/thirdlinelogoblack.svg"
              alt="Third Line Logo"
              width={250}
              height={40}
              style={{ height: "auto" }}
            />
          </div>

          {/* FONT VARIANTS */}
          {FONT_STYLES.slice(1).map((font, index) => (
            <div
              key={font.name}
              className="row-start-1 col-start-1"
              style={{
                fontFamily: font.font,
                fontSize: font.size,
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                lineHeight: 1,
                visibility: currentFontIndex === index + 1 ? 'visible' : 'hidden',
              }}
            >
              THIRD LINE
            </div>
          ))}
        </div>

        {/* DATE */}
        <div className="col-span-4 text-center mobile:hidden">
          <DateDisplay />
        </div>

        {/* ABOUT LINK */}
        <motion.a
          className="col-span-4 mobile:col-span-5 uppercase text-right"
          href="#about"
          onClick={scrollToAbout}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          about
        </motion.a>
      </GridContainer>
    </header>
  );
}