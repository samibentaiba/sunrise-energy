"use client";

import { useState } from "react";
import MultiStep, { type Step } from "./ui/MultiStep";
import Progress from "./ui/Progress";
import { type ReactElement } from "react";
export default function Index({
  title = "Votre devis gratuit en moins de 48h Votre installation chez vous sous 2 mois*",
  Steps = [
    {
      number: 1,
      question: {
        id: "situation",
        title: "Votre situation",
        type: "multiple-choice",
        required: true,
        choices: [
          { id: "A", label: "Propriétaire d'une maison" },
          { id: "B", label: "Propriétaire d'un appartement" },
          { id: "C", label: "Locataire d'une maison ou d'un appartement" },
        ],
      },
    },
    {
      number: 2,
      question: {
        id: "postalCode",
        title: "Quel est le code postal de votre logement ?",
        type: "text-input",
        required: true,
        placeholder: "Répondez ici...",
      },
    },
    {
      number: 3,
      question: {
        id: "startDate",
        title:
          "Quand souhaitez-vous démarrer votre projet d'installation solaire ?",
        type: "multiple-choice",
        required: true,
        choices: [
          { id: "A", label: "Maintenant et j'ai déjà des devis" },
          { id: "B", label: "Dans 3 mois" },
          { id: "C", label: "Dans 6 mois ou plus" },
        ],
      },
    },
    {
      number: 5,
      question: {
        id: "contactConsent",
        title:
          "Acceptez-vous que l'un de nos experts solaires vous rappelle pour réaliser avec vous votre étude solaire personnalisée ?",
        type: "multiple-choice",
        required: true,
        choices: [
          { id: "A", label: "J'accepte" },
          { id: "B", label: "Je n'accepte pas" },
        ],
      },
    },
    {
      number: 6,
      question: {
        id: "phoneNumber",
        title: "Votre numéro de téléphone",
        type: "phone-input",
        required: true,
        description:
          "L'un de nos techniciens experts vous contactera sous 48 heures pour répondre à vos questions et vous fournir une étude ultra-personnalisée et au meilleur prix.",
        countryCode: "FR",
      },
    },
    {
      number: 7,
      question: {
        id: "email",
        title: "Votre adresse email",
        type: "email-input",
        required: true,
        description:
          "Vous recevrez ainsi votre étude solaire après l'appel de notre équipe",
        placeholder: "nom@exemple.com",
      },
    },
    {
      number: 8,
      question: {
        id: "promoCode",
        title: "Votre code promo",
        type: "text-input",
        required: false,
        description:
          "Si vous avez un code vous donnant droit à une réduction, ajoutez-le ici. Votre expert solaire vérifiera sa validité avec vous.",
        placeholder: "Répondez ici...",
      },
    },
  ],
}: {
  title?: string;
  Steps?: Step[];
}): ReactElement {
  const [currentStep, setCurrentStep] = useState(0);
  const [Data, setData] = useState<Record<string, any>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  const handleComplete = (data: Record<string, any>) => {
    setData(data);
    setIsComplete(true);
    console.log(" submitted with data:", data);
  };

  return (
    <main className="p-4 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-6 w-[25%] text-center">{title}</h1>
        {!isComplete ? (
          <>
            <Progress
              totalSteps={Steps.length}
              currentStep={currentStep}
              className="mb-4"
            />

            <MultiStep
              steps={Steps}
              onComplete={handleComplete}
              submitButtonText="Envoyer"
              nextButtonText="Ok"
            />
          </>
        ) : (
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Merci pour votre soumission!
            </h2>
            <p className="text-green-700">
              Nous avons bien reçu vos inations et nous vous contacterons
              bientôt.
            </p>
            <button
              onClick={() => {
                setIsComplete(false);
                setCurrentStep(0);
              }}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Recommencer
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
