import Image from "next/image";
import Link from "next/link";

export default function ActualitesEtConseils() {
  const articles = [
    {
      image: "/images/installationpanneausolaireToulonjpeg_6696735b722520.webp",
      title: "Installation de panneaux solaires à Toulon, région Provence-Alpes-Côte d'Azur (83)",
      href: "#"
    },
    {
      image: "/images/Posedepanneauxsolairessurunmasavecpiscinenimesjpeg_66a0b96a265b79.50680551-200x150.jpeg",
      title: "Pose de panneaux solaires sur un mas avec piscine dans à Nîmes dans le Gard (30)",
      href: "#"
    },
    {
      image: "/images/installationpanneausolaireniortjpeg_668ea8bd893819.webp",
      title: "Installation de panneaux solaires en autoconsommation triphasé à Niort, Nouvelle-Aquitaine (79)",
      href: "#"
    },
    {
      image: "/images/installationpanneausolairepoitiersjpeg_668e892f6c2f38.webp",
      title: "Installation de panneaux solaires d’une puissance de 5kWc à Poitiers en Poitou-Charentes (86)",
      href: "#"
    },
    {
      image: "/images/panneausolairelillejpeg_667be5b22785f7.14272160-400x282.jpeg",
      title: "Installation Solaire Photovoltaïque en autoconsommation avec revente du surplus de 3 kWc à Lille dans le Nord (59)",
      href: "#"
    },
    {
      image: "/images/installationsolairerennesjpeg_667c2b560a1575.00569618-200x151.jpeg",
      title: "Installation photovoltaïque de 5 kWc à Rennes en Ille-et-Vilaine (35) pour réduire sa facture d’énergie",
      href: "#"
    }
  ];

  return (
    <section className="py-8 md:pb-14 px-4 md:px-8 lg:px-50 bg-white">
      <h2 className="text-3xl md:text-4xl p-20 font-bold text-center text-gray-900 mb-4">Plus de 3 000 clients heureux partout en France</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col bg-white rounded-lg overflow-hidden">
            <div className="mb-3 md:mb-4 overflow-hidden">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} width={324} height={256} className="object-cover w-full h-48 md:h-64 transition-transform hover:scale-105 duration-300" />
            </div>

            <h3 className="text-lg md:text-sm font-bold text-gray-900 mb-3 px-2 md:px-0 line-clamp-2">{article.title}</h3>
            <GetStartButton
              isIcon={false}
              text="
Découvrir l’installation"
              href="demande-devis-panneau-solaire"
            />
          </div>
        ))}
      </div>
      <div className="w-full text-black text-[10px] mt-6 px-4 md:px-0 max-w-7xl mx-auto">*Délai moyen d'installation de centrales solaires SunVolt après signature de devis constaté entre le 01/01/2023 et le 30/05/2023, hors délai de raccordement et de conformité Consuel</div>
    </section>
  );
}
import { useState } from "react";

function GetStartButton({ text, hoveredText, href, isIcon = true }: { text: string; hoveredText?: string; href: string; isIcon?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex justify-center items-center">
      <Link href={href} className="group relative inline-flex items-center justify-center px-5 py-2 bg-gray-200 text-black hover:text-white font-medium rounded-full hover:bg-[#0b4771] overflow-hidden" style={{ fontSize: "16px", fontWeight: 600 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isHovered ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
          <path d="m9 18 6-6-6-6" />
        </svg>
        <span className="transition-all duration-500" style={{ fontSize: "12px", fontWeight: 600 }}>
          {isHovered ? hoveredText || text : text}
        </span>
      </Link>
    </div>
  );
}
