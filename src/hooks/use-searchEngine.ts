'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<SearchResult[]>([]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch search index on mount
  useEffect(() => {
    const fetchIndex = async () => {
      setLoading(true);
      try {
        const response = await axios.get<SearchResult[]>('/api/search-index');
        setIndex(response.data);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching search index:', err);
        setError('Failed to load search data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchIndex();
  }, []);

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
