import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SectionHero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative h-[500px] w-full">
        <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="Solar panels on roof"
          width={1920}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute inset-0 z-20 flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              La seule offre solaire avec garantie d'économies incluse
            </h1>

            <div className="mt-8">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-8 py-6 text-lg">
                <span className="mr-2">»</span>{" "}
                Prendre RDV avec un expert solaire
              </Button>
              <p className="text-white text-sm mt-2">
                Gratuit et sans engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
