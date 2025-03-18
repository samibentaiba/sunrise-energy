import Image from "next/image";
import Link from "next/link";

export default function SectionBlog() {
  return (
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
                Le meilleur moment pour se lancer dans le solaire : une décision
                stratégique
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
  );
}
