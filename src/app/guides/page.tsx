"use client";
import HeroTerms from "@/components/modules/terms/HeroTerms";
import Index from "@/components/modules/request/index"
import Guides from "@/components/pages/guides/Guides"
export default function Garanties() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <HeroTerms
        title="Guides Panneaux Solaires"
        description="Devenez incollable sur l'énergie solaire et les panneaux photovoltaïques"
      />
      <Index />
      <Guides />
    </div>
  );
}

