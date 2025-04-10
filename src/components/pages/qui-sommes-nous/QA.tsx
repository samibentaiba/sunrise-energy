"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactElement } from "react";

const faqData = [
  {
    id: "item-1",
    question:
      "Le routeur solaire est-il rentable pour une installation photovoltaïque ?",
    answer: `Oui, le routeur solaire améliore la rentabilité d'une <strong>installation photovoltaïque</strong> en maximisant l'autoconsommation et en évitant l'envoi d'énergie vers le réseau à un faible prix de rachat. Cela accélère le retour sur investissement des panneaux solaires et réduit la période d'amortissement de l'installation.`,
  },
  {
    id: "item-2",
    question:
      "Quels critères prendre en compte pour choisir un routeur solaire ?",
    answer: `Lors du choix d'un routeur solaire, il faut considérer la puissance maximale qu'il supporte, le nombre d'appareils qu'il peut gérer, ses fonctions de programmation, sa compatibilité avec les appareils existants, et la qualité de son interface utilisateur pour suivre la consommation et la production en temps réel.`,
  },
  {
    id: "item-3",
    question:
      "Quelle est la différence entre un routeur solaire et un gestionnaire d'énergie ?",
    answer: `Le <strong>routeur solaire</strong> redirige l'excédent d'énergie vers des appareils spécifiques, tandis que le gestionnaire d'énergie est plus avancé : il optimise l'utilisation de l'énergie en fonction des habitudes de consommation, de la météo et des tarifs heures creuses, offrant une gestion plus complète de l'énergie du foyer.`,
  },
  {
    id: "item-4",
    question: "Comment fonctionne un routeur solaire photovoltaïque ?",
    answer: `Le routeur solaire mesure en temps réel la production et la consommation d'énergie de la maison. Lorsque la production dépasse la consommation, il redirige l'excédent vers des appareils spécifiques, comme un chauffe-eau ou une borne de recharge pour véhicule électrique, pour une utilisation optimale de l'énergie produite.`,
  },
  {
    id: "item-5",
    question:
      "Quels sont les avantages d'un routeur solaire pour une installation photovoltaïque ?",
    answer: `Le routeur solaire augmente l'autoconsommation en réduisant la dépendance au réseau public. Il offre une gestion flexible des appareils, augmente le retour sur investissement des panneaux solaires, et permet de mieux utiliser l'énergie renouvelable, contribuant ainsi à un mode de consommation plus durable et économique.`,
  },
];

export default function SolarRouterFAQ(): ReactElement {
  return (
    <div className="border-none  py-24 md:py-32 bg-white">
      <div className="border-none container mx-auto px-4">
        <div className="border-none grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-none md:col-span-1">
            <h2 className="border-none text-2xl font-bold mb-6">
              Questions fréquemment posées
            </h2>
          </div>

          <div className="border-none md:col-span-2">
            <Accordion
              type="single"
              collapsible
              className="border-none space-y-4"
            >
              {faqData.map(({ id, question, answer }) => (
                <AccordionItem
                  key={id}
                  value={id}
                  className="border-none hover:text-blue-950 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="border-none px-6 py-4 bg-gray-100 text-xl text-left font-medium hover:no-underline">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="border-none px-6 py-4 text-black bg-gray-100">
                    <p dangerouslySetInnerHTML={{ __html: answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
