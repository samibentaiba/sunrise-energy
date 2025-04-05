"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Team() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
      },
    },
  }

  return (
    <section
      ref={ref}
      className="w-full py-16 md:py-24 relative"
      style={{
        background:
          "linear-gradient(152deg, rgba(14, 21, 21, 0.85) 18%, rgba(14, 21, 21, 0.25) 61%), url('images/pages/garanties/Team.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center positionY 50%",
        backgroundColor: "#0f1616",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center">
          <motion.div className="w-full mt-16 mb-5" initial="hidden" animate={controls} variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:w-[70%]">
              Une équipe engagée dédiée à votre projet
            </h2>
            <div className="hidden md:block text-white md:w-[60%] mb-8">
              <p>
                Tout au long du projet, vous êtes accompagnés par un expert en énergie solaire et un responsable des
                démarches administratives. Notre mission sera la réalisation de votre installation photovoltaïque.
              </p>
            </div>
          </motion.div>

          <motion.div className="w-full md:w-1/2 mb-16 mt-5" initial="hidden" animate={controls} variants={fadeInUp}>
            <div className="bg-white bg-opacity-90 p-6 rounded-sm shadow-sm">
              <div className="text-gray-900">
                <p>Nous nous engageons par contrat à :</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>
                    Obtenir toutes les autorisations administratives nécessaires à la réalisation de votre installation
                  </li>
                  <li>Vous fournir une installation photovoltaïque impeccable</li>
                  <li>Assurer le raccordement des panneaux solaires</li>
                  <li>
                    A renseigner la déclaration attestant de l&apos;achèvement et de la conformité de
                    l&apos;installation
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

