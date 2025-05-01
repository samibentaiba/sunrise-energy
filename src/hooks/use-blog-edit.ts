import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { fetchBlogById } from "@/services/blog"; // Import service

interface Blog {
  id: string;
  title: string;
  content: string;
  status: "active" | "inactive" | "archived";
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  images: { publicId: string; name: string; fullUrl: string }[];
}

export function useBlogEdit() {
  const params = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchBlog() {
      try {
        const data = await fetchBlogById(`${params.id}`);
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast({
          title: "Error",
          description: "Failed to load blog data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }
    if (params.id) {
      fetchBlog();
    }
  }, [params.id]);
  return { blog, loading };
}
