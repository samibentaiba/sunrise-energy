"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/hooks/use-searchContent";
import { DynamicComponent } from "./ui/SearchBar/DynamicComponent";

export default function SearchBar({
  onSearchComplete = () => {},
}: {
  onSearchComplete: (
    query: string | null,
    results: { path: string; content: string }[]
  ) => void;
}) {
  const {
    query,
    results,
    error,
    showResults,
    groupedResults,
    cleanPath,
    handleSearchSubmit,
    handleInputChange,
  } = useSearch(onSearchComplete);
  return (
    <div className="relative w-full md:w-auto md:flex-1">
      <form onSubmit={handleSearchSubmit} className="w-full">
        <Input
          type="search"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
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

      {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}

      {showResults && Object.keys(groupedResults).length > 0 && (
        <div className="mt-10 bg-white rounded-lg p-4 max-h-[80vh] overflow-y-auto text-left">
          <h3 className="font-semibold mb-4">Résultats pour “{query}” :</h3>
          <ul className="space-y-6 text-sm">
            {Object.entries(groupedResults).map(([path, contents], i) => (
              <li key={i}>
                <div className="text-blue-700 font-medium">{path}</div>
                <ul className="ml-4 mt-1 list-disc list-inside space-y-1 text-gray-800">
                  {contents.map((content, j) => (
                    <li key={j}>{content}</li>
                  ))}
                </ul>
                <DynamicComponent
                  path={
                    query
                      ? cleanPath({ path }).endsWith(".tsx")
                        ? cleanPath({ path }).slice(0, -4)
                        : cleanPath({ path })
                      : null
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      {showResults && results.length === 0 && (
        <div className="mt-10 text-sm text-gray-500">
          Aucun résultat trouvé.
        </div>
      )}
    </div>
  );
}
