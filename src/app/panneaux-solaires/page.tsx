"use client";

import Hero from "@/components/pages/panneaux-solaires/Hero";
import Pricing from "@/components/pages/panneaux-solaires/Pricing";
import Guarantees from "@/components/pages/panneaux-solaires/Guarantees";
import Installation from "@/components/pages/panneaux-solaires/Installation";
import Protection from "@/components/pages/panneaux-solaires/Protection";
import Blog from "@/components/modules/Blog";
import Proches from "@/components/modules/Proches";
import Reviews from "@/components/modules/Reviews";
import FAQ from "@/components/modules/FAQ";
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
