"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { DashboardHeader } from "@/components/admin/dashboard/main/dashboard-header";
import { DashboardShell } from "@/components/admin/dashboard/main/dashboard-shell";
import { Overview } from "@/components/admin/dashboard/main/overview";
import { useDahboard } from "@/hooks/use-dashboard";

export default function DashboardPage() {
  const {
    loading,
    totalProducts,
    activeProducts,
    productChange,
    totalBlogs,
    activeBlogs,
    blogChange,
    monthlyData,
  } = useDahboard();

  if (loading) return <DashboardLoading />;
  else
    return (
      <DashboardShell>
        <DashboardHeader
          heading="Dashboard"
          description="Overview of your products and blogs"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProducts}</div>
              <p className="text-xs text-muted-foreground">
                {productChange} from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeProducts}</div>
              <p className="text-xs text-muted-foreground">Real-time status</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalBlogs}</div>
              <p className="text-xs text-muted-foreground">
                {blogChange} from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Blogs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeBlogs}</div>
              <p className="text-xs text-muted-foreground">Real-time status</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <Overview data={monthlyData} />
          </TabsContent>
        </Tabs>
      </DashboardShell>
    );
}
import { Skeleton } from "@/components/ui/skeleton";

function DashboardLoading() {
  return (
    <DashboardShell className="py-6 gap-12">
      {/* Header skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-36" /> {/* Heading */}
        <Skeleton className="h-4 w-64" /> {/* Description */}
      </div>

      {/* Cards grid skeleton */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-4">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-32" /> {/* Card title */}
              <Skeleton className="h-8 w-16" /> {/* Value */}
              <Skeleton className="h-3 w-36" /> {/* Subtext */}
            </div>
          </div>
        ))}
      </div>

      {/* Chart skeleton */}

      <div className="h-[350px] w-full">
        <Skeleton className="h-full w-full" />
      </div>
    </DashboardShell>
  );
}
