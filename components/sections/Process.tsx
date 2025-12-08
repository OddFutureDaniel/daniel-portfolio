import Subheading from "../ui/Subheading"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import Section from "./Section";
import { useRef } from "react";
export default function Process() {
    const cursorRef = useRef<HTMLDivElement>(null);
    return (
        <Section id="process"
            className="relative min-h-screen max-w-full px-8  flex flex-col items-center text-center z-10">
            <Subheading align="left">How We Work</Subheading>
            <Subheading align="left" size="lg">A simple process, <br /> exceptional results</Subheading>
            <div className="flex flex-wrap items-start justify-center gap-4">
            <Card className="flex-1 min-w-[345px] max-w-sm p-8">
                    <CardHeader>
                        <CardTitle>Delivery</CardTitle>
                        <CardContent >
                            <Subheading className="text-sm text-neutral-500 leading-relaxed mb-8">Design, build, and deploy. Most projects go live in under 72 hours
                            </Subheading>
                    </CardContent>
                        <CardDescription>
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
                                    {/* floating cursor / pointer */}
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

                                    {/* rest of your card content */}
                                    <div className="rounded bg-white border border-neutral-100 p-3">
                                        <div className="rounded bg-white border border-neutral-100 p-3">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="h-2 w-10 rounded bg-neutral-200" />
                                                <div className="h-3 w-8 rounded bg-black" />
                                            </div>

                                            <div className="space-y-1.5 mb-3">
                                                <div className="h-1.5 rounded bg-neutral-200 w-full" />
                                                <div className="h-1.5 rounded bg-neutral-200 w-3/4" />
                                                <div className="h-1.5 rounded bg-neutral-200 w-[40%]" />
                                            </div>

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



                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="flex-1 min-w-[345px] max-w-sm p-8">
                    <CardHeader>
                        <CardTitle>Delivery</CardTitle>
                        <CardContent >
                            <Subheading className="text-sm text-neutral-500 leading-relaxed mb-8">Design, build, and deploy. Most projects go live in under 72 hours
                            </Subheading>
                    </CardContent>
                        <CardDescription>
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
                                    {/* floating cursor / pointer */}
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

                                    {/* rest of your card content */}
                                    <div className="rounded bg-white border border-neutral-100 p-3">
                                        <div className="rounded bg-white border border-neutral-100 p-3">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="h-2 w-10 rounded bg-neutral-200" />
                                                <div className="h-3 w-8 rounded bg-black" />
                                            </div>

                                            <div className="space-y-1.5 mb-3">
                                                <div className="h-1.5 rounded bg-neutral-200 w-full" />
                                                <div className="h-1.5 rounded bg-neutral-200 w-3/4" />
                                                <div className="h-1.5 rounded bg-neutral-200 w-[40%]" />
                                            </div>

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



                        </CardDescription>
                    </CardHeader>
                </Card>
                
                <Card className="flex-1 min-w-[345px] max-w-sm p-8">
                    <CardHeader>
                        <CardTitle>Delivery</CardTitle>
                        <CardContent >
                            <Subheading className="text-sm text-neutral-500 leading-relaxed mb-8">Design, build, and deploy. Most projects go live in under 72 hours
                            </Subheading>
                    </CardContent>
                        <CardDescription>
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
                                    {/* floating cursor / pointer */}
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

                                    {/* rest of your card content */}
                                    <div className="rounded bg-white border border-neutral-100 p-3">
                                        <div className="rounded bg-white border border-neutral-100 p-3">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="h-2 w-10 rounded bg-neutral-200" />
                                                <div className="h-3 w-8 rounded bg-black" />
                                            </div>

                                            <div className="space-y-1.5 mb-3">
                                                <div className="h-1.5 rounded bg-neutral-200 w-full" />
                                                <div className="h-1.5 rounded bg-neutral-200 w-3/4" />
                                                <div className="h-1.5 rounded bg-neutral-200 w-[40%]" />
                                            </div>

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



                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>

        </Section >

    );
}