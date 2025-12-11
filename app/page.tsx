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

export default function Home() {
      return (
            <div className="relative bg-neutral-50 text-neutral-950 overflow-hidden">
                  <BackgroundWaves />
                  <Header />
                  <main className="flex flex-col items-center justify-center relative z-10 px-8  ">
                        <Hero />
                        <Process />
                        <Testimonial/>
                        <Projects/>
                        <Pricing />
                        <About />
                        <Faqs/>
                  </main>
                  <Footer />
            </div>
      );
}

{/* TODO
          Testimonial message from client
           */}

{/* TODO
           Book a Call
           meeting scheduler using cal.com or alt
           easily book a call.
           or reach us directly at; email, number
           */}