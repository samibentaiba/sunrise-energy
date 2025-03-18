"useclient";
import SectionPrimaryNavigationBar from "@/components/sections/home/SectionPrimaryNavigationBar";
import SectionSecondaryNavigationBar from "@/components/sections/home/SectionSecondaryNavigationBar";
import SectionHero from "@/components/sections/home/SectionHero";
import SectionFeatures from "@/components/sections/home/SectionFeatures";
import SectionTrust from "@/components/sections/home/SectionTrust";
import SectionCTA from "@/components/sections/home/SectionCTA";
import SectionPricing from "@/components/sections/home/SectionPricing";
import SectionAdditionalGuarantees from "@/components/sections/home/SectionAdditionalGuarantees";
import SectionCompanyInfo from "@/components/sections/home/SectionCompanyInfo";
import SectionBlog from "@/components/sections/home/SectionBlog";
import SectionProductComparison from "@/components/sections/home/SectionProductComparison";
import SectionFooter from "@/components/sections/home/SectionFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <SectionPrimaryNavigationBar />
      {/* Main Navigation */}
      <SectionSecondaryNavigationBar />
      {/* Hero Section */}
      <SectionHero />
      {/* Features Section */}
      <SectionFeatures />
      {/* Trust Section */}
      <SectionTrust />
      {/* CTA Section */}
      <SectionCTA />
      {/* Pricing Section */}
      <SectionPricing />
      {/* Additional Guarantees Section */}
      <SectionAdditionalGuarantees />
      {/* Company Info Section */}
      <SectionCompanyInfo />
      {/* Blog Section */}
      <SectionBlog />
      {/* Product Comparison Section */}
      <SectionProductComparison />
      {/* Footer */}
      <SectionFooter />
    </div>
  );
}
