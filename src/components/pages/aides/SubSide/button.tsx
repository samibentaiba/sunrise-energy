import { useState } from "react";

import Link from "next/link";
export default function BlueButton({
  text,
  hoveredText,
  href,
}: {
  text: string;
  hoveredText?: string;
  href: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex justify-center items-center">
      <Link
        href={href}
        className="group relative inline-flex items-center justify-center px-6 py-3 bg-[#fbac18] text-white  font-medium rounded-full hover:bg-[#0B476F] overflow-hidden"
        style={{ fontSize: "16px", fontWeight: 600 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          className="transition-all duration-500"
          style={{ fontSize: "14px", fontWeight: 600 }}
        >
          {isHovered ? hoveredText || text : text}
        </span>
      </Link>
    </div>
  );
}