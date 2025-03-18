import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <Link href="#" className="font-medium">
              Particulier
            </Link>
            <Link href="#" className="text-muted-foreground">
              Entreprise
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="text-muted-foreground">
              Guides
            </Link>
            <Link href="#" className="text-muted-foreground">
              Qui sommes nous ?
            </Link>
            <Link href="#" className="text-muted-foreground">
              Carrières
            </Link>
            <Link href="#" className="text-muted-foreground">
              Nous contacter
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="tel:0805543056"
              className="flex items-center text-green-600 font-medium"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">N° VERT</span> 0 805 54 30 56
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-32">
              <div className="flex items-center">
                <span className="text-blue-800 font-bold text-2xl">sun</span>
                <span className="text-yellow-500 font-bold text-2xl">volt</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-800 font-medium">
                Solutions photovoltaïques
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <Link href="#" className="text-gray-800 font-medium">
              Garanties
            </Link>
            <Link href="#" className="text-gray-800 font-medium">
              Aides
            </Link>
            <Link href="#" className="text-gray-800 font-medium">
              Avis
            </Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-6">
              <span className="mr-2">»</span> Demander un devis personnalisé
            </Button>
          </div>

          <button className="md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Section */}
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

      {/* Features Section */}
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

      {/* Trust Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">
            Ils nous font confiance pour accompagner leur clients
          </h2>
          <div className="flex justify-center space-x-8">
            {[1, 2, 3, 4, 5].map((partner) => (
              <div key={partner} className="w-24 h-12 bg-gray-200 rounded">
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Solar expert"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-2xl font-bold mb-4">
                Achetez sans risque une installation de panneaux solaires
                performante 100% garantie
              </h2>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-yellow-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Garantie de performance pendant 10 ans</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-yellow-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Panneaux solaires de haute qualité</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-yellow-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Installation par des professionnels certifiés</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Des offres de panneaux solaires qui s'adaptent à vos besoins et à
            votre budget
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Qualifiez votre projet en quelques clics et découvrez les solutions
            adaptées à vos besoins, votre consommation et votre budget.
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto mb-12 text-center text-sm">
            Sunvolt vous accompagne dans toutes les étapes de votre projet
            photovoltaïque, de la conception à l'installation, en passant par
            les démarches administratives et le raccordement au réseau. Nos
            experts vous conseillent pour optimiser votre production
            d'électricité solaire.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pricing Option 1 */}
            <div className="bg-white border rounded-lg p-8 text-left shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium">SunEco</h3>
                <div className="mt-4">
                  <span className="text-sm">À partir de</span>
                  <div className="text-3xl font-bold">7.499€</div>
                  <span className="text-xs text-gray-500">
                    Installation comprise • Aides déduites
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=150"
                  alt="Solar panel SunEco"
                  width={150}
                  height={200}
                  className="object-contain"
                />
              </div>

              <div className="mt-6 text-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full py-2">
                  Découvrir l'offre
                </Button>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">
                    Panneaux solaires de dernière génération (390Wc)
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">
                    Onduleur nouvelle génération (25 ans)
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">
                    Système de monitoring intelligent
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Garantie produit</span>
                </div>
              </div>
            </div>

            {/* Pricing Option 2 */}
            <div className="bg-white border rounded-lg p-8 text-left shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium">SunMax</h3>
                <div className="mt-4">
                  <span className="text-sm">À partir de</span>
                  <div className="text-3xl font-bold">8.499€</div>
                  <span className="text-xs text-gray-500">
                    Installation comprise • Aides déduites
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=150"
                    alt="Premium solar panel SunMax"
                    width={150}
                    height={200}
                    className="object-contain"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Premium
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full py-2">
                  Découvrir l'offre
                </Button>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">
                    Panneaux solaires de marque française (400Wc+)
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Onduleur premium (30 ans)</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Système de monitoring avancé</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Garantie produit premium</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Service d'accompagnement</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">
                    Optimisation de la production et du rendement
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Guarantees Section */}
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
                Nous vous accompagnons dans toutes les étapes de votre projet,
                de la conception à la mise en service.
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
                Vous êtes intégralement couvert en cas de dommage compromettant
                la solidité du bâti ou qui le rend impropre.
              </p>
              <Link href="#" className="text-yellow-500 text-sm font-medium">
                Découvrir cette garantie →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                SunVolt France : le leader du solaire intelligent depuis 2019
              </h2>
              <p className="text-gray-600 mb-6">
                Sunvolt est une entreprise française spécialisée dans
                l'installation de panneaux solaires pour les particuliers et les
                professionnels. Notre mission est de rendre l'énergie solaire
                accessible à tous, grâce à des solutions sur-mesure, innovantes
                et économiques.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-6">
                En savoir plus
              </Button>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Solar panels on roof"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-800">5</div>
              <div className="text-sm text-gray-600 mt-2">ans d'expérience</div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-800">3000</div>
              <div className="text-sm text-gray-600 mt-2">
                installations réalisées
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-800">38571</div>
              <div className="text-sm text-gray-600 mt-2">
                tonnes de CO2 économisées
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">
            Actualités et Conseils
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Blog post 1"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2">
                  Quelle différence de prix panneau solaire hybride avec une
                  installation classique ?
                </h3>
                <Link href="#" className="text-blue-600 text-xs font-medium">
                  Lire l'article →
                </Link>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Blog post 2"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2">
                  Le meilleur moment pour se lancer dans le solaire : une
                  décision stratégique
                </h3>
                <Link href="#" className="text-blue-600 text-xs font-medium">
                  Lire l'article →
                </Link>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Blog post 3"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2">
                  Le solaire résout-il l'énergie solaire ?
                </h3>
                <Link href="#" className="text-blue-600 text-xs font-medium">
                  Lire l'article →
                </Link>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Blog post 4"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2">
                  Tout savoir sur le surplus photovoltaïque
                </h3>
                <Link href="#" className="text-blue-600 text-xs font-medium">
                  Lire l'article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Comparison Section */}
      <div className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 text-gray-800 flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=200&width=150"
                alt="SunEco Panel"
                width={150}
                height={200}
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center">
                Gamme SunEco
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Le solaire performant et durable au meilleur prix
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                En savoir plus
              </Button>
            </div>

            <div className="bg-white rounded-lg p-8 text-gray-800 flex flex-col items-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=150"
                  alt="SunMax Panel"
                  width={150}
                  height={200}
                  className="mb-4"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  Premium
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                Gamme SunMax
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Le solaire Premium avec panneaux solaires de marque française
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Sunvolt</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Nos valeurs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Nos solutions</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Panneaux solaires
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Batteries
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Bornes de recharge
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Pompes à chaleur
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Ressources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Guide solaire
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Aides financières
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Nous contacter</h4>
              <p className="text-gray-600 mb-4">
                Du lundi au vendredi de 9h à 19h
                <br />
                Le samedi de 9h à 18h
              </p>
              <Link
                href="tel:0805543056"
                className="flex items-center text-green-600 font-medium"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span>0 805 54 30 56</span>
              </Link>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Sunvolt. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
