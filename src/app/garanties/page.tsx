"use client";

import Hero from "@/components/pages/panneux-solaires/Hero";
import Pricing from "@/components/pages/panneux-solaires/Pricing";
import AdditionalGuarantees from "@/components/pages/panneux-solaires/AdditionalGuarantees";
import Blog from "@/components/pages/panneux-solaires/Blog";
import SmartSolarInstallation from "@/components/pages/panneux-solaires/SmartSolarInstallation";
import SolarProtection from "@/components/pages/panneux-solaires/SolarProtection";
import InstallationsProches from "@/components/pages/panneux-solaires/InstallationsProches";
import Reviews from "@/components/pages/panneux-solaires/Reviews";
import FAQ from "@/components/pages/panneux-solaires/FAQ";
export default function PanneuxSolaires() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Hero />
      <Pricing />
      <AdditionalGuarantees />
      <SmartSolarInstallation />
      <SolarProtection />
      <Blog />
      <InstallationsProches />
      <Reviews />
      <FAQ />
    </div>
  );
}
