import Subheading from "../ui/Subheading";
import Section from "./Section";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

export default function About() {
    return (
        <Section
            id="about"
            className="relative min-h-screen max-w-full px-8  flex flex-col items-center text-center z-10">
            <div className="mb-16 md:mb-20 w-full">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <Subheading className="uppercase tracking-[0.2em] mb-2" align="left">about us</Subheading>
                        <Subheading size="lg" align="left">Small Team <br /> Big Results
                        </Subheading>
                    </div>
                    <p>We design what we build, and we build what ships.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-7 bg-neutral-100 rounded-2xl p-8 md:p-10">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-75 will-change-transform">
                            </span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500">
                            </span>
                        </span>
                        <span className="text-xs font-medium text-neutral-500">Accepting new projects
                        </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Who we are
                    </h3>
                    <div className="space-y-4 text-neutral-600 leading-relaxed">
                        <p>We're a small team of designers and developers who care about getting things right. Between us, we've spent years building sites for artists, startups, and brands that need to make an impression.</p>
                        <p>Portfolios, product sites, and high-conversion landers for SaaS and iOS apps. Built with intention. Delivered fast.</p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">Speed without rush
                        </span>
                        <span className="rounded-full bg-white border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">Taste over trends
                        </span>
                        <span className="rounded-full bg-white border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">A11y by default
                        </span>
                    </div>
                </div>
                <div className="md:col-span-5 bg-black rounded-2xl p-8 md:p-10 text-white">
                    <Subheading className="text-white/60" align="left">By the numbers</Subheading>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"><div>
                        <div className="text-3xl md:text-4xl font-semibold tracking-tight"><AnimatedNumber end={4} duration={3}/>+
                        </div>
                        <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">Years Exp.
                        </div>
                    </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-semibold tracking-tight"><AnimatedNumber end={72} duration={5}/>
                                <span className="text-sm font-normal text-white/40">hr
                                </span>
                            </div>
                            <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">Turnaround
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-semibold tracking-tight"><AnimatedNumber end={10} duration={4}/>+
                            </div>
                            <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">Projects
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-semibold tracking-tight"><AnimatedNumber end={90} duration={4}/>
                            </div>
                            <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">Lighthouse
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-5 bg-white rounded-2xl p-8 border border-neutral-200">
                    3</div>
                <div className="md:col-span-7 bg-[#1e1e1e] rounded-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#252526] border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-[#ff5f57]">
                                </div>
                                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]">

                                </div>
                                <div className="h-3 w-3 rounded-full bg-[#28ca42]">
                                </div>
                            </div>
                            <span className="ml-3 text-[11px] font-mono text-white/40">stack.config.tsx
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-75 will-change-transform">
                                </span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500">
                                </span>
                            </span>
                            <span className="text-[10px] text-emerald-400 font-mono">prod ready
                            </span>
                        </div>
                    </div>
                    <div className="p-5 font-mono text-[13px] leading-relaxed text-left">
                        <div className="text-[#569cd6]">const 
                            <span className="text-[#4fc1ff]"> stack
                            </span> =
                            <span className="text-[#dcdcaa]">
                            </span>
                        </div>
                        <div className="pl-4 mt-1">
                            <span className="text-[#9cdcfe]">frontend
                            </span>
                            <span className="text-white/60">:
                            </span>
                            <span className="text-[#ce9178]">["Next.js", "React", "TypeScript"]
                            </span>
                            <span className="text-white/60">,
                            </span>
                        </div>
                        <div className="pl-4">
                            <span className="text-[#9cdcfe]">styling
                            </span>
                            <span className="text-white/60">:
                            </span>
                            <span className="text-[#ce9178]">["Tailwind", "Motion.dev"]
                            </span>
                            <span className="text-white/60">,
                            </span>
                        </div>
                        <div className="pl-4">
                            <span className="text-[#9cdcfe]">design
                            </span>
                            <span className="text-white/60">:
                            </span>
                            <span className="text-[#ce9178]">"Figma"
                            </span>
                            <span className="text-white/60">,
                            </span>
                        </div>
                        <div className="pl-4">
                            <span className="text-[#9cdcfe]">deploy
                            </span>
                            <span className="text-white/60">:
                            </span>
                            <span className="text-[#ce9178]">"Vercel"
                            </span>
                        </div>
                        <div className="text-[#dcdcaa]">
                        </div>
                        <div className="mt-3 flex items-center gap-1">
                            <span className="text-[#6a9955]">// Ship fast, iterate faster
                            </span>
                            <span className="w-2 h-4 bg-white/70 animate-pulse">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}