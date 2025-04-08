"use client";

import Hero from "@/components/modules/Hero";
import Trust from "@/components/pages/qui-sommes-nous/Trust";
import About from "@/components/pages/qui-sommes-nous/About";
import Touch from "@/components/pages/qui-sommes-nous/Touch";
import QA from "@/components/pages/qui-sommes-nous/QA"
import CTA from "@/components/pages/qui-sommes-nous/CTA";
export default function QuiSommesNous() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Hero
        title="Des garanties uniques des engagements forts"
        description="Afin de vous assurer une sérénité qui dure dans le temps, vous bénéficiez de garanties étendues exclusives Sunrise pour votre installation sur-mesure de panneaux solaires en autoconsommation"
        buttonText="Je demande un RDV avec un conseiller"
        backgroundImage="/images/pages/garanties/Hero.jpeg"
      />
      <About />
      <Touch />
      <Trust />
      <QA />
      <CTA />
    </div>
  );
}
