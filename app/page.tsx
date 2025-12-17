import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import BackgroundWaves from "@/components/sections/BackgroundWaves";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Faqs from "@/components/sections/FAQs";
import Projects from "@/components/sections/Projects";
import Testimonial from "@/components/sections/Testimonial";
import BookACall from "@/components/sections/BookACall";
import { dd } from "motion/react-client";

export default function Home() {
      return (
            <div className="relative bg-neutral-50 text-neutral-950 overflow-hidden">
                  <BackgroundWaves />
                  <Header />
                  <main className="flex flex-col items-center justify-center relative z-10 px-8  ">
                        <Hero />
                        <Process />
                        <Testimonial />
                        <Projects />
                        <Pricing />
                        <About />
                        <BookACall />
                        <Faqs />
                  </main>
                  <Footer />
            </div>
      );
}

{/* TODO
       
      - LOGO
      - fix header links
      - fix mobile header links
      - connect hero cta buttons
      - restyle PROJECTS nav buttons
      - make PROJECTS carousel scrollable on desktop, probs have to give up infinite scroll
      - edit PRICING features
      - make middle PRICING feature colour inverted for most popular
      - link pricing CTA buttons to calendar
      - PROJECTS descriptions and tags
      - PRICING cards font sizes and colours
      - fill box 3 in ABOUT US
      - Do more FAQS
      - Finalise transitions especially for CTA's 
      - FOOTER links

      THEN DEPLOY
      
      FINAL TODO:

      - go over all elements and do a11y
      - SEO best practices
      - 

      
      */}