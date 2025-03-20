import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SectionHero() {
  return (
    <div
      className="h-[500px] w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/placeholder.svg?height=500&width=1920')",
      }}
    >
      <div className="container mx-auto px-4 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            La seule offre solaire avec garantie d'économies incluse
          </h1>
          <div className="mt-8">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-8 py-6 text-lg">
              <span className="mr-2">»</span> Prendre RDV avec un expert solaire
            </Button>
            <p className="text-white text-sm mt-2">
              Gratuit et sans engagement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
