import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SectionPricing() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Des offres de panneaux solaires qui s'adaptent à vos besoins et à
          votre budget
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center">
          Qualifiez votre projet en quelques clics et découvrez les solutions
          adaptées à vos besoins, votre consommation et votre budget.
        </p>
        <p className="text-gray-500 max-w-3xl mx-auto mb-12 text-center text-sm">
          Sunvolt vous accompagne dans toutes les étapes de votre projet
          photovoltaïque, de la conception à l'installation, en passant par les
          démarches administratives et le raccordement au réseau. Nos experts
          vous conseillent pour optimiser votre production d'électricité
          solaire.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pricing Option 1 */}
          <div className="bg-white border rounded-lg p-8 text-left shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium">SunEco</h3>
              <div className="mt-4">
                <span className="text-sm">À partir de</span>
                <div className="text-3xl font-bold">7.499€</div>
                <span className="text-xs text-gray-500">
                  Installation comprise • Aides déduites
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Image
                src="/placeholder.svg?height=200&width=150"
                alt="Solar panel SunEco"
                width={150}
                height={200}
                className="object-contain"
              />
            </div>

            <div className="mt-6 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full py-2">
                Découvrir l'offre
              </Button>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">
                  Panneaux solaires de dernière génération (390Wc)
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">
                  Onduleur nouvelle génération (25 ans)
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">
                  Système de monitoring intelligent
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">Garantie produit</span>
              </div>
            </div>
          </div>

          {/* Pricing Option 2 */}
          <div className="bg-white border rounded-lg p-8 text-left shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium">SunMax</h3>
              <div className="mt-4">
                <span className="text-sm">À partir de</span>
                <div className="text-3xl font-bold">8.499€</div>
                <span className="text-xs text-gray-500">
                  Installation comprise • Aides déduites
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=150"
                  alt="Premium solar panel SunMax"
                  width={150}
                  height={200}
                  className="object-contain"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  Premium
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full py-2">
                Découvrir l'offre
              </Button>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">
                  Panneaux solaires de marque française (400Wc+)
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">Onduleur premium (30 ans)</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">Système de monitoring avancé</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">Garantie produit premium</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">Service d'accompagnement</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">
                  Optimisation de la production et du rendement
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
