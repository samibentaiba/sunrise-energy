import Image from "next/image";
import { Award, ClipboardCheck } from "lucide-react";
import type { ReactElement } from "react";
export default function Steps():ReactElement {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Assurance décennale */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 text-[#4b3479]">
            <Award size={44} />
          </div>
          <h3 className="text-xl font-semibold mb-4">Assurance décennale</h3>
          <p className="text-gray-700">
            Pendant les 10 années suivant l'installation, seront réparés tous
            dommages qui n'étaient pas décelables lors de la réception des
            travaux et qui compromettraient la solidité du bâti ou qui le
            rendraient inhabitable ou impropre à son usage
          </p>
        </div>
        {/* Certification RGE */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/pages/garanties/Steps.jpeg"
            alt="RGE Logo"
            width={150}
            height={44}
            className="mb-6"
          />
          <h3 className="text-xl font-semibold mb-4">Certification RGE</h3>
          <p className="text-gray-700">
            Tous nos techniciens détiennent la certification RGE afin de vous
            faire bénéficier des aides d'État et de vous offrir la meilleure
            qualité de pose possible
          </p>
        </div>

        {/* Visites de contrôle */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 text-[#4b3479]">
            <ClipboardCheck size={44} />
          </div>
          <h3 className="text-xl font-semibold mb-4">Visites de contrôle</h3>
          <p className="text-gray-700">
            Nos équipes contrôlent aléatoirement la qualité des installations
            réalisées et interrogent systématiquement les clients 1 mois après
            la mise en service pour connaître leur satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
