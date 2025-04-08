'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchIndex } from '@/hooks/use-searchEngine';
import Link from 'next/link';

export default function NotFound() {
  const [showResults, setShowResults] = useState(false);
  const { query, setQuery, results, error } = useSearchIndex(); // Include error in the destructure
  console.log(query, results, error); // Log error for debugging
  
  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-20 md:py-28 lg:py-32"
      style={{
        backgroundImage: 'linear-gradient(150deg, #0a1a78 0%,  #0c5ea6 100%)',
      }}
    >
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-[90px] md:text-[120px] lg:text-[160px] font-bold text-white leading-none">
          404
        </h1>
        <h4 className="text-white text-xl md:text-2xl font-medium mb-10">
          Oupss… Page non trouvée
        </h4>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <BlueButton text="Retour à l'accueil" href="/" />
          <div className="relative w-full md:w-auto md:flex-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowResults(true);
              }}
              className="w-full"
            >
              <Input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowResults(true);
                }}
                placeholder="Commencer une recherche"
                className="h-12 pl-14 pr-10 bg-white border-white focus:border-blue-300 w-full"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute left-0 top-0 h-12 w-12 text-gray-900 font-bold"
              >
                <span className="sr-only">Recherche</span>
                <Search className="h-6 w-6" strokeWidth={4} />
              </Button>
            </form>
          </div>
        </div>

        {error && (
          <div className="mt-4 text-red-500 text-sm">{error}</div> // Show error message
        )}

        {showResults && results.length > 0 && (
          <div className="mt-10 bg-white rounded-lg p-4 max-h-64 overflow-y-auto text-left">
            <h3 className="font-semibold mb-2">Résultats pour “{query}” :</h3>
            <ul className="space-y-2 text-sm">
              {results.map((res, i) => (
                <li key={i}>
                  <span className="text-blue-600 font-medium">{res.path}</span>: {res.content}
                </li>
              ))}
            </ul>
          </div>
        )}

        {showResults && results.length === 0 && (
          <div className="mt-10 text-white text-sm">Aucun résultat trouvé.</div>
        )}
      </div>
    </div>
  );
}

function BlueButton({
  text,
  hoveredText,
  href,
}: {
  text: string;
  hoveredText?: string;
  href: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#0B68A4] text-white font-medium rounded-full hover:bg-[#0B476F] overflow-hidden transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="transition-all duration-500 text-xs sm:text-sm md:text-base font-semibold">
        {isHovered ? hoveredText || text : text}
      </span>
    </Link>
  );
}
