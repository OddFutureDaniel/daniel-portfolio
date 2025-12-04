import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="flex flex-col items-center text-center">
        {/* 
        TODO:
        status bar: available for slots/ available for q1 2026
        <div></div> */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Websites that convert. Shopify builds that perform.
          </h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-xl">
            Your site, live in 72 hours. Don't wait for greatness.
          </p>
          {/* 
          TODO
          CTA buttons:
          > Start a project
           > See our Work */}
        </section>
      </div>

      {/* TODO
      Trusted by {Logos of client businesses} */}

      {/* TODO
      how we work
      3 cards
      1. DISCOVERY - quick call to discuss requirements
      2. COLLABORATION - Real time updates via dedicated slack channel
      3. DELIVERY - design, build and deploy, most projects shipped in 72 hours
      */}
      
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
          Pricing
          3 card pricing like subscription model cards
          each card, Starter, professional, enterprise, listed features, 
          one listed as most popular
          no hidden fees, you own the code, 
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
    </main>
  )
}

