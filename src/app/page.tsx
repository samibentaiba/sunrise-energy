"use client";

import Hero from "@/app/_components/Hero/Hero";
import Features from "@/app/_components/Features/Features";
import Trust from "@/app/_components/Trust";
import CTA from "@/app/_components/CTA/CTA";
import Pricing from "@/app/_components/Pricing/Pricing";
import AdditionalGuarantees from "@/app/_components/AdditionalGuarantees";
import Blog from "@/app/_components/Blog";
import AboutSunVolt from "@/app/_components/CompanyInfo/ui/AboutSunVolt";
import Numbers from "@/app/_components/CompanyInfo/ui/Numbers";
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
