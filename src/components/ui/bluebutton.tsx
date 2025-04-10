"use client";
import Link from "next/link";
import { useState } from "react";

export function BlueButton({
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
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#0B68A4] text-white font-medium rounded-full hover:bg-[#0B476F] overflow-hidden transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="transition-all duration-500 text-xs sm:text-sm md:text-base font-semibold">
        {isHovered ? hoveredText || text : text}
      </span>
    </Link>
  );
}
