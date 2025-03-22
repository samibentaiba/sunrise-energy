
"use client"
import React from "react";
import { Check } from "lucide-react";

interface Feature {
  id: number;
  text: string;
}

interface FeatureListProps {
  features: Feature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <ul className="space-y-6 mt-8">
      {features.map((feature, index) => (
        <li 
          key={feature.id}
          className={`flex items-start gap-4 opacity-0 animate-fade-in-up`}
          style={{ animationDelay: `${400 + index * 100}ms` }}
        >
          <span className="flex-shrink-0 mt-1">
            <Check className="h-6 w-6 text-solar-accent" />
          </span>
          <span className="text-lg text-white/90">
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
