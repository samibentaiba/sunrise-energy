"use client";
import Link from "next/link";
import Features from "@/components/pages/demande-devis-panneau-solaire/Features";
import Form from "@/components/pages/demande-devis-panneau-solaire/Form";
import Blog from "@/components/modules/Blog";
import Proches from "@/components/modules/Proches";
import Reviews from "@/components/modules/Reviews";
import Guarantees from "@/components/modules/Guarantees";
import Numbers from "@/components/pages/demande-devis-panneau-solaire/Numbers";
export default function DemandeDevisPanneauSolaire() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Form />
      <Features />
      <Guarantees />
      <Blog />
      <Proches />
      <Reviews />
      <GetStartButton
        text="Je demande une étude gratuite"
        hoveredText="Je demande une étude gratuite"
        href="/contact"
      />
      <Numbers />
    </div>
  );
}
import { ReactElement } from "react";

function GetStartButton({
  text,
  hoveredText,
  href,
}: {
  text: string;
  hoveredText?: string;
  href: string;
}): ReactElement {
  return (
    <div className="w-full flex justify-center p-6 items-center">
      <Link
        href={href}
        className="
    group relative inline-flex text-xl  items-center justify-center 
    px-8 py-4 bg-[#fbac18] text-white font-medium rounded-full 
    hover:bg-[#0b68a4] hover:border-[#003366] overflow-hidden"
      >
        <span className="transition-all duration-500 group-hover:translate-y-[-100%] group-hover:opacity-1">
          {text}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 h-4 w-4"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        {/* First text, disappears on hover */}

        {/* Second text, appears after hover effect */}
        <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="group relative inline-flex items-center justify-center ">
            <span className=" translate-y-[-10%] ">{text || hoveredText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4 opacity-0"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
