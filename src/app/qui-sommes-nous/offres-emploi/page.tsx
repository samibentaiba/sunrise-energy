"use client";

import Hero from "@/components/pages/qui-sommes-nous/offres-emploi/Hero";
import Job from "@/components/pages/qui-sommes-nous/offres-emploi/Job";
import Touch from "@/components/pages/qui-sommes-nous/Touch";
import About from "@/components/pages/qui-sommes-nous/About";
import Qair from "@/components/pages/qui-sommes-nous/offres-emploi/Qair"
import Image from "next/image";
import { Star } from "lucide-react";
export default function QuiSommesNous() {
  const children = (
    <div className="bg-white text-black rounded-lg shadow-sm p-4 flex items-center gap-3">
      <Image
        src="/images/modules/Google.svg"
        alt="Google"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div>
        <p className="font-medium">Avis Google</p>
        <div className="flex items-center">
          <span className="font-medium mr-2">3.9</span>
          <div className="flex">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Hero title="Rejoignez nos équipes Développez vos talents" children={children} />
      <Job />
      <Touch />
      <About />
      <Qair />
    </div>
  );
}
