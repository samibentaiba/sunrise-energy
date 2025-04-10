"use client";
import React, { ReactElement } from "react";

import { Check } from "lucide-react";

export default function FeatureList({
  features,
}: {
  features: { id: number; text: string }[];
}): ReactElement {
  return (
    <ul className="space-y-6 ">
      {features.map((feature, index) => (
        <li
          key={feature.id}
          className={`flex items-start gap-4 animate-fade-in-up`}
          style={{ animationDelay: `${400 + index * 100}ms` }}
        >
          <span className="flex-shrink-0 mt-1">
            <Check className="h-5 w-5 text-solar-accent" />
          </span>
          <span className="text-base text-white/90">{feature.text}</span>
        </li>
      ))}
    </ul>
  );
}

