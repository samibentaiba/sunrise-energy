"use client";

import { useReferralForm } from "@/hooks/use-referralForm"; // Import the custom hook for the form
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "@/components/ui/input";
import Image from "next/image";

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
                <Input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-3 mb-6">
                <Input
                  name="referralName"
                  placeholder="Nom du filleul"
                  value={formData.referralName}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="referralPhone"
                  type="tel"
                  placeholder="Téléphone du filleul"
                  value={formData.referralPhone}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="referralEmail"
                  type="email"
                  placeholder="Email du filleul"
                  value={formData.referralEmail}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  ref={recaptchaRef}
                  onChange={handleRecaptchaChange}
                />
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
