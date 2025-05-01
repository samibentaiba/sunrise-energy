"use client";
// (protected)/dashboard/blogs/[id]/page.tsx

import { DashboardHeader } from "@/components/admin/dashboard/main/dashboard-header";
import { DashboardShell } from "@/components/admin/dashboard/main/dashboard-shell";
import { BlogForm } from "@/app/admin/(protected)/dashboard/blogs/blog-form";
import { useBlogEdit } from "@/hooks/use-blog-edit";

export default function EditBlogPage() {
  const { blog, loading } = useBlogEdit();

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Edit Blog"
        description={`${loading ? "Loading blog data..." : blog ? `Edit details for ${blog.title}` : " Blog not found"}`}
      />
      <div className="grid gap-8">
        {loading ? (
          <p>Loading blog data...</p>
        ) : blog ? (
          <BlogForm blog={blog} />
        ) : (
          <p>Blog not found.</p>
        )}
      </div>
    </DashboardShell>
  );
}
