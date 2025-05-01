"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import { uploadImageToCloudinary } from "@/services/cloudinary"; // Import directly from cloudinary
import { createBlog, updateBlog } from "@/services/blog"; // Import services

export const blogFormSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters." }),
  status: z.enum(["active", "inactive", "archived"], {
    required_error: "Please select a status.",
  }),
  images: z
    .array(
      z.object({
        publicId: z.string(),
        name: z.string(),
        fullUrl: z.string(),
      })
    )
    .optional(),
});

export type BlogFormValues = z.infer<typeof blogFormSchema>;

export function useBlogForm({
  blog,
}: {
  blog?: BlogFormValues & { id: string };
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [name, setImageName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const defaultValues: Partial<BlogFormValues> = {
    title: blog?.title || "",
    content: blog?.content || "",
    status: blog?.status || "active",
    images: blog?.images || [],
  };
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogFormSchema),
    defaultValues,
  });
  const images = form.watch("images") || [];
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(imageUrl);
      setFile(selectedFile);
      setImageName(selectedFile.name);
    }
  };
  const clearImage = () => {
    setImage(null);
    setFile(null);
    setUploadedUrl(null);
    setUploadError(null);
  };
  const onSubmit = async () =>
    // data: BlogFormValues
    {
      setIsLoading(true);
      try {
        const updatedImages = [...images];
        if (file && name) {
          const uploadedUrl = await uploadImageToCloudinary(
            file,
            "blogs_images",
            name
          );
          const publicId = uploadedUrl.split("/").pop() || "";
          const newImage = {
            name,
            fullUrl: uploadedUrl,
            publicId,
          };
          updatedImages.push(newImage);
          form.setValue("images", updatedImages, { shouldValidate: true });
        }
        const formData = form.getValues();
        if (blog?.id) {
          await updateBlog(blog.id, { ...formData, images: updatedImages });
          toast({ title: "Success", description: "Blog updated" });
        } else {
          await createBlog({ ...formData, images: updatedImages });
          toast({ title: "Success", description: "Blog created" });
        }
        router.push("/admin/dashboard/blogs");
        router.refresh();
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Something went wrong.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
        clearImage();
      }
    };
  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    form.setValue("images", newImages, { shouldValidate: true });
  };
  return {
    form,
    onSubmit,
    isLoading,
    image,
    file,
    name,
    setIsUploading,
    setImageName,
    handleImageUpload,
    isUploading,
    uploadedUrl,
    uploadError,
    images,
    removeImage,
    clearImage,
  };
}
