"use client";
import { LayoutLoadingProvider } from "@/app/admin/context/loading-context";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { Inbox } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { FileText } from "lucide-react";
import { Settings } from "lucide-react";
import { AlertCircle } from "lucide-react";
import { DashboardLogo } from "@/components/admin/dashboard-logo";
import { MobileNav } from "@/components/admin/dashboard/main/mobile-nav";
import { ThemeToggle } from "@/components/admin/theme-toggle";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserNav } from "@/components/admin/dashboard/main/user-nav";
import { usePathname } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLayout } from "@/hooks/use-layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session, isLayoutLoading, isSession } = useLayout();

  const pathname = usePathname();

  if (!isSession) return <UnauthorizedPage />;
  else if (isLayoutLoading) return <SkeletonLayout>{children}</SkeletonLayout>;
  else if (pathname === "/admin/dashboard/profile") return <>{children}</>;
  else {
    return (
      <div className="flex min-h-screen w-full items-center justify-center flex-col">
        <header className="sticky top-0 z-40 flex py-1 w-full items-center justify-center border-b bg-background">
          <div className="container flex h-14 px-5 items-center justify-between">
            <div className="flex items-center gap-2">
              {session ? <MobileNav user={session.user} /> : null}
              <Link href="/admin/dashboard" className="hidden md:flex">
                <DashboardLogo />
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              {session ? <UserNav user={session.user} /> : null}
            </div>
          </div>
        </header>
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
          <aside className="fixed z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <div className="h-full lg:py-8">
              <nav className="flex pl-5 flex-col space-y-2">
                {[
                  {
                    href: "/admin/dashboard",
                    label: "Dashboard",
                    icon: LayoutDashboard,
                  },
                  {
                    href: "/admin/dashboard/submissions",
                    label: "Submissions",
                    icon: Inbox,
                  },
                  {
                    href: "/admin/dashboard/products",
                    label: "Products",
                    icon: ShoppingBag,
                  },
                  {
                    href: "/admin/dashboard/blogs",
                    label: "Blogs",
                    icon: FileText,
                  },
                  {
                    href: "/admin/dashboard/settings",
                    label: "Settings",
                    icon: Settings,
                  },
                ].map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "justify-start",
                    )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
          <main className="flex w-full flex-col overflow-hidden md:pr-6 px-5">
            <LayoutLoadingProvider>{children}</LayoutLoadingProvider>
          </main>
        </div>
      </div>
    );
  }
}
function SkeletonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center flex-col">
      <header className="sticky top-0 z-40 px-4 flex w-full items-center justify-center border-b bg-background">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-md md:hidden" />
            <Skeleton className="hidden h-8 w-32 md:flex" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full lg:py-8">
            <nav className="flex pl-5 flex-col space-y-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2 h-9 px-3">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
            </nav>
          </div>
        </aside>
        <main className="flex w-full flex-col overflow-hidden pr-6">
          <LayoutLoadingProvider>{children}</LayoutLoadingProvider>
        </main>
      </div>
    </div>
  );
}

function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="mx-auto max-w-md w-full">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <div className="rounded-full bg-destructive/15 p-3">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">
            Authentication Required
          </CardTitle>
          <CardDescription className="text-center">
            You need to be authenticated to access this page
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-2">
          <p className="text-center text-sm text-muted-foreground">
            Please sign in to continue or return to the home page
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full" asChild>
            <Link href="/admin/signin">Sign In</Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
