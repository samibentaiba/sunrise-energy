"use client";

import Hero from "@/components/pages/panneaux-solaires/Hero";
import Pricing from "@/components/pages/panneaux-solaires/Pricing";
import Guarantees from "@/components/pages/panneaux-solaires/Guarantees";
import Blog from "@/components/pages/panneaux-solaires/Blog";
import Installation from "@/components/pages/panneaux-solaires/Installation";
import Protection from "@/components/pages/panneaux-solaires/Protection";
import Proches from "@/components/pages/panneaux-solaires/Proches";
import Reviews from "@/components/pages/panneaux-solaires/Reviews";
import FAQ from "@/components/pages/panneaux-solaires/FAQ";

export default function PanneuxSolaires() {

  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Hero />
      <Pricing />
      <Guarantees />
      <Installation />
      <Protection />
      <Blog />
      <Proches />
      <Reviews />
      <FAQ />
    </div>
  );
}
