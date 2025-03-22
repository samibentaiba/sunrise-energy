"use client";

import Link from "next/link";
import { ReactElement, useState, useRef, useEffect } from "react";
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
            boxShadow: "none"
          }}
        />
      </Link>
    </div>
  );
}
function Part2(): ReactElement {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex gap-[5rem]">
      <div
        className="hidden md:flex items-center gap-5 space-x-8"
        style={{
          fontSize: "15px",
          fontWeight: "600"
        }}>
        <div className="relative" ref={dropdownRef}>
          <button
            className={`flex items-center text-sm font-medium ${isDropdownOpen ? "text-[#0b68a4] border-b-[#0b68a4] h-10 border-b-[2px]" : "text-gray-800 after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:w-0 after:h-[2px] after:bg-[#0b68a4] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"} hover:text-[#0b68a4] transition-colors 
`}
            onClick={() => setIsDropdownOpen((prev) => !prev)}>
            Solutions photovoltaïques
            <ChevronDown strokeWidth={2.5} className={`ml-1 h-[16px] w-[16px] transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-[30rem] h-[30rem] mt-2 origin-top-left  p-2 z-50">
              <CardS
                cards={[
                  {
                    imageSrc: "/images/panneau-solaire-DMEGC-solar-500-Wc.webp",
                    title: "Gamme SunEco",
                    description: "Le solaire performant et durable au meilleur prix",
                    linkText: "En savoir plus",
                    linkHref: "#"
                  },
                  {
                    imageSrc: "/images/Intervenants-LBC5-1.webp",
                    title: "Gamme SunMax",
                    description: "Le solaire Premium avec panneaux solaires de marque française",
                    linkText: "En savoir plus",
                    linkHref: "#"
                  }
                ]}
              />
            </div>
          )}
        </div>

        <Link
          href="/garanties"
          className="relative text-sm font-medium text-gray-800 hover:text-[#0b68a4] transition-colors 
after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] 
after:w-0 after:h-[2px] after:bg-[#0b68a4] after:transition-all after:duration-300 
after:-translate-x-1/2 hover:after:w-full">
          Garanties
        </Link>

        <Link
          href="/aides"
          className="relative text-sm font-medium text-gray-800 hover:text-[#0b68a4] transition-colors 
after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] 
after:w-0 after:h-[2px] after:bg-[#0b68a4] after:transition-all after:duration-300 
after:-translate-x-1/2 hover:after:w-full">
          Aides
        </Link>

        <Link
          href="/avis"
          className="relative text-sm font-medium text-gray-800 hover:text-[#0b68a4] transition-colors 
after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] 
after:w-0 after:h-[2px] after:bg-[#0b68a4] after:transition-all after:duration-300 
after:-translate-x-1/2 hover:after:w-full">
          Avis
        </Link>
      </div>

      <GetStartButton href="/demande-devis" text="Demander un devis personnalisé" />
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

interface CardsProps {
  cards: CardProps[]; // Use an array of CardProps instead of multiple separate arrays
}

function CardS({ cards }: CardsProps) {
  return (
    <div className="flex gap-5">
      {cards.map((card, index) => (
        <Card key={index} imageSrc={card.imageSrc} title={card.title} description={card.description} linkText={card.linkText} linkHref={card.linkHref} />
      ))}
    </div>
  );
}

function Card({ imageSrc, title, description, linkText, linkHref }: CardProps) {
  return (
    <button
      onClick={() => window.location.href = linkHref}
      className="bg-[#ffffff] rounded-xl z-20 p-4 flex flex-col justify-between h-[450px] text-center 
                 transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105"
    >
      <Image src={imageSrc} alt={title} width={200} height={200} className="w-[300px] h-[250px]" />
      <div className="flex flex-col justify-between h-[10rem]">
        <h3 className="text-lg text-[#000000] font-semibold">{title}</h3>
        <p className="text-[#000000] text-sm">{description}</p>
        <span className="text-blue-600 font-semibold mt-2 inline-block hover:underline">
          {linkText}
        </span>
      </div>
    </button>
  );
}

