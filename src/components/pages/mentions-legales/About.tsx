import Link from "next/link"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Editeur du site SunVolt</h1>

      <p className="mb-6">
        Le site internet{" "}
        <Link href="https://www.sunvolt.fr" className="text-blue-600 hover:underline">
          www.sunvolt.fr
        </Link>{" "}
        est édité par la société SunVolt France.
      </p>

      <div className="space-y-1 mb-8">
        <p>Numéro de SIRET : 84969368400011</p>
        <p>Capital social : 50 000 €</p>
        <p>Siège Social : 541 rue Méliès – 34000 MONTPELLIER - FRANCE</p>
        <p>Responsable éditorial : David WALLON</p>
        <p>
          Email :{" "}
          <Link href="mailto:contact@sunvolt.fr" className="text-blue-600 hover:underline">
            contact@sunvolt.fr
          </Link>
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Confidentialité des informations</h2>

      <p className="mb-4">
        SunVolt s'engage à respecter la{" "}
        <Link href="#" className="text-blue-600 hover:underline">
          confidentialité des informations personnelles
        </Link>{" "}
        saisies et de ne jamais les transmettre à des fins commerciales. Conformément à la Loi « informatique et Liberté
        » du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification, de modification, de suppression des
        données qui vous concernent.
      </p>

      <p className="mb-8">
        Si vous souhaitez gérer vos données personnelles, n'hésitez pas à envoyer un mail via le{" "}
        <Link href="#" className="text-blue-600 hover:underline">
          formulaire de contact
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-6">Hébergement</h2>

      <p className="mb-4">
        Le site est hébergé par la société KINSTA dont le siège est situé à l'adresse suivante : Los Angeles en
        Californie aux États-Unis. Adresse mail :{" "}
        <Link href="mailto:contact@kinsta.com" className="text-blue-600 hover:underline">
          contact@kinsta.com
        </Link>
      </p>
    </div>
  )
}
