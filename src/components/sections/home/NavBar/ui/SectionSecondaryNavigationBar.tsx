"use client";

import Link from "next/link";
import { ReactElement, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import GetStartButton from "./GetStartButton";
export default function SectionMain(): ReactElement {
  return (
    <div className="w-full font-sans">
      <div className="bg-white px-14 py-2">
        <div className="flex justify-around w-full">
          <div className="flex justify-between w-full items-center h-20">
            <Part1 />
            <Part2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Part1(): ReactElement {
  return (
    <div className="flex items-center">
      <Link href="/">
        <Image
          src="/images/Logo.png"
          alt="logo sunvolt"
          width={170}
          height={91}
          priority
          style={{
            borderStyle: "none",
            verticalAlign: "top",
            maxWidth: "100%",
            height: "auto",
            boxSizing: "border-box",
            boxShadow: "none",
          }}
        />
      </Link>
    </div>
  );
}
function Part2(): ReactElement {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex gap-[5rem]">
      <div
        className="hidden md:flex items-center gap-5 space-x-8"
        style={{
          transform: "scaleY(1)",
          fontStyle: "normal",
          fontStretch: "100%",
          fontSize: "15px",
          fontWeight: "600",
        }}
      >
        <div
          className="relative"
          style={{
            transform: "scaleY(1)",
            fontStyle: "normal",
            fontStretch: "100%",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          <button
            className="flex items-center text-sm font-medium text-gray-800 hover:text-[#0b68a4] transition-colors 
after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] 
after:w-0 after:h-[2px] after:bg-[#0b68a4] after:transition-all after:duration-300 
after:-translate-x-1/2 hover:after:w-full"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{
              transform: "scaleY(1)",
              fontStyle: "normal",
              fontStretch: "100%",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Solutions photovoltaïques
            <ChevronDown
              strokeWidth={2.5}
              className={`ml-1 h-[16px] w-[16px] transition-transform ${isDropdownOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-56 mt-2 origin-top-left  ">
              <Card
                imageSrc="/path-to-your-image.jpg"
                title="Gamme SunEco"
                description="Le solaire performant et durable au meilleur prix"
                linkText="En savoir plus"
                linkHref="#"
              />
            </div>
          )}
        </div>

        <Link
          href="/garanties"
          className="relative text-sm font-medium text-gray-800 hover:text-[#0b68a4] transition-colors 
after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] 
after:w-0 after:h-[2px] after:bg-[#0b68a4] after:transition-all after:duration-300 
after:-translate-x-1/2 hover:after:w-full"
          style={{
            transform: "scaleY(1)",
            fontStyle: "normal",
            fontStretch: "100%",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Garanties
        </Link>

        <Link
          href="/aides"
          className="relative text-sm font-medium text-gray-800 hover:text-[#0b68a4] transition-colors 
after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] 
after:w-0 after:h-[2px] after:bg-[#0b68a4] after:transition-all after:duration-300 
after:-translate-x-1/2 hover:after:w-full"
          style={{
            transform: "scaleY(1)",
            fontStyle: "normal",
            fontStretch: "100%",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Aides
        </Link>

        <Link
          href="/avis"
          className="relative text-sm font-medium text-gray-800 hover:text-[#0b68a4] transition-colors 
after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] 
after:w-0 after:h-[2px] after:bg-[#0b68a4] after:transition-all after:duration-300 
after:-translate-x-1/2 hover:after:w-full"
          style={{
            transform: "scaleY(1)",
            fontStyle: "normal",
            fontStretch: "100%",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Avis
        </Link>
      </div>

      <GetStartButton
        href="/demande-devis"
        text="Demander un devis personnalisé"
      />
    </div>
  );
}

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

function Card(
  { imageSrc, title, description, linkText, linkHref }: CardProps,
) {
  return (
    <div className="bg-[#ffffff] rounded-xl z-20 p-4  max-w-sm text-center ">
      <Image
        src={imageSrc}
        alt={title}
        width={112} // 28 * 4 (tailwind size conversion)
        height={112}
        className="mx-auto text-[#000000] w-28 h-28 object-contain mb-3"
      />
      <h3 className="text-lg text-[#000000] font-semibold">{title}</h3>
      <p className="text-[#000000] text-sm">{description}</p>
      <a
        href={linkHref}
        className="text-blue-600 font-semibold mt-2 inline-block hover:underline"
      >
        {linkText}
      </a>
    </div>
  );
}
