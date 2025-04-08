"use client";

import Link from "next/link";
import Image from "next/image";
import { SiFacebook, SiYoutube, SiLinkedin, SiInstagram } from "react-icons/si";
import SunriseWhite from "@/images/modules/Footer/Sunrise-white.svg";
import Star from "@/images/modules/Footer/Star.svg";
import EmptyStar from "@/images/modules/Footer/EmptyStar.svg"
export default function Footer() {
  return (
    <footer className="bg-[#0a0b1e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and ratings column */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={SunriseWhite}
                alt="Sunrise Logo"
                width={180}
                height={50}
              />
            </Link>
            <div className="mt-4">
              <p className="font-medium">Avis Bien</p>
              <div className="flex items-center mt-1">
                <p className="text-xl font-bold mr-2">4.0</p>
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <Image
                      key={star}
                      src={Star}
                      alt="star"
                      width={20}
                      height={20}
                      
                    />
                  ))}
                  <Image
                    
                    src={EmptyStar}
                    alt="star"
                    width={20}
                    height={20}
                    
                  />
                </div>
              </div>
              <p className="text-sm mt-1">49 avis Google</p>
            </div>
          </div>

          {/* First links column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="block hover:text-gray-300 transition-colors"
            >
              Offre solaire dédiée aux PME PMI
            </Link>
            <Link
              href="/qui-sommes-nous"
              className="block hover:text-gray-300 transition-colors"
            >
              Qui sommes nous ?
            </Link>
            <Link
              href="/rejoindre"
              className="block hover:text-gray-300 transition-colors"
            >
              Rejoindre le réseau de techniciens Sunrise
            </Link>
            <Link
              href="/avis-clients"
              className="block hover:text-gray-300 transition-colors"
            >
              Avis clients
            </Link>
            <Link
              href="/parrainage"
              className="block hover:text-gray-300 transition-colors"
            >
              Programme de parrainage
            </Link>
          </div>

          {/* Second links column */}
          <div className="space-y-4">
            <Link
              href="/comparez"
              className="block hover:text-gray-300 transition-colors"
            >
              Comparez votre devis solaire
            </Link>
            <Link
              href="/devis"
              className="block hover:text-gray-300 transition-colors"
            >
              Votre devis Panneau Solaire en moins de 24 heures
            </Link>
            <Link
              href="/politique-donnees"
              className="block hover:text-gray-300 transition-colors"
            >
              Politique de données personnelles
            </Link>
            <Link
              href="/mentions-legales"
              className="block hover:text-gray-300 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/contact"
              className="block hover:text-gray-300 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Copyright and social media */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0 text-center md:text-left">
            © 2025 Sunrise - Tous droits réservés |
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors"
            >
              {" "}
              Mentions légales
            </Link>{" "}
            |
            <Link
              href="/politique-donnees"
              className="hover:text-white transition-colors"
            >
              {" "}
              Politique de gestion des données personnelles
            </Link>
            <div className="mt-2">
              <button className="text-gray-400 hover:text-white transition-colors">
                Cliquez-ici pour modifier vos préférences en matière de cookies
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              className="hover:text-gray-300 transition-colors"
              aria-label="Facebook"
            >
              <SiFacebook size={20} />
            </Link>
            <Link
              href="https://youtube.com"
              className="hover:text-gray-300 transition-colors"
              aria-label="YouTube"
            >
              <SiYoutube size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              className="hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
