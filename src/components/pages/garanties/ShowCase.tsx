import Image from "next/image";
import Link from "next/link";
import { type ReactElement } from "react";
function GetStartButton({
  text="text",
  hoveredText="hoveredText",
  href="href",
}: {
  text: string;
  hoveredText?: string;
  href: string;
}): ReactElement {
  return (
    <div className="w-full flex justify-start items-center">
      <Link
        href={href}
        className="
    group relative inline-flex  items-center justify-center 
    px-7 py-4 bg-[#fbac18] text-white font-medium rounded-full 
    hover:bg-[#fba01a]  overflow-hidden"
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
        {/* First text, disappears on hover */}

        {/* Second text, appears after hover effect */}
        <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="group relative inline-flex items-center justify-center ">
            <span
              className=" translate-y-[-10%] "
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

export default function Showcase(): ReactElement {
  return (
    <section className="bg-white py-20 px-6 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-4 md:text-4xl lg:text-5xl text-center sm:text-center">
            Les meilleures technologies au meilleur prix
          </h2>
          <p className="text-[#1d1d1f] text-center sm:text-center max-w-3xl mx-auto">
            Des panneaux solaires et onduleurs de dernière génération, aux
            technologies éprouvées et de marques mondiales de référence
          </p>
        </div>

        {/* Solar Panels Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {/* Image Column */}
          <div className="flex justify-center items-center">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/pages/garanties/Technology.jpeg"
                alt="Panneau solaire"
                width={700}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="bg-[#f5f6f7] p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#010709] mb-6">
              Les meilleurs panneaux solaires du moment sélectionnés par nos
              experts en énergie
            </h2>
            <p className="text-[#010709] mb-8">
              Recyclable à 95%, nos marques de panneaux solaires monocristallins
              sélectionnés chaque mois utilisent la dernière technologie «
              half-cut » et conjuguent performance, fiabilité et esthétisme.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="w-4 h-1 bg-[#2ba0b5] mb-3"></div>
                <h5 className="text-lg font-normal text-[#010709] mb-1">
                  Jusqu'à 30 ans
                </h5>
                <p className="text-[#010709]">de garantie fabricant</p>
              </div>
              <div>
                <div className="w-4 h-1 bg-[#2ba0b5] mb-3"></div>
                <h5 className="text-lg font-normal text-[#010709] mb-1">
                  Jusqu'à 30 ans
                </h5>
                <p className="text-[#010709]">de garantie de performance</p>
              </div>
            </div>

            <GetStartButton
              text="Nos offres"
              hoveredText="Découvrir"
              href="/offres"
            />
          </div>
        </div>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-32 md:grid">
          <div className="flex justify-center items-center">
            <Image
              src="/images/pages/garanties/Trinasolar.png"
              alt="Trina Solar"
              width={380}
              height={133}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/pages/garanties/Sunpower.jpg"
              alt="SunPower"
              width={365}
              height={138}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Inverters Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Content Column */}
          <div className="order-2 lg:order-1 bg-[#f5f6f7] p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#010709] mb-6">
              Les onduleurs et micro-onduleurs solaires les plus fiables du
              moment sélectionnés par nos experts en énergie
            </h2>
            <p className="text-[#010709] mb-8">
              Nos experts ont sélectionné les 2 technologies les plus
              performantes du moment, pour répondre à toutes les situations même
              en cas d'ombrage : micro-onduleur ou onduleur string avec
              optimiseur
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="w-4 h-1 bg-[#2ba0b5] mb-3"></div>
                <h5 className="text-lg font-normal text-[#010709] mb-1">
                  20 ans
                </h5>
                <p className="text-[#010709]">
                  garantie fabricant pour la marque Huawei
                </p>
              </div>
              <div>
                <div className="w-4 h-1 bg-[#2ba0b5] mb-3"></div>
                <h5 className="text-lg font-normal text-[#010709] mb-1">
                  25 ans
                </h5>
                <p className="text-[#010709]">
                  garantie fabricant pour la marque Enphase
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 flex flex-col justify-center items-center">
            <Image
              src="/images/pages/garanties/UPS/UPS.jpg"
              alt="Onduleurs Huawei et Enphase"
              width={251}
              height={250}
              className="w-full max-w-xs h-auto mb-8"
            />

            <div className="grid grid-cols-2 gap-4  md:grid">
              <Image
                src="/images/pages/garanties/UPS/ENPHASE.jpg"
                alt="Enphase"
                width={365}
                height={138}
                className="max-w-full h-auto"
              />
              <Image
                src="/images/pages/garanties/UPS/HUAWEI.webp"
                alt="Huawei"
                width={365}
                height={138}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
