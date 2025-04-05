import Image from "next/image"
import Link from "next/link";
import { ReactElement } from "react";

export default function Technology() {
  return (
    
      <div className="container mx-auto px-4 w-full max-w-6xl py-12 md:py-16 lg:py-20">
        {/* Main heading and subheading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Les meilleures technologies au meilleur prix</h2>
          <p className="text-muted-foreground">
            Des panneaux solaires et onduleurs de dernière génération, aux technologies éprouvées et de marques
            mondiales de référence
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Image */}

              <Image
                src="/images/pages/garanties/Technology.jpeg"
                alt="Panneau solaire monocristallin"
                width={500}
                height={500}
                className="object-contain"
              />
            

          {/* Right column - Content */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Les meilleurs panneaux solaires du moment sélectionnés par nos experts en énergie
            </h3>

            <p className="mb-6">
              Recyclable à 95%, nos marques de panneaux solaires monocristallins sélectionnés chaque mois utilisent la
              dernière technologie « half-cut » et conjuguent performance, fiabilité et esthétisme.
            </p>

            {/* Warranty information */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <div className="h-1 w-8 bg-teal-500 mb-2"></div>
                <h4 className="font-semibold mb-1">Jusqu'à 30 ans</h4>
                <p className="text-sm text-muted-foreground">de garantie fabricant</p>
              </div>
              <div>
                <div className="h-1 w-8 bg-teal-500 mb-2"></div>
                <h4 className="font-semibold mb-1">Jusqu'à 30 ans</h4>
                <p className="text-sm text-muted-foreground">de garantie de performance</p>
              </div>
            </div>

            {/* CTA Button */}
            <GetStartButton text="Nos offres" hoveredText="Découvrir" href="/offres" />
          </div>
        </div>
      </div>
    
  )
}

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
    <div className="w-full flex justify-center items-center">
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
