import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Faqs from "@/components/sections/FAQs";
import Projects from "@/components/sections/Projects";
import Testimonial from "@/components/sections/Testimonial";
import BookACall from "@/components/sections/BookACall";

export default function Home() {
      return (
            <div className="relative bg-neutral-50 text-neutral-950 overflow-hidden">
                  {/* <BackgroundWaves /> */}
                  <Header />
                  <main className="flex flex-col items-center justify-center relative z-10  ">
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

      - Finalise transitions especially for CTA's 
      - privacy policy

      THEN DEPLOY
      
      FINAL TODO:

      - go over all elements and do a11y
      - SEO best practices
      - 

      
      */}