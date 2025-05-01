"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "@/components/admin/dashboard/main/dashboard-header";
import { DashboardShell } from "@/components/admin/dashboard/main/dashboard-shell";
import { RecentBlogs } from "@/app/admin/(protected)/dashboard/blogs/recent-blogs";
import { Skeleton } from "@/components/ui/skeleton";
import { useLayoutLoading } from "@/app/admin/context/loading-context";

export default function BlogsPage() {
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
    <DashboardShell>
      <DashboardHeader
        heading="Blogs"
        description="Manage your blog posts and content."
      >
        <Button asChild>
          <Link href="/admin/dashboard/blogs/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Blog
          </Link>
        </Button>
      </DashboardHeader>
      <RecentBlogs />
    </DashboardShell>
  );
}
