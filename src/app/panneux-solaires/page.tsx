"use client";

import Hero from "@/components/pages/panneux-solaires/Hero";
import Pricing from "@/components/pages/panneux-solaires/Pricing";
import AdditionalGuarantees from "@/components/pages/panneux-solaires/AdditionalGuarantees";
import Blog from "@/components/pages/panneux-solaires/Blog";
import SmartSolarInstallation from "@/components/pages/panneux-solaires/SmartSolarInstallation";
import SolarProtection from "@/components/pages/panneux-solaires/SolarProtection";
import FranceMap from "@/components/pages/panneux-solaires/InstallationsProches";
export default function Home() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] flex flex-col">
      <Hero />
      <Pricing />
      <AdditionalGuarantees />
      <SmartSolarInstallation />
      <SolarProtection />
      <Blog />
      <FranceMap />
    </div>
  );
}
