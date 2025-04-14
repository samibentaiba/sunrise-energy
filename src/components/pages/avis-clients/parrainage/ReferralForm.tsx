"use client";

import { useReferralForm } from "@/hooks/use-referralForm"; // Import the custom hook for the form
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
export default function ReferralForm() {
  const {
    recaptchaRef,
    //recaptchaToken,
    handleRecaptchaChange,
    formData,
    handleChange,
    handleSubmit,
    submitting,
  } = useReferralForm();

  return (
    <section className="max-w-7xl mx-auto py-12  px-4 md:px-6 md:py-16 lg:py-20 bg-gray-50">
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
            <div className="grid gap-4 sm:grid-cols-2 mb-8">
              <Input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12"
              />
              <Input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12"
              />
            </div>

            <h4 className="font-bold text-lg mb-4">A qui pensez-vous ?</h4>
            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              <Input
                name="referralName"
                placeholder="Nom du 1er filleul"
                value={formData.referralName}
                onChange={handleChange}
                required
                className="h-12"
              />
              <Input
                name="referralPhone"
                type="tel"
                placeholder="Téléphone du 1er filleul"
                value={formData.referralPhone}
                onChange={handleChange}
                required
                className="h-12"
              />
              <Input
                name="referralEmail"
                type="email"
                placeholder="Email du 1er filleul"
                value={formData.referralEmail}
                onChange={handleChange}
                required
                className="h-12"
              />
            </div>

            <div className="bg-[#106ca4] text-white p-4 rounded-md mb-6">
              <div className="text-center">
                <p className="font-medium">Total des gains potentiels</p>
                <p className="text-xl font-bold">0,00 €</p>
              </div>
            </div>

            <div className="mb-6">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                ref={recaptchaRef}
                onChange={handleRecaptchaChange}
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="bg-[#106ca4] hover:bg-[#004570] text-white font-medium px-8 py-2 rounded-full"
            >
              {submitting ? "Envoi..." : "Envoyer"}
            </Button>

            <p className="mt-4 text-xs text-gray-600">
              En cliquant sur « Envoyer », vous confirmez avoir pris
              connaissance de notre{" "}
              <Link
                href="/politique-de-donnees-personnelles"
                className="text-[#106ca4] hover:underline"
              >
                Politique de Données Personnelles
              </Link>{" "}
              et vous en acceptez le traitement par SunVolt. Vous et vos
              filleuls gardez la possibilité de retirer votre consentement à
              tout moment.
            </p>
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
    </section>
  );
}
