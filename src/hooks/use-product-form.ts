// use-product-form.ts

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import { uploadImageToCloudinary } from "@/services/cloudinary"; 
import { createProduct, updateProduct } from "@/services/product"; 

export const productFormSchema = z.object({
  name: z.string().min(2, { message: "Title must be at least 2 characters." }),
  price: z.coerce.number().min(0, { message: "Price must be greater than 0." }),
  stock: z.coerce.number().min(0, { message: "Stock must be greater than 0." }),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters." }),
  status: z.enum(["active", "inactive", "archived"], {
    required_error: "Please select a status.",
  }),
  availableAt: z.coerce
    .date({
      required_error: "Please provide a valid date for availability.",
    })
    .optional(),
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

export type ProductFormValues = z.infer<typeof productFormSchema>;

export function useProductForm({
  product,
}: {
  product?: ProductFormValues & { id: string };
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [name, setImageName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(imageUrl);
      setFile(selectedFile);
    }
  };
  const clearImage = () => {
    setImage(null);
    setFile(null);
    setUploadedUrl(null);
    setUploadError(null);
  };
  const defaultValues: Partial<ProductFormValues> = {
    name: product?.name || "",
    price: product?.price || 0,
    stock: product?.stock || 0,
    content: product?.content || "",
    status: product?.status || "active",
    availableAt: product?.availableAt || undefined,
    images: product?.images || [],
  };
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues,
  });
  const images = form.watch("images") || [];
  const onSubmit = async (
  //  data: ProductFormValues
  ) => {
    setIsLoading(true);
    try {
    const updatedImages = [...images];
      if (file && name) {
        setIsUploading(true);
        setUploadError(null);
        const uploadedUrl = await uploadImageToCloudinary(file, "products_images", name); // Call the service
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
      if (product?.id) {
        await updateProduct(product.id, { ...formData, images: updatedImages });
        toast({ title: "Success", description: "Product updated" });
      } else {
        await createProduct({ ...formData, images: updatedImages });
        toast({ title: "Success", description: "Product created" });
      }
      router.push("/admin/dashboard/products");
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
      setIsUploading(false);
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
