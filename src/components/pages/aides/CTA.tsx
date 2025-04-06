export default function CTA() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 text-gray-900 bg-gray-50">
      <div className="mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16  justify-end items-center flex flex-col gap-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl w-[70%] justify-end items-center text-center flex font-bold mb-4">
            Obtenez des aides locales grâce à notre équipe d’experts
          </h1>

          <p className="text-sm md:text-base  w-full ">
            Certaines collectivités locales proposent des aides pour réduire le
            coût d’investissement de votre installation solaire. Les montants et
            les démarches pour les obtenir varient. Le plus simple est de nous
            appeler et nos équipes se chargent de tout pour vous !
          </p>
        </div>

        <GetStartButton
          isIcon={false}
          text="Je demande un RDV avec un conseiller"
          href="Je demande un RDV avec un conseiller"
        />
      </div>
    </section>
  );
}

import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";
import { ReactElement } from "react";

function GetStartButton({
  text,
  hoveredText,
  href,
  isIcon = true,
}: {
  text: string;
  hoveredText?: string;
  href: string;
  isIcon?: boolean;
}): ReactElement {
  return (
    <div className="w-full flex justify-center items-center">
      <Link
        href={href}
        className="
      group relative inline-flex gap-2 items-center justify-center 
      px-7 py-4 bg-[#fbac18] text-white font-medium rounded-full 
      hover:bg-[#e09404] overflow-hidden"
        style={{
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        {isIcon ? (
          <FaAngleDoubleRight className="text-white text-2xl" size={15} />
        ) : null}
        {/* First text, disappears on hover */}
        <span
          className="transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-1"
          style={{ fontSize: "13.4px", fontWeight: 600 }}
        >
          {text}
        </span>
        {/* Second text, appears after hover effect */}
        <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="group relative inline-flex items-center justify-center ">
            {isIcon ? (
              <FaAngleDoubleRight
                className="text-white opacity-0 text-2xl"
                size={15}
              />
            ) : null}
            <span
              className=" translate-y-[0px] translate-x-[0px] "
              style={{ fontSize: "13.4px", fontWeight: 600 }}
            >
              {text || hoveredText}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
