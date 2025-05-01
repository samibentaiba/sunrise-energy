"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "@/components/admin/dashboard/main/dashboard-header";
import { DashboardShell } from "@/components/admin/dashboard/main/dashboard-shell";
import { RecentProducts } from "@/app/admin/(protected)/dashboard/products/recent-products";
import { useLayoutLoading } from "@/app/admin/context/loading-context";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsPage() {
  const { isLoading } = useLayoutLoading();

  if (isLoading) {
    return (
      <div className="py-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className=" space-y-6">
            <Skeleton className="h-8 w-[250px]" />
            <Skeleton className="h-4 w-[350px]" />
          </div>
          <div className="inline-flex items-center justify-center h-10 px-4 py-2 gap-2 rounded-md bg-muted">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-[500px] rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <DashboardShell className="overflow-hidden">
      <DashboardHeader
        heading="Products"
        description="Manage your product inventory and details."
      >
        <Button asChild>
          <Link href="/admin/dashboard/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </DashboardHeader>
      <RecentProducts />
    </DashboardShell>
  );
}
