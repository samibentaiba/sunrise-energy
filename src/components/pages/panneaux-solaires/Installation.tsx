import Image from "next/image";
import { ReactElement } from "react";

export default function Installation():ReactElement {
  return (
    <div className="w-screen text-gray-900 bg-white">
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto items-center justify-center flex flex-col text-center space-y-6">
          <h2 className="text-3xl w-[80%] md:text-5xl px-10 lg:text-[2.5rem] font-semibold text-slate-900 leading-tight">Une installation solaire intelligente qui booste la rentabilité de votre investissement</h2>
          <p className="text-[#000000] w-[77%] px-2 leading-relaxed">D’un seul doigt, pilotez vos équipements énergivores, suivez votre consommation d’énergie et optimisez votre production solaire d’énergie</p>
        </div>
      </section>
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 p-6 flex justify-center">
          <Image src="/images/pack_BoxGEN4_HD_1.jpg" alt="Gestionnaire d'énergie intelligent avec smartphone et prises connectées" width={500} height={400} className="object-contain" />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-10 bg-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Un gestionnaire d'énergie intelligent pour surveiller et piloter vos équipements énergivores</h2>

          <p className="text-gray-700 mb-6">Très simple d'usage, suivez en temps réel votre consommation d'énergie par appareils et synchronisez automatiquement la consommation de vos équipements avec vos périodes de production solaire. Vous amortissez jusqu'à 2 fois plus vite votre installation, tout en réduisant drastiquement votre facture d'électricité.</p>

          <div className="flex items-center mb-2">
            <div className="w-6 h-0.5 bg-blue-600 mr-2"></div>
            <span className="font-bold text-xl">15 ans</span>
          </div>

          <p className="text-gray-700">de garantie fabricant</p>
        </div>
      </div>
    </div>
  );
}
