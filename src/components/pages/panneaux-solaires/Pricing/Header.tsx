import { ReactElement } from "react";

export default function header():ReactElement {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto items-center justify-center flex flex-col text-center space-y-6">
        <p className="text-blue-600 font-medium">A chacun son offre clé en main</p>
        <h2 className="text-3xl w-[80%] md:text-5xl px-10 lg:text-[2.5rem] font-semibold text-slate-900 leading-tight">Des offres de panneaux solaires qui s&apos;adaptent à vos besoins et à votre budget</h2>
        <p className="text-[#000000] w-[77%] px-2 leading-relaxed">Sunrise vous accompagne tout au long de votre projet d&apos;installation de panneaux solaires : dimensionnement de l&apos;installation, négociation des prix, sélection des meilleurs professionnels RGE, contrôle qualité de l&apos;installation. On s&apos;occupe même des démarches administratives pour vous faire bénéficier des aides panneau solaire accordées par l&apos;État !</p>
      </div>
    </section>
  );
}
