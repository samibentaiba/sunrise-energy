"use client";

import { ReactElement, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

// Review data now uses a single text field
const reviews = [
  {
    name: "Brigitte",
    date: "14 Mars 2025",
    rating: 5,
    text: "toutes les étapes, depuis la prise de contact avec l'équipe de Sunrise jusqu'à l'installation par la sté O2TOIT, se sont très bien déroulées et dans les temps prévus. Les réponses aux questions posées par mail et par téléphone sont rapides. tout est ok",
  },
  {
    name: "Anne",
    date: "20 Janvier 2025",
    rating: 5,
    text: "Entreprise basée en France, Sérieuse, dont les interlocuteurs, dès les premiers contacts sont bien en France et non pas sur des plateformes délocalisées ! Les informations sont claires, complètes et l'accompagnement tout au long du projet notamment sur le plan administratif, est une aide précieuse dans ce malström de démarches ! Les installateurs (sous-traitance) ont été ponctuels, très pro et le chantier était impeccable.",
  },
  {
    name: "Eric",
    date: "17 Janvier 2025",
    rating: 5,
    text: "Très bonne expérience avec l'entreprise, qui nous a bien conseillé et qui a suivi le projet de bout en bout. Très satisfait.",
  },
  {
    name: "Dams",
    date: "9 Décembre 2024",
    rating: 5,
    text: "Entreprise très pro",
  },
  {
    name: "Dumont",
    date: "7 Décembre 2024",
    rating: 5,
    text: "excellent travail",
  },
  {
    name: "Nathalie",
    date: "4 Décembre 2024",
    rating: 5,
    text: "Très satisfaite de la personne que j'ai eu au téléphone, il explique bien les choses si on a des questions, on peut les appeler. Je recommande",
  },
  {
    name: "J.p.",
    date: "4 Décembre 2024",
    rating: 4,
    text: "Contact agréable à voir pour le suivi du chantier",
  },
  {
    name: "David",
    date: "3 Décembre 2024",
    rating: 5,
    text: "Quand on parle de panneaux photovoltaïques on panique vu le nombre d'arnaque, mais avec Sunrise, vous pouvez y aller les yeux fermés. Le personnel est très compétent, jusqu'aux installateurs.",
  },
];

// Define a character limit for the preview text
const PREVIEW_LIMIT = 150;

// Reusable StarRating component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex mb-3">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

// Component to display text with automatic preview detection
const ReviewText = ({
  text,
  isExpanded,
}: {
  text: string;
  isExpanded: boolean;
}) => {
  // Determine if text exceeds preview limit
  const shouldTruncate = text.length > PREVIEW_LIMIT;
  // If expanded or no truncation needed, display full text, otherwise display preview
  const displayText =
    isExpanded || !shouldTruncate
      ? text
      : text.substring(0, PREVIEW_LIMIT) + "...";

  // Support newline splitting
  return displayText.includes("\n") ? (
    <>
      {displayText.split("\n").map((line, i, arr) => (
        <span key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </>
  ) : (
    <>{displayText}</>
  );
};

// Reusable ReviewCard component
const ReviewCard = ({
  review,
  index,
  isExpanded,
  toggleReview,
}: {
  review: (typeof reviews)[0];
  index: number;
  isExpanded: boolean;
  toggleReview: (index: number) => void;
}) => {
  // Check if review text exceeds the preview limit
  const hasMoreContent = review.text.length > PREVIEW_LIMIT;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-medium">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
        <Image
          src="/images/modules/Google.svg"
          alt="Google"
          width={24}
          height={24}
        />
      </div>
      <StarRating rating={review.rating} />
      <p className="text-sm">
        <ReviewText text={review.text} isExpanded={isExpanded} />
      </p>
      {hasMoreContent && (
        <button
          className="text-sm text-gray-500 mt-2 hover:underline"
          onClick={() => toggleReview(index)}
        >
          {isExpanded ? "Cacher" : "Lire la suite"}
        </button>
      )}
    </div>
  );
};

export default function TestimonialsSection(): ReactElement {
  // State to track expanded reviews. By default, David's review (index 7) is expanded.
  const [expandedReviews, setExpandedReviews] = useState<number[]>([7]);

  const toggleReview = (index: number) =>
    setExpandedReviews((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-yellow-300 px-2 py-1">Merci</span> à nos 3 000
            clients pour leur confiance et leur fidélité !
          </h2>
        </div>
        <div className="flex justify-start md:justify-end items-start">
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-3">
            <Image
              src="/images/modules/Google.svg"
              alt="Google"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">Avis Google</p>
              <div className="flex items-center">
                <span className="font-medium mr-2">3.9</span>
                <div className="flex">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            review={review}
            index={index}
            isExpanded={expandedReviews.includes(index)}
            toggleReview={toggleReview}
          />
        ))}
      </div>
    </div>
  );
}
