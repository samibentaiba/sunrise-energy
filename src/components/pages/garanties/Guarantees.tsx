import Image from "next/image"
import Link from "next/link"
import type { ReactElement } from "react"

export default function Guarantees() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 text-gray-900 bg-gray-50">
      <div className="mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Des garanties exclusives SunVolt
            <br /> pour produire sereinement son énergie
          </h1>

          <p className="text-sm md:text-base max-w-3xl mx-auto">
            Pendant les 5 à 10 prochaines années, votre installation solaire sur-mesure vous permettra de réduire à coup
            sûr votre facture d'électricité.
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="flex flex-col md:flex-row gap-5 justify-center md:h-auto items-stretch mx-auto">
          {/* Left Card - Bill Reduction Guarantee */}
          <WarrantyCard />
          {/* Right Card - Zero Breakdown Support */}
          <SupportCard />
        </div>
      </div>
    </section>
  )
}

const SupportCard = () => {
  return (
    <div
      className="rounded-3xl w-full md:w-[384px] p-6 md:p-[40px] flex flex-col justify-between items-start text-white"
      style={{
        background: "linear-gradient(135deg, #fca605 0%, #fca605 50%, #11aaff 100%)",
        minHeight: "500px",
      }}
    >
      <div className="text-center w-full mb-8">
        <h2 className="text-xl font-bold">
          Accompagnement
          <br /> Zéro Panne
        </h2>
      </div>

      <div className="flex flex-col">
        <p className="text-sm italic mb-1">Jusqu'à</p>
        <p className="text-6xl md:text-7xl font-bold">5 ans</p>
      </div>

      <p className="text-2xl md:text-3xl font-semibold mt-8">
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
    <div
      className="bg-white rounded-3xl w-full md:w-[384px] p-6 md:p-[40px] flex flex-col items-center border border-gray-200"
      style={{ minHeight: "500px" }}
    >
      <div className="mb-8 text-center">
        <h4 className="font-bold text-xl mb-1">Garantie de réduction de facture</h4>
        <p className="text-base">Vos économies sont garanties ou remboursées</p>
      </div>

      <div className="my-4 text-center">
        <p className="text-sm italic mb-1">Jusqu'à</p>
        <span className="text-6xl md:text-7xl font-bold">10 ans</span>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center mt-4">
        <Image
          src="/images/pages/garanties/Guarantees.png"
          alt="Panneau solaire"
          width={200}
          height={400}
          className="object-contain max-h-[200px]"
        />

        <p className="font-normal text-center leading-6 text-gray-800 mt-4 max-w-xs">
          Pendant 10 ans, si vous ne faites pas les économies promises par notre étude, on vous rembourse la différence.
          Pour en savoir plus, prenez RDV avec l'un de nos experts.
        </p>

        <GetStartButton text="Je prends RDV" href="#nos-garanties" />
      </div>
    </div>
  )
}

function GetStartButton({
  text,
  hoveredText,
  href,
}: {
  text: string
  hoveredText?: string
  href: string
}): ReactElement {
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <Link
        href={href}
        className="
        group relative inline-flex items-center justify-center 
        px-7 py-3 bg-[#fca605] text-white font-medium rounded-full 
        hover:bg-[#fba01a] overflow-hidden"
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

        <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="group relative inline-flex items-center justify-center">
            <span className="translate-y-[-10%]" style={{ fontSize: "1rem", fontWeight: 600 }}>
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
  )
}

