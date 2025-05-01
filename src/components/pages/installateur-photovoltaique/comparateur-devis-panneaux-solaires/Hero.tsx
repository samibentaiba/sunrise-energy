"use client"

import type React from "react"
import {  Check, Clock, DollarSign } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#22253d]">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#22253d] to-[rgba(4,9,34,0.12)]"
        style={{
          backgroundImage: `linear-gradient(67deg, #22253d 0%, rgba(4,9,34,0.12) 100%), url('/images/modules/Hero/Hero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative mx-auto px-5 py-12 md:py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="pt-10 md:pt-24">
            <p className="text-white text-lg md:text-xl mb-4">Comparateur Devis Panneaux Solaires</p>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Comparez et découvrez le vrai prix d&apos;une installation solaire en 3 clics
            </h1>
          </div>

          <div className="hidden lg:block">
            {/* This space is intentionally left empty to match the original layout */}
          </div>
        </div>

        {/* Three benefits section */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-16">
          <BenefitCard
            icon={<Check className="h-6 w-6 text-[#f73760]" />}
            title="Pour faire le bon choix"
            description="Comparer plusieurs devis, c'est trouver la meilleure offre pour votre centrale solaire"
          />

          <BenefitCard
            icon={<Clock className="h-6 w-6 text-[#f73760]" />}
            title="Pour gagner du temps"
            description="En 3 clics et sans inscription, vous savez si votre devis d'installation solaire est au bon prix"
          />

          <BenefitCard
            icon={<DollarSign className="h-6 w-6 text-[#f73760]" />}
            title="Pour économiser"
            description="Faites jouer la concurrence et recevez une offre comparative de qualité et à un tarif compétitif"
          />
        </div>
      </div>
    </div>
  )
}

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="pl-5 border-l-2 border-[#f73760] transform transition-transform duration-300 hover:-translate-y-2">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h2 className="text-white text-xl md:text-2xl font-semibold">{title}</h2>
      </div>
      <p className="text-white/70 text-base md:text-lg">{description}</p>
    </div>
  )
}
