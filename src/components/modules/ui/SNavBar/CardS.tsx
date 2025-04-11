"use client";

import Image from "next/image";
import "@/styles/SNavBar.css";
import { ReactElement } from "react";

export default function CardS({
  cards = [
    {
      title: "title",
      description: "description",
      linkText: "linkText",
      linkHref: "linkHref",
    },
  ],
}: {
  cards: {
    imageSrc?: string;
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
  }[];
}): ReactElement {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

function Card({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}: {
  imageSrc?: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) {
  return (
    <button onClick={() => (window.location.href = linkHref)} className="card">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        width={200}
        height={200}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <span className="card-link">{linkText}</span>
      </div>
    </button>
  );
}
