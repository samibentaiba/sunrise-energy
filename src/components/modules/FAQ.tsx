"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import message from "@/images/modules/FAQ.png";

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

// Update the FAQProps interface to make props optional with default values
interface FAQProps {
  faqData?: FAQItem[];
  title?: string;
  subtitle?: string;
}

// Update the component definition to include default values
const FAQ: React.FC<FAQProps> = ({
  faqData = [
    {
      question: "Quelle est la durée de vie d'un panneau photovoltaïque ?",
      answer:
        "La durée de vie moyenne d'un panneau solaire est aujourd'hui supérieure à 40 ans tout en conservant un haut niveau de rendement. Pour preuve, les fabricants garantissent aujourd'hui 80 % de la puissance initiale après 25 ans. Vos panneaux restent donc performants bien au-delà de la durée nécessaire à votre retour sur investissement de 10 ans maximum chez SunVolt !",
      isOpen: false,
    },
    {
      question:
        "Pourquoi est-il si important de bien dimensionner la taille de sa centrale solaire ?",
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
  ],
  title = "On répond à vos questions",
  subtitle = "Découvrez les réponses aux questions les plus fréquemment posées",
}) => {
  const [faqs, setFaqs] = useState<FAQItem[]>(
    faqData.map((faq) => ({ ...faq, isOpen: false }))
  );

  const toggleFaq = (index: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <section className="mx-auto px-6 w-full max-w-[1200px] flex flex-col py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="flex flex-col items-center text-center">
        <Image
          src={message || "/placeholder.svg"}
          alt="Speech bubble icon"
          width={120}
          height={120}
          className="mb-3 md:mb-5 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
        />
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="mt-3 text-gray-600">{subtitle}</p>
      </div>

      <div className=" mt-6  md:mt-8 lg:mt-12 w-full space-y-3 md:space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className=" bg-[#f7f7f7]">
            <button
              className="flex w-full items-center justify-between px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center  h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-4 bg-[#fbac18] text-white">
                  {item.isOpen ? (
                    <Minus size={16} className="md:size-20" />
                  ) : (
                    <Plus size={16} className="md:size-20" />
                  )}
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-normal">
                  {item.question}
                </h3>
              </div>
            </button>
            {item.isOpen && (
              <div className="px-3 sm:px-4 md:px-6 pb-3 md:pb-4 pt-1">
                <p className="text-base md:text-lg">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
