import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { fetchProductById } from "@/services/product"; // Import from the service

interface Product {
  id: string;
  name: string;
  stock: number;
  content: string;
  price: number;
  status: "active" | "inactive" | "archived";
  availableAt: Date;
  createdAt: string;
  updatedAt: string;
  images: { publicId: string; name: string; fullUrl: string }[];
}

export function useProductEdit() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await fetchProductById(`${params.id}`); // Fetch from the service
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        toast({
          title: "Error",
          description: "Failed to load product data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }
    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);
  return { product, loading };
}
