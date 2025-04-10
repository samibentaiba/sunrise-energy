// hooks/use-searchEngine.ts
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export type SearchResult = {
  path: string;
  content: string;
};

type UseSearchIndexReturn = {
  query: string;
  setQuery: (value: string) => void;
  results: SearchResult[];
  error: string | null;
  loading: boolean;
};

export function useSearchIndex(): UseSearchIndexReturn {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchResult[]>([]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch search index when query changes
  useEffect(() => {
    const fetchIndex = async () => {
      setLoading(true);
      try {
        const url = `/api/search-index?query=${encodeURIComponent(query)}`;
        console.log("Making request to:", url); // Log the URL for debugging
        const response = await axios.get<SearchResult[]>(url);
        setIndex(response.data);
        setError(null);
      } catch (err: unknown) {
        console.error("Error fetching search index:", err);

        // Narrow down the error type
        if (err instanceof Error) {
          setError(`Failed to load search data: ${err.message}`);
        } else {
          setError("Failed to load search data. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if query is not empty
    if (query.trim()) {
      fetchIndex();
    }
  }, [query]); // Fetch new data whenever the query changes

  // Filter results when query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = index.filter(({ content }) =>
      content.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query, index]);

  return {
    query,
    setQuery,
    results,
    error,
    loading,
  };
}
