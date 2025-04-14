"use client";

import Hero from "@/components/pages/avis-clients/parrainage/Hero";
import CTA from "@/components/pages/avis-clients/parrainage/CTA";
import Steps from "@/components/pages/avis-clients/parrainage/Steps";
import ReferralForm from "@/components/pages/avis-clients/parrainage/ReferralForm";
import { ReactElement } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
export default function AvisClients(): ReactElement {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Hero
        title="Parrainez l’un de vos proches et gagnez minimum 500€"
        backgroundImage="/images/pages/garanties/Hero.jpeg"
      />

      <CTA />
      <Steps />
      <GoogleReCaptchaProvider
                reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                scriptProps={{
                  async: true,
                  defer: true,
                  appendTo: "head",
                  nonce: undefined,
                }}
              >
        <ReferralForm />
      </GoogleReCaptchaProvider>
    </div>
  );
}
