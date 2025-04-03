"use client";

import Link from "next/link";
import Image from "next/image";
import { SiFacebook, SiYoutube, SiLinkedin, SiInstagram } from "react-icons/si";
import SunriseWhite from "./Footer/Sunrise-white.svg";
export default function Footer() {
  return (
    <footer className="bg-[#0a0b1e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and ratings column */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="inline-block">
              <Image src={SunriseWhite} alt="SunVolt Logo" width={180} height={50} />
            </Link>
            <div className="mt-4">
              <p className="font-medium">Avis Bien</p>
              <div className="flex items-center mt-1">
                <p className="text-xl font-bold mr-2">4.0</p>
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm mt-1">49 avis Google</p>
            </div>
          </div>

          {/* First links column */}
          <div className="space-y-4">
            <Link href="/" className="block hover:text-gray-300 transition-colors">
              Offre solaire dédiée aux PME PMI
            </Link>
            <Link href="/qui-sommes-nous" className="block hover:text-gray-300 transition-colors">
              Qui sommes nous ?
            </Link>
            <Link href="/rejoindre" className="block hover:text-gray-300 transition-colors">
              Rejoindre le réseau de techniciens SunVolt
            </Link>
            <Link href="/avis-clients" className="block hover:text-gray-300 transition-colors">
              Avis clients
            </Link>
            <Link href="/parrainage" className="block hover:text-gray-300 transition-colors">
              Programme de parrainage
            </Link>
          </div>

          {/* Second links column */}
          <div className="space-y-4">
            <Link href="/comparez" className="block hover:text-gray-300 transition-colors">
              Comparez votre devis solaire
            </Link>
            <Link href="/devis" className="block hover:text-gray-300 transition-colors">
              Votre devis Panneau Solaire en moins de 24 heures
            </Link>
            <Link href="/politique-donnees" className="block hover:text-gray-300 transition-colors">
              Politique de données personnelles
            </Link>
            <Link href="/mentions-legales" className="block hover:text-gray-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/contact" className="block hover:text-gray-300 transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Copyright and social media */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0 text-center md:text-left">
            © 2025 SunVolt - Tous droits réservés |
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              {" "}
              Mentions légales
            </Link>{" "}
            |
            <Link href="/politique-donnees" className="hover:text-white transition-colors">
              {" "}
              Politique de gestion des données personnelles
            </Link>
            <div className="mt-2">
              <button className="text-gray-400 hover:text-white transition-colors">Cliquez-ici pour modifier vos préférences en matière de cookies</button>
            </div>
          </div>

          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
              <SiFacebook size={20} />
            </Link>
            <Link href="https://youtube.com" className="hover:text-gray-300 transition-colors" aria-label="YouTube">
              <SiYoutube size={20} />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-gray-300 transition-colors" aria-label="LinkedIn">
              <SiLinkedin size={20} />
            </Link>
            <Link href="https://instagram.com" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
              <SiInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
