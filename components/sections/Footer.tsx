'use client'

import { GridContainer } from "../ui/GridContainer";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [showFrame, setShowFrame] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const images = [
    'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/SkynMapsLogo_mwcvvk',
    'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/730CarlinaLogo_w7cj6k',
    'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/JaffaSabaLogo_c4fghf',
    'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/TheChiqueEventsLogo_ev8ogl',
    'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/GlowIvDripsLogo_bizerr',
  ];

  useEffect(() => {
    if (!showFrame) {
      setCurrentImageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 300);

    return () => clearInterval(interval);
  }, [showFrame, images.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (showFrame) window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [showFrame]);

  const colClasses =
    "col-span-2 mid:col-span-3 mobile:col-span-6 flex flex-col items-start leading-loose";

  return (
    <>
      <footer className="!mx-10 !mt-30">
        <GridContainer>
          {/* 1) Select clients */}
          <div
            className={colClasses}
            onMouseEnter={() => setShowFrame(true)}
            onMouseLeave={() => setShowFrame(false)}
          >
            <span className="uppercase !mb-8">select clients</span>
            <p>SkynMaps</p>
            <p>Jaffa Saba</p>
            <p>730Carlina</p>
            <p>GlowIVDrips</p>
            <p>The Chique Events</p>
            <p>ESTIEE</p>
            <p>5EB</p>
          </div>

          {/* 2) Technologies */}
          <div className={colClasses}>
            <span className="uppercase !mb-8">technologies</span>
            <p>Shopify</p>
            <p>Next.js</p>
            <p>React</p>
            <p>Vue.js</p>
            <p>Motion.dev</p>
            <p>Figma</p>
            <p>Wordpress</p>
            <p>Vercel</p>
          </div>

          {/* Mobile row break so 3+4 go underneath */}
          <div className="hidden mobile:block mobile:col-span-12" />

          {/* 3) Services */}
          <div className={colClasses}>
            <span className="uppercase !mb-8">services</span>
            <p>Frontend Development</p>
            <p>Backend Development</p>
            <p>E-Commerce Development</p>
            <p>Web Design</p>
            <p>UI/UX Design</p>
            <p>Digital Brand Strategy</p>
            <p>Bug Fixes</p>
            <p>Maintenance & Support</p>
          </div>

          {/* 4) Contact */}
          <div className={colClasses}>
            <span className="uppercase !mb-8">contact</span>
            <a href="mailto:hello@thirdline.uk" target="_blank" rel="noreferrer">
              hello@thirdline.uk
            </a>
            <a href="https://www.instagram.com/studiothirdline/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/third-line-studio" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </GridContainer>

        <div className="!mt-15 !mb-6 flex items-center justify-end gap-2 text-right">
          <p>ALL RIGHTS RESERVED 2026 Third Line</p>
          <a href="/privacy" className=" !underline hover:!no-underline !transition">
            Privacy Policy
          </a>
        </div>
      </footer>

      {showFrame && (
        <div
          className="fixed w-[100px] h-[100px] bg-[#d9d9d9] pointer-events-none overflow-hidden flex items-center justify-center p-4"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(9%, 18%)',
          }}
        >
          <Image
            src={images[currentImageIndex]}
            alt="Client work"
            fill
            sizes="100px"
            className="object-contain !p-2"
          />
        </div>
      )}
    </>
  );
}