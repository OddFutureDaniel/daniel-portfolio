import Button from "../ui/Button";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative min-h-screen max-w-5xl mx-auto px-6 py-50 flex flex-col items-center text-center z-10"
    >
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
        Websites that convert. Shopify builds that perform.
      </h1>

      <p className="mt-4 text-lg text-neutral-700 max-w-xl">
        Your site, live in 72 hours. Don&apos;t wait for greatness.
      </p>

      <div className="flex flex-row gap-4 mt-8">
        <Button>Start a project</Button>
        <Button variant="secondary">See our work</Button>
      </div>
    </Section>
  );
}