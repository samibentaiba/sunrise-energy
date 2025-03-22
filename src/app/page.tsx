"use client";

import SectionHero from "@/components/sections/home/Hero/SectionHero";
import SectionFeatures from "@/components/sections/home/Features/SectionFeatures";
import SectionTrust from "@/components/sections/home/SectionTrust";
import SectionCTA from "@/components/sections/home/CTA/SectionCTA";
import SectionPricing from "@/components/sections/home/Pricing/SectionPricing";
import SectionAdditionalGuarantees from "@/components/sections/home/SectionAdditionalGuarantees";
import SectionCompanyInfo from "@/components/sections/home/SectionCompanyInfo";
import SectionBlog from "@/components/sections/home/SectionBlog";
import SectionProductComparison from "@/components/sections/home/SectionProductComparison";
import SectionFooter from "@/components/sections/home/SectionFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SectionHero />
      <SectionFeatures />
      <SectionTrust />
      <SectionCTA />
      <SectionPricing />
      <SectionAdditionalGuarantees />
      <SectionCompanyInfo />
      <SectionBlog />
      <SectionProductComparison />
      <SectionFooter />
    </div>
  );
}
