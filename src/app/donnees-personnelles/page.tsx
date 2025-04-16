import HeroTerms from "@/components/modules/HeroTerms";
import DataTable from "@/components/modules/DataTable";
import PolicyLayout from "@/components/modules/PolicyLayout";
import PolicyLink from "@/components/modules/PolicyLink";
import PolicySection from "@/components/modules/PolicySection";

export default function Page() {
  // Data for personal data types table
  const personalDataRows = [
    {
      label: "Détails personnels",
      description:
        "Nom complet, date de naissance, nationalité, situation familiale, professionnel, revenus",
    },
    {
      label: "Coordonnées de contact",
      description: "Adresse postale et adresse mail",
    },
    {
      label: "Informations contractuels",
      description:
        "Détails au sujet des produits et services que nous vous avons commercialisés",
    },
    {
      label: "Données de localisation",
      description:
        "Données de localisation provenant de votre téléphone portable, l'adresse IP grâce à laquelle vous vous connectez à internet",
    },
    {
      label: "Données d'utilisation de nos produits et services",
      description:
        "Détails au sujet de la façon d'utiliser nos produits et services",
    },
    {
      label: "Données techniques",
      description:
        "Détails au sujet de la technologie que vous utilisez avec votre ordinateur ou votre téléphone portable",
    },
    {
      label: "Communications",
      description: "Lettres, emails et conversations téléphoniques entre nous",
    },
    {
      label: "Documents",
      description:
        "Documents, scans ou copies de documents vous concernant tels que : documents d'identité, justificatifs de domicile pour nous permettre de remplir nos obligations règlementaires",
    },
  ];

  // Data for user rights table
  const userRightsRows = [
    {
      label: "Accès",
      description:
        "Vous avez le droit de demander les données personnelles que nous avons collectées à votre sujet",
    },
    {
      label: "Rectification",
      description:
        "Vous avez le droit de demander la rectification des données que nous avons collectées à votre sujet",
    },
    {
      label: "Effacement",
      description: "Vous avez le droit de demander l'effacement de vos données",
    },
    {
      label: "Droit de restriction ou d'opposition au traitement",
      description:
        "Vous avez le droit de restreindre ou de vous opposer au traitement de vos données",
    },
    {
      label: "Portabilité",
      description:
        "Vous avez le droit de demander l'export des données personnelles que nous avons collectées à votre sujet dans un format lisible",
    },
    {
      label: "Marketing",
      description: "Vous avez le droit de vous opposer au marketing direct",
    },
  ];

  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <HeroTerms title="Politique de Confidentialité de SunVolt" />
      <PolicyLayout title="Politique de Confidentialité">
        <div className="mb-8">
          <p className="mb-6">
            La présente « Politique de Confidentialité » décrit les informations
            que nous traitons pour la fourniture des produits et services
            accessibles via SunVolt et nos mesures mises en place pour les
            traiter. Elle a également vocation à vous informer sur les modalités
            de collecte et d'utilisation de vos Données personnelles par
            SunVolt, ainsi que sur vos droits en matière de protection des
            données à caractère personnel au regard du Règlement européen
            2016/679 du 27 avril 2016 relatif à la protection des données, dit «
            RGPD ».
          </p>

          <p className="mb-6">
            Conformément au Règlement « RGPD », SunVolt est le Responsable du
            Traitement des données collectées dans le cadre de la fourniture de
            ces produits et services décrits dans les conditions générales
            d'utilisation des services SunVolt. Les données collectées
            concernent celles du client SunVolt (signataire du Contrat conclu
            avec SunVolt).
          </p>
        </div>

        <PolicySection title="Quelles sont les coordonnées du délégué à la protection des données chez SunVolt ?">
          <p>
            Vous pouvez contacter le délégué à la protection des données sur
            cette adresse mail :
            <PolicyLink href="mailto:dpo@sunvolt.fr">dpo@sunvolt.fr</PolicyLink>
          </p>
        </PolicySection>

        <PolicySection title="Quelles données personnelles récoltons-nous et dans quels buts ?">
          <p className="mb-6">
            Les données collectées sont nécessaires à la gestion de votre
            commande et à la fourniture de nos services. Certaines données sont
            collectées pour être analysées en interne et permettre
            l'amélioration de nos services.
          </p>

          <DataTable
            rows={personalDataRows}
            headerLabels={{
              label: "Nature de la donnée",
              description: "Description",
            }}
          />

          <p>
            Ces informations sont directement collectées auprès de vous avec
            votre autorisation et peuvent être vérifiées pour remplir nos
            obligations règlementaires.
          </p>
        </PolicySection>

        <PolicySection title="A qui peuvent être transmises vos données ?">
          <p className="mb-4">
            Les données peuvent être transmises aux partenaires qui nous
            permettent de proposer les produits et services SunVolt pour leur
            exécution, leur gestion, leur traitement et leur paiement.
          </p>

          <p className="mb-4">
            Nous ne partageons pas vos données personnelles avec des tierces
            personnes dans un objectif marketing.
          </p>

          <p className="mb-4">
            Le traitement et l'hébergement des Données personnelles sont établis
            sur le territoire de l'Union européenne.
          </p>

          <p className="mb-4">
            Néanmoins, si SunVolt transfère des Données personnelles hors du
            territoire de l'Union européenne, SunVolt garantit que ces
            transferts sont exécutés vers des Etats, qui font l'objet d'une
            décision d'adéquation par la Commission européenne, justifiant d'un
            niveau de protection adéquat, au sens de l'article 45 du Règlement
            général européen 2016/679 du 27 avril 2016 sur la protection des
            données personnelles.
          </p>

          <p>
            A défaut de décision d'adéquation, SunVolt peut transférer des
            Données personnelles hors de l'Union européenne à des partenaires
            sous-traitants, dans les conditions prévues à l'article 46 du
            Règlement général européen 2016/679 du 27 avril 2016 sur la
            protection des données personnelles, notamment par l'élaboration de
            clauses types de sous-traitance approuvées par la CNIL.
          </p>
        </PolicySection>

        <PolicySection title="Comment et combien de temps sont conservées vos données ?">
          <p className="mb-4">
            Ces données sont conservées pendant 7 ans après la signature du
            contrat du client SunVolt afin de respecter nos obligations légales
            et réglementaires et pour nous permettre d'améliorer et de
            personnaliser les produits et services SunVolt.
          </p>

          <p className="mb-4">
            Passé ce délai et sauf demande du régulateur ou d'une autorité
            administrative vos données seront effacées de nos systèmes.
          </p>

          <p className="mb-4">
            Toutes les mesures de sécurité ont été prises pour assurer la
            protection de vos données et leur non-diffusion à des tierces
            parties.
          </p>

          <p>
            Des tests sont réalisés régulièrement pour assurer la non
            pénétration de nos systèmes.
          </p>
        </PolicySection>

        <PolicySection title="Quels sont vos droits sur vos données personnelles ?">
          <DataTable rows={userRightsRows} />

          <p>
            Pour exercer vos droits, vous pouvez vous adresser à{" "}
            <PolicyLink href="mailto:dpo@sunvolt.fr">dpo@sunvolt.fr</PolicyLink>
            . Une réponse vous sera apportée dans les meilleures délais et au
            plus tard un mois après la réception de votre demande. Ce délai peut
            être prolongé de 2 mois en cas de demande complexe ou multiple. Vous
            serez, dans ce cas là, notifié du délai de réponse.
          </p>
        </PolicySection>

        <PolicySection title="Qui contacter en cas de réclamation ?">
          <p>
            En cas de réclamation concernant le traitement de vos données, vous
            pouvez contacter notre délégué à la protection des données. Si
            celui-ci ne parvient pas à traiter votre réclamation, vous pouvez
            vous adresser à la Commission de Protection de la Vie Privée Belge :{" "}
            <PolicyLink href="https://www.privacycommission.be/" external>
              https://www.privacycommission.be
            </PolicyLink>{" "}
            ou la Commission Nationale Informatique et Libertés (CNIL) :{" "}
            <PolicyLink href="https://www.cnil.fr/" external>
              https://www.cnil.fr
            </PolicyLink>
          </p>
        </PolicySection>

        <PolicySection title="Comment consentez-vous à ce que vos données soient collectées ?">
          <p>
            En acceptant cette politique de confidentialité et en acceptant les
            conditions générales d'utilisation des services SunVolt et les
            conditions générales du service client SunVolt vous acceptez que vos
            données soient collectées et traitées conformément à cette politique
            de confidentialité.
          </p>
        </PolicySection>

        <PolicySection title="Que se passe-t-il en cas de refus de la collecte et du traitement de vos données ?">
          <p className="mb-4">
            En cas de refus de collecte et de traitement de vos données, le
            Contrat ne pourra pas être exécuté. L'accès à nos services pourra
            alors être supprimé.
          </p>

          <p>
            SunVolt est également conçu pour être particulièrement attentif aux
            besoins de ses clients. C'est entre autres pour cela que nous
            faisons usage de cookies. Nous vous renvoyons aux conditions
            générales régissant l'utilisation de nos cookies pour plus
            d'informations.
          </p>
        </PolicySection>
      </PolicyLayout>
    </div>
  );
}
