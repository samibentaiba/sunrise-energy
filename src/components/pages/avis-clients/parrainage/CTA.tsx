import { FaAngleDoubleRight } from "react-icons/fa";
import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTA(): ReactElement {
  return (
    <section className=" bg-white min-h-180 mx-auto py-16 px-4">
      <div className="flex relative w-[50%] flex-col md:flex-row justify-around items-center gap-22">
        {/* Background Image */}
        <div className="max-h-100 flex overflow-hidden ">
          <Image
            src="/images/pages/avis-clients/parrainage/CTA.webp"
            alt="Maison avec panneaux solaires au coucher du soleil"
            width={1100}
            height={1100}
            className=" rounded-lg shadow-lg"
          />
        </div>

        {/* Card positioned over the image */}
        <div className="absolute top-1/2 right-0 max-w-3xl h-100 flex justify-around items-start flex-col transform translate-x-[90%] translate-y-[0%] bg-white p-8 rounded-lg shadow-lg ">
          <h2 className="text-3xl font-bold ">
            Pour <span className="bg-[#0b68a4] text-white px-2">Vous</span>
          </h2>

          <p className="text-gray-700 ">
            En tant que parrain, votre confiance et votre implication sont
            récompensées.
          </p>

          <p className="text-lg">
            Percevez{" "}
            <span className="relative inline-block">
              <span className="font-semibold relative z-10">
                500€ par filleul
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#fbac18] z-0"></span>
            </span>{" "}
            qui installe une centrale solaire SunVolt
          </p>

          <GetStartButton text="Je veux devenir parrain" href="" />
        </div>
      </div>
    </section>
  );
}

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
    <div className="w-full flex justify-start items-start">
      <Link
        href={href}
        className="
    group relative inline-flex gap-2 items-center justify-center 
    px-7 py-4 bg-[#fbac18] text-white font-medium rounded-full 
    hover:bg-[#0B476F] overflow-hidden"
        style={{
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        <span
          className="transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-1"
          style={{ fontSize: "13.4px", fontWeight: 600 }}
        >
          {text}
        </span>
        {/* Second text, appears after hover effect */}
        <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="group relative inline-flex items-center justify-center ">
            <FaAngleDoubleRight
              className="text-white opacity-0 text-2xl"
              size={15}
            />
            <span
              className=" translate-y-[0px] translate-x-[-20px] "
              style={{ fontSize: "13.4px", fontWeight: 600 }}
            >
              {text || hoveredText}
            </span>
          </div>
        </div>
        {isIcon ? (
          <FaAngleDoubleRight className="text-white text-2xl" size={15} />
        ) : null}
        {/* First text, disappears on hover */}
      </Link>
    </div>
  );
}
