"use client"

import { useState } from "react"
import { RandomAvatar } from "react-random-avatars"

export default function ReviewSummary() {
  // Names for the avatars
  const names = ["Brigitte", "Antoine", "Sophie", "AI"]
  // State to track if content is expanded
  const [isExpanded, setIsExpanded] = useState(true)

  // Toggle function to expand/collapse content
  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    
      <div className="h-auto p-5 rounded-md shadow-md bg-gradient-to-br from-[#E0F6FE] to-[#EED8F1]">
        {/* Header with avatars and title */}
        <div className="flex items-center">
          <div className="flex mr-3">
            {names.map((name, index) => (
              <div key={name} className={index > 0 ? "-ml-3" : ""}>
                <RandomAvatar name={name} size={40} />
              </div>
            ))}
          </div>
          <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            <div className="font-bold text-black pr-6 mb-0.5 overflow-hidden text-ellipsis whitespace-nowrap">
              Résumé des commentaires
            </div>
          </div>
        </div>

        {/* Review content */}
        <div
          className={`mt-4 text-left text-[15px] leading-[21.75px] overflow-hidden transition-all duration-500 ${
            isExpanded ? "h-[196px]" : "h-[111px]"
          }`}
        >
          Les clients apprécient Sunrise France pour leur service professionnel, leurs conseils utiles et un processus
          d&apos;installation fluide. Les installations solaires de Sunrise sont louées pour leur qualité et leur
          efficacité dans le suivi de la consommation d&apos;énergie. Cette expérience positive amène les clients à
          recommander Sunrise pour des solutions solaires.
        </div>

        {/* Hide/Show button */}
        <div className="pt-1.5 text-left">
          <button
            onClick={toggleExpand}
            className="text-[13.5px] text-black/50 whitespace-nowrap hover:text-black/70 transition-colors"
          >
            {isExpanded ? "Cacher" : "Afficher"}
          </button>
        </div>
      </div>

  )
}

