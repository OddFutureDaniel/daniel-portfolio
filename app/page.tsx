"use client";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import BackgroundWaves from "@/components/sections/BackgroundWaves";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import { motion } from "motion/react"
import Header from "@/components/sections/Header";
import Faqs from "@/components/sections/FAQs";


export default function Home() {
      return (
            <div className="relative bg-neutral-50 text-neutral-950 overflow-hidden">
                  <BackgroundWaves />
                  <Header />
                  <main className="flex flex-col items-center justify-center relative z-10 px-8 md:px-35 ">
                        <Hero />

                        <Process />
                        <motion.ul animate={{ rotate: 360 }} />
                        <Pricing />
                        <About />
                        <Faqs/>
                  </main>
                  <Footer />
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
           Book a Call
           meeting scheduler using cal.com or alt
           easily book a call.
           or reach us directly at; email, number
           */}