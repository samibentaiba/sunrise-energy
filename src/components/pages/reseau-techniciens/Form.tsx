"use client";

import type React from "react";

import { ReactElement, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function MultiStepForm(): ReactElement {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep(2);
  };

  const handlePrevious = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your server
    console.log("Form submitted:", formData);
    // Reset form or show success message
    alert("Form submitted successfully!");
    setStep(1);
    setFormData({
      companyName: "",
      fullName: "",
      phone: "",
      email: "",
    });
  };

  return (
    <main className="flex items-center justify-center bg-[#f9f9f9] p-4">
      <div className="w-full max-w-3xl">
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="companyName"
                        placeholder="Raison sociale"
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="fullName"
                        placeholder="Nom & Prénom"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-6">
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Suivant
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Numéro de téléphone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-6">
                    <Button
                      type="button"
                      onClick={handlePrevious}
                      variant="outline"
                    >
                      Précédent
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Envoyer
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
