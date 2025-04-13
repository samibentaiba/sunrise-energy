import Image from "next/image";
import { Check } from "lucide-react";
import { ReactElement } from "react";

const plans = [
  {
    name: "SunEco",
    price: "7 499€",
    img: "/images/modules/FProduct.png",
    features: [
      "Panneaux solaires de dernière génération DMEGC BIFACIAL",
      "Onduleurs centraux Huawei SUN2000",
      "Gestionnaire d'énergie POWER GEN4",
    ],
    description: "Le solaire performant et durable au meilleur prix",
    bg: "bg-white",
  },
  {
    name: "SunMax",
    price: "8 499 €",
    img: "/images/modules/SProduct.png",
    features: [
      "Panneaux solaires de dernière génération: Dual Sun - FLASH 500",
      "Micro-onduleurs Enphase IQ8P",
      "Suivi de production",
      "Suivi de consommation",
      "Optimisation de production en cas d'ombre",
      "Optimisation des consommations en fonction de la production",
    ],
    description:
      "Le solaire Premium avec panneaux solaires de marque française",
    bg: "bg-gray-50 rounded-lg",
  },
];

export default function PricingCard(): ReactElement {
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
                <p className="text-sm text-gray-600 mt-1">
                  Livré et posé - Aides déduites
                </p>
              </div>
              <p className="text-center text-sm font-medium text-orange-600 my-4">
                {description}
              </p>
              <div className="flex justify-center items-center my-6 relative w-full h-64">
                <Image
                  src={img}
                  alt={name}
                  width={250}
                  height={200}
                  className=" object-contain"
                />
              </div>

              <GetStartButton
                text="Découvrir l'offre"
                href="/"
                isIcon={false}
                isBuy={true}
              />
              <div className="mt-6 space-y-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 text-center">
                <p className="font-medium text-sm text-blue-800">
                  Options disponibles sur demande
                </p>
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
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";

function GetStartButton({
  text = "text",
  hoveredText = "hoveredText",
  href = "href",
  isIcon = true,
  isBuy = false,
}: {
  text: string;
  hoveredText?: string;
  href: string;
  isIcon?: boolean;
  isBuy?: boolean;
}): ReactElement {
  return (
    <div className="w-full flex justify-center items-center">
      {isBuy ? (
        <Link
          href={href}
          className="
    group relative inline-flex gap-2 items-center justify-center 
    w-[90%] py-4 bg-[#0b68a4] text-white font-medium rounded-full 
    hover:bg-[#0b68a4]  overflow-hidden"
          style={{
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          {isIcon ? (
            <FaAngleDoubleRight className="text-white text-2xl" size={15} />
          ) : null}
          {/* First text, disappears on hover */}
          <span className="transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-1">
            {text}
          </span>

          {/* Second text, appears after hover effect */}
          <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0 ">
            <div className="group relative inline-flex gap-5 items-center justify-center ">
              {isIcon ? (
                <FaAngleDoubleRight
                  className="text-white opacity-0 text-2xl"
                  size={15}
                />
              ) : null}
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {hoveredText || text}
              </span>
            </div>
          </div>
        </Link>
      ) : (
        <Link
          href={href}
          className="
    group relative inline-flex gap-2 items-center justify-center 
    px-7 py-4 bg-[#fbac18] text-white font-medium rounded-full 
    hover:bg-[#0b68a4] hover:border-[2px] hover:px-[26px] hover:py-[14px] hover:border-[#003366] overflow-hidden"
          style={{
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          {isIcon ? (
            <FaAngleDoubleRight className="text-white text-2xl" size={15} />
          ) : null}
          {/* First text, disappears on hover */}
          <span
            className="transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-1"
            style={{ fontSize: "13.4px", fontWeight: 600 }}
          >
            {text}
          </span>

          {/* Second text, appears after hover effect */}
          <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="group relative inline-flex gap-5 items-center justify-center ">
              {isIcon ? (
                <FaAngleDoubleRight
                  className="text-white opacity-0 text-2xl"
                  size={15}
                />
              ) : null}
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {hoveredText || text}
              </span>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
