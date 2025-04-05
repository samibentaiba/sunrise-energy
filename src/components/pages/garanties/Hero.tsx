"use client"

import GetStartButton from "./Hero/GetStartButton"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div
      className="relative md:h-[420px] h-[500px] z-0 p-0 m-0 w-full flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/pages/garanties/Hero.jpeg')",
      }}
    >
      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-[#00061b] opacity-40"></div>
      <div className="relative p-0 m-0 w-full h-full flex items-center text-white">
        {/* Blue Overlay */}
        <div className="absolute left-[-5rem] md:left-0  inset-0  h-full">
          <Image
            src="/images/modules/hero/BlueShape.svg"
            alt="Blue background shape"
            fill
            style={{
              objectFit: "cover",
              zIndex: -1,
              opacity: 0.85,
            }}
            priority
          />
        </div>

        {/* Mobile-optimized content container */}
        {isMobile ? (
          <div className="relative w-full px-6 py-8 flex flex-col items-start justify-center">
            <div className="max-w-[90%]">
              <h1 className="text-2xl sm:text-3xl font-semibold leading-tight mb-4" style={{ fontWeight: 600 }}>
                Des garanties uniques
                <br />& des engagements forts
              </h1>

              <p className="text-sm leading-relaxed mb-6">
                Afin de vous assurer une sérénité qui dure dans le temps, vous bénéficiez de garanties étendues
                exclusives SunVolt pour votre installation sur-mesure de panneaux solaires en autoconsommation
              </p>

              <GetStartButton isIcon={false} text="Je demande un RDV" href="demande-devis-panneau-solaire" />
            </div>
          </div>
        ) : (
          /* Desktop layout - unchanged from user's working version */
          <div className="relative h-full flex left-[20%] md:left-[40%] w-full">
            <div
              className="absolute h-full flex flex-col justify-center pl-4 sm:pl-8 md:pl-[4.8rem] pr-4 sm:pr-8 md:pr-16 gap-4 md:gap-[2rem] lg:gap-[3rem]"
              style={{ width: "100%", maxWidth: "1200px" }}
            >
              <h1
                className="text-3xl sm:text-4xl md:text-[2.3rem] lg:text-[3rem] font-semibold leading-tight"
                style={{ fontWeight: 600 }}
              >
                Des garanties uniques
                <br />& des engagements forts
              </h1>

              <p className="text-base w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
                Afin de vous assurer une sérénité qui dure dans le temps, vous bénéficiez de garanties étendues
                exclusives SunVolt pour votre installation sur-mesure de panneaux solaires en autoconsommation
              </p>

              <div className="mt-2">
                <GetStartButton
                  isIcon={false}
                  text="Je demande un RDV avec un conseiller"
                  href="demande-devis-panneau-solaire"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

