import Image from "next/image"
import { Check } from "lucide-react"

export default function PricingCard() {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Panel Option */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col h-full">
            <div className="text-center mb-4">
              <h3 className="font-bold text-xl text-blue-600">À partir de 7 499€</h3>
              <p className="text-sm text-gray-600 mt-1">Le solaire performant et durable au meilleur prix</p>
            </div>

            <div className="flex justify-center my-6">
              <div className="relative w-48 h-64">
                <Image
                  src="/placeholder.svg?height=256&width=192"
                  alt="Panneau solaire standard"
                  width={192}
                  height={256}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-auto">
              <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Découvrir l&apos;offre
              </button>

              <div className="mt-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Panneaux solaires de dernière génération (390Wc)</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Onduleur de marque Huawei/SolarEdge</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Garantie matériel et pose (25 ans)</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="font-medium text-sm text-center">Options disponibles sur demande</p>
                <p className="text-xs text-gray-500 text-center mt-2">Batteries incluses</p>
              </div>
            </div>
          </div>

          {/* Right Panel Option */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col h-full">
            <div className="text-center mb-4">
              <h3 className="font-bold text-xl text-blue-600">À partir de 8 499€</h3>
              <p className="text-sm text-gray-600 mt-1">
                Le solaire Premium avec garantie totale de reprise d&apos;énergie
              </p>
            </div>

            <div className="flex justify-center my-6 relative">
              <div className="relative w-48 h-64">
                <Image
                  src="/placeholder.svg?height=256&width=192"
                  alt="Panneau solaire premium"
                  width={192}
                  height={256}
                  className="object-contain"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">TOP</div>
              </div>
            </div>

            <div className="mt-auto">
              <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Découvrir l&apos;offre
              </button>

              <div className="mt-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Panneaux solaires de dernière génération (Dual Face 410Wc)</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Micro-onduleurs Enphase</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Optimisation de production en cas d&apos;ombrage</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Suivi de production en temps réel et par panneau</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="font-medium text-sm text-center">Options disponibles sur demande</p>
                <p className="text-xs text-gray-500 text-center mt-2">Batteries incluses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

