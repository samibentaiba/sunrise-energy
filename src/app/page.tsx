"use client";

import SectionHero from "@/components/sections/home/Hero/SectionHero";
import SectionFeatures from "@/components/sections/home/Features/SectionFeatures";
import SectionTrust from "@/components/sections/home/SectionTrust";
import SectionCTA from "@/components/sections/home/CTA/SectionCTA";
import SectionPricing from "@/components/sections/home/Pricing/SectionPricing";
import SectionAdditionalGuarantees from "@/components/sections/home/SectionAdditionalGuarantees";
import SectionBlog from "@/components/sections/home/SectionBlog";
import BlahBlahBlah from "@/components/sections/home/CompanyInfo/ui/BlahBlahBlah";
import NumbersSection from "@/components/sections/home/CompanyInfo/ui/NumbersSection";
export default function Home() {
  return (
    <div className="min-h-screen w-[100%] flex flex-col">
      <SectionHero />
      <SectionFeatures />
      <SectionTrust />
      <SectionCTA />
      <SectionPricing />
      <SectionAdditionalGuarantees />
      <BlahBlahBlah />
      <NumbersSection />
      <SectionBlog />
    </div>
  );
}
