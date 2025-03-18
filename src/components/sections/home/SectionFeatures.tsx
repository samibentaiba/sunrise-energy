import Link from "next/link";

export default function SectionFeatures() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">
              Des prix bas pour tous et sans compromis sur la qualité
            </h3>
            <p className="text-gray-600 mb-4">
              Panneaux solaires dernière génération, batterie, gestionnaire
              d'énergie intelligent, interface de gestion et de pilotage...
              concevez l'installation de vos rêves.
            </p>
            <Link href="#" className="text-yellow-500 font-medium">
              Voir les offres →
            </Link>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">
              Des techniciens locaux RGE notés à chaque pose de panneaux
              solaires
            </h3>
            <p className="text-gray-600 mb-4">
              Ont été sélectionnés les installateurs offrant les meilleures
              garanties pour vous faire bénéficier d'une installation de haute
              qualité.
            </p>
            <div className="flex items-center mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">(4.8/5)</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">
              De fortes garanties incluses pour être serein à chaque étape
            </h3>
            <p className="text-gray-600 mb-4">
              Pendant 10 ans, si vous ne faites pas les économies promises, on
              vous rembourse la différence. En cas de difficultés, on vous
              accompagne jusqu'à 5 ans.
            </p>
            <Link href="#" className="text-yellow-500 font-medium">
              Voir les garanties →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
