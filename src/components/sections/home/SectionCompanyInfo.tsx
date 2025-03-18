import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SectionCompanyInfo() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              SunVolt France : le leader du solaire intelligent depuis 2019
            </h2>
            <p className="text-gray-600 mb-6">
              Sunvolt est une entreprise française spécialisée dans
              l'installation de panneaux solaires pour les particuliers et les
              professionnels. Notre mission est de rendre l'énergie solaire
              accessible à tous, grâce à des solutions sur-mesure, innovantes et
              économiques.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-6">
              En savoir plus
            </Button>
          </div>

          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Solar panels on roof"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-800">5</div>
            <div className="text-sm text-gray-600 mt-2">ans d'expérience</div>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-800">3000</div>
            <div className="text-sm text-gray-600 mt-2">
              installations réalisées
            </div>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-800">38571</div>
            <div className="text-sm text-gray-600 mt-2">
              tonnes de CO2 économisées
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
