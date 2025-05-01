"use client";

import Hero from "@/components/pages/installateur-photovoltaique/comparateur-devis-panneaux-solaires/Hero";
import Features from "@/components/pages/home/Features";
import Trust from "@/components/pages/home/Trust";
import CTA from "@/components/pages/home/CTA";
import Pricing from "@/components/pages/home/Pricing";
import Guarantees from "@/components/pages/home/Guarantees";
import Blog from "@/components/pages/home/Blog";
import About from "@/components/pages/home/About";
import Numbers from "@/components/pages/home/Numbers";
export default function Home() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] flex flex-col">
      <Hero />
      <Features />
      <Trust />
      <CTA />
      <Pricing />
      <Guarantees />
      <About />
      <Numbers />
      <Blog />
    </div>
  );
}
 