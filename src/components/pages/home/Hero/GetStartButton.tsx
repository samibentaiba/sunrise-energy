import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";
import { ReactElement } from "react";

export default function GetStartButton({
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
