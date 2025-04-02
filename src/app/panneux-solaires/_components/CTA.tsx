"use client" 
import React from "react";
import FeatureList from "./CTA/FeatureList";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// Main SectionCTA Component
export default function CTA() {
  return (
    <section className="relative w-full md:h-[615px] h-[1100px] flex items-center justify-center overflow-hidden">
      <ParallaxBackground />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-[50px] text-white text-center items-start justify-center md:max-w-[1200px]  w-full px-4">
        <div className="animate-fade-in w-[100%] flex ">
          <ReactPlayer url="https://youtu.be/y4iMWlxVKDA" controls width="504px" height="283px" />
        </div>
        <TextContent />
      </div>
    </section>
  );
}

const ParallaxBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/Castelnau.jpeg')" }}>
      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0042ff]/61"></div>
      <div className="absolute inset-0 bg-[#000000]/80"></div>
    </div>
  );
};

// Text Content Component
const TextContent = () => {
  const features = [
    {
      id: 1,
      text: "Accompagnement personnalisé de A à Z de l'étude en passant par la maintenance et l'installation de votre centrale solaire"
    },
    {
      id: 2,
      text: "Etude sur-mesure de dimensionnement du toit de votre maison et d'optimisation des panneaux photovoltaïques pour maximiser votre retour sur investissement"
    },
    {
      id: 3,
      text: "Suivi de performance après mise en service de votre installation panneau solaire"
    }
  ];

  return (
    <div className="animate-fade-in-up flex max-w-[600px] flex-col gap-10 text-left">
      <h2 className="text-4xl font-medium leading-tight text-shadow">Achetez sans risque une installation de panneaux solaires performante 100% garantie</h2>
      <FeatureList features={features} />
    </div>
  );
};

