"use client";

import Link from "next/link";
import { type ReactElement, useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import GetStartButton from "./GetStartButton";
import "@/styles/SNavBar.css";
import React from "react";
import { useRouter } from "next/navigation";
import CardS from "./CardS";

export default function Desktop(): ReactElement {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHolding, setIsHolding] = useState(false);
  const [holdDuration, setHoldDuration] = useState<NodeJS.Timeout | null>(null);
  const router = useRouter();

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
    }, 2000);
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
                : " dropdown-button"
            } `}
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
                    imageSrc: "/images/panneau-solaire-DMEGC-solar-500-Wc.webp",
                    title: "Gamme SunEco",
                    description:
                      "Le solaire performant et durable au meilleur prix",
                    linkText: "En savoir plus",
                    linkHref: "#",
                  },
                  {
                    imageSrc: "/images/Intervenants-LBC5-1.webp",
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
          <Link key={item} href={`/${item}`} className="nav-link">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>

      <GetStartButton
        href="/demande-devis"
        text="Demander un devis personnalisé"
      />
    </div>
  );
}
