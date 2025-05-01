import { useState, useEffect } from "react";

interface UseApiProps<T> {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: T; // body will now be typed based on T
  headers?: Record<string, string>;
}

export function useApi<T, U = unknown>({
  url,
  method,
  body,
  headers,
}: UseApiProps<U>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const options: RequestInit = {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: body ? JSON.stringify(body) : undefined,
        };
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Network response was not ok");
        const result: T = await response.json();
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Something went wrong");
        } else {
          setError("Something went wrong");
        }
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, method, body, headers]);

  return { data, loading, error };
}
