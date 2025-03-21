import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";
import { ReactElement } from "react";

interface GetStartButtonProps {
  text: string;
  hoveredText?: string;
  href: string;
}

export default function GetStartButton(
  { text, hoveredText, href }: GetStartButtonProps,
): ReactElement {
  return (
    <div>
      <Link
        href={href}
        className="
    group relative inline-flex gap-2 items-center justify-center 
    px-7 py-4 bg-[#fbac18] text-white font-medium rounded-full 
    hover:bg-[#0b68a4] hover:border-[2px] hover:px-[26px] hover:py-[14px] hover:border-[#003366] overflow-hidden"
        style={{
          fontSize: "14px",
          fontWeight: 650,
        }}
      >
        <FaAngleDoubleRight
          className="text-white text-2xl"
          size={15}
        />

        {/* First text, disappears on hover */}
        <span
          className="transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-1"
          style={{ fontSize: "13.4px", fontWeight: 600 }}
        >
          {text}
        </span>

        {/* Second text, appears after hover effect */}
        <span className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0 translate-x-[11.25px]">
          {hoveredText || text}
        </span>
      </Link>
    </div>
  );
}
