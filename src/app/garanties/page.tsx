"use client";

import Hero from "@/components/modules/Hero";
import Guarantees from "@/components/pages/garanties/Guarantees";
import About from "@/components/pages/garanties/About";
import Steps from "@/components/pages/garanties/Steps";
import Team from "@/components/pages/garanties/Team";
import ShowCase from "@/components/pages/garanties/ShowCase";
import Blog from "@/components/modules/Blog";
import Proches from "@/components/modules/Proches";
import Reviews from "@/components/modules/Reviews";
import FAQ from "@/components/modules/FAQ";
export default function Garanties() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Hero
        title="Des garanties uniques des engagements forts"
        description="Afin de vous assurer une sérénité qui dure dans le temps, vous bénéficiez de garanties étendues exclusives SunVolt pour votre installation sur-mesure de panneaux solaires en autoconsommation"
        buttonText="Je demande un RDV avec un conseiller"
        backgroundImage="/images/pages/garanties/Hero.jpeg"
      />

      <About />
      <Steps />
      <Guarantees />
      <ShowCase />
      <Team />
      <Blog />
      <Proches />
      <Reviews />
      <FAQ />
    </div>
  );
}
