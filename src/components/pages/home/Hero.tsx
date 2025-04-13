import { ReactElement } from "react";
import Image from "next/image";
export default function Hero(): ReactElement {
  return (
    <div className="relative md:h-[512px] h-[575px] z-0 p-0 m-0 w-full flex items-center justify-center bg-cover bg-center">
      <Image
        src="/images/pages/home/Hero.png"
        alt="Hero"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-[#00061b] opacity-40"></div>

      <div className="relative container p-0 m-0 md:w-[75%] w-[90%] flex items-center text-white">
        <div className=" w-[80%] flex flex-col gap-[2rem] md:gap-[4.5rem] mb-5">
          <h1
            className="text-6xl p-0 m-0 text-[2.3rem] md:text-[3.30rem] w-[17rem] md:w-auto font-semibold"
            style={{
              fontWeight: 600, // Equivalent to font-semibold
            }}
          >
            La seule offre solaire <br /> avec garantie d'économies incluse
          </h1>
          <div>
            <GetStartButton
              text="Prendre RDV avec un expert solaire"
              href="demande-devis-panneau-solaire"
            />
            <p
              style={{
                fontSize: "14px",
                paddingLeft: "34px",
                boxSizing: "border-box",
              }}
            >
              Gratuit et sans engagement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";

function GetStartButton({
  text = "text",
  hoveredText = "hovereText",
  href = "string",
}: {
  text: string;
  hoveredText?: string;
  href: string;
}): ReactElement {
  return (
    <Link
      href={href}
      className="
    group  inline-flex gap-2 items-center justify-center 
     bg-[#fbac18]/75 text-white w-[90vw] rounded-full  md:w-auto
    border-[3px] font-[650] border-[#ffffff]/75 hover:bg-[#fbac18]/100 hover:border-[#ffffff]/100 
    overflow-hidden
  "
      style={{
        padding: "13px 40px",
        fontSize: "14px",
      }}
    >
      <FaAngleDoubleRight
        className="text-white md:text-2xl text-3xl "
        size={18}
      />

      {/* First text, disappears on hover */}
      <span className="transition-all md:font-[650] font-[600] md:text-[20px] text-[18px]  opacity-100  duration-500 group-hover:translate-y-[-20px] group-hover:opacity-1">
        {text}
      </span>

      {/* Second text, appears after hover effect */}
      <span className="absolute transition-all md:font-[650] font-[600] md:text-[20px] text-[18px] duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0 translate-x-[16px]">
        {hoveredText || text}
      </span>
    </Link>
  );
}
