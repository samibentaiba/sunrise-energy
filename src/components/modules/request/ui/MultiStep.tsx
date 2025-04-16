"use client";

import { useState } from "react";
import { cn } from "@/libs/utils";
import { ChevronUp, ChevronDown, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Types for our questions
export type QuestionType =
  | "multiple-choice"
  | "text-input"
  | "phone-input"
  | "email-input";

export type Choice = {
  id: string;
  label: string;
};

export type Question = {
  id: string;
  title: string;
  type: QuestionType;
  required?: boolean;
  description?: string;
  choices?: Choice[];
  placeholder?: string;
  countryCode?: string;
};

export type Step = {
  number: number;
  question: Question;
};

type MultiStepProps = {
  steps: Step[];
  onComplete: (answers: Record<string, any>) => void;
  submitButtonText?: string;
  nextButtonText?: string;
  className?: string;
};

export default function MultiStep({
  steps,
  onComplete,
  submitButtonText = "Envoyer",
  nextButtonText = "Ok",
  className,
}: MultiStepProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleNext = () => {
    const currentQuestion = steps[currentStep].question;

    // Validate current step
    if (currentQuestion.required && !answers[currentQuestion.id]) {
      setErrors({
        ...errors,
        [currentQuestion.id]: "Veuillez remplir ce champ",
      });
      return;
    }

    // Clear error if valid
    if (errors[currentQuestion.id]) {
      const newErrors = { ...errors };
      delete newErrors[currentQuestion.id];
      setErrors(newErrors);
    }

    // If last step, submit
    if (currentStep === steps.length - 1) {
      onComplete(answers);
      return;
    }

    // Move to next step
    setCurrentStep(currentStep + 1);
  };

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    });

    // Clear error if user is typing/selecting
    if (errors[questionId]) {
      const newErrors = { ...errors };
      delete newErrors[questionId];
      setErrors(newErrors);
    }
  };

  const currentQuestion = steps[currentStep].question;
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div
      className={cn(
        "bg-gray-100 rounded-lg max-w-md mx-auto shadow-md",
        className
      )}
    >
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
            <ChevronUp className="w-5 h-5 cursor-pointer text-gray-500" />
            <ChevronDown className="w-5 h-5 cursor-pointer text-gray-500" />
          </div>
        </div>

        {/* Question description */}
        {currentQuestion.description && (
          <p className="text-sm text-gray-600 mb-4">
            {currentQuestion.description}
          </p>
        )}

        {/* Question content based on type */}
        <div className="mb-6">
          {currentQuestion.type === "multiple-choice" && (
            <div className="space-y-2">
              {currentQuestion.choices?.map((choice) => (
                <div
                  key={choice.id}
                  className={cn(
                    "border rounded-md p-3 cursor-pointer",
                    answers[currentQuestion.id] === choice.id
                      ? "bg-blue-100 border-blue-300"
                      : "bg-white border-gray-300 hover:bg-gray-50"
                  )}
                  onClick={() =>
                    handleAnswerChange(currentQuestion.id, choice.id)
                  }
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

          {currentQuestion.type === "text-input" && (
            <div>
              <input
                type="text"
                className={cn(
                  "w-full p-2 border-b-2 border-blue-500 bg-transparent outline-none",
                  errors[currentQuestion.id] && "border-red-500"
                )}
                placeholder={currentQuestion.placeholder || "Répondez ici..."}
                value={answers[currentQuestion.id] || ""}
                onChange={(e) =>
                  handleAnswerChange(currentQuestion.id, e.target.value)
                }
              />
            </div>
          )}

          {currentQuestion.type === "email-input" && (
            <div>
              <input
                type="email"
                className={cn(
                  "w-full p-2 border-b-2 border-blue-500 bg-transparent outline-none",
                  errors[currentQuestion.id] && "border-red-500"
                )}
                placeholder={currentQuestion.placeholder || "nom@exemple.com"}
                value={answers[currentQuestion.id] || ""}
                onChange={(e) =>
                  handleAnswerChange(currentQuestion.id, e.target.value)
                }
              />
            </div>
          )}

          {currentQuestion.type === "phone-input" && (
            <div className="flex items-center">
              <div className="flex items-center mr-2 border-b-2 border-blue-500 pb-2">
                <img
                  src={`https://flagcdn.com/w20/${
                    currentQuestion.countryCode?.toLowerCase() || "fr"
                  }.png`}
                  alt="Country flag"
                  className="w-5 h-3 mr-1"
                />
                <ChevronDown className="w-4 h-4" />
              </div>
              <input
                type="tel"
                className={cn(
                  "w-full p-2 border-b-2 border-blue-500 bg-transparent outline-none",
                  errors[currentQuestion.id] && "border-red-500"
                )}
                placeholder="06 12 34 56"
                value={answers[currentQuestion.id] || ""}
                onChange={(e) =>
                  handleAnswerChange(currentQuestion.id, e.target.value)
                }
              />
            </div>
          )}

          {/* Error message */}
          {errors[currentQuestion.id] && (
            <div className="mt-2 text-red-500 text-sm flex items-center">
              <AlertTriangle className="w-4 h-4 mr-1" />
              {errors[currentQuestion.id]}
            </div>
          )}
        </div>

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
  );
}
