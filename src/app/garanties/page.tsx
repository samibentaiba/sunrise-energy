"use client";

import Hero from "@/components/pages/garanties/Hero";
import Guarantees from "@/components/pages/garanties/Guarantees";
import Blog from "@/components/pages/garanties/Blog";
import UPS from "@/components/pages/garanties/UPS";

import Proches from "@/components/pages/garanties/Proches";
import Reviews from "@/components/pages/garanties/Reviews";
import FAQ from "@/components/pages/garanties/FAQ";
import About from "@/components/pages/garanties/About";
import Steps from "@/components/pages/garanties/Steps";
import Technology from "@/components/pages/garanties/Technology";
import Companies from "@/components/pages/garanties/Companies";
import Team from "@/components/pages/garanties/Team";
import ShowCase from "@/components/pages/garanties/ShowCase"
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
