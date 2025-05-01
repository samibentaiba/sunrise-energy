"use client";

import { useForm, FormProvider, useFormContext, Controller } from "react-hook-form";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Question, Step, FormValues } from "../types";
import { Input } from "@/components/ui/input";

type MultiStepProps = {
  steps: Step[];
  onComplete: (answers: FormValues) => void;
  submitButtonText?: string;
  nextButtonText?: string;
  className?: string;
};

// Component to render different question types
function QuestionField({ question }: { question: Question }) {
  const { control, formState: { errors } } = useFormContext();
  
  return (
    <div className="mb-6">
      {question.type === "multiple-choice" && question.choices && (
        <Controller
          name={question.id}
          control={control}
          rules={{ required: question.required ? "Veuillez remplir ce champ" : false }}
          render={({ field }) => (
            <div className="space-y-2">
              {question.choices?.map((choice) => (
                <div
                  key={choice.id}
                  className={cn(
                    "border rounded-md p-3 cursor-pointer",
                    field.value === choice.id
                      ? "bg-blue-100 border-blue-300"
                      : "bg-white border-gray-300 hover:bg-gray-50"
                  )}
                  onClick={() => field.onChange(choice.id)}
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-800 rounded px-2 mr-2 font-bold">
                      {choice.id}
                    </div>
                    <div className="text-blue-800">{choice.label}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        />
      )}

      {question.type === "text-input" && (
        <Controller
          name={question.id}
          control={control}
          rules={{ required: question.required ? "Veuillez remplir ce champ" : false }}
          render={({ field }) => (
            <div>
              <input
                type="text"
                className={cn(
                  "w-full p-2 border-b-2 border-blue-500 bg-transparent outline-none",
                  errors[question.id] && "border-red-500"
                )}
                placeholder={question.placeholder || "Répondez ici..."}
                {...field}
              />
            </div>
          )}
        />
      )}

      {question.type === "email-input" && (
        <Controller
          name={question.id}
          control={control}
          rules={{ 
            required: question.required ? "Veuillez remplir ce champ" : false,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Adresse email invalide"
            }
          }}
          render={({ field }) => (
            <div>
              <input
                type="email"
                className={cn(
                  "w-full p-2 border-b-2 border-blue-500 bg-transparent outline-none",
                  errors[question.id] && "border-red-500"
                )}
                placeholder={question.placeholder || "nom@exemple.com"}
                {...field}
              />
            </div>
          )}
        />
      )}

      {question.type === "phone-input" && (
        <Controller
          name={question.id}
          control={control}
          rules={{ 
            required: question.required ? "Veuillez remplir ce champ" : false,
            pattern: {
              value: /^[0-9\s+()-]+$/,
              message: "Numéro de téléphone invalide"
            }
          }}
          render={({ field }) => (
            <div className="flex items-center">
              <div className="flex items-center mr-2 border-b-2 border-blue-500 pb-2">
                
              </div>
              <Input
                type="tel"
                className={cn(
                  "w-full focus-visible:ring-0 p-2 border-b-2 border-white bg-transparent outline-none active:!border-none active:shadow-none",
                  errors[question.id] && "border-red-500"
                )}
                placeholder="06 12 34 56"
                {...field}
              />
            </div>
          )}
        />
      )}

      {/* Error message */}
      {errors[question.id] && (
        <div className="mt-2 text-red-500 text-sm flex items-center">
          <AlertTriangle className="w-4 h-4 mr-1" />
          {errors[question.id]?.message?.toString()}
        </div>
      )}
    </div>
  );
}

export default function MultiStep({
  steps,
  onComplete,
  submitButtonText = "Envoyer",
  nextButtonText = "Ok",
  className,
}: MultiStepProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm<FormValues>({
    mode: "onChange",
    defaultValues: steps.reduce((acc, step) => {
      acc[step.question.id] = "";
      return acc;
    }, {} as FormValues)
  });
  
  const { handleSubmit, trigger } = methods;

  const isLastStep = currentStep === steps.length - 1;
  const currentQuestion = steps[currentStep].question;

  const handleNext = async () => {
    // Validate current step
    const isValid = await trigger(currentQuestion.id);
    
    if (!isValid) return;

    // If last step, submit form
    if (isLastStep) {
      handleSubmit(onComplete)();
      return;
    }

    // Move to next step
    setCurrentStep(currentStep + 1);
  };

  const handleNavigation = (direction: 'up' | 'down') => {
    if (direction === 'up' && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (direction === 'down' && currentStep < steps.length - 1) {
      trigger(currentQuestion.id).then(isValid => {
        if (isValid) {
          setCurrentStep(currentStep + 1);
        }
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <div className={cn("bg-gray-100 rounded-lg max-w-md mx-auto shadow-md", className)}>
        <div className="p-6 relative">
          {/* Step indicator and navigation controls */}
          <div className="flex justify-between items-center mb-4">
            <div className="font-bold">
              {steps[currentStep].number}• {currentQuestion.title}{" "}
              {currentQuestion.required && (
                <span className="text-blue-600">*</span>
              )}
            </div>
            <div className="flex">
              <ChevronUp 
                className="w-5 h-5 cursor-pointer text-gray-500" 
                onClick={() => handleNavigation('up')}
              />
              <ChevronDown 
                className="w-5 h-5 cursor-pointer text-gray-500"
                onClick={() => handleNavigation('down')}
              />
            </div>
          </div>

          {/* Question description */}
          {currentQuestion.description && (
            <p className="text-sm text-gray-600 mb-4">
              {currentQuestion.description}
            </p>
          )}

          {/* Question field */}
          <QuestionField question={currentQuestion} />

          {/* Navigation button */}
          <Button
            onClick={handleNext}
            className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 rounded-md"
            variant="outline"
          >
            {isLastStep ? submitButtonText : nextButtonText}
          </Button>
        </div>
      </div>
    </FormProvider>
  );
}