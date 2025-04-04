"use client";
import React from "react";

// Main component: Section with additional guarantees
export default function SectionAdditionalGuarantees() {
  return (
    <div className="relative md:h-[850px] h-[1400px]">
      <section className="relative h-full py-16 bg-blue-800 text-white overflow-hidden">
        <ParallaxBackground />
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="md:text-5xl text-4xl md:px-50 py-10 font-bold mb-12 text-center">Profitez de garanties complémentaires exclusives SunVolt</h2>
          <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto">
            {guarantees.map((guarantee) => (
              <GuaranteeCard key={guarantee.id} {...guarantee} />
            ))}
          </div>
        </div>
      </section>

      {/* Curved shape at the bottom */}
      <div className="absolute bottom-0 left-0 hidden md:block w-full z-10">
        <SVGComponent />
      </div>
    </div>
  );
}

// Background component with parallax effect
const ParallaxBackground = () => {
  return (
    <div className="absolute inset-0 w-full md:h-[821.344px] h-[1400px] bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/pages/home/Guarantees.webp')" }}>
      <div className="absolute inset-0 h-full" style={{ background: "linear-gradient(to bottom, rgba(0, 70, 110, 0.9), rgba(0, 1, 20, 0.8))" }}></div>
    </div>
  );
};
const GuaranteeCard = ({ title, description, highlight = false }: { description: string; title: string; highlight?: boolean }) => {
  return (
    <div className={`bg-white p-6 rounded-lg text-center ${highlight ? "border-2 border-yellow-500" : ""}`}>
      <h3 className="font-bold text-lg mb-4 text-gray-800 px-4">{title}</h3>
      <p className="text-gray-600 mb-4 px-2">{description}</p>
    </div>
  );
};
const guarantees = [
  {
    id: 1,
    title: "Jusqu'à 5 ans d'accompagnement par notre équipe d'experts",
    description: "Nos équipes vous accompagnent en cas de difficultés liées à votre installation solaire",
    link: "#"
  },
  {
    id: 2,
    title: "Jusqu'à 10 ans de garantie de réduction de facture Satisfait ou Remboursé",
    description: "Nous vous remboursons la différence si vous ne faites pas les économies annoncées lors de l'étude d'une offre sur-mesure",
    link: "#",
    highlight: true
  },
  {
    id: 3,
    title: "Garantie décennale contre tout dommage à votre maison",
    description: "Vous êtes intégralement couvert en cas de dommage compromettant la solidité du bâti ou qui le rendrait inhabitable ou impropre à son usage",
    link: "#"
  }
];

const SVGComponent: React.FC = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[200px]" xmlnsXlink="http://www.w3.org/1999/xlink" transform="matrix(-1,0,0,1,0,0)" {...props}>
    <path fill="#ffffff" fillOpacity={1} d="M0,0 C0,0 0 ,0 0,200 C990,0 1000,100 1500,250 L1500,5000 L0,320 Z" />
  </svg>
);
