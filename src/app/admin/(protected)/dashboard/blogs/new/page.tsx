import { DashboardHeader } from "@/components/admin/dashboard/main/dashboard-header"
import { DashboardShell } from "@/components/admin/dashboard/main/dashboard-shell"
import { BlogForm } from "@/app/admin/(protected)/dashboard/blogs/blog-form"

export default function NewBlogPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Create Blog" description="Add a new blog post to your website" />
      <div className="grid gap-8">
        <BlogForm />
      </div>
    </DashboardShell>
  )
}
