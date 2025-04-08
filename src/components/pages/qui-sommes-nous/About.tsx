import Image from "next/image"
import { Star, StarHalf } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { FaAngleDoubleRight } from "react-icons/fa"
import type { ReactElement } from "react"

export default function About() {
  return (
    <section className="w-full bg-white py-16 md:py-24 mt-16 md:mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Sunrise ; le leader de l'autoconsommation solaire intelligente depuis 2019
            </h2>

            <div className="text-gray-700 space-y-3 md:space-y-4 text-base md:text-lg">
              <p>
                Que vous soyez Particulier ou Entreprise, Sunrise est le pont de confiance entre vous et les
                professionnels du solaire.
              </p>
              <p>
                De la conception et l'installation jusqu'à la maintenance, nos experts vous conseillent à chaque étape
                de votre projet photovoltaïque grâce à un réseau de techniciens RGE rigoureusement sélectionnés et
                évalués.
              </p>
            </div>

            <Separator className="my-5 md:my-6" />

            <div className="flex flex-wrap gap-4">
              <GetStartButton isIcon={false} text="Offre photovoltaïque pour Particuliers" href="/panneaux-solaires" />
            </div>

            <Separator className="my-5 md:my-6" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <h2 className="text-4xl md:text-5xl font-bold">3 000</h2>
                <h6 className="text-green-500 font-semibold text-sm md:text-base">clients heureux</h6>
              </div>

              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/modules/Google.svg"
                      alt="Google"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span className="text-sm text-gray-600">Avis Google</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="font-medium">4.2</span>
                    <div className="flex">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/images/pages/qui-sommes-nous/About.webp"
                alt="Installateur Sunrise sur un toit avec panneaux solaires"
                width={600}
                height={399}
                className="w-full h-auto object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GetStartButton({
  text,
  hoveredText,
  href,
  isIcon = true,
}: {
  text: string
  hoveredText?: string
  href: string
  isIcon?: boolean
}): ReactElement {
  return (
    <div className="w-full sm:w-auto flex justify-start items-start">
      <Link
        href={href}
        className="
          group relative inline-flex gap-2 items-center justify-center 
          px-5 sm:px-7 py-3 sm:py-4 bg-[#fbac18] text-white font-medium rounded-full 
          hover:bg-[#0B476F] overflow-hidden transition-colors duration-300
          shadow-md hover:shadow-lg"
        style={{
          fontSize: "15px",
          fontWeight: 600,
        }}
      >
        {isIcon && <FaAngleDoubleRight className="text-white text-2xl flex-shrink-0" size={15} aria-hidden="true" />}

        {/* First text, disappears on hover */}
        <span
          className="transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-0"
          style={{ fontSize: "13.4px", fontWeight: 600 }}
        >
          {text}
        </span>

        {/* Second text, appears after hover effect */}
        <div className="absolute transition-all duration-500 opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0">
          <div className="group relative inline-flex items-center justify-center">
            {isIcon && (
              <FaAngleDoubleRight
                className="text-white opacity-0 text-2xl flex-shrink-0"
                size={15}
                aria-hidden="true"
              />
            )}
            <span className="whitespace-nowrap" style={{ fontSize: "13.4px", fontWeight: 600 }}>
              {hoveredText || text}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

