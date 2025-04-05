"use client";

import Hero from "@/components/pages/garanties/Hero";
import Guarantees from "@/components/pages/garanties/Guarantees";
import About from "@/components/pages/garanties/About";
import Steps from "@/components/pages/garanties/Steps";
import Team from "@/components/pages/garanties/Team";
import ShowCase from "@/components/pages/garanties/ShowCase"
import Blog from "@/components/modules/Blog";
import Proches from "@/components/modules/Proches";
import Reviews from "@/components/modules/Reviews";
import FAQ from "@/components/modules/FAQ";
export default function PanneuxSolaires() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Hero />
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
