import { ReactElement } from "react";
import Image from "next/image";

export default function About(): ReactElement {
  return (
    <div className="bg-white flex justify-center py-10 md:py-20 w-full">
      <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-4 md:space-y-6 md:max-w-[35rem]">
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#040922] leading-tight md:leading-[50px] font-['Lato',_Arial,_Helvetica,_sans-serif]">
            Sunrise France ; le leader du solaire intelligent depuis 2019
          </h2>
          <p className="text-gray-800">
            Sunrise est un acteur de référence dans les énergies renouvelables
            avec plus de 3000 installations photovoltaïques réalisées en France.
            Nous nous sommes donnés pour objectif de rendre le solaire
            accessible à tous, en offrant le meilleur compromis entre prix,
            rentabilité et performance.
          </p>
          <div className="pt-2">
            <GetStartButton
              text="En savoir plus"
              isIcon={false}
              href="/solutions-photovoltaiques"
            />
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-[550px]">
          <Image
            src="/images/pages/home/About.jpeg"
            alt="Solar panels on roof"
            width={550}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";


 function GetStartButton({
  text = "text",
  hoveredText = "hoveredText",
  href = "href",
  isIcon = true,
}: {
  text: string;
  hoveredText?: string;
  href: string;
  isIcon?: boolean;
}): ReactElement {
  return (
    <div>
      <Link
        href={href}
        className="
    group relative inline-flex gap-2 items-center justify-center 
    px-7 py-4 bg-[#fbac18] text-white font-medium rounded-full 
    hover:bg-[#0b68a4] hover:border-[2px] hover:px-[26px] hover:py-[14px] hover:border-[#003366] overflow-hidden"
      >
        {isIcon ? (
          <FaAngleDoubleRight className="text-white text-2xl" size={15} />
        ) : null}
        <span
          className="transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-1"
          style={{ fontSize: "16px", fontWeight: 600 }}
        >
          {text}
        </span>
        <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="group relative inline-flex gap-2 items-center justify-center ">
            {isIcon ? (
              <FaAngleDoubleRight
                className="text-white opacity-0 text-2xl"
                size={15}
              />
            ) : null}
            <span style={{ fontSize: "16px", fontWeight: 600 }}>
              {hoveredText || text}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
