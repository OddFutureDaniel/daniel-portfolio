'use client'
import { GridContainer } from "../ui/GridContainer";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
    const [showFrame, setShowFrame] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        '/projects/SkynMapsLogo.webp',
        '/projects/GlowIvDripsLogo.png',
        '/projects/JaffaSabaLogo.avif',
        '/projects/730CarlinaLogo.webp',
        '/projects/TheChiqueEventsLogo.svg',
    ];

    useEffect(() => {
        if (showFrame) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, 300);

            return () => clearInterval(interval);
        } else {
            setCurrentImageIndex(0); // Reset when not showing
        }
    }, [showFrame, images.length]);
    
    return (
        <>
            <footer className="mx-10! mt-30!">
                <GridContainer>
                    <div 
                        className="col-span-2 flex flex-col items-start leading-loose"
                        onMouseEnter={() => setShowFrame(true)}
                        onMouseLeave={() => setShowFrame(false)}
                    >
                        <span className="uppercase mb-8!">select clients</span>
                        <p>SkynMaps</p>
                        <p>Jaffa Saba</p>
                        <p>730Carlina</p>
                        <p>GlowIVDrips</p>
                        <p>The Chique Events</p>
                        <p>ESTIEE</p>
                    </div>

                    <div className="col-span-2 flex flex-col items-start leading-loose">
                        <span className="uppercase mb-8!">technologies</span>
                        <p>Shopify</p>
                        <p>Next.js</p>
                        <p>React</p>
                        <p>Vue.js</p>
                        <p>Motion.dev</p>
                        <p>Figma</p>
                        <p>Wordpress</p>
                        <p>Vercel</p>
                    </div>

                    <div className="col-span-2 flex flex-col items-start leading-loose">
                        <span className="uppercase mb-8!">services</span>
                        <p>Frontend Development</p>
                        <p>Backend Development</p>
                        <p>E-Commerce Development</p>
                        <p>Web Design</p>
                        <p>UI/UX Design</p>
                        <p>Digital Brand Strategy</p>
                        <p>Bug Fixes</p>
                        <p>Maintenance & Support</p>
                    </div>

                    <div className="col-span-2 flex flex-col items-start leading-loose">
                        <span className="uppercase mb-8!">contact</span>
                        <a href="mailto:hello@thirdline.uk" target="_blank">hello@thirdline.uk</a>
                        <a href="https://www.instagram.com/studiothirdline/" target="_blank">Instagram</a>
                        <a href="https://www.linkedin.com/company/third-line-studio" target="_blank">LinkedIn</a>
                    </div>
                </GridContainer>
            </footer>
            
            {showFrame && (
                <div 
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-[#909090] pointer-events-none overflow-hidden"
                >
                    <Image
                        src={images[currentImageIndex]}
                        alt="Client work"
                        fill
                        className="object-contain p-6!"
                    />
                </div>
            )}
        </>
    );
}