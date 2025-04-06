"use client";

import Hero from "@/components/modules/Hero";
import SubSide from "@/components/pages/aides/SubSide";
import Steps from "@/components/pages/aides/Steps"
import TVA from "@/components/pages/aides/TVA";
import About from "@/components/pages/aides/About";
import CTA from "@/components/pages/aides/CTA"
export default function Aides() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Hero
        title="Des garanties uniques des engagements forts"
        description="Afin de vous assurer une sérénité qui dure dans le temps, vous bénéficiez de garanties étendues exclusives SunVolt pour votre installation sur-mesure de panneaux solaires en autoconsommation"
        buttonText="Je demande un RDV avec un conseiller"
        backgroundImage="/images/pages/garanties/Hero.jpeg"
      />
      <SubSide />
      <Steps />
      <TVA />
      <About />
      <CTA />
    </div>
  );
}
