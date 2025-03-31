"use client";

import SectionHero from "@/components/sections/panneux-solaires/Hero/SectionHero";
import SectionPricing from "@/components/sections/panneux-solaires/Pricing/SectionPricing";
import SectionAdditionalGuarantees from "@/components/sections/panneux-solaires/SectionAdditionalGuarantees";
import SectionBlog from "@/components/sections/panneux-solaires/SectionBlog";
import BlahBlahBlah from "@/components/sections/panneux-solaires/CompanyInfo/ui/BlahBlahBlah";
import NumbersSection from "@/components/sections/panneux-solaires/CompanyInfo/ui/NumbersSection";
export default function Home() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] flex flex-col">
      <SectionHero />
      <SectionPricing />
      <SectionAdditionalGuarantees />
      <BlahBlahBlah />
      <NumbersSection />
      <SectionBlog />
    </div>
  );
}
