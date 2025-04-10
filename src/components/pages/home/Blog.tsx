import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
export default function ActualitesEtConseils(): ReactElement {
  const articles = [
    {
      image: "/images/pages/home/Blog/Choosing-solar-panel-power.jpeg",
      categories: [
        { name: "Conso", href: "#" },
        { name: "Guides", href: "#" },
      ],
      title:
        "Quelle puissance de panneaux solaires choisir pour une maison individuelle ?",
      href: "#",
    },
    {
      image: "/images/pages/home/Blog/Electric-car-charging-with-solar.webp",
      categories: [
        { name: "Economies d'énergie", href: "#" },
        { name: "Guides", href: "#" },
      ],
      title:
        "La voiture électrique et le solaire : une alliance durable et économique",
      href: "#",
    },
    {
      image: "/images/pages/home/Blog/Solar-panels-on-tiled-roof.webp",
      categories: [
        { name: "Guides", href: "#" },
        { name: "Panneaux solaires", href: "#" },
      ],
      title: "11 idées reçues sur l'énergie solaire",
      href: "#",
    },
    {
      image: "/images/pages/home/Blog/House-roof-with-solar-panels.webp",
      categories: [
        { name: "Conso", href: "#" },
        { name: "Guides", href: "#" },
      ],
      title: "Tout savoir sur le routeur solaire photovoltaïque",
      href: "#",
    },
  ];

  return (
    <section className="py-8 md:pb-14 px-4 md:px-8 lg:px-50 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        Actualités et Conseils
      </h2>
      <p className="text-center text-gray-700 mb-8 md:mb-16 max-w-4xl mx-auto px-4">
        Pour tout savoir sur le photovoltaïque pour les particuliers et les
        professionnels, découvrez nos dernières actualités
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg overflow-hidden"
          >
            <div className="mb-3 md:mb-4 overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={324}
                height={256}
                className="object-cover w-full h-48 md:h-64 transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="flex flex-wrap gap-1 mb-2 px-2 md:px-0">
              {article.categories.map((category, catIndex) => (
                <div key={catIndex} className="flex items-center">
                  {catIndex > 0 && (
                    <span className="mx-1 text-blue-600">/</span>
                  )}
                  <Link
                    href={category.href}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    {category.name}
                  </Link>
                </div>
              ))}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 px-2 md:px-0 line-clamp-2">
              {article.title}
            </h3>
            <Link
              href={article.href}
              className="text-blue-600 font-medium border-b-2 border-blue-600 pb-0.5 w-fit hover:border-blue-800 hover:text-blue-800 mt-auto mx-2 md:mx-0 mb-3"
            >
              Lire l'article
            </Link>
          </div>
        ))}
      </div>
      <div className="w-full text-black text-[10px] mt-6 px-4 md:px-0 max-w-7xl mx-auto">
        *Délai moyen d'installation de centrales solaires Sunrise après
        signature de devis constaté entre le 01/01/2023 et le 30/05/2023, hors
        délai de raccordement et de conformité Consuel
      </div>
    </section>
  );
}
