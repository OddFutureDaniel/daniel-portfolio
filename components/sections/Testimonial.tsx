import Image from "next/image";

export default function Testimonial() {
    return (
       
        <section className="py-16 border-y border-neutral-200 w-full items-center bg-neutral-50 -mx-8">
           
            <div className="mx-auto max-w-6xl px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium">
                        Trusted by
                    </p>

                    <div className="flex  justify-center items-center gap-12 md:gap-16">
                        <Image
                            alt="Jaffa Saba"
                            loading="lazy"
                            width={120}
                            height={40}
                            decoding="async"
                            className="invert h-10 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity grayscale"
                            src="/projects/JaffaSabaLogo.avif"
                        />

                        <Image
                            alt="SkynMaps"
                            loading="lazy"
                            width={120}
                            height={40}
                            decoding="async"
                            className="invert h-10 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity grayscale"
                            src="/projects/SkynMapsLogo.webp"
                        />

                        <Image
                            alt="730Carlina"
                            loading="lazy"
                            width={120}
                            height={40}
                            decoding="async"
                            className="h-20 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity grayscale"
                            src="/projects/730CarlinaLogo.webp"
                        />

                        <Image
                            alt="Glow IV Drips"
                            loading="lazy"
                            width={120}
                            height={40}
                            decoding="async"
                            className="h-20 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity grayscale"
                            src="/projects/GlowIvDripsLogo.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}