import { DashboardHeader } from "@/components/admin/dashboard/main/dashboard-header"
import { DashboardShell } from "@/components/admin/dashboard/main/dashboard-shell"
import { ProductForm } from "@/app/admin/(protected)/dashboard/products/product-form"
 
export default function NewProductPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Create Product" description="Add a new product to your inventory" />
      <div className="grid gap-8">
        <ProductForm />
      </div>
    </DashboardShell>
  )
}
