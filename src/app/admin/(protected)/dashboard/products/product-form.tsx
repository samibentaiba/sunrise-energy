"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ProductFormValues, useProductForm } from "@/hooks/use-product-form";
import { useRouter } from "next/navigation";
import { Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageIcon, X, Upload } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { Textarea } from "@/components/ui/textarea";
interface ProductInputProps {
  control: Control<ProductFormValues>;
}
interface UploadedImagesProps {
  images: { name: string; publicId: string; fullUrl: string }[];
  removeImage: (index: number) => void;
}
export type ProductImageInputProps = {
  image: string | null;
  uploadError: string | null;
  uploadedUrl: string | null;
  setImageName: (name: string | null) => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearImage: () => void;
};
interface ProductFormProps {
  product?: {
    id: string;
    name: string;
    stock: number;
    content: string;
    price: number;
    availableAt: Date;
    status: "active" | "inactive" | "archived";
    images: { publicId: string; name: string; fullUrl: string }[];
  };
}

export function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const {
    form,
    onSubmit,
    isLoading,
    image,
    setImageName,
    handleImageUpload,
    uploadedUrl,
    uploadError,
    images,
    removeImage,
    clearImage,
  } = useProductForm({
    product,
  });
  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6 pt-6">
            <ProductNameInput control={form.control} />
            <ProductStockInput control={form.control} />
            <ProductPriceInput control={form.control} />
            <ProductStatusSelect control={form.control} />
            <ProductContentInput control={form.control} />
            <ProductAvailableAtInput control={form.control} />
            <ProductImageInput
              image={image}
              clearImage={clearImage}
              setImageName={setImageName}
              handleImageUpload={handleImageUpload}
              uploadError={uploadError}
              uploadedUrl={uploadedUrl}
            />
            <UploadedImages images={images} removeImage={removeImage} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <span>Saving...</span>
              ) : product?.id ? (
                "Update Product"
              ) : (
                "Create Product"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

function ProductContentInput({ control }: ProductInputProps) {
  return (
    <FormField
      control={control}
      name="content"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Content</FormLabel>
          <FormDescription className="py-1">
            The main content of your product post.
          </FormDescription>
          <FormControl>
            <Textarea
              placeholder="Write your product content here..."
              className="min-h-[200px]"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function ProductNameInput({ control }: ProductInputProps) {
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormDescription className="py-1">
            The name of your product post.
          </FormDescription>
          <FormControl>
            <Input placeholder="Product name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function ProductPriceInput({ control }: ProductInputProps) {
  return (
    <FormField
      control={control}
      name="price"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Price</FormLabel>
          <FormDescription className="py-1">
            The main Price of your product post.
          </FormDescription>
          <FormControl>
            <Input placeholder="Product price" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
function ProductStockInput({ control }: ProductInputProps) {
  return (
    <FormField
      control={control}
      name="stock"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Stock</FormLabel>
          <FormDescription className="py-1">
            The main Stock of your product post.
          </FormDescription>
          <FormControl>
            <Input placeholder="Product stock" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
function ProductStatusSelect({ control }: ProductInputProps) {
  return (
    <FormField
      control={control}
      name="status"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Status</FormLabel>
          <FormDescription className="py-1">
            The current status of your product post.
          </FormDescription>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a status" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function ProductImageInput({
  image,
  uploadedUrl,
  uploadError,
  clearImage,
  setImageName,
  handleImageUpload,
}: ProductImageInputProps) {
  return (
    <FormItem className="space-y-6">
      <FormLabel>Product Images</FormLabel>
      <FormDescription className="py-1">
        Upload an image to see it displayed below
      </FormDescription>
      <div className="flex items-center justify-center">
        <label htmlFor="image-upload" className="cursor-pointer">
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-muted rounded-full">
              <Upload className="h-6 w-6 text-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">
              Click to upload an image
            </span>
          </div>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>
      <Input
        type="text"
        placeholder="Image name"
        onChange={(e) => setImageName(e.target.value)}
      />
      <div className="border rounded-lg overflow-hidden">
        {image ? (
          <div className="relative w-full h-[300px]">
            <Image
              src={image}
              fill
              alt="Uploaded preview"
              className="w-full h-auto object-contain max-h-[300px]"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[300px] bg-muted/30">
            <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
            <p className="text-muted-foreground mt-2">No image uploaded yet</p>
          </div>
        )}
      </div>
      {image && (
        <div className="space-y-3">
          <Button variant="outline" className="w-full" onClick={clearImage}>
            Clear Image
          </Button>
          {uploadedUrl && (
            <p className="text-sm text-green-600">
              Uploaded! URL: {uploadedUrl}
            </p>
          )}
          {uploadError && <p className="text-sm text-red-600">{uploadError}</p>}
        </div>
      )}
    </FormItem>
  );
}

function UploadedImages({ images, removeImage }: UploadedImagesProps) {
  return (
    <FormItem>
      <div className="space-y-4">
        <FormDescription className="py-1">
          Uploaded Images in the website displayed below
        </FormDescription>
        {images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative group border rounded-md overflow-hidden"
              >
                <div className="aspect-video relative">
                  <Image
                    src={img.fullUrl}
                    alt={img.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-2 py-1 truncate">
                  {img.name}
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center border rounded-md p-8 bg-muted/50">
            <div className="flex flex-col items-center text-muted-foreground">
              <ImageIcon className="h-10 w-10 mb-2" />
              <p>No images added yet</p>
            </div>
          </div>
        )}
      </div>
    </FormItem>
  );
}
// Add the new input component for the date field
function ProductAvailableAtInput({ control }: ProductInputProps) {
  return (
    <FormField
      control={control}
      name="availableAt"
      render={({ field }) => {
        // Ensure the value is a Date object or string in "YYYY-MM-DD" format
        const value =
          field.value instanceof Date
            ? field.value
            : field.value
              ? new Date(field.value)
              : null;
        return (
          <FormItem>
            <FormLabel>Available At</FormLabel>
            <FormDescription className="py-1">
              The date when the product becomes available.
            </FormDescription>
            <FormControl>
              <Input
                type="date"
                placeholder="Select date"
                // Convert the value to string format "YYYY-MM-DD" or set an empty string
                value={value ? value.toISOString().split("T")[0] : ""}
                onChange={(e) => {
                  const newDate = e.target.value
                    ? new Date(e.target.value)
                    : null;
                  field.onChange(newDate); // Only update if a valid date is selected
                }}
                onBlur={field.onBlur}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
