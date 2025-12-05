import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import BackgroundWaves from "@/components/sections/BackgroundWaves";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="relative bg-neutral-50 text-neutral-950 overflow-hidden">
      <BackgroundWaves />
      <main className="flex flex-col items-center justify-center relative z-10 px-8 md:px-35 ">
        <Hero />
        <Process />
        <Pricing />
        <About />
      </main>
    </div>
  );
}

{/* TODO
      Trusted by {Logos of client businesses} */}

{/* TODO
      Selected work
      Carousel of project cards worked on.
      touch to slide and click arrow nav
      each card opens a lightbox 
      Lightbox: title, case study description, project image gallery, optional link to live site
      */}

{/* TODO
        Capabiltiies 
        1. fast shipped sites
        2. pixel perfect design
        card showing stats like avg turnaround time, lighthouse score, iterations,
        */}

{/* TODO
          Testimonial message from client
           */}

{/* TODO
           About Us
           4 cards
           1. small bio
           2. by the numbers eg. 4 years experience 72hr turnaround, 99 lighthouse, 10+ projects
           3. the Team Daniel Rogerson - Lead Developer
           4. code sample of code stack used in a const stack = [frontend: ["Next.js", "React", "TypeScript"]]
           */}

{/* TODO
           Book a Call
           meeting scheduler using cal.com or alt
           easily book a call.
           or reach us directly at; email, number
           */}

{/* TODO
           Footer
           logo, slogan
           Services, company Legal
            */}
