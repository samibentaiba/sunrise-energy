'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export type SearchResult = {
  path: string;
  content: string;
};

export function useSearchIndex() {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<SearchResult[]>([]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null); // Error state
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  // Fetch search index data on component mount
  useEffect(() => {
    setLoading(true); // Set loading state to true when fetching
    axios
      .get('/api/search-index/route.ts') // Use axios to make a GET request to your API
      .then((response) => {
        setIndex(response.data); // Set the search index data
        setError(null); // Clear any previous errors
      })
      .catch((err) => {
        console.error('Error fetching search index:', err);
        setError('Failed to load search data. Please try again later.'); // Set error message
      })
      .finally(() => {
        setLoading(false); // Set loading to false once request completes
      });
  }, []);

  // Filter the index based on the query
  useEffect(() => {
    if (!query) {
      setResults([]); // Clear results if query is empty
      return;
    }
    const filtered = index.filter((entry) =>
      entry.content.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
    );
    setResults(filtered); // Set the search results
  }, [query, index]); // Update results when query or index changes

  return {
    query,
    setQuery,
    results,
    error,
    loading, // Return loading state
  };
}
