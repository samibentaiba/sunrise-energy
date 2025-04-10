"use client";
import React from "react";
import FeatureCard from "./Features/FeatureCard";
export default function Features(): ReactElement {
  return (
    <section className="w-full md:py-10 py-20  px-4 border-none bg-white">
      <div className="border-none mx-auto" style={{ maxWidth: "75rem" }}>
        <div className="grid relative grid-cols-1 md:grid-cols-3 border-none gap-14">
          {/* Card 1 */}
          <FeatureCard
            title="Des prix bas pour tous et sans compromis sur la qualité"
            description="Panneaux solaires dernière génération, batterie, gestionnaire d’énergie intelligent, interface de gestion et de pilotage… concevez l’installation de vos rêves."
            delay={100}
          />

          {/* Card 2 */}
          <FeatureCard
            title="Une installation rapide en 2 mois par techniciens locaux RGE"
            description="Ont été sélectionnés les installateurs offrant les meilleures garanties pour vous faire bénéficier d’une installation de haute qualité."
            delay={300}
          ></FeatureCard>

          {/* Card 3 */}
          <FeatureCard
            title="De fortes garanties incluses pour être serein à chaque étape"
            description="Pendant 10 ans, si vous ne faites pas les économies promises, on vous rembourse la différence. En cas de difficultés, on vous accompagne jusqu’à 5 ans."
            delay={500}
          />
        </div>
      </div>
      <GetStartButton
        text="Je simule mes économies"
        href="Je simule mes économies"
      />
    </section>
  );
}
import Link from "next/link";
import type { ReactElement } from "react";
function GetStartButton({
  text,
  hoveredText,
  href,
}: {
  text: string;
  hoveredText?: string;
  href: string;
}): ReactElement {
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <Link
        href={href}
        className="
        group relative inline-flex items-center justify-center 
        px-7 py-3 bg-[#fca605] text-white font-medium rounded-full 
        hover:bg-[#0B476F] overflow-hidden"
        style={{
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        <span
          className="transition-all duration-500 group-hover:translate-y-[-100%] group-hover:opacity-1"
          style={{ fontSize: "1rem", fontWeight: 600 }}
        >
          {text}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 h-4 w-4"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>

        <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="group relative inline-flex items-center justify-center">
            <span
              className="translate-y-[-10%]"
              style={{ fontSize: "1rem", fontWeight: 600 }}
            >
              {text || hoveredText}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4 opacity-0"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
