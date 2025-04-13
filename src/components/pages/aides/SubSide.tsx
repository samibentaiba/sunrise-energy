"use client";

import { ReactElement, useState } from "react";
import Image from "next/image";
import BlueButton  from "./ui/SubSide/button";
import { Card } from "./ui/SubSide/card";
import Slider from "./ui/SubSide/slider";
import { RadioGroup, RadioGroupItem } from "./ui/SubSide/radio-group";
import { Label } from "./ui/SubSide/label";


export default function SubSide():ReactElement {
  const [powerCapacity, setPowerCapacity] = useState<number>(4.5)
  const [housingType, setHousingType] = useState<string>("")
  const [propertyAge, setPropertyAge] = useState<string>("")
  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Left column - Title and ministry logo */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-900">
              Prime à l&apos;autoconsommation
              <br />
              comment en bénéficier ?
            </h2>
            <div className="w-24 sm:w-32 mb-4 md:mb-6">
              <Image
                src="/images/pages/aides/SubSide/MINISTERE.svg"
                alt="Ministère de la Transition Écologique"
                width={150}
                height={150}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right column - Explanation text */}
          <div>
            <p className="text-slate-700 mb-6 md:mb-8">
              Tout acquéreur d&apos;une installation solaire Sunrise bénéficie de la prime à l&apos;autoconsommation
              photovoltaïque, indépendamment de ses revenus. 3 conditions suffisent. Nous nous engageons à ce
              qu&apos;elles soient respectées.
            </p>
          </div>
        </div>

        {/* Replace the flex layout with a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-8">
          {/* Calculator form */}
          <div className="relative">
            <div className="absolute -top-[10%] right-0 md:-right-[10%] z-10">
              <Image
                src="/images/pages/aides/SubSide/Idea.webp"
                alt="Simulateur"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
              />
            </div>

            <Card className="p-4 sm:p-6 border border-slate-200 shadow-md relative">
              <div className="mb-4 md:mb-6">
                <h3 className="text-base sm:text-lg font-bold mb-4">
                  <span className="bg-slate-800 text-white px-2 py-1">Vérifiez gratuitement</span> le montant de vos
                  aides à l&apos;autoconsommation solaire
                </h3>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="power-capacity">Votre puissance de centrale solaire</Label>
                  <div className="space-y-4">
                    <div className="h-2 rounded-full relative">
                      <Slider
                        id="power-capacity"
                        min={1}
                        max={9}
                        step={0.1}
                        value={[powerCapacity]}
                        onValueChange={(value) => setPowerCapacity(value[0])}
                        className="py-4"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-slate-600">
                      <span>1kWc</span>
                      <div className="w-12 h-8 border border-slate-300 flex items-center justify-center bg-white">
                        {powerCapacity.toFixed(1)}
                      </div>
                      <span>9kWc</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-3">
                    <Label className="font-medium">
                      Situation <span className="text-red-500 font-normal">(Nécessaire)</span>
                    </Label>
                    <RadioGroup value={housingType} onValueChange={setHousingType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="house" id="house" />
                        <Label htmlFor="house" className="font-normal text-sm sm:text-base">
                          Propriétaire de maison individuelle
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="apartment" id="apartment" />
                        <Label htmlFor="apartment" className="font-normal text-sm sm:text-base">
                          Propriétaire d&apos;un appartement
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tenant" id="tenant" />
                        <Label htmlFor="tenant" className="font-normal text-sm sm:text-base">
                          Locataire
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label className="font-medium">
                      Ancienneté de votre bien <span className="text-red-500 font-normal">(Nécessaire)</span>
                    </Label>
                    <RadioGroup value={propertyAge} onValueChange={setPropertyAge}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="over2years" id="over2years" />
                        <Label htmlFor="over2years" className="font-normal text-sm sm:text-base">
                          Construite depuis +2 ans
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under2years" id="under2years" />
                        <Label htmlFor="under2years" className="font-normal text-sm sm:text-base">
                          Construite depuis -2 ans
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="notbuilt" id="notbuilt" />
                        <Label htmlFor="notbuilt" className="font-normal text-sm sm:text-base">
                          Pas encore construite
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <BlueButton text="Simuler le montant de mes aides" href="Simuler le montant de mes aides" />
              </div>
            </Card>
          </div>

          {/* Subsidy amount and explanation */}
          <div className="space-y-6 md:space-y-9">
            <div className="bg-blue-900 text-white w-full p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Jusqu&apos;à 1 440€</h2>
              <p className="text-base sm:text-lg">d&apos;aides financières</p>
            </div>

            <div className="space-y-3 md:space-y-4 w-full text-slate-700 text-sm sm:text-base">
              <p>
                L&apos;autoconsommation photovoltaïque est la consommation de sa propre production d&apos;électricité à
                partir de l&apos;énergie solaire. Elle permet d&apos;utiliser une énergie non polluante et abondante et
                de contribuer à la transition énergétique.
              </p>

              <p>
                Les installations qui permettent l&apos;autoconsommation (installations de vente en surplus), sont
                éligibles à une prime à l&apos;investissement. Cette prime est dégressive et variable en fonction de la
                puissance de l&apos;installation.
              </p>

              <p>
                Si vous remplissez les conditions (le détail des conditions est consultable dans l&apos;arrêté tarifaire
                du 6 octobre 2021), cette prime est versée automatiquement par EDF, en même temps que vos revenus
                générés par la vente de votre surplus.
              </p>

              <p>
                Les montants des primes sont mis à jour tous les trimestres. Pour connaître les montants en temps réel,
                simulez votre montant d&apos;aide avec notre calculateur gratuit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


