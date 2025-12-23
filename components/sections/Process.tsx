"use client";

import { motion } from "motion/react";
import Subheading from "../ui/Subheading";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/Card";
import Section from "../ui/Section";
import { neueHaasDisplay } from "@/app/fonts";

export default function Process() {
    return (
        <Section
            id="process"
            className="relative min-h-screen bg-neutral-50 max-w-full px-8 pt-2! flex flex-col items-center text-center z-10"
        >

            <motion.div
                className="flex flex-col mb-10 w-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
            >
                <Subheading
                    className="text-[16px] uppercase tracking-[0.2em] text-neutral-400 font-medium"
                    align="left"
                >
                    Process
                </Subheading>

                <Subheading
                    className={`${neueHaasDisplay.className} mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-black!`}
                    align="left"
                >
                    From initiation to execution
                </Subheading>
            </motion.div>


            <div className="flex flex-wrap items-start justify-center gap-4">


                <motion.div
                    className="flex-1 min-w-[345px] h-[500px] max-w-sm"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.00 }}
                >
                    <Card className="h-full p-8">

                        {/* HEADER */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.10 }}
                        >
                            <CardHeader className="flex flex-row gap-4 items-center mb-6">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-600">
                                    1
                                </span>
                                <CardTitle className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                                    Initiation
                                </CardTitle>
                            </CardHeader>
                        </motion.div>

                        {/* DESCRIPTION */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
                        >
                            <CardDescription>
                                <Subheading className="text-[16px] text-neutral-500 leading-relaxed mb-8">
                                    A conversation to define the problem, scope and direction.
                                </Subheading>
                            </CardDescription>
                        </motion.div>

                        {/* CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.26 }}
                        >
                            <CardContent>
                                <div className="rounded-xl bg-neutral-900 overflow-hidden shadow-xl">
                                    <div className="flex items-center gap-2 bg-neutral-800 px-3 py-2 border-b border-white/5">
                                        <div className="flex gap-1.5">
                                            <div className="h-2 w-2 rounded-full bg-red-500/80" />
                                            <div className="h-2 w-2 rounded-full bg-amber-500/80" />
                                            <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
                                        </div>

                                        <div className="flex items-center gap-1.5 ml-auto">
                                            <span className="relative flex h-2 w-2">
                                                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 animate-ping opacity-75 will-change-transform" />
                                                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                                            </span>
                                            <span className="text-[9px] text-white/50 font-medium">REC</span>
                                        </div>
                                    </div>

                                    <div className="p-2 grid grid-cols-2 gap-2">
                                        <div className="aspect-video rounded bg-neutral-800 flex items-center justify-center">
                                            <div className="h-8 w-8 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] font-medium text-white/60">
                                                You
                                            </div>
                                        </div>

                                        <div className="aspect-video rounded bg-neutral-800 flex items-center justify-center ring-1 ring-emerald-500/30">
                                            <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-[10px] font-bold text-white border border-emerald-500/40">
                                                DR
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </motion.div>

                    </Card>
                </motion.div>


                <motion.div
                    className="flex-1 min-w-[345px] h-[500px] max-w-sm"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.10 }}
                >
                    <Card className="h-full p-8">

                        {/* HEADER */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                        >
                            <CardHeader className="flex flex-row gap-4 items-center mb-6">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-600">
                                    2
                                </span>
                                <CardTitle className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                                    Direction
                                </CardTitle>
                            </CardHeader>
                        </motion.div>

                        {/* DESCRIPTION */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.20 }}
                        >
                            <CardDescription>
                                <Subheading className="text-[16px] text-neutral-500 leading-relaxed mb-8">
                                    Clear decisions, shared context and real-time communication throughout.
                                </Subheading>
                            </CardDescription>
                        </motion.div>

                        {/* CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
                        >
                            <CardContent>
                                <div className="rounded-xl bg-white border border-neutral-200 overflow-hidden shadow-lg">
                                    <div className="flex items-center gap-2 bg-neutral-50 px-3 py-2.5 border-b border-neutral-100">
                                        <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-[8px] font-bold text-white">
                                            DR
                                        </div>

                                        <span className="text-xs font-medium text-neutral-700">
                                            Daniel Rogerson
                                        </span>

                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 ml-auto" />
                                    </div>

                                    <div className="p-3 space-y-2.5 bg-white">
                                        <div className="flex">
                                            <div className="rounded-2xl rounded-tl-sm bg-neutral-100 px-3 py-2 text-[11px] text-neutral-700">
                                                Hero section is live. Thoughts?
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <div className="rounded-2xl rounded-tr-sm bg-black px-3 py-2 text-[11px] text-white">
                                                Perfect. Ship it.
                                            </div>
                                        </div>

                                        {/* TYPING DOTS */}
                                        <div className="flex">
                                            <div className="inline-flex items-center gap-1 rounded-2xl rounded-tl-sm bg-neutral-100 px-2.5 py-1.5">
                                                <div className="h-1 w-1 rounded-full bg-black/40 motion-safe:animate-[typing-dot_1s_infinite_ease-in-out] motion-safe:[animation-delay:-0.3s]" />
                                                <div className="h-1 w-1 rounded-full bg-black/40 motion-safe:animate-[typing-dot_1s_infinite_ease-in-out] motion-safe:[animation-delay:-0.15s]" />
                                                <div className="h-1 w-1 rounded-full bg-black/40 motion-safe:animate-[typing-dot_1s_infinite_ease-in-out]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </motion.div>

                    </Card>
                </motion.div>


                <motion.div
                    className="flex-1 min-w-[345px] h-[500px] max-w-sm"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.20 }}
                >
                    <Card className="h-full p-8">

                        {/* HEADER */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                        >
                            <CardHeader className="flex flex-row gap-4 items-center mb-6">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-600">
                                    3
                                </span>
                                <CardTitle className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                                    Execution
                                </CardTitle>
                            </CardHeader>
                        </motion.div>

                        {/* DESCRIPTION */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.20 }}
                        >
                            <CardDescription>
                                <Subheading className="text-[16px] text-neutral-500 leading-relaxed mb-8">
                                    Design, build and deployment. Most projects ship within 72 hours.
                                </Subheading>
                            </CardDescription>
                        </motion.div>

                        {/* CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
                        >
                            <CardContent>
                                <div className="rounded-xl bg-neutral-50 border border-neutral-200 overflow-hidden shadow-lg">

                                    <div className="flex items-center gap-2 bg-white px-3 py-2 border-b border-neutral-100">
                                        <div className="flex gap-1.5">
                                            <div className="h-2 w-2 rounded-full bg-neutral-200" />
                                            <div className="h-2 w-2 rounded-full bg-neutral-200" />
                                            <div className="h-2 w-2 rounded-full bg-neutral-200" />
                                        </div>

                                        <div className="flex-1 flex justify-center">
                                            <div className="flex items-center gap-1.5 rounded bg-neutral-100 px-3 py-1">
                                                <svg
                                                    className="h-2.5 w-2.5 text-emerald-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                                </svg>
                                                <span className="text-[9px] text-neutral-500 font-medium">
                                                    yoursite.com
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-3 relative">
                                        <div className="absolute top-0 left-0 z-10 pointer-events-none cursor-anim">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="drop-shadow-sm"
                                            >
                                                <path
                                                    d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                                                    fill="black"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>

                                        <div className="rounded bg-white border border-neutral-100 p-3">
                                            <div className="rounded bg-white border border-neutral-100 p-3">

                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="h-2 w-10 rounded bg-neutral-200" />
                                                    <div className="h-3 w-8 rounded bg-black" />
                                                </div>

                                                <motion.div
                                                    className="space-y-1.5 mb-3"
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                >
                                                    {/* Line 1 */}
                                                    <motion.div
                                                        className="h-1.5 rounded bg-neutral-200 w-full origin-left"
                                                        variants={{
                                                            hidden: { scaleX: 0 },
                                                            visible: { scaleX: 1 },
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            ease: "easeOut",
                                                            delay: 0.05,
                                                        }}
                                                    />

                                                    {/* Line 2 */}
                                                    <motion.div
                                                        className="h-1.5 rounded bg-neutral-200 w-3/4 origin-left"
                                                        variants={{
                                                            hidden: { scaleX: 0 },
                                                            visible: { scaleX: 1 },
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            ease: "easeOut",
                                                            delay: 0.12,
                                                        }}
                                                    />

                                                    {/* Line 3 */}
                                                    <motion.div
                                                        className="h-1.5 rounded bg-neutral-200 w-[40%] origin-left"
                                                        variants={{
                                                            hidden: { scaleX: 0 },
                                                            visible: { scaleX: 1 },
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            ease: "easeOut",
                                                            delay: 0.19,
                                                        }}
                                                    />
                                                </motion.div>

                                                <div className="grid grid-cols-3 gap-1.5 mt-3">
                                                    <div className="aspect-square rounded bg-neutral-50" />
                                                    <div className="aspect-square rounded bg-neutral-50" />
                                                    <div className="aspect-square rounded bg-neutral-50" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="bg-emerald-50/50 border-t border-emerald-100/50 px-3 py-1.5 flex items-center justify-between overflow-hidden">
                                            <div className="flex items-center gap-1.5">
                                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                <span className="text-[8px] font-medium text-emerald-700">
                                                    Deployed
                                                </span>
                                            </div>

                                            <span className="text-[8px] text-emerald-600/70">
                                                Just now
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </CardContent>
                        </motion.div>

                    </Card>
                </motion.div>

            </div>
        </Section>
    );
}