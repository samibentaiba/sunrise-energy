import { useState, useEffect } from "react";
import { fetchRecentBlogs, deleteBlog } from "@/services/blog"; // Import services

export interface Blog {
  id: number;
  title: string;
  content: string;
  status: "active" | "inactive" | "archived";
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export function useRecentBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await fetchRecentBlogs();
        setBlogs(data);
      } catch (error) {
        setError("Error fetching blogs.");
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);
  const handleDelete = async (id: number) => {
    try {
      await deleteBlog(`${id}`);
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };
  return { blogs, loading, error, deleteBlog: handleDelete };
}
