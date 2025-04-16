"use client";

import { useState } from "react";
import BlogFilters from "./ui/BlogFilters";
import BlogList from "./ui/BlogList";

const filters = [
  { label: "Tout", filter: "*" },
  { label: "Aides", filter: "aides" },
  { label: "Autoconsommation", filter: "autoconsommation" },
  { label: "Comparatifs", filter: "comparatif" },
  { label: "Économies d'énergie", filter: "economies-denergie" },
  { label: "Entreprise", filter: "entreprise" },
  { label: "Installateur", filter: "installateur" },
  { label: "Kit panneau solaire", filter: "kit-panneaux-solaires" },
  { label: "Panneau solaire", filter: "panneau-solaire" },
  {
    label: "Puissance panneaux solaires",
    filter: "puissance-panneaux-solaires",
  },
];

const posts = [
  {
    title:
      "Les 6 aides à l’installation de panneaux solaires à connaître en 2024",
    imageUrl: "/images/modules/Guides/1.png",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["aides"],
  },
  {
    title: "Comment économiser l’électricité en 2024 ?",
    imageUrl: "/images/modules/Guides/2.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/installation-solaire-residentielle",
    filter: ["*", "economies-denergie"],
  },
  {
    title: "Panneaux solaires l’hiver : les questions que vous vous posez",
    imageUrl: "/images/modules/Guides/3.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/ferme-solaire-a-grande-echelle",
    filter: ["*", "panneau-solaire"],
  },
  {
    title: "Système Solaire Combiné (SSC) : ce qu’il faut savoir !",
    imageUrl: "/images/modules/Guides/4.png",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/technicien-installant-un-panneau-solaire",
    filter: ["*", "panneau-solaire"],
  },
  {
    title:
      "Batterie solaire : Comparatif des meilleures batteries solaires 2024",
    imageUrl: "/images/modules/Guides/5.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/panneaux-solaires-au-lever-du-soleil",
    filter: ["*", "comparatif"],
  },
  {
    title:
      "Classement meilleures marques système de montage pour panneaux solaires en 2024",
    imageUrl: "/images/modules/Guides/6.png",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/toiture-solaire-urbaine",
    filter: ["*", "comparatif"],
  },
  {
    title:
      "9 conseils à suivre avant de se lancer dans un projet de panneaux photovoltaïques ?",
    imageUrl: "/images/modules/Guides/7.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/equipe-installant-des-panneaux-solaires",
    filter: ["*", "panneau-solaire"],
  },
  {
    title:
      "Devis panneau solaire : 9 conseils indispensables à suivre avant de signer",
    imageUrl: "/images/modules/Guides/8.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/panneaux-solaires-sur-une-maison-ecologique",
    filter: ["*", "panneau-solaire"],
  },
  {
    title:
      "9 astuces pour trouver un installateur de panneaux solaires de qualité",
    imageUrl: "/images/modules/Guides/9.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/installation-solaire-en-cours",
    filter: ["*", "installateur", "panneau-solaire"],
  },
  {
    title: "Tout ce que vous devez savoir sur le label RGE",
    imageUrl: "/images/modules/Guides/10.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/vue-aerienne-de-panneaux-solaires",
    filter: ["aides"],
  },
  {
    title:
      "Location de toiture photovoltaïque : gagner de l’argent grâce à son toit",
    imageUrl: "/images/modules/Guides/11.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/technologie-solaire-avancee",
    filter: ["*", "entreprise"],
  },
  {
    title:
      "Panneau solaire bifacial : Innovation technologique dans le monde du photovoltaïque",
    imageUrl: "/images/modules/Guides/12.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/panneaux-solaires-et-ciel-bleu",
    filter: ["*", "panneau-solaire"],
  },
  {
    title: "Entreprise, panneau solaire : Quel modèle économique choisir ?",
    imageUrl: "/images/modules/Guides/13.png",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/ingenieur-inspectant-une-installation-solaire",
    filter: ["*", "entreprise"],
  },
  {
    title: "Le recyclage des panneaux solaires en France : ça donne quoi ?",
    imageUrl: "/images/modules/Guides/14.png",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/systeme-solaire-domestique",
    filter: ["*", "panneau-solaire"],
  },
  {
    title:
      "La voiture électrique et le solaire : une alliance durable et économique",
    imageUrl: "/images/modules/Guides/15.jpeg",
    category: "Economies d'energie / Guides",
    link: "https://www.sunvolt.fr/blog/maison-avec-toit-solaire",
    filter: ["*"],
  },
  {
    title:
      "Compteur Linky et panneau solaire : dispositif favorisant l’autoconsommation énergétique",
    imageUrl: "/images/modules/Guides/16.jpeg",
    category: "Conso",
    link: "https://www.sunvolt.fr/blog/panneaux-solaires-sur-un-batiment-commercial",
    filter: ["*"],
  },
  {
    title:
      "Rentabilité panneau solaire sur son toit, cela vaut-il vraiment le coût en 2024 ?",
    imageUrl: "/images/modules/Guides/17.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/champ-de-panneaux-solaires",
    filter: ["*", "panneau-solaire"],
  },
  {
    title: "Prime à l’autoconsommation solaire ; quels changements en 2025 ?",
    imageUrl: "/images/modules/Guides/18.png",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/installation-photovoltaique-rurale",
    filter: ["*", "panneau-solaire"],
  },
  {
    title:
      "7 bonnes raisons de choisir l’autoconsommation photovoltaïque pour les professionnels",
    imageUrl: "/images/modules/Guides/19.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/inspection-de-panneau-solaire",
    filter: ["*", "entreprise"],
  },
  {
    title:
      "Quelle puissance de panneaux solaires choisir pour une maison individuelle ?",
    imageUrl: "/images/modules/Guides/20.jpeg",
    category: "Conso / Guides ",
    link: "https://www.sunvolt.fr/blog/energie-renouvelable-pour-les-foyers",
    filter: ["*", "puissance-panneaux-solaires"],
  },
  {
    title:
      "Top 7 des meilleures marques de panneaux solaires photovoltaïques en 2024 pour produire son énergie",
    imageUrl: "/images/modules/Guides/21.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/energie-solaire-propre",
    filter: ["*", "comparatif", "panneau-solaire"],
  },
  {
    title: "Vérités sur la durée de vie d’un panneau solaire en 2024",
    imageUrl: "/images/modules/Guides/22.jpg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/panneaux-solaires-sur-un-toit-residentiel",
    filter: ["*", "panneau-solaire"],
  },
  {
    title:
      "Panneaux solaires chinois : pourquoi dominent-ils le marché mondial du photovoltaïque  ?",
    imageUrl: "/images/modules/Guides/23.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/vue-rapprochee-de-panneaux-solaires",
    filter: ["*", "panneau-solaire"],
  },

  {
    title:
      "Fabricant panneau solaire : Qui sont ces entreprises qui dominent l’industrie des panneaux solaires ?",
    imageUrl: "/images/modules/Guides/24.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*"],
  },
  {
    title:
      "Piscine et électricité : combien votre piscine vous coûte-t-elle chaque année ?",
    imageUrl: "/images/modules/Guides/25.jpeg",
    category: "Economies d'energie",
    link: "https://www.sunvolt.fr/blog/structure-de-montage-pour-panneaux-solaires",
    filter: ["*"],
  },
  {
    title:
      "Conformités photovoltaïques pour les entreprises : comprendre la Loi Climat et Résilience et le Décret tertiaire",
    imageUrl: "/images/modules/Guides/26.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/toiture-solaire-innovante",
    filter: ["*", "entreprise"],
  },
  {
    title: "Kit panneau solaire : tout ce que l’on ne vous dit pas",
    imageUrl: "/images/modules/Guides/27.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/centrale-solaire-industrielle",
    filter: ["*", "installateur", "kit-panneaux-solaires", "panneau-solaire"],
  },
  {
    title:
      "Batterie virtuelle vs Batterie physique : quelle est la solution la plus rentable pour stocker son énergie solaire ?",
    imageUrl: "/images/modules/Guides/28.png",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/enfants-apprenant-l-energie-solaire",
    filter: ["*", "comparatif"],
  },
  {
    title:
      "Qu’est-ce que l’autoconsommation photovoltaïque ? Quels en sont les avantages en 2024 ?",
    imageUrl: "/images/modules/Guides/29.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/ferme-solaire-moderne",
    filter: ["*", "autoconsommation", "panneau-solaire"],
  },
  {
    title:
      "Inclinaison panneau solaire : comment optimiser sa production d’énergie solaire ?",
    imageUrl: "/images/modules/Guides/30.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/equipement-de-surveillance-solaire",
    filter: ["*", "panneau-solaire"],
  },
  {
    title:
      "Code de la Construction et de l’Habitation : quels changements en 2024 ?",
    imageUrl: "/images/modules/Guides/31.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/maison-autonome-en-energie",
    filter: ["*", "entreprise"],
  },
  {
    title:
      "Monophasé ou Triphasé : Tout savoir pour choisir le bon système solaire",
    imageUrl: "/images/modules/Guides/32.jpeg",
    category: "Guides / Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*"],
  },
  {
    title:
      "Nettoyage panneau solaire : 11 astuces indispensables à connaître !",
    imageUrl: "/images/modules/Guides/33.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*", "panneau-solaire"],
  },
  {
    title:
      "Ombrière solaire, toiture solaire, centrale solaire au sol ? Quel emplacement choisir ?",
    imageUrl: "/images/modules/Guides/34.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*", "entreprise"],
  },
  {
    title:
      "Onduleur solaire : quels sont les meilleures marques d’onduleurs solaires en 2024 ?",
    imageUrl: "/images/modules/Guides/35.jpeg",
    category: "Guides",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*", "comparatif"],
  },
  {
    title: "11 idées reçues sur l’énergie solaire",
    imageUrl: "/images/modules/Guides/36.jpeg",
    category: "Guides / Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*"],
  },
  {
    title:
      "7 innovations dans le secteur des panneaux solaires qui ont marqué 2024 !",
    imageUrl: "/images/modules/Guides/37.jpeg",
    category: "Guides / News",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*"],
  },
  {
    title:
      "EDF OA Solaire : Comment ça marche et quels sont les tarifs de rachat de l’électricité solaire en 2024 ?",
    imageUrl: "/images/modules/Guides/38.webp",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["aides"],
  },
  {
    title:
      "Le guide complet de l’autoconsommation photovoltaïque en 2024 : Comment réduire sa facture d’énergie grâce à l’énergie solaire ?",
    imageUrl: "/images/modules/Guides/39.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*", "aides", "autoconsommation"],
  },
  {
    title: "Tout ce que vous devez savoir sur MaPrimeRénov en 2024",
    imageUrl: "/images/modules/Guides/40.jpg",
    category: "Conso",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*"],
  },
  {
    title:
      "Certificat d’Économies d’Énergie (CEE) : décryptage de ce dispositif pour la réduction de la consommation énergétique",
    imageUrl: "/images/modules/Guides/41.jpeg",
    category: "Economies d'énergie / Guides",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*"],
  },
  {
    title:
      "Consuel – 10 points clefs à savoir pour mettre en service vos panneaux solaires",
    imageUrl: "/images/modules/Guides/42.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*", "panneau-solaire"],
  },
  {
    title:
      "Agrivoltaïsme : Pourquoi et comment valoriser son patrimoine foncier avec une centrale solaire au sol ?",
    imageUrl: "/images/modules/Guides/43.jpeg",
    category: "Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*", "entreprise"],
  },
  {
    title: "Tout savoir sur le routeur solaire photovoltaïque",
    imageUrl: "/images/modules/Guides/44.jpeg",
    category: "Conso / Guides",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*"],
  },
  {
    title:
      "Les différents types de toiture en France et leur compatibilité avec une installation panneau solaire",
    imageUrl: "/images/modules/Guides/45.jpeg",
    category: "Guides / Panneaux solaires",
    link: "https://www.sunvolt.fr/blog/reseau-electrique-intelligent-solaire",
    filter: ["*"],
  },
];

export default function Guides() {
  const [activeFilter, setActiveFilter] = useState<string>("*");

  return (
    <div className="max-w-7xl w-[80%] mx-auto py-8">
      <BlogFilters
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <BlogList posts={posts} activeFilter={activeFilter} />
    </div>
  );
}
