import { useRef } from "react";
import Carousel, { CarouselHandle } from "@/components/ui/Carousel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import Subheading from "@/components/ui/Subheading";

const slides = [
  <Card key="1">
    <CardHeader>
      <CardTitle>Fast Shopify Builds</CardTitle>
    </CardHeader>
    <CardContent>Your store, live in 72 hours.</CardContent>
  </Card>,
  <Card key="2">
    <CardHeader>
      <CardTitle>Pixel-Perfect Design</CardTitle>
    </CardHeader>
    <CardContent>Layouts that feel considered.</CardContent>
  </Card>,
  <Card key="3">
    <CardHeader>
      <CardTitle>SEO & Analytics</CardTitle>
    </CardHeader>
    <CardContent>GA4, tracking, and growth insights.</CardContent>
  </Card>,
  <Card key="4">
    <CardHeader>
      <CardTitle>Real-Time Collaboration</CardTitle>
    </CardHeader>
    <CardContent>Slack updates, Figma links, Looms.</CardContent>
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
          <div className="flex w-full flex-shrink-0 justify-start gap-2 md:w-auto md:justify-end">
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