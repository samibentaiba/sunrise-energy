
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingBag,
  FileText,
  Settings,
  Menu,
  LogOut,
} from "lucide-react";
import { signOut } from "next-auth/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { DashboardLogo } from "@/components/admin/dashboard-logo";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { User as UserType } from "next-auth";
export function MobileNav({ user }: { user: UserType }) {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
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
  ];
  const pathname = usePathname();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-0">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="px-7">
          <Link
            href="/admin/dashboard"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <DashboardLogo />
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {routes.map((route) => {
            // Check if the current pathname starts with either `/admin/dashboard/products` or `/admin/dashboard/blogs`
            const isProductPage = pathname.startsWith("/admin/dashboard/products");
            const isBlogPage = pathname.startsWith("/admin/dashboard/blogs");

            // Ensure we only compare base paths for products and blogs (avoid dynamic parameters)
            const baseProductPath = "/admin/dashboard/products";
            const baseBlogPath = "/admin/dashboard/blogs";

            // Determine if the route matches the product or blog base path
            const isActiveProductRoute =
              isProductPage && route.href.startsWith(baseProductPath);
            const isActiveBlogRoute =
              isBlogPage && route.href.startsWith(baseBlogPath);

            return (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-2 px-7 py-2 text-base font-medium transition-colors hover:text-primary",
                  isActiveProductRoute ||
                    isActiveBlogRoute ||
                    pathname === route.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                <route.icon className="h-5 w-5" />
                {route.label}
              </Link>
            );
          })}
        </div>
        <Separator className="my-4" />
        <div className="px-7 flex flex-col gap-4">
          <Button
            variant="ghost"
            className="flex justify-start text-start gap-4 px-1 py-6 "
          >
            <Avatar className="h-10 w-10 flex justify-center items-center text-lg bg-secondary">
              {user?.name?.charAt(0)}
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => {
              setOpen(false);
              signOut();
            }}
          >
            <LogOut className="h-4 w-4" />
            Log out
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
