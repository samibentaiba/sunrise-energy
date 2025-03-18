import Link from "next/link";

export default function SectionAdditionalGuarantees() {
  return (
    <div className="py-16 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12 max-w-xs">
          Profitez de garanties complémentaires exclusives SunVolt
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg text-gray-800">
            <h3 className="font-bold mb-2">
              Jusqu'à 5 ans d'accompagnement par notre équipe d'experts
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Nous vous accompagnons dans toutes les étapes de votre projet, de
              la conception à la mise en service.
            </p>
            <Link href="#" className="text-yellow-500 text-sm font-medium">
              Découvrir cette garantie →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg text-gray-800">
            <h3 className="font-bold mb-2">
              Jusqu'à 10 ans de garantie sur le matériel de façon SunVolt en
              Résidentiel
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Nous garantissons le bon fonctionnement de votre installation
              pendant 10 ans, pièces et main d'œuvre incluses.
            </p>
            <Link href="#" className="text-yellow-500 text-sm font-medium">
              Découvrir cette garantie →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg text-gray-800">
            <h3 className="font-bold mb-2">
              Garantie décennale contre tout dommage à votre maison
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Vous êtes intégralement couvert en cas de dommage compromettant la
              solidité du bâti ou qui le rend impropre.
            </p>
            <Link href="#" className="text-yellow-500 text-sm font-medium">
              Découvrir cette garantie →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
