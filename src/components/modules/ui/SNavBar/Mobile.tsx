"use client";

import Link from "next/link";
import { type ReactElement, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import "@/styles/SNavBar.css";
// Remove the direct import that's causing the error
import { useRouter, usePathname } from "next/navigation";
import CardS from "./CardS";

export default function MobileMenu({
  setMobileMenuOpen,
}: {
  setMobileMenuOpen: (open: boolean) => void;
}): ReactElement {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHolding, setIsHolding] = useState(false);
  const [holdDuration, setHoldDuration] = useState<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const pathname = usePathname();

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
    // Set a timeout for 1 second to trigger the redirect if holding
    const timeout = setTimeout(() => {
      router.push("/panneaux-solaires/");
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }, 1000);
    setHoldDuration(timeout);
  };

  const handleMouseUp = () => {
    setIsHolding(false);
    if (holdDuration) {
      clearTimeout(holdDuration);
      setHoldDuration(null);
    } else {
      // Toggle dropdown if clicked without holding
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

  // For touch devices
  const handleTouchStart = () => {
    handleMouseDown();
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-header bg-transparent">
        <Link href="/">
          <Image
            src="/placeholder.svg?height=91&width=170"
            alt="logo Sunrise"
            className="hidden"
            width={170}
            height={91}
            priority
          />
        </Link>

        <button
          onClick={() => setMobileMenuOpen(false)}
          className="close-menu-button opacity-0"
        >
          <X size={30} />
        </button>
      </div>

      <div className="mobile-menu-links">
        <div className="mobile-dropdown-container" ref={dropdownRef}>
          <button
            ref={buttonRef}
            onClick={() => {
              setIsDropdownOpen((prev) => !prev);
            }}
            className={`mobile-menu-item mobile-dropdown ${
              isHolding
                ? "mobile-dropdown-active"
                : isDropdownOpen
                ? "mobile-dropdown-open"
                : pathname === `/panneaux-solaires`
                ? "mobile-dropdown-notactive"
                : ""
            }`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              WebkitTouchCallout: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none",
              touchAction: "manipulation",
            }}
          >
            <span className="mobile-menu-text">Solutions photovoltaïques</span>
            <ChevronDown
              strokeWidth={2.5}
              className={`mobile-dropdown-icon ${
                isDropdownOpen ? "mobile-dropdown-icon-open" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="mobile-dropdown-menu">
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

        {[
          {
            href: "/garanties",
            text: "Garanties",
            className: "mobile-menu-item",
          },
          { href: "/aides", text: "Aides", className: "mobile-menu-item" },
          {
            href: "/avis-clients",
            text: "Avis",
            className: "mobile-menu-item",
          },
          { href: "/guides", text: "Guides", className: "mobile-menu-item" },
          {
            href: "/qui-sommes-nous",
            text: "Qui sommes nous ?",
            className: "mobile-menu-item",
          },
          {
            href: "/demande-devis-panneau-solaire",
            text: "Demande de devis personnalisé",
            className: "mobile-cta",
          },
          {
            href: "/entreprise",
            text: "Vous êtes une entreprise ?",
            className: "mobile-menu-enterprise",
          },
        ].map(({ href, text, className }) => (
          <Link
            key={href}
            href={href}
            className={className}
            onClick={() => setMobileMenuOpen(false)} // Close mobile menu after navigation
          >
            <span>{text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
