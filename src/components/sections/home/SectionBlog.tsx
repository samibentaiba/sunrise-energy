import Image from "next/image"
import Link from "next/link"

export default function ActualitesEtConseils() {
  const articles = [
    {
      image: "/images/estimation-production-energie.jpeg",
      categories: [
        { name: "Conso", href: "#" },
        { name: "Guides", href: "#" },
      ],
      title: "Quelle puissance de panneaux solaires choisir pour une maison individuelle ?",
      href: "#",
    },
    {
      image: "/images/charging-an-electric-car.webp",
      categories: [
        { name: "Economies d'énergie", href: "#" },
        { name: "Guides", href: "#" },
      ],
      title: "La voiture électrique et le solaire : une alliance durable et économique",
      href: "#",
    },
    {
      image: "/images/panneau-solaire-toiture-tuile.webp",
      categories: [
        { name: "Guides", href: "#" },
        { name: "Panneaux solaires", href: "#" },
      ],
      title: "11 idées reçues sur l'énergie solaire",
      href: "#",
    },
    {
      image: "/images/toiture-avec-panneaux-solaires.webp",
      categories: [
        { name: "Conso", href: "#" },
        { name: "Guides", href: "#" },
      ],
      title: "Tout savoir sur le routeur solaire photovoltaïque",
      href: "#",
    },
  ]

  return (
    <section className="py-16 px-50 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Actualités et Conseils</h2>

      <p className="text-center text-gray-700 mb-16 max-w-4xl mx-auto">
        Pour tout savoir sur le photovoltaïque pour les particuliers et les professionnels, découvrez nos dernières
        actualités
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col">
            <div className="mb-4 overflow-hidden">
              <Image
                src={article.image }
                alt={article.title}
                width={324}
                height={256}
                className="object-cover w-full h-64"
              />
            </div>

            <div className="flex gap-1 mb-2">
              {article.categories.map((category, catIndex) => (
                <div key={catIndex} className="flex items-center">
                  {catIndex > 0 && <span className="mx-1 text-blue-600">/</span>}
                  <Link href={category.href} className="text-blue-600 text-sm hover:underline">
                    {category.name}
                  </Link>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>

            <Link
              href={article.href}
              className="text-blue-600 font-medium border-b-2 border-blue-600 pb-0.5 w-fit hover:border-blue-800 hover:text-blue-800 mt-auto"
            >
              Lire l'article
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

