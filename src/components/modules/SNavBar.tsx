"use client";

import Link from "next/link";
import { type ReactElement, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import "@/styles/SNavBar.css";
import { motion } from "framer-motion";
import React from "react";
import MobileMenu from "./ui/SNavBar/Mobile";
import Desktop from "./ui/SNavBar/Desktop";
export default function SNavBar(): ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="section-main ">
      <div className="header-container">
        <div className="header-content">
          <div className="header-inner">
            <Link href="/">
              <Image
                src="/images/modules/NavBar/Sunrise.svg"
                alt="logo Sunrise"
                width={120}
                height={120}
                priority
                className="logo-image"
              />
            </Link>
            <div className="mobile-menu-button ">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={
                  mobileMenuOpen ? "close-menu-button" : "menu-icon-button"
                }
              >
                {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
            <Desktop />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="mobile-menu"
      >
        <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />
      </motion.div>
    </div>
  );
}
