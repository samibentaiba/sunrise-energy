import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

export default function Technology() {
  return (
    <div className="container mx-auto px-4 w-full max-w-6xl py-12 md:py-16 lg:py-20">
      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left column - Image */}
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/pages/garanties/UPS/UPS.jpg"
            alt="UPS"
            width={250}
            height={200}
            className="object-contain"
          />
          <div className="flex justify-around items-stretch">
            <Image
              src="/images/pages/garanties/UPS/ENPHASE.jpg"
              alt="ENPHASE"
              width={200}
              height={50}
              className="object-contain"
            />

            <Image
              src="/images/pages/garanties/UPS/HUAWEI.webp"
              alt="HUAWEI"
              width={200}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
        {/* Right column - Content */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            Les onduleurs et micro-onduleurs solaires les plus fiables du moment
            sélectionnés par nos experts en énergie
          </h3>

          <p className="mb-6">
            Nos experts ont sélectionné les 2 technologies les plus performantes
            du moment, pour répondre à toutes les situations même en cas
            d’ombrage : micro-onduleur ou onduleur string avec optimiseur.
          </p>

          {/* Warranty information */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <div className="h-1 w-8 bg-teal-500 mb-2"></div>
              <h4 className="font-semibold mb-1">20 ans</h4>
              <p className="text-sm text-muted-foreground">
                garantie fabricant pour la marque Huawei
              </p>
            </div>
            <div>
              <div className="h-1 w-8 bg-teal-500 mb-2"></div>
              <h4 className="font-semibold mb-1">25 ans</h4>
              <p className="text-sm text-muted-foreground">
                garantie fabricant pour la marque Enphase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
