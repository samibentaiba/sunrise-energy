"use client";
import React, { useEffect, useRef } from "react";

import FeatureList from "./ui/FeatureList";
import Image from "next/image";
import ReactPlayer from "react-player";
const SectionCTA: React.FC = () => {
  const backgroundRef = useRef<HTMLImageElement>(null);

  // Features list data
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

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPercentage = Math.min(100, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

        const translateY = scrollPercentage * 1;
        backgroundRef.current.style.transform = `translateY(-${translateY}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-[615px] overflow-hidden flex items-center justify-center">
    {/* Parallax Background Image */}
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <Image
        className="absolute w-full object-fill transition-transform duration-0"
        ref={backgroundRef}
        src="/images/Castelnau.jpeg"
        alt="Solar panels installation background"
        width={1500}
        height={2000}
      />
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#00062d]/90"></div>
    </div>

    {/* Centered Content */}
    <div className="relative z-10 flex flex-col md:flex-row gap-[50px] text-white text-center items-start justify-center max-w-[1200px] w-full px-4">
      
      {/* Left Column - Testimonial Video */}
      <div className="animate-fade-in">
        <ReactPlayer url="https://youtu.be/y4iMWlxVKDA" controls width="504px" height="283px" />
      </div>

      {/* Right Column - Text Content */}
      <div className="animate-fade-in-up max-w-[600px] text-left">
        <h2 className="text-4xl font-medium leading-tight text-shadow">
          Achetez sans risque une installation de panneaux solaires performante 100% garantie
        </h2>
        <FeatureList features={features} />
      </div>

    </div>
  </section>
  );
};

export default SectionCTA;
