import Image from "next/image"
import { Check } from "lucide-react"

export default function QairSunvoltSection() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 lg:gap-20">
          {/* Left column with image */}
          <div className="w-full md:w-2/5 bg-[#fdb913] rounded-lg p-8 flex items-center justify-center">
            <Image
              src="/images/pages/qui-sommes-nous/offres-emploi/Qair.jpeg"
              alt="SunVolt, filiale à 100% du groupe Qair"
              width={560}
              height={530}
              className="w-full max-w-md"
            />
          </div>

          {/* Right column with content */}
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#040922] mb-8">
              SunVolt France ; filiale d&apos;un grand groupe international
            </h2>

            <div className="text-[#040922] space-y-5 mb-8">
              <p>
                <a
                  href="https://www.qair.energy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0b68a4] hover:underline"
                >
                  Le groupe QAIR
                </a>
                , actionnaire majoritaire de SunVolt, est un <strong>producteur d&apos;énergie indépendant</strong> qui
                développe, détient et exploite des projets d&apos;énergie renouvelable avec différentes technologies :
                <em>
                  {" "}
                  éolien terrestre et offshore, solaire, valorisation énergétique de déchets, hydroélectricité, stockage
                  (par batterie &amp; hydrogène)
                </em>
                .
              </p>

              <p>
                Les <strong>550 collaborateurs du groupe</strong> sont répartis dans 20 pays ; majoritairement en
                France, en Pologne, en Allemagne, en Italie, en Espagne et au Brésil. QAIR possède un portefeuille
                d&apos;actifs opérationnels en 2023 d&apos;environ 1 GW, ainsi que d&apos;un portefeuille de projets en
                cours de développement de 25 GW.
              </p>

              <p>
                <strong>Le groupe Qair en quelques chiffres :</strong>
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-[#425a9e] mr-3 mt-0.5 flex-shrink-0" />
                  <span>550 collaborateurs dans plus de 20 pays</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-[#425a9e] mr-3 mt-0.5 flex-shrink-0" />
                  <span>1 Milliard d&apos;Euros d&apos;actifs en exploitation dans les énergies renouvelables</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-[#425a9e] mr-3 mt-0.5 flex-shrink-0" />
                  <span>4 Milliards d&apos;Euros d&apos;investissements prévus d&apos;ici 2028</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
