
import Image from "next/image";
import { ReactElement } from "react";

export default function Protection():ReactElement {
  return (
    <div className="w-screen text-gray-900 bg-white">
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto items-center justify-center flex flex-col text-center space-y-6">
          <h2 className="text-3xl w-[80%] md:text-5xl px-10 lg:text-[2.5rem] font-semibold text-slate-900 leading-tight">Une installation solaire qui vous protège des coupures de courant</h2>
          <p className="text-[#000000] w-[77%] px-2 leading-relaxed">Une centrale solaire avec une solution de stockage intégrée permettant de se prémunir des coupures de courant</p>
        </div>
      </section>
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 p-6 flex justify-center">
          <Image src="/images/pages/panneaux-solaires/Protection.jpg" alt="Gestionnaire d'énergie intelligent avec smartphone et prises connectées" width={500} height={400} className="object-contain" />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-10 bg-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Une sélection de batteries solaires fiables rigoureusement choisies par nos experts en énergie</h2>

          <p className="text-gray-700 mb-6">D’une capacité jusqu’à 5kW, notre sélection de batterie solaire haut de gamme permet en cas de coupure réseau de prendre le relai. Ne nécessitant aucun entretien, eur design est idéal pour s’intégrer directement dans votre maison.</p>

          <div className="flex items-center mb-2">
            <div className="w-6 h-0.5 bg-blue-600 mr-2"></div>
            <span className="font-bold text-xl">10 ans</span>
          </div>

          <p className="text-gray-700">garantie fabricant </p>
        </div>
      </div>
    </div>
  );
}
