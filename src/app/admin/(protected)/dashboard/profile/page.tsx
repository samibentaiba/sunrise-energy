import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileForm } from "@/components/admin/profile/profile-form";
import { ChangelogList } from "@/components/admin/profile/changelog-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Profile | Admin Dashboard",
  description: "Manage your profile and view activity logs",
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Profile Settings</h1>
            <p className="text-muted-foreground">
              Manage your account settings and view activity history
            </p>
          </div>
          <Button asChild>
            <Link href="/admin/dashboard">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid gap-8 max-h-260 md:grid-cols-7">
        <div className="md:col-span-3 h-full">
          <ProfileForm />
        </div>
        <div className="md:col-span-4 h-full">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
              <CardDescription>
                Recent changes to products and blog posts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="products">Products</TabsTrigger>
                  <TabsTrigger value="blogs">Blogs</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <ChangelogList type="all" />
                </TabsContent>
                <TabsContent value="products">
                  <ChangelogList type="products" />
                </TabsContent>
                <TabsContent value="blogs">
                  <ChangelogList type="blogs" />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
