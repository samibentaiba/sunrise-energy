import { useEffect, useState } from "react";
import { fetchRecentProducts, deleteProduct } from "@/services/product"; // Import from the service
export interface Product {
  id: number;
  name: string;
  status: "active" | "inactive" | "archived";
  price: string;
  content: string;
  stock: number;
  availableAt: string;
  createdAt: string;
  updatedAt: string;
}
export function useRecentProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await fetchRecentProducts(); // Use service function to fetch recent products
        setProducts(data);
      } catch (error) {
        setError("Error fetching products.");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
  async function handleDeleteProduct(id: number) {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteProduct(`${id}`); // Use the service function to delete a product
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
  return { products, loading, error, deleteProduct: handleDeleteProduct };
}
