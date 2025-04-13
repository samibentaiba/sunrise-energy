"use client";

import Link from "next/link";
import { type ReactElement, useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import "@/styles/SNavBar.css";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import CardS from "./CardS";

export default function Desktop(): ReactElement {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHolding, setIsHolding] = useState(false);
  const [holdDuration, setHoldDuration] = useState<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseDown = () => {
    setIsHolding(true);
    // Set a timeout for 2 seconds to trigger the redirect if holding
    const timeout = setTimeout(() => {
      router.push("/panneaux-solaires/");
    }, 1000);
    setHoldDuration(timeout);
  };

  const handleMouseUp = () => {
    setIsHolding(false);
    if (holdDuration) {
      clearTimeout(holdDuration);
      setHoldDuration(null);
    } else {
      // Redirect if clicked without holding
      setIsDropdownOpen((prev) => !prev);
    }
  };

  const handleMouseLeave = () => {
    setIsHolding(false);
    if (holdDuration) {
      clearTimeout(holdDuration);
      setHoldDuration(null);
    }
  };
  return (
    <div className="nav-container">
      <div className="nav-links" ref={dropdownRef}>
        <div className="dropdown-container">
          <button
            ref={buttonRef}
            className={`${
              isHolding
                ? "dropdown-button-active"
                : isDropdownOpen
                ? "dropdown-button-open"
                : pathname === `/panneaux-solaires`
                ? "dropdown-button-notactive"
                : "dropdown-button"
            } 
            
            `}
            onClick={() => {
              setIsDropdownOpen((prev) => !prev);
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              WebkitTouchCallout: "none" /* iOS Safari */,
              WebkitUserSelect: "none" /* Safari */,
              MozUserSelect: "none" /* Firefox */,
              msUserSelect: "none" /* IE/Edge */,
              userSelect: "none" /* Standard */,
              touchAction: "manipulation" /* Prevent zoom on double-tap */,
            }}
          >
            Solutions photovoltaïques
            <ChevronDown
              strokeWidth={2.5}
              className={`dropdown-icon ${
                isDropdownOpen ? "dropdown-icon-open" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <CardS
                cards={[
                  {
                    imageSrc: "/images/modules/FProduct.png",
                    title: "Gamme SunEco",
                    description:
                      "Le solaire performant et durable au meilleur prix",
                    linkText: "En savoir plus",
                    linkHref: "#",
                  },
                  {
                    imageSrc: "/images/modules/SProduct.png",
                    title: "Gamme SunMax",
                    description:
                      "Le solaire Premium avec panneaux solaires de marque française",
                    linkText: "En savoir plus",
                    linkHref: "#",
                  },
                ]}
              />
            </div>
          )}
        </div>

        {["garanties", "aides", "avis"].map((item) => (
          <Link
            key={item}
            href={`/${item == "avis" ? "avis-clients" : item}`}
            className={`nav-link ${
              pathname === `/${item}` ? "nav-link-active" : ""
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>

      <GetStartButton
        href="/demande-devis-panneau-solaire"
        text="Demander un devis personnalisé"
      />
    </div>
  );
}

import { FaAngleDoubleRight } from "react-icons/fa";

function GetStartButton({
  text="text",
  hoveredText="hoveredText",
  href="href",
  isIcon = true,
}: {
  text: string;
  hoveredText?: string;
  href: string;
  isIcon?: boolean;
}): ReactElement {
  return (
    <div className="w-full flex justify-center items-center">
      <Link
        href={href}
        className="
    group relative inline-flex gap-2 items-center justify-center 
    px-7 py-4 bg-[#fbac18] text-white font-medium rounded-full 
    hover:bg-[#0b68a4] hover:border-[2px] hover:px-[26px] hover:py-[14px] hover:border-[#003366] overflow-hidden"
        style={{
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        {isIcon ? (
          <FaAngleDoubleRight className="text-white text-2xl" size={15} />
        ) : null}
        {/* First text, disappears on hover */}
        <span
          className="transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-1"
          style={{ fontSize: "13.4px", fontWeight: 600 }}
        >
          {text}
        </span>
        {/* Second text, appears after hover effect */}
        <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="group relative inline-flex items-center justify-center ">
            {isIcon ? (
              <FaAngleDoubleRight
                className="text-white opacity-0 text-2xl"
                size={15}
              />
            ) : null}
            <span
              className=" translate-y-[2px] translate-x-[5px] "
              style={{ fontSize: "13.4px", fontWeight: 600 }}
            >
              {text || hoveredText}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
