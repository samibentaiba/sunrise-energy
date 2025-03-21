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
     bg-[#fbac18]/75 text-white font-medium rounded-full 
    border-[3px] border-[#ffffff]/75 hover:bg-[#fbac18]/100 hover:border-[#ffffff]/100 
    overflow-hidden
  "
        style={{
          padding: "13px 40px",
          fontSize: "14px",
          fontWeight: 650,
        }}
      >
        <FaAngleDoubleRight
          className="text-white text-2xl"
          size={18}
        />

        {/* First text, disappears on hover */}
        <span
          className="transition-all opacity-100 font-medium duration-500 group-hover:translate-y-[-20px] group-hover:opacity-1"
          style={{ fontSize: "20px", fontWeight: 500 }}
        >
          {text}
        </span>

        {/* Second text, appears after hover effect */}
        <span
          className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0 translate-x-[16px]"
          style={{ fontSize: "20px", fontWeight: 500 }}
        >
          {hoveredText || text}
        </span>
      </Link>
    </div>
  );
}
