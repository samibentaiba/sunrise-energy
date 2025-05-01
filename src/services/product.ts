// services/product.ts
import { ProductFormValues } from "@/hooks/use-product-form";
import { handleError } from "@/lib/error";
// Define a type for the image objects
type Image = {
  fullUrl: string;
  name: string;
  publicId: string;
};

// Fetch a single product by ID
export async function fetchProductById(id: string) {
  try {
    const response = await fetch(`/api/products/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      handleError(error);
    } else {
      handleError(new Error("An unknown error occurred"));
    }
  }
}

// Create a new product
export async function createProduct(
  productData: ProductFormValues & { images: Image[] }
) {
  const response = await fetch("/api/products/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  if (!response.ok) throw new Error("Failed to create product");
  return response.json();
}

// Update an existing product
export async function updateProduct(
  id: string,
  productData: ProductFormValues & { images: Image[] }
) {
  const response = await fetch(`/api/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  if (!response.ok) throw new Error("Failed to update product");
  return response.json();
}

// Delete a product by ID
export async function deleteProduct(id: string) {
  const response = await fetch(`/api/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete product");
  return id;
}

// Fetch recent products
export async function fetchRecentProducts() {
  const response = await fetch("/api/products");
  if (!response.ok) throw new Error("Failed to fetch products");
  const data = await response.json();
  return data;
}

// Function to handle the file selection and image URL generation for products
export const handleProductFileSelection = (
  e: React.ChangeEvent<HTMLInputElement>
): { imageUrl: string; file: File | null } => {
  const selectedFile = e.target.files?.[0];
  if (selectedFile) {
    const imageUrl = URL.createObjectURL(selectedFile);
    return { imageUrl, file: selectedFile };
  }
  return { imageUrl: "", file: null };
};
