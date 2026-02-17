'use client';

import { useState } from 'react';
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import IndexTable from "@/components/sections/IndexTable";
import EnterAnimation from "@/components/EnterAnimation";

export default function Page() {
  const [showAnimation, setShowAnimation] = useState(true);

  if (showAnimation) {
    return <EnterAnimation onComplete={() => setShowAnimation(false)} />;
  }

  return (
    <section className="leading-tight">
      <Header />
      <IndexTable />
      <About />
      <Footer />
    </section>
  );
}