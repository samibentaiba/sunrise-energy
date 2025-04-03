"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"
import message from "./FAQ/message.png"
interface FaqItem {
  question: string
  answer: string
  isOpen?: boolean
}

export default function FAQ() {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([
    {
      question: "Quelle est la durée de vie d'un panneau photovoltaïque ?",
      answer:
        "La durée de vie moyenne d'un panneau solaire est aujourd'hui supérieure à 40 ans tout en conservant un haut niveau de rendement. Pour preuve, les fabricants garantissent aujourd'hui 80 % de la puissance initiale après 25 ans. Vos panneaux restent donc performants bien au-delà de la durée nécessaire à votre retour sur investissement de 10 ans maximum chez SunVolt !",
      isOpen: false,
    },
    {
      question: "Pourquoi est-il si important de bien dimensionner la taille de sa centrale solaire ?",
      answer:
        "Avant à l'époque de la revente totale, il fallait mettre un maximum de panneaux pour être le plus rentable. Aujourd'hui, il faut choisir la puissance optimale pour couvrir au plus juste ses besoins en énergie sans investir dans une centrale surdimensionner qui vous coûterait plus cher inutilement.",
      isOpen: false,
    },
    {
      question: "L'autoconsommation c'est quoi ?",
      answer:
        "L'autoconsommation c'est produire de l'électricité et la consommer directement sur le lieu de production. Si vous consommez davantage d'électricité que votre capacité de production, vous achetez au réseau. A l'inverse, si la production est plus importante que la consommation, le surplus est donné ou vendu au réseau.",
      isOpen: false,
    },
  ])

  const toggleFaq = (index: number) => {
    setFaqItems(
      faqItems.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen }
        }
        return item
      }),
    )
  }

  return (
    <section className="mx-auto py-12 md:py-16 lg:py-20">
      <div className="container px-4 flex gap-10 flex-col md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="flex justify-center w-full">
            <Image
              src={message}
              alt="Speech bubble icon"
              width={120}
              height={120}
              className="mb-5"
            />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Nos experts solaire répondent à vos <span className="bg-[#00acc2] text-white px-3 py-2">questions</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 w-7xl space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-[#f7f7f7] rounded-none overflow-hidden">
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 mr-4 bg-[#fbac18] text-white">
                    {item.isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                  <h3 className="text-2xl font-normal text-[#040922]">{item.question}</h3>
                </div>
              </button>
              {item.isOpen && (
                <div className="px-6 pb-4 pt-1">
                  <p className="text-[#040922] text-lg">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

