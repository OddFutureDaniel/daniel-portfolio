'use client'
import { motion } from "motion/react";
import { DateDisplay } from "../ui/DateDisplay";
import { GridContainer } from "../ui/GridContainer";
import Image from 'next/image';

const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.querySelector("#about")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Header() {
  return (
    <header className="mx-10! mt-4!">
      <GridContainer>
        <div className="col-span-4 mobile:col-span-7">
          <Image
            src="/thirdlinelogoblack.svg"
            alt="Third Line Logo"
            width={250}
            height={100}
            style={{ height: "auto", minWidth:150 }}
          />
        </div>

        <div className="col-span-4 text-center mobile:hidden">
          <DateDisplay />
        </div>

        <motion.a
          className="col-span-4 mobile:col-span-5 uppercase text-right"
          href="#about"
          onClick={scrollToAbout}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          about
        </motion.a>
      </GridContainer>
    </header>
  );
}