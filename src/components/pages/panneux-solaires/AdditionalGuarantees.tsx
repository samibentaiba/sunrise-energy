import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

export default function AdditionalGuarantees() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 text-gray-900 bg-gray-50">
      <div className=" mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Des garanties exclusives SunVolt</h2>
          <h3 className="text-xl md:text-2xl  font-bold mb-6">pour produire sereinement son énergie solaire</h3>
          <p className="text-sm md:text-base  max-w-4xl mx-auto">Quoi qu&apos;il se passe pendant les 5 à 10 prochaines années, votre installation solaire sera réparée sans aucun frais et réduira votre facture d&apos;électricité.</p>
        </div>

        {/* Guarantee Cards */}
        <div className="flex flex-row gap-5 justify-center h-[742px] items-center mx-auto">
          {/* Left Card - Bill Reduction Guarantee */}

          <WarrantyCard />

          {/* Right Card - Zero Breakdown Support */}

          <SupportCard />
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <GetStartButton text="Nos garanties" href="#nos-garanties" />
        </div>
      </div>
    </section>
  );
}

const SupportCard = () => {
  return (
    <div className="rounded-3xl w-[384px] p-[40px] h-full pb-[164px] gap-20  flex flex-col  items-start text-center text-white" style={{ background: "linear-gradient(to bottom right, #fca605, #fca605, #11aaff)" }}>
      <h2 className="text-lg mx-auto text-center font-bold mb-1">
        Accompagnement <br /> Zéro Panne
      </h2>

      <div className="flex flex-col text-start">
        <p className="text-sm mb-1">Jusqu'à</p>

        <p className="text-7xl font-bold mb-4">5 ans</p>
      </div>

      <p className="text-3xl font-semibold text-start">
        d'accompagnement
        <br />
        par nos équipes en
        <br />
        cas de difficultés
      </p>
    </div>
  );
};

const WarrantyCard = () => {
  return (
    <div className="bg-white rounded-3xl  p-[40px] h-full flex flex-col  items-center gap-12 text-center border border-gray-200">
      <div className="mb-4">
        <h4 className="font-extrabold text-lg mb-1">Garantie de réduction de facture</h4>
        <p className="text-lg font-semibold w-[90%] mx-auto">Vos économies sont garanties ou remboursées</p>
      </div>

      <div className="my-4">
        <span className="text-7xl font-bold">10 ans</span>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center">
        <Image src="/images/black-panneau-solairejpg.webp" alt="Panneau solaire" width={200} height={400} className="object-contain " />

        <p className="font-semibold leading-7 text-gray-700 mt-4 max-w-xs">Pendant 10 ans, si vous ne faites pas les économies promises par notre étude, on vous rembourse la différence.</p>
      </div>
    </div>
  );
};
function GetStartButton({ text, hoveredText, href }: { text: string; hoveredText?: string; href: string}): ReactElement {
  return (
    <div className="w-full flex justify-center items-center">
      <Link
        href={href}
        className="
    group relative inline-flex  items-center justify-center 
    px-7 py-3 bg-[#fbac18] text-white font-medium rounded-full 
    hover:bg-[#0b68a4] hover:border-[2px] hover:px-[26px] hover:py-[10px] hover:border-[#003366] overflow-hidden"
        style={{
          fontSize: "16px",
          fontWeight: 600
        }}>
        <span className="transition-all duration-500 group-hover:translate-y-[-100%] group-hover:opacity-1" style={{ fontSize: "13.4px", fontWeight: 600 }}>
          {text}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
          <path d="m9 18 6-6-6-6" />
        </svg>
        {/* First text, disappears on hover */}

        {/* Second text, appears after hover effect */}
        <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="group relative inline-flex items-center justify-center ">
            <span className=" translate-y-[-10%] " style={{ fontSize: "13.4px", fontWeight: 600 }}>
              {text || hoveredText}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4 opacity-0">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
