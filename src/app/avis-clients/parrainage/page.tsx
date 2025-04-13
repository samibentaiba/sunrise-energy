"use client";

import Hero from "@/components/pages/avis-clients/parrainage/Hero";
import CTA from "@/components/pages/avis-clients/parrainage/CTA";
import { ReactElement } from "react";
export default function AvisClients(): ReactElement {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Hero
        title="Des garanties uniques des engagements forts"
        description="Afin de vous assurer une sérénité qui dure dans le temps, vous bénéficiez de garanties étendues exclusives Sunrise pour votre installation sur-mesure de panneaux solaires en autoconsommation"
        backgroundImage="/images/pages/garanties/Hero.jpeg"
      />

      <CTA />
    </div>
  );
}
