"use client";
import { ReactElement } from "react";
import { BlueButton } from "@/components/ui/bluebutton";
import SearchBar from "@/components/modules/SearchBar";
import { useSearchResult } from "@/hooks/use-searchResult";
export default function NotFound(): ReactElement {
  const { searchResults, handleSearchComplete } = useSearchResult();

  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-20 md:py-28 lg:py-32"
      style={{
        backgroundImage: "linear-gradient(150deg, #0a1a78 0%,  #0c5ea6 100%)",
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
          <SearchBar onSearchComplete={handleSearchComplete} />
        </div>

        {searchResults.length === 0 ? (
          <div className="mt-10 text-white text-sm">Aucun résultat trouvé.</div>
        ) : null}
      </div>
    </div>
  );
}
