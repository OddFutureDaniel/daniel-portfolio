import Button from "../ui/Button";
import AnimatedSvg from "./AnimatedWaveBackground"; 
import Section from "./Section";

export default function Hero() {
    return (
        <div className="relative min-h-screen bg-neutral-50 text-neutral-950 overflow-hidden">

            {/* ANIMATED SVG BACKGROUND */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <AnimatedSvg />
            </div>

            {/* OPTIONAL: KEEP YOUR GRID OVERLAY ON TOP OF SVG */}
            {/* <div
                className="absolute inset-0 opacity-[0.015] -z-5"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #000 2px, transparent 1px), linear-gradient(to bottom, #000 2px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            /> */}

            <Section id="hero" className="relative max-w-5xl mx-auto px-6 py-24 z-10">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                        Websites that convert. Shopify builds that perform.
                    </h1>
                    <p className="mt-4 text-lg text-neutral-350 max-w-xl">
                        Your site, live in 72 hours. Don't wait for greatness.
                    </p>

                    <div className="flex flex-row gap-4 mt-8"> 
                        <Button>Start a project</Button>
                        <Button variant="secondary">See our work</Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}