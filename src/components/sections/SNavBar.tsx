"use client";

import Link from "next/link";
import { type ReactElement, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import GetStartButton from "./ui/GetStartButton";
import "@/styles/SNavBar.css";
import { motion } from "framer-motion";
import SunriseLogo from "./NavBar/Sunrise.svg"
export default function SectionSecondaryNavigationBar(): ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="section-main">
      <div className="header-container">
        <div className="header-content">
          <div className="header-inner">
            <Link href="/">
      <Image src={SunriseLogo} alt="logo Sunrise" width={120} height={120} priority className="logo-image" />
            </Link>
            <div className="mobile-menu-button ">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={mobileMenuOpen ? "close-menu-button" : "menu-icon-button"}>
                {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
            <Desktop />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div initial={{ x: "100%" }} animate={{ x: mobileMenuOpen ? "0%" : "100%" }} transition={{ duration: 0.3, ease: "easeInOut" }} className="mobile-menu">
        <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />
      </motion.div>
    </div>
  );
}

function Desktop(): ReactElement {
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
    <div className="nav-container">
      <div className="nav-links" ref={dropdownRef}>
        <div className="dropdown-container">
          <button className={` ${isDropdownOpen ? "dropdown-button-active" : "dropdown-button"}`} onClick={() => setIsDropdownOpen((prev) => !prev)}>
            Solutions photovoltaïques
            <ChevronDown strokeWidth={2.5} className={`dropdown-icon ${isDropdownOpen ? "dropdown-icon-open" : ""}`} />
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
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

        {["garanties", "aides", "avis"].map((item) => (
          <Link key={item} href={`/${item}`} className="nav-link">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>

      <GetStartButton href="/demande-devis" text="Demander un devis personnalisé" />
    </div>
  );
}
function MobileMenu({ setMobileMenuOpen }: { setMobileMenuOpen: (open: boolean) => void }): ReactElement {
  return (
    <div className={`mobile-menu `}>
      <div className="mobile-menu-header bg-transparent">
        <Link href="/">
          <Image src="/images/Sunrise.svg" alt="logo sunvolt" width={170} height={91} priority />
        </Link>

        <button onClick={() => setMobileMenuOpen(false)} className="close-menu-button opacity-0">
          <X size={30} />
        </button>
      </div>

      <div className="mobile-menu-links">
        <div className="mobile-menu-item mobile-dropdown">
          <span className="mobile-menu-text">Solutions photovoltaïques</span>
          <ChevronDown strokeWidth={2.5} className="mobile-dropdown-icon" />
        </div>

        {[
          { href: "/garanties", text: "Garanties", className: "mobile-menu-item" },
          { href: "/aides", text: "Aides", className: "mobile-menu-item" },
          { href: "/avis", text: "Avis", className: "mobile-menu-item" },
          { href: "/guides", text: "Guides", className: "mobile-menu-item" },
          { href: "/qui-sommes-nous", text: "Qui sommes nous ?", className: "mobile-menu-item" },
          { href: "/demande-devis", text: "Demande de devis personnalisé", className: "mobile-cta" },
          { href: "/entreprise", text: "Vous êtes une entreprise ?", className: "mobile-menu-enterprise" }
        ].map(({ href, text, className }) => (
          <Link key={href} href={href} className={className}>
            <span>{text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
function CardS({ cards }: { cards: CardProps[] }) {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

function Card({ imageSrc, title, description, linkText, linkHref }: CardProps) {
  return (
    <button onClick={() => (window.location.href = linkHref)} className="card">
      <Image src={imageSrc || "/placeholder.svg"} alt={title} width={200} height={200}/>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <span className="card-link">{linkText}</span>
      </div>
    </button>
  );
}

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}
