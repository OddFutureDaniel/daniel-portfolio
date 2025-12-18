"use client";
import { useEffect, useRef, useState } from "react";
import { useScrollHide } from "@/components/ui/UseScrollDirection";
import { scrollToId } from "../ui/ScrollToID";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
    const hidden = useScrollHide(80);
    const headerRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (hidden) {
            setMenuOpen(false);
        }
    }, [hidden]);

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
                className="mx-auto flex h-16 max-w-[92%] md:max-w-4xl items-center justify-between px-5 md:px-6 rounded-full bg-white/60 backdrop-blur-md border border-neutral-200/40">
                <a href="/" className="inline-flex items-center">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 61 "
                        role="img"
                        aria-label="Third Line"
                        className="h-4 w-auto block"
                    >
                        <title>THIRD LINE</title>
                        <g fill="black" fillRule="evenodd">
                            <path fillRule="evenodd" d="M218.095 5.0827C249.223 5.0827 249.223 5.0827 256.139 11.7922C261.432 17.4906 262.831 23.0575 262.84 30.7168C262.854 31.3091 262.867 31.9014 262.881 32.5117C262.904 38.9117 260.934 44.7029 256.641 49.4748C252.551 53.4638 247.076 56.1524 241.317 56.1368C240.792 56.1367 240.268 56.1366 239.727 56.1366C238.907 56.1323 238.907 56.1323 238.071 56.128C237.565 56.1274 237.059 56.1269 236.538 56.1263C234.652 56.1234 232.765 56.1157 230.879 56.1085C226.66 56.0971 222.442 56.0856 218.095 56.0739C218.095 39.2468 218.095 22.4197 218.095 5.0827Z M230.742 15.6135C241.778 15.6135 241.778 15.6135 246.069 18.2462C249.942 22.3791 250.775 27.1068 250.674 32.6351C250.348 36.9645 249.236 40.2782 246.138 43.3261C241.283 46.7877 237.164 45.5431 230.742 45.5431C230.742 35.6663 230.742 25.7896 230.742 15.6135Z" />
                            <path fillRule="evenodd" d="M163.109 5.08271C167.259 5.05985 171.41 5.03699 175.687 5.01343C176.986 5.00334 178.285 4.99325 179.624 4.98285C180.67 4.97961 181.716 4.97679 182.762 4.97446C183.292 4.96879 183.822 4.96312 184.368 4.95728C190.375 4.95574 196.51 5.79692 201.111 10.032C204.314 13.5741 205.129 16.383 205.036 21.1517C204.663 25.6662 202.687 28.1431 199.331 31.0286C198.3 31.6868 198.3 31.6868 196.65 31.6868C197.126 32.9077 197.126 32.9077 198.437 33.4881C201.405 35.3916 202.915 37.736 203.798 41.1091C204.067 43.1475 204.228 45.1904 204.383 47.2405C204.468 48.321 204.555 49.4013 204.643 50.4816C204.679 50.9567 204.715 51.4319 204.752 51.9214C204.9 53.3173 205.175 54.6974 205.448 56.0739C201.456 56.0739 197.464 56.0739 193.351 56.0739C192.116 51.7178 192.116 51.7178 191.942 49.9728C191.901 49.5977 191.86 49.2226 191.817 48.8361C191.74 48.0683 191.662 47.3004 191.585 46.5325C191.199 43.0154 190.574 40.6652 187.852 38.3378C186.354 37.8344 185.311 37.6818 183.756 37.6082C183.336 37.5871 182.916 37.566 182.483 37.5442C181.953 37.5203 181.422 37.4964 180.876 37.4718C179.186 37.3918 177.496 37.3118 175.755 37.2293C175.755 43.448 175.755 49.6667 175.755 56.0739C171.582 56.0739 167.408 56.0739 163.109 56.0739C163.109 39.2468 163.109 22.4197 163.109 5.08271Z M175.755 15.0592C177.593 15.025 179.43 14.9907 181.323 14.9553C182.182 14.9326 182.182 14.9326 183.059 14.9095C185.978 14.8831 188.12 14.9883 190.602 16.722C192.143 18.3052 192.499 19.4759 192.526 21.6756C192.463 23.8245 192.328 24.3767 191.014 26.1789C188.847 27.7179 187.175 27.8772 184.562 27.8612C184.098 27.8598 183.635 27.8584 183.158 27.857C182.575 27.8519 181.992 27.8469 181.391 27.8417C179.532 27.8302 177.672 27.8188 175.755 27.807C175.755 23.6003 175.755 19.3935 175.755 15.0592Z" />
                            <path d="M398.45 5.0827C402.624 5.0827 406.797 5.0827 411.097 5.0827C415.162 10.4173 415.162 10.4173 416.212 12.9158C417.711 16.2874 419.537 19.389 421.442 22.5416C422.008 23.5047 422.573 24.4689 423.136 25.4341C423.7 26.4001 424.263 27.366 424.844 28.3613C426.114 30.5561 427.384 32.7509 428.693 35.0123C428.874 25.1355 429.056 15.2588 429.243 5.0827C433.416 5.0827 437.59 5.0827 441.89 5.0827C441.89 21.9098 441.89 38.7369 441.89 56.0739C437.716 56.0739 433.543 56.0739 429.243 56.0739C427.321 53.1673 425.469 50.3551 423.731 47.3552C423.539 47.0239 423.347 46.6926 423.148 46.3513C422.544 45.3091 421.941 44.2656 421.339 43.2221C420.941 42.5361 420.543 41.8502 420.144 41.1643C412.908 28.6862 412.908 28.6862 411.097 25.0358C410.916 35.2783 410.734 45.5209 410.547 56.0739C406.555 56.0739 402.563 56.0739 398.45 56.0739C398.45 39.2468 398.45 22.4197 398.45 5.0827Z" />
                            <path d="M59.1841 5.0827C63.3576 5.0827 67.531 5.0827 71.831 5.0827C71.831 11.4843 71.831 17.8859 71.831 24.4815C77.6375 24.4815 83.4441 24.4815 89.4266 24.4815C89.4266 18.0799 89.4266 11.6783 89.4266 5.0827C93.6001 5.0827 97.7736 5.0827 102.074 5.0827C102.074 21.9098 102.074 38.7369 102.074 56.0739C97.9 56.0739 93.7266 56.0739 89.4266 56.0739C89.4266 49.1235 89.4266 42.1732 89.4266 35.0123C83.6201 35.0123 77.8135 35.0123 71.831 35.0123C71.831 41.9626 71.831 48.9129 71.831 56.0739C67.6575 56.0739 63.484 56.0739 59.1841 56.0739C59.1841 39.2468 59.1841 22.4197 59.1841 5.0827Z" />
                            <path d="M456.186 5.0827C468.888 5.0827 481.59 5.0827 494.677 5.0827C494.677 8.55786 494.677 12.033 494.677 15.6135C486.148 15.6135 477.62 15.6135 468.833 15.6135C468.833 18.7228 468.833 21.8322 468.833 25.0358C476.091 25.0358 483.35 25.0358 490.828 25.0358C490.828 28.1451 490.828 31.2545 490.828 34.458C483.569 34.458 476.311 34.458 468.833 34.458C468.833 38.1161 468.833 41.7742 468.833 45.5431C477.362 45.5431 485.89 45.5431 494.677 45.5431C494.677 49.0182 494.677 52.4934 494.677 56.0739C481.975 56.0739 469.273 56.0739 456.186 56.0739C456.186 39.2468 456.186 22.4197 456.186 5.0827Z" />
                            <path d="M4.74756 5.0827C18.7196 5.0827 32.6917 5.0827 47.0871 5.0827C47.0871 8.74076 47.0871 12.3988 47.0871 16.1677C42.1878 16.1677 37.2885 16.1677 32.2408 16.1677C32.2408 29.3368 32.2408 42.5058 32.2408 56.0739C28.0673 56.0739 23.8938 56.0739 19.5939 56.0739C19.5939 42.9048 19.5939 29.7358 19.5939 16.1677C14.6946 16.1677 9.79531 16.1677 4.74756 16.1677C4.74756 12.5097 4.74756 8.85161 4.74756 5.0827Z" />
                            <path d="M313.771 5.0827C317.945 5.0827 322.118 5.0827 326.418 5.0827C326.418 18.4346 326.418 31.7866 326.418 45.5431C333.858 45.5431 341.298 45.5431 348.963 45.5431C348.963 49.0182 348.963 52.4934 348.963 56.0739C337.35 56.0739 325.736 56.0739 313.771 56.0739C313.771 39.2468 313.771 22.4197 313.771 5.0827Z" />
                            <path d="M361.61 5.0827C365.783 5.0827 369.956 5.0827 374.256 5.0827C374.256 21.9098 374.256 38.7369 374.256 56.0739C370.083 56.0739 365.909 56.0739 361.61 56.0739C361.61 39.2468 361.61 22.4197 361.61 5.0827Z" />
                            <path d="M126.268 5.0827C130.441 5.0827 134.615 5.0827 138.914 5.0827C138.914 21.9098 138.914 38.7369 138.914 56.0739C134.741 56.0739 130.568 56.0739 126.268 56.0739C126.268 39.2468 126.268 22.4197 126.268 5.0827Z" />

                        </g>
                    </svg>
                </a>

                <nav className="hidden md:flex items-center gap-1">
                    <a
                        onClick={() => scrollToId("previous-work", 100, { duration: 1 })}
                        className="px-4 py-2 text-sm font-medium text-black transition-colors rounded-full hover:bg-neutral-100/80"
                        href="/#previous-work"
                    >
                        Work
                    </a>
                    <a
                        onClick={() => scrollToId("pricing", 55, { duration: 1 })}
                        className="px-4 py-2 text-sm font-medium text-black transition-colors rounded-full hover:bg-neutral-100/80"
                        href="/#pricing"
                    >
                        Pricing
                    </a>
                    <a
                        onClick={() => scrollToId("calendar", 50, { duration: 1 })}
                        className="ml-2 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg"
                        href="/#book-a-call"
                    >
                        <span>Book a Call</span>
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </nav>

                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="md:hidden flex items-center justify-center p-2 text-neutral-600 hover:text-black transition-colors"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{
                            duration: 0.25,
                            ease: "easeOut",
                        }}
                        className="absolute top-full right-4 left-4 mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-neutral-200/60 shadow-2xl md:hidden"
                    >
                        <nav className="p-3 space-y-1">
                            <a
                                onClick={() => {
                                    scrollToId("previous-work", 100, { duration: 1 });
                                    closeMenu();
                                }}
                                className="block px-4 py-3 rounded-xl text-sm font-medium text-black hover:bg-neutral-100/80 transition-colors"
                                href="/#previous-work"
                            >
                                Work
                            </a>

                            <a
                                onClick={() => {
                                    scrollToId("pricing", 55, { duration: 1 });
                                    closeMenu();
                                }}
                                className="block px-4 py-3 rounded-xl text-sm font-medium text-black hover:bg-neutral-100/80 transition-colors"
                                href="/#pricing"
                            >
                                Pricing
                            </a>

                            <div className="pt-2 border-t border-neutral-100">
                                <a
                                    onClick={() => {
                                        scrollToId("calendar", 50, { duration: 1 });
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
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}




