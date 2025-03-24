import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SectionProductComparison() {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 text-gray-800 flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=200&width=150"
              alt="SunEco Panel"
              width={150}
              height={200}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-center">
              Gamme SunEco
            </h3>
            <p className="text-center text-gray-600 mb-6">
              Le solaire performant et durable au meilleur prix
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              En savoir plus
            </Button>
          </div>

          <div className="bg-white rounded-lg p-8 text-gray-800 flex flex-col items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=200&width=150"
                alt="SunMax Panel"
                width={150}
                height={200}
                className="mb-4"
              />
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                Premium
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">
              Gamme SunMax
            </h3>
            <p className="text-center text-gray-600 mb-6">
              Le solaire Premium avec panneaux solaires de marque française
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
