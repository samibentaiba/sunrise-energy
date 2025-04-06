"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function GetStartButton({
  text,
  hoveredText,
  href,
}: {
  text: string
  hoveredText?: string
  href: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full flex justify-start items-start px-2 md:px-0">
      <Link
        href={href}
        className="group relative inline-flex items-center justify-center px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-gray-200 text-black hover:text-white font-medium rounded-full hover:bg-[#0B476F] overflow-hidden transition-colors duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isHovered ? "white" : "black"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        <span className="transition-all duration-500 text-xs sm:text-sm font-semibold">
          {isHovered ? hoveredText || text : text}
        </span>
      </Link>
    </div>
  )
}

function BlueButton({
  text,
  hoveredText,
  href,
}: {
  text: string
  hoveredText?: string
  href: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full flex justify-center items-center mt-4 md:mt-8">
      <Link
        href={href}
        className="group relative inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#0B68A4] text-white font-medium rounded-full hover:bg-[#0B476F] overflow-hidden transition-colors duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="transition-all duration-500 text-xs sm:text-sm md:text-base font-semibold">
          {isHovered ? hoveredText || text : text}
        </span>
      </Link>
    </div>
  )
}

export default function Blog() {
  const articles = [
    {
      image: "/images/modules/Blog/installation_toulon.webp",
      title: "Installation de panneaux solaires à Toulon, région Provence-Alpes-Côte d'Azur (83)",
      href: "#",
    },
    {
      image: "/images/modules/Blog/installation_nimes_mas_piscine.jpeg",
      title: "Pose de panneaux solaires sur un mas avec piscine dans à Nîmes dans le Gard (30)",
      href: "#",
    },
    {
      image: "/images/modules/Blog/installation_niort_autoconsommation.webp",
      title: "Installation de panneaux solaires en autoconsommation triphasé à Niort, Nouvelle-Aquitaine (79)",
      href: "#",
    },
    {
      image: "/images/modules/Blog/installation_poitiers_5kwc.webp",
      title: "Installation de panneaux solaires d'une puissance de 5kWc à Poitiers en Poitou-Charentes (86)",
      href: "#",
    },
    {
      image: "/images/modules/Blog/installation_lille_autoconsommation_3kwc.jpeg",
      title:
        "Installation Solaire Photovoltaïque en autoconsommation avec revente du surplus de 3 kWc à Lille dans le Nord (59)",
      href: "#",
    },
    {
      image: "/images/modules/Blog/installation_rennes_5kwc.jpeg",
      title: "Installation photovoltaïque de 5 kWc à Rennes en Ille-et-Vilaine (35) pour réduire sa facture d'énergie",
      href: "#",
    },
  ]

  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white flex flex-col gap-8 md:gap-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 px-2 sm:px-4 md:px-8 lg:px-20 max-w-5xl mx-auto">
        Plus de 3 000 clients heureux partout en France
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col place-items-start items-start text-start bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-2 sm:mb-3 md:mb-4 w-full overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={400}
                height={300}
                className="object-cover w-full h-40 sm:h-44 md:h-48 lg:h-56 transition-transform hover:scale-105 duration-500"
                priority={index < 3}
              />
            </div>

            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 px-3 sm:px-4 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
              {article.title}
            </h3>
            <div className="mb-3 sm:mb-4">
              <GetStartButton text="Découvrir l'installation" href="demande-devis-panneau-solaire" />
            </div>
          </div>
        ))}
      </div>

      <BlueButton text="Parcourir toutes nos réalisations" href="demande-devis-panneau-solaire" />
    </section>
  )
}

