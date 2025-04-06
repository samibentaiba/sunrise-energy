"use client";

import Hero from "@/components/modules/Hero";
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
      
      <Hero
        title="Le photovoltaïque au juste prix, sans compromis sur la qualité"
        description="Avec les offres SunVolt, vous bénéficiez du prix le plus juste pour un matériel de qualité et des garanties étendues"
        buttonText="Je demande un RDV avec un conseiller"
        backgroundImage="/images/pages/panneaux-solaires/Hero.jpeg"
      />
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
