'use client'
import { motion } from "motion/react";
import Calendar from "../ui/Calendar";
import Section from "../ui/Section";
import Subheading from "../ui/Subheading";
import { neueHaasDisplay } from "@/app/fonts";

export default function BookACall() {

    return (

        <Section
            id="calendar"
            className="max-w-full px-8 flex flex-col items-center" >
            <motion.div
                className="flex flex-col mb-10 w-full justify-center items-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
                <Subheading
                    className="text-[16px] uppercase tracking-[0.2em] text-neutral-400 font-medium"
                    align="left"
                >
                    Contact Us.
                </Subheading>

                <Subheading
                    className={`${neueHaasDisplay.className} mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-black!`} align="center"
                >
                    Lets work together.
                </Subheading>
            </motion.div>
            <div className="w-full">
                <Calendar />
            </div>
            <motion.div
                className="mb-16 md:mb-20 w-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            >
                <div
                    className="mt-12 text-center"
                    style={{ opacity: 1, willChange: "transform, opacity", transform: "none" }}
                >
                    <p className="text-sm text-neutral-500 mb-6">
                        Or reach us directly:
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Email */}
                        <div className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 transition-all hover:border-neutral-300 hover:shadow-md">
                            <svg
                                className="h-4 w-4 text-neutral-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>

                            <a
                                href="mailto:hello@thirdline.uk"
                                className="text-sm font-medium text-neutral-700 hover:text-black"
                            >
                                hello@thirdline.uk
                            </a>

                            {/* <button
                            type="button"
                            className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 border border-black/10 bg-neutral-100 text-black hover:bg-white focus:ring-black/30 h-7 w-7"
                            aria-live="polite"
                            aria-label="Copy to clipboard"
                            tabIndex={0}
                            style={{ transform: "none" }}
                        >
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 rounded-full bg-black/10"
                                style={{ opacity: 0, transform: "none" }}
                            />

                            <div className="relative grid place-items-center">
                                <span
                                    aria-hidden="true"
                                    className="invisible col-start-1 row-start-1 inline-flex items-center gap-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </span>

                                <span
                                    className="col-start-1 row-start-1 inline-flex items-center gap-2"
                                    style={{ opacity: 1, transform: "none" }}
                                >
                                    <span style={{ transform: "none" }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                        </svg>
                                    </span>
                                </span>
                            </div>
                        </button> */}
                        </div>

                        {/* Phone */}
                        <div className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 transition-all hover:border-neutral-300 hover:shadow-md">
                            <svg
                                className="h-4 w-4 text-neutral-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>

                            <a
                                href="tel:07979983123"
                                className="text-sm font-medium text-neutral-700 hover:text-black"
                            >
                                +44 7979 983 123
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}