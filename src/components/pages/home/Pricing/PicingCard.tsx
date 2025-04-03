import Image from "next/image";
import { Check } from "lucide-react";
import GetStartButton from "./GetStartButton";
import Intervenants from "./Intervenants-LBC5-1.webp";
import PanneuxSolaires from "./Panneau-solaire-DMEGC.webp";
const plans = [
  {
    name: "SunEco",
    price: "7 499€",
    img: Intervenants,
    features: ["Panneaux solaires de dernière génération DMEGC BIFACIAL", "Onduleurs centraux Huawei SUN2000", "Gestionnaire d'énergie POWER GEN4"],
    description: "Le solaire performant et durable au meilleur prix",
    bg: "bg-white"
  },
  {
    name: "SunMax",
    price: "8 499 €",
    img: PanneuxSolaires,
    features: ["Panneaux solaires de dernière génération: Dual Sun - FLASH 500", "Micro-onduleurs Enphase IQ8P", "Suivi de production", "Suivi de consommation", "Optimisation de production en cas d'ombre", "Optimisation des consommations en fonction de la production"],
    description: "Le solaire Premium avec panneaux solaires de marque française",
    bg: "bg-gray-50 rounded-lg"
  }
];

export default function PricingCard() {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
        {plans.map(({ name, price, img, features, description, bg }) => (
          <div key={name} className="flex flex-col h-full">
            <div className="text-center mb-4">
              <p className="text-blue-600 font-medium">{name}</p>
            </div>
            <div className={`p-6 flex flex-col h-full ${bg}`}>
              <div className="text-center mb-4">
                <h3 className="font-bold text-xl">
                  <span className="text-gray-800">À partir de </span>
                  <span className="text-blue-600 text-2xl">{price}</span>
                </h3>
                <p className="text-sm text-gray-600 mt-1">Livré et posé - Aides déduites</p>
              </div>
              <p className="text-center text-sm font-medium text-orange-600 my-4">{description}</p>
              <div className="flex justify-center items-center my-6 relative w-full h-64">
                <Image src={img} alt={name} width={250} height={200} className=" object-contain" />
              </div>

              <GetStartButton text="Découvrir l'offre" href="/" isIcon={false} isBuy={true} />
              <div className="mt-6 space-y-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 text-center">
                <p className="font-medium text-sm text-blue-800">Options disponibles sur demande</p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <p className="text-sm text-gray-600">Batterie solaire</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
