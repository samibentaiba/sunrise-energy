"use client";

import Link from "next/link";
import { type ReactElement } from "react";
import Image from "next/image";
import { ChevronDown,  X } from "lucide-react";
import "@/styles/SNavBar.css";
import SunriseLogo from "@/images/modules/NavBar/Sunrise.svg";
import React from 'react';

export default function MobileMenu({ setMobileMenuOpen }: { setMobileMenuOpen: (open: boolean) => void }): ReactElement {
    return (
      <div className={`mobile-menu `}>
        <div className="mobile-menu-header bg-transparent">
          <Link href="/">
            <Image src={SunriseLogo} alt="logo sunvolt" width={170} height={91} priority />
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
            { href: "/demande-devis-panneau-solaire", text: "Demande de devis personnalisé", className: "mobile-cta" },
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
  