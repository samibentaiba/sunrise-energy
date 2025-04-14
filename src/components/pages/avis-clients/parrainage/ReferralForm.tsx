"use client";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function ReferralForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) return;

    setSubmitting(true);
    const token = await executeRecaptcha("referral_form");

    // Example: Collect form data here (use refs or state)
    const formData = {
      name: "Example", // Replace with actual values
      email: "example@email.com",
      recaptchaToken: token,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message envoyé !");
    } else {
      alert("Erreur lors de l'envoi du formulaire.");
    }

    setSubmitting(false);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Passez à l&apos;action
          </h2>
          <p className="mt-1 text-lg text-muted-foreground">
            et recommencez autant de fois que vous le souhaitez
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                <Input type="text" placeholder="Votre nom" required />
                <Input type="email" placeholder="Votre email" required />
              </div>

              {/* Parrainage fields... */}
              <div className="grid gap-4 sm:grid-cols-3 mb-6">
                <Input placeholder="Nom du filleul" required />
                <Input placeholder="Téléphone du filleul" type="tel" required />
                <Input placeholder="Email du filleul" type="email" required />
              </div>

              {/* Simulated reCAPTCHA visual (optional since v3 is invisible) */}
              <div className="text-sm text-gray-500 mb-4">
                reCAPTCHA protégé par Google - <Link href="#">Conditions</Link>
              </div>

              <Button type="submit" disabled={submitting}>
                {submitting ? "Envoi..." : "Envoyer"}
              </Button>
            </form>
          </div>

          <div className="hidden lg:block relative rounded-lg overflow-hidden h-full min-h-[400px]">
            <Image
              src="/images/pages/avis-clients/parrainage/ReferralForm.webp"
              alt="Parrainage"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
