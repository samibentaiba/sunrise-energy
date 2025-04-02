"use client";
import React from "react";
import FeatureCard from "./Features/FeatureCard";
import Stars from "./Features/Stars";
import Image from "next/image";

const FeatureSection: React.FC = () => {
  return (
    <section className="w-full md:py-24 py-10  px-4 border-none bg-white">
      <div
        className="border-none mx-auto"
        style={{ maxWidth: "75rem" }}
      >
        <div className="grid relative grid-cols-1 md:grid-cols-3 border-none gap-14">
          {/* Card 1 */}
          <FeatureCard
            title="Des prix bas pour tous et sans compromis sur la qualité"
            description="Panneaux solaires dernière génération, batterie, gestionnaire d'énergie intelligent, interface de gestion et de pilotage... concevez l'installation de vos rêves."
            linkText="Nos offres"
            linkHref="#offers"
            delay={100}
          />

          {/* Card 2 */}
          <FeatureCard
            title="Des techniciens locaux RGE notés à chaque pose de panneaux solaires"
            description="Ont été sélectionnés les installateurs offrant les meilleures garanties pour vous faire bénéficier d'une installation de haute qualité."
            linkHref="#quality"
            delay={300}
          >
            <div className="flex items-center justify-center">
              <Stars rating={4} />
              <Image
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                width={92}
                height={30}
              />
            </div>
          </FeatureCard>

          {/* Card 3 */}
          <FeatureCard
            title="De fortes garanties incluses pour être serein à chaque étape"
            description="Pendant 10 ans, si vous ne faites pas les économies promises, on vous rembourse la différence. En cas de difficultés, on vous accompagne jusqu'à 5 ans."
            linkText="Nos garanties"
            linkHref="#guarantees"
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
