"use client";

import SectionHero from "@/app/panneux-solaires/_components/Hero";
import SectionPricing from "@/app/panneux-solaires/_components/Pricing";
import SectionAdditionalGuarantees from "@/app/panneux-solaires/_components/AdditionalGuarantees";
import SectionBlog from "@/app/panneux-solaires/_components/Blog";
import SectionSmartSolarInstallation from "@/app/panneux-solaires/_components/SmartSolarInstallation";
import SectionSolarProtection from "@/app/panneux-solaires/_components/SolarProtection";
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
