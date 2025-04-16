"use client";
import HeroTerms from "@/components/modules/HeroTerms";
import PolicyLayout from "@/components/modules/PolicyLayout";
import PolicyLink from "@/components/modules/PolicyLink";
import PolicySection from "@/components/modules/PolicySection";
export default function Page() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <HeroTerms title="Mentions légales" />
      <PolicyLayout title="Politique de Confidentialité">
        <h1 className="text-4xl font-bold mb-8">Editeur du site SunVolt</h1>

        <PolicySection>
          <p className="mb-6">
            Le site internet
            <PolicyLink href="https://www.sunvolt.fr">
              www.sunvolt.fr
            </PolicyLink>
            est édité par la société SunVolt France.
          </p>

          <p>Numéro de SIRET : 84969368400011</p>
          <p>Capital social : 50 000 €</p>
          <p>Siège Social : 541 rue Méliès – 34000 MONTPELLIER - FRANCE</p>
          <p>Responsable éditorial : David WALLON</p>
          <p>
            Email :
            <PolicyLink href="mailto:dpo@sunvolt.fr">
              contact@sunvolt.fr
            </PolicyLink>
          </p>
        </PolicySection>

        <h2 className="text-2xl font-bold mt-12 mb-6">
          Confidentialité des informations
        </h2>

        <p className="mb-4">
          SunVolt s'engage à respecter la
          <PolicyLink href="#">
            confidentialité des informations personnelles
          </PolicyLink>
          saisies et de ne jamais les transmettre à des fins commerciales.
          Conformément à la Loi « informatique et Liberté » du 6 janvier 1978,
          vous disposez d'un droit d'accès, de rectification, de modification,
          de suppression des données qui vous concernent.
        </p>

        <p className="mb-8">
          Si vous souhaitez gérer vos données personnelles, n'hésitez pas à
          envoyer un mail via le
          <PolicyLink href="#">formulaire de contact</PolicyLink>.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Hébergement</h2>

        <p className="mb-4">
          Le site est hébergé par la société KINSTA dont le siège est situé à
          l'adresse suivante : Los Angeles en Californie aux États-Unis. Adresse
          mail :
          <PolicyLink href="mailto:contact@kinsta.com">
            contact@kinsta.com
          </PolicyLink>
        </p>
      </PolicyLayout>
    </div>
  );
}
