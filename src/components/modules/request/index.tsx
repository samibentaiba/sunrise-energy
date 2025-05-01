"use client";

import { useState } from "react";
//import { FormProvider, useForm } from "react-hook-form";
import MultiStep from "./ui/MultiStep";
import Progress from "./ui/Progress";
import { Step, FormValues } from "./types";
import { type ReactElement } from "react";

// Default form steps if none are provided
const DEFAULT_STEPS: Step[] = [
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
    number: 4,
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
    number: 5,
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
    number: 6,
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
    number: 7,
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
];

interface FormContainerProps {
  title?: string;
  steps?: Step[];
}

export default function FormContainer({
  title = "Votre devis gratuit en moins de 48h Votre installation chez vous sous 2 mois*",
  steps = DEFAULT_STEPS,
}: FormContainerProps): ReactElement {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState<FormValues>({});

  const handleComplete = (data: FormValues) => {
    setFormData(data);
    setIsComplete(true);
    console.log("Form submitted with data:", data);
    console.log(formData)
    // Here you would typically send data to your backend
    // Example: sendFormDataToBackend(data);
  };

  const handleReset = () => {
    setIsComplete(false);
    setCurrentStep(0);
    setFormData({});
  };

  return (
    <main className="p-4 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-6 w-1/4 text-center">{title}</h1>
        
        {!isComplete ? (
          <>
            <Progress
              totalSteps={steps.length}
              currentStep={currentStep}
              className="mb-4"
            />

            <MultiStep
              steps={steps}
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
              Nous avons bien reçu vos informations et nous vous contacterons
              bientôt.
            </p>
            <button
              onClick={handleReset}
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