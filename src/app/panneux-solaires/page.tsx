"use client";

import SectionHero from "@/components/pages/panneux-solaires/Hero";
import SectionPricing from "@/components/pages/panneux-solaires/Pricing";
import SectionAdditionalGuarantees from "@/components/pages/panneux-solaires/AdditionalGuarantees";
import SectionBlog from "@/components/pages/panneux-solaires/Blog";
import SectionSmartSolarInstallation from "@/components/pages/panneux-solaires/SmartSolarInstallation";
import SectionSolarProtection from "@/components/pages/panneux-solaires/SolarProtection";
export default function Home() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] flex flex-col">
      <SectionHero />
      <SectionPricing />
      <SectionAdditionalGuarantees />
      <SectionSmartSolarInstallation />
      <SectionSolarProtection />
      <SectionBlog />
    </div>
  );
}
