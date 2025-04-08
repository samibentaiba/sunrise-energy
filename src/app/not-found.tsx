"use client";
import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center  px-4 py-20 md:py-28 lg:py-32"
      style={{
        backgroundImage: "linear-gradient(150deg, #0a1a78 0%,  #0c5ea6 100%)",
      }}
    >
      <div className="w-full max-w-4xl text-center">
        {/* Large 404 text - different sizes for different screens */}
        <h1 className="text-[90px] md:text-[120px] lg:text-[160px] font-bold text-white leading-none">
          404
        </h1>

        {/* Subtitle */}
        <h4 className="text-white text-xl md:text-2xl font-medium mb-10">
          Oupss… Page non trouvée
        </h4>

        {/* Action buttons and search */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <Link
            href="/"
            className="w-full flex justify-center place-items-center justify-items-center md:w-auto"
          >
            <BlueButton text="Retour à l'accueil" href="/" />
          </Link>

          <div className="relative w-full md:w-auto md:flex-1">
            <form action="/search" method="get" className="w-full">
              <Input
                type="search"
                name="s"
                placeholder="Commencer une recherche"
                className="h-12 pl-14 pr-10 bg-white border-white focus:border-blue-300 w-full"
                required
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute left-0 top-0 h-12 w-12 text-gray-900 font-bold"
              >
                <span className="sr-only">Recherche</span>
                <Search className="h-6 w-6 " strokeWidth={4}   />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
function BlueButton({
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
    <div className="w-full flex justify-center place-items-center justify-items-center">
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
    </div>
  );
}
