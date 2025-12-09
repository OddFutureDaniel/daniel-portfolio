import { useRef } from "react";
import Carousel, { CarouselHandle } from "@/components/ui/Carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/Card";
import Subheading from "@/components/ui/Subheading";

const slides = [
  <Card key="1" className="h-full flex flex-col overflow-hidden">
    <div className="relative flex-3 w-full bg-neutral-200" />
    <CardContent className="flex-2 flex flex-col gap-3 p-4 md:p-5">
      <Subheading
        align="left"
        className="text-[11px] uppercase tracking-[0.18em] text-neutral-500"
      >
        Shopify · E-commerce · GA4
      </Subheading>
      <CardHeader className="p-0">
        <h3 className="text-base md:text-lg font-medium">Glow IV Drips</h3>
        <CardDescription className="mt-1 text-sm text-neutral-600">
          Custom booking-integrated Shopify build for a London IV clinic.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="2" className="h-full flex flex-col overflow-hidden">
  <div className="relative flex-3 w-full bg-neutral-200" />
  <CardContent className="flex-2 flex flex-col gap-3 p-4 md:p-5">
    <Subheading
      align="left"
      className="text-[11px] uppercase tracking-[0.18em] text-neutral-500"
    >
      Shopify · E-commerce · GA4
    </Subheading>
    <CardHeader className="p-0">
      <h3 className="text-base md:text-lg font-medium">Glow IV Drips</h3>
      <CardDescription className="mt-1 text-sm text-neutral-600">
        Custom booking-integrated Shopify build for a London IV clinic.
      </CardDescription>
    </CardHeader>
  </CardContent>
</Card>,
<Card key="3" className="h-full flex flex-col overflow-hidden">
    <div className="relative flex-3 w-full bg-neutral-200" />
    <CardContent className="flex-2 flex flex-col gap-3 p-4 md:p-5">
      <Subheading
        align="left"
        className="text-[11px] uppercase tracking-[0.18em] text-neutral-500"
      >
        Shopify · E-commerce · GA4
      </Subheading>
      <CardHeader className="p-0">
        <h3 className="text-base md:text-lg font-medium">Glow IV Drips</h3>
        <CardDescription className="mt-1 text-sm text-neutral-600">
          Custom booking-integrated Shopify build for a London IV clinic.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="4" className="h-full flex flex-col overflow-hidden">
  <div className="relative flex-3 w-full bg-neutral-200" />
  <CardContent className="flex-2 flex flex-col gap-3 p-4 md:p-5">
    <Subheading
      align="left"
      className="text-[11px] uppercase tracking-[0.18em] text-neutral-500"
    >
      Shopify · E-commerce · GA4
    </Subheading>
    <CardHeader className="p-0">
      <h3 className="text-base md:text-lg font-medium">Glow IV Drips</h3>
      <CardDescription className="mt-1 text-sm text-neutral-600">
        Custom booking-integrated Shopify build for a London IV clinic.
      </CardDescription>
    </CardHeader>
  </CardContent>
</Card>,
<Card key="5" className="h-full flex flex-col overflow-hidden">
    <div className="relative flex-3 w-full bg-neutral-200" />
    <CardContent className="flex-2 flex flex-col gap-3 p-4 md:p-5">
      <Subheading
        align="left"
        className="text-[11px] uppercase tracking-[0.18em] text-neutral-500"
      >
        Shopify · E-commerce · GA4
      </Subheading>
      <CardHeader className="p-0">
        <h3 className="text-base md:text-lg font-medium">Glow IV Drips</h3>
        <CardDescription className="mt-1 text-sm text-neutral-600">
          Custom booking-integrated Shopify build for a London IV clinic.
        </CardDescription>
      </CardHeader>
    </CardContent>
  </Card>,
  <Card key="6" className="h-full flex flex-col overflow-hidden">
  <div className="relative flex-3 w-full bg-neutral-200" />
  <CardContent className="flex-2 flex flex-col gap-3 p-4 md:p-5">
    <Subheading
      align="left"
      className="text-[11px] uppercase tracking-[0.18em] text-neutral-500"
    >
      Shopify · E-commerce · GA4
    </Subheading>
    <CardHeader className="p-0">
      <h3 className="text-base md:text-lg font-medium">Glow IV Drips</h3>
      <CardDescription className="mt-1 text-sm text-neutral-600">
        Custom booking-integrated Shopify build for a London IV clinic.
      </CardDescription>
    </CardHeader>
  </CardContent>
</Card>,

];

export default function Projects() {
  const carouselRef = useRef<CarouselHandle | null>(null);

  const handlePrev = () => carouselRef.current?.prev();
  const handleNext = () => carouselRef.current?.next();

  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0 text-left">
            <Subheading align="left">Selected work</Subheading>
            <p className="text-sm text-neutral-600">
              A few recent projects shipped for clients.
            </p>
          </div>
          <div className="flex w-full shrink-0 justify-start gap-2 md:w-auto md:justify-end">
            <button
              type="button"
              onClick={handlePrev}
              className="rounded-full border border-neutral-300 bg-white/80 px-3 py-1 text-xs md:text-sm shadow-sm hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-neutral-400"
              aria-label="Previous slides"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="rounded-full border border-neutral-300 bg-white/80 px-3 py-1 text-xs md:text-sm shadow-sm hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-neutral-400"
              aria-label="Next slides"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 -mx-8 md:-mx-35">
        <Carousel
          ref={carouselRef}
          slides={slides}
          ariaLabel="Selected client projects"
        />
      </div>
    </section>
  );
}