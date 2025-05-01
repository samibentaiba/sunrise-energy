"use client";

import Hero from "@/components/pages/avis-clients/parrainage/Hero";
import CTA from "@/components/pages/avis-clients/parrainage/CTA";
import Steps from "@/components/pages/avis-clients/parrainage/Steps";
import ReferralForm from "@/components/pages/avis-clients/parrainage/ReferralForm";
import Reviews from "@/components/modules/Reviews";
import { ReactElement } from "react";
export default function AvisClients(): ReactElement {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Hero
        title="Parrainez l’un de vos proches et gagnez minimum 500€"
        backgroundImage="/images/pages/garanties/Hero.jpeg"
      />

      <CTA />
      <Steps />
      <ReferralForm />
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Plus de 3 000 clients heureux partout en France. Merci à vous !
        </h2>
      </div>
      <Reviews />
    </div>
  );
}
