// services/blog.ts
import { BlogFormValues } from "@/hooks/use-blog-form";
import { handleError } from "@/lib/error";
// Define a type for the image objects
type Image = {
  fullUrl: string;
  name: string;
  publicId: string;
};

// Fetch a single blog by ID
export async function fetchBlogById(id: string) {
  try {
    const response = await fetch(`/api/blogs/${id}`);
    if (!response.ok) throw new Error("Failed to fetch blog");
    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      handleError(error);
    } else {
      handleError(new Error("An unknown error occurred"));
    }
  }
}

// Create a new blog
export async function createBlog(
  blogData: BlogFormValues & { images: Image[] }
) {
  const response = await fetch("/api/blogs/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blogData),
  });
  if (!response.ok) throw new Error("Failed to create blog");
  return response.json();
}

// Update an existing blog
export async function updateBlog(
  id: string,
  blogData: BlogFormValues & { images: Image[] }
) {
  const response = await fetch(`/api/blogs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blogData),
  });
  if (!response.ok) throw new Error("Failed to update blog");
  return response.json();
}

// Delete a blog by ID
export async function deleteBlog(id: string) {
  const response = await fetch(`/api/blogs/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete blog");
  return id;
}

// Fetch recent blogs
export async function fetchRecentBlogs() {
  const response = await fetch("/api/blogs");
  if (!response.ok) throw new Error("Failed to fetch blogs");
  const data = await response.json();
  return data;
}

// Function to handle the file selection and image URL generation
export const handleFileSelection = (
  e: React.ChangeEvent<HTMLInputElement>
): { imageUrl: string; file: File | null } => {
  const selectedFile = e.target.files?.[0];
  if (selectedFile) {
    const imageUrl = URL.createObjectURL(selectedFile);
    return { imageUrl, file: selectedFile };
  }
  return { imageUrl: "", file: null };
};
