import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

export default function ReferralForm(): ReactElement {
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
            <form>
              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-lg mb-4">A qui pensez-vous ?</h4>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <Input
                      type="text"
                      placeholder="Nom du 1er filleul"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Téléphone du 1er filleul"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email du 1er filleul"
                      className="w-full"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white p-4 rounded-md mb-6">
                <div className="text-center">
                  <p className="font-medium">Total des gains potentiels</p>
                  <p className="text-xl font-bold">0,00 €</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="border border-gray-300 rounded-md p-3 max-w-xs">
                  <div className="flex items-center">
                    <div className="flex items-center h-5 mr-2">
                      <Checkbox
                        id="captcha"
                        className="rounded-sm border-gray-400"
                      />
                    </div>
                    <label htmlFor="captcha" className="text-sm text-gray-700">
                      Je ne suis pas un robot
                    </label>
                    <div className="ml-auto">
                      <div className="w-9 h-9 relative">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-full h-full text-gray-500"
                        >
                          <path
                            fill="currentColor"
                            d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="h-8 w-16 relative">
                      <svg viewBox="0 0 36 36" className="h-full">
                        <path fill="#4285F4" d="M18 0v18h-9l9 18h9V18h9z" />
                        <path fill="#34A853" d="M18 0v18h9z" />
                        <path fill="#FBBC05" d="M9 18l9 18v-18z" />
                        <path fill="#EA4335" d="M18 0l-9 18h9z" />
                      </svg>
                    </div>
                    <div className="text-xs text-gray-500">
                      <p>reCAPTCHA</p>
                      <p>Confidentialité - Conditions</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-auto">
                Envoyer
              </Button>

              <p className="mt-4 text-xs text-gray-600">
                En cliquant sur « Envoyer », vous confirmez avoir pris
                connaissance de notre{" "}
                <Link href="#" className="text-blue-600 hover:underline">
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
              alt="Personne serrant la main d'un client"
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
