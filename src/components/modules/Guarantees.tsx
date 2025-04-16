import Image from "next/image"
import Link from "next/link"
import type { ReactElement } from "react"

export default function Guarantees(): ReactElement {
  return (
    <section className="w-full py-8 md:py-12 lg:py-20 text-gray-900 bg-gray-50">
      <div className="mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Des garanties exclusives Sunrise</h2>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">
            pour produire sereinement son énergie solaire
          </h3>
          <p className="text-sm md:text-base max-w-4xl mx-auto">
            Quoi qu&apos;il se passe pendant les 5 à 10 prochaines années, votre installation solaire sera réparée sans
            aucun frais et réduira votre facture d&apos;électricité.
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-5 justify-center md:h-auto items-stretch mx-auto">
          {/* Left Card - Bill Reduction Guarantee */}
          <WarrantyCard />

          {/* Right Card - Zero Breakdown Support */}
          <SupportCard />
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8 md:mt-10">
          <GetStartButton text="Nos garanties" href="#nos-garanties" />
        </div>
      </div>
    </section>
  )
}

const SupportCard = () => {
  return (
    <div
      className="rounded-3xl w-full md:w-1/2 gap-20 p-6 md:p-8 lg:p-[40px] flex flex-col items-center text-center text-white"
      style={{ background: "linear-gradient(to bottom right, #fca605, #fca605, #11aaff)" }}
    >
      <h2 className="text-lg mx-auto text-center font-bold mb-4 md:mb-1">
        Accompagnement <br /> Zéro Panne
      </h2>

      <div className="flex flex-col text-center">
        <p className="text-sm mb-1">Jusqu'à</p>
        <p className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">5 ans</p>
      </div>

      <p className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold  mt-4 md:mt-8 lg:mt-auto">
        d'accompagnement
        <br />
        par nos équipes en
        <br />
        cas de difficultés
      </p>
    </div>
  )
}

const WarrantyCard = () => {
  return (
    <div className="bg-white rounded-3xl w-full md:w-1/2 p-6 md:p-8 lg:p-[40px] flex flex-col items-center gap-6 md:gap-8 lg:gap-12 text-center border border-gray-200">
      <div className="mb-2 md:mb-4">
        <h4 className="font-extrabold text-lg mb-1">Garantie de réduction de facture</h4>
        <p className="text-base md:text-lg font-semibold w-full md:w-[90%] mx-auto">
          Vos économies sont garanties ou remboursées
        </p>
      </div>

      <div className="my-2 md:my-4">
        <span className="text-6xl md:text-7xl lg:text-8xl font-bold">10 ans</span>
      </div>

      <div className="flex flex-col gap-4 md:gap-6 justify-center items-center">
        <Image
          src="/images/pages/panneaux-solaires/Guarantees.webp"
          alt="Panneau solaire"
          width={200}
          height={400}
          className="object-contain w-32 md:w-40 lg:w-[200px]"
        />

        <p className="font-semibold leading-6 md:leading-7 text-gray-700 mt-2 md:mt-4 max-w-xs">
          Pendant 10 ans, si vous ne faites pas les économies promises par notre étude, on vous rembourse la différence.
        </p>
      </div>
    </div>
  )
}

function GetStartButton({
  text,
  hoveredText,
  href,
}: { text: string; hoveredText?: string; href: string }): ReactElement {
  return (
    <div className="w-full flex justify-center items-center">
      <Link
        href={href}
        className="
          group relative inline-flex text-base md:text-lg lg:text-xl items-center justify-center 
          px-6 py-3 md:px-8 md:py-4 bg-[#fbac18] text-white font-medium rounded-full 
          hover:bg-[#0b68a4] hover:border-[#003366] overflow-hidden"
      >
        <span className="transition-all duration-500 group-hover:translate-y-[-100%] group-hover:opacity-1">
          {text}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 h-3 w-3 md:h-4 md:w-4"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>

        {/* Second text, appears after hover effect */}
        <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="group relative inline-flex items-center justify-center">
            <span className="translate-y-[-10%]">{hoveredText || text}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-3 w-3 md:h-4 md:w-4 opacity-0"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}

