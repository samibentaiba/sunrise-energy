"use client";

import Hero from "@/components/pages/avis-clients/Hero";
import Minimum from "@/components/pages/avis-clients/Minimum";
import Blog from "@/components/modules/Blog";
import Proches from "@/components/modules/Proches";
import Reviews from "@/components/modules/Reviews";
import FAQ from "@/components/modules/FAQ";
import { ReactElement } from "react";
export default function AvisClients():ReactElement {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Hero
        title="Des garanties uniques des engagements forts"
        description="Afin de vous assurer une sérénité qui dure dans le temps, vous bénéficiez de garanties étendues exclusives Sunrise pour votre installation sur-mesure de panneaux solaires en autoconsommation"
        fButtonText="Je demande un RDV avec un conseiller"
        sButtonText="Parrainer un proche"
        backgroundImage="/images/pages/garanties/Hero.jpeg"
      />

      <Blog />
      <Proches />
      <Reviews />
      <Minimum />
      <FAQ />
    </div>
  );
}
