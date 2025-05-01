"use client";
// (protected)/dashboard/products/[id]/page.tsx

import { DashboardHeader } from "@/components/admin/dashboard/main/dashboard-header";
import { DashboardShell } from "@/components/admin/dashboard/main/dashboard-shell";
import { ProductForm } from "@/app/admin/(protected)/dashboard/products/product-form";
import { useProductEdit } from "@/hooks/use-product-edit";

export default function EditProductPage() {
  const { product, loading } = useProductEdit();

  return (
    <DashboardShell className="p-6 md:p-0">
      <DashboardHeader
        heading="Edit Product"
        description={`${loading ? "Loading product data..." : product ? `Edit details for ${product.name}` : " Product not found"}`}
      />
      <div className="grid gap-8">
        {loading ? (
          <p>Loading product data...</p>
        ) : product ? (
          <ProductForm product={product} />
        ) : (
          <p>Product not found.</p>
        )}
      </div>
    </DashboardShell>
  );
}
