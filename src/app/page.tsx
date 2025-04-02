"use client";

import Hero from "@/components/pages/home/Hero";
import Features from "@/components/pages/home/Features";
import Trust from "@/components/pages/home/Trust";
import CTA from "@/components/pages/home/CTA";
import Pricing from "@/components/pages/home/Pricing";
import AdditionalGuarantees from "@/components/pages/home/AdditionalGuarantees";
import Blog from "@/components/pages/home/Blog";
import AboutSunVolt from "@/components/pages/home/CompanyInfo/AboutSunVolt";
import Numbers from "@/components/pages/home/CompanyInfo/Numbers";
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
