"use client";

import Hero from "@/app/_components/Hero";
import Features from "@/app/_components/Features";
import Trust from "@/app/_components/Trust";
import CTA from "@/app/_components/CTA";
import Pricing from "@/app/_components/Pricing";
import AdditionalGuarantees from "@/app/_components/AdditionalGuarantees";
import Blog from "@/app/_components/Blog";
import AboutSunVolt from "@/app/_components/CompanyInfo/AboutSunVolt";
import Numbers from "@/app/_components/CompanyInfo/Numbers";
export default function Home() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] flex flex-col">
      <Hero />
      <Features />
      <Trust />
      <CTA />
      <Pricing />
      <AdditionalGuarantees />
      <AboutSunVolt />
      <Numbers />
      <Blog />
    </div>
  );
}
