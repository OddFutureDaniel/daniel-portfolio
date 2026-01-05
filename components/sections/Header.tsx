"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollHide } from "@/components/ui/UseScrollDirection";
import { scrollToId } from "../ui/ScrollToID";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export default function Header() {
    const hidden = useScrollHide(80);
    const headerRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when header hides (avoids setState inside useEffect)
    if (hidden && menuOpen) {
        setMenuOpen(false);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (!menuOpen) return;

            const target = event.target as Node;

            if (headerRef.current && !headerRef.current.contains(target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header
            id="site-header"
            className={`fixed inset-x-0 top-0 z-50 mt-8 transition-transform duration-300 px-8 ease-out
        ${hidden ? "-translate-y-[150%]" : "translate-y-0"}`}
        >
            <div
                ref={headerRef}
                className="mx-auto flex h-16 max-w-[92%] md:max-w-4xl items-center justify-between px-5 md:px-6 rounded-full bg-white/60 backdrop-blur-md border border-neutral-200/40"
            >
                <Link href="/" className="inline-flex items-center" aria-label="THIRD LINE">

                    <svg 
                    id="Layer_1" 
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    

                    viewBox="0 0 941.24 107.25"
                        role="img"
                        aria-hidden="true" 
                        focusable="false"
                        className="h-4 w-auto block"


                    >
                        <g id="black">
                            <path d="M31.2,22.5H0V0h89.25v22.5h-31.5v84.75h-26.55V22.5Z" />
                            <path d="M99.15,0h26.55v40.65h37.65V0h26.55v107.25h-26.55v-44.7h-37.65v44.7h-26.55V0Z" />
                            <path d="M231.75,0h26.55v107.25h-26.55V0Z" />
                            <path d="M300,0h51.3c5.3,0,10.25.67,14.85,2.02s8.57,3.33,11.93,5.93c3.35,2.6,5.97,5.83,7.88,9.67,1.9,3.85,2.85,8.28,2.85,13.27,0,6.3-1.53,11.65-4.57,16.05-3.05,4.4-7.73,7.7-14.03,9.9v.45c4.7,1.6,8.27,3.93,10.72,6.97,2.45,3.05,4.07,7.28,4.88,12.68.6,3.5.97,6.93,1.12,10.28.15,3.35.32,6.35.53,9,.2,2.65.5,4.85.9,6.6.4,1.75,1.05,2.78,1.95,3.07v1.35h-25.8c-.7-.4-1.22-1.42-1.57-3.08-.35-1.65-.65-3.65-.9-6-.25-2.35-.47-4.9-.67-7.65-.2-2.75-.5-5.47-.9-8.17-.7-5-2.43-8.8-5.18-11.4-2.75-2.6-6.97-3.9-12.67-3.9h-16.05v40.2h-26.55V0ZM346.5,47.4c5.3,0,9.28-1.15,11.93-3.45,2.65-2.3,3.97-5.5,3.97-9.6s-1.28-7.1-3.82-9.6c-2.55-2.5-6.38-3.75-11.47-3.75h-20.55v26.4h19.95Z" />
                            <path d="M400.64,0h45.75c7.4,0,14.15,1.3,20.25,3.9,6.1,2.6,11.33,6.25,15.68,10.95,4.35,4.7,7.72,10.4,10.12,17.1,2.4,6.7,3.6,14.15,3.6,22.35,0,9.5-1.6,17.93-4.8,25.28-3.2,7.35-7.8,13.33-13.8,17.92-4.2,3.2-9,5.62-14.4,7.27-5.4,1.65-11.5,2.48-18.3,2.48h-44.1V0ZM442.79,84.9c8.8,0,15.4-2.62,19.8-7.88,4.4-5.25,6.6-12.82,6.6-22.72s-2.25-17.6-6.75-23.4c-4.5-5.8-10.95-8.7-19.35-8.7h-15.9v62.7h15.6Z" />
                            <path d="M599.39,0h26.55v84.75h48.15v22.5h-74.7V0Z" />
                            <path d="M684.29,0h26.55v107.25h-26.55V0Z" />
                            <path d="M752.54,0h26.7l31.8,53.85c.4.8,1.02,1.95,1.88,3.45.85,1.5,1.67,3,2.48,4.5,1,1.8,2,3.7,3,5.7h.3c-.1-2.4-.15-4.7-.15-6.9-.1-1.9-.15-3.75-.15-5.55V0h25.95v107.25h-26.7l-31.5-53.1c-.5-.7-1.18-1.82-2.03-3.38-.85-1.55-1.68-3.17-2.47-4.88-1-1.9-2.05-3.95-3.15-6.15h-.3c0,2.6.05,5.05.15,7.35,0,2,.02,3.98.07,5.92.05,1.95.08,3.37.08,4.27v49.95h-25.95V0Z" />
                            <path d="M859.04,0h81.3v21.9h-54.75v19.2h46.95v20.7h-46.95v22.95h55.65v22.5h-82.2V0Z" />
                        </g>
                    </svg>
                </Link>

                <nav className="hidden md:flex items-center gap-1">
                    <Link
                        onClick={() => scrollToId("previous-work", 100, { duration: 1 })}
                        className="px-4 py-2 text-sm font-medium text-black transition-colors rounded-full hover:bg-neutral-100/80"
                        href="/#previous-work"
                    >
                        Work
                    </Link>
                    <Link
                        onClick={() => scrollToId("pricing", 20, { duration: 1 })}
                        className="px-4 py-2 text-sm font-medium text-black transition-colors rounded-full hover:bg-neutral-100/80"
                        href="/#pricing"
                    >
                        Pricing
                    </Link>
                    <Link
                        onClick={() => scrollToId("calendar", -20, { duration: 1 })}
                        className="ml-2 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg"
                        href="/#book-a-call"
                    >
                        <span>Book a Call</span>
                        <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </nav>

                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="md:hidden flex items-center justify-center p-2 text-neutral-600 hover:text-black transition-colors"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                >
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Site navigation"
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full right-4 left-4 mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-neutral-200/60 shadow-2xl md:hidden"
                    >
                        <nav className="p-3 space-y-1">
                            <Link
                                onClick={() => {
                                    scrollToId("previous-work", 110, { duration: 1 });
                                    closeMenu();
                                }}
                                className="block px-4 py-3 rounded-xl text-sm font-medium text-black hover:bg-neutral-100/80 transition-colors"
                                href="/#previous-work"
                            >
                                Work
                            </Link>

                            <Link
                                onClick={() => {
                                    scrollToId("pricing", 55, { duration: 1 });
                                    closeMenu();
                                }}
                                className="block px-4 py-3 rounded-xl text-sm font-medium text-black hover:bg-neutral-100/80 transition-colors"
                                href="/#pricing"
                            >
                                Pricing
                            </Link>

                            <div className="pt-2 border-t border-neutral-100">
                                <Link
                                    onClick={() => {
                                        scrollToId("calendar", -20, { duration: 1 });
                                        closeMenu();
                                    }}
                                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                                    href="/#book-a-call"
                                >
                                    <span>Book a Call</span>
                                    <svg
                                        className="h-3.5 w-3.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}