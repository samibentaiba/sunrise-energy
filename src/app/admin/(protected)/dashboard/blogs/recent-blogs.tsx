"use client";

import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { ArrowUpDown } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useRecentBlogs } from "@/hooks/use-recent-blogs";
import { useState } from "react";

export function RecentBlogs() {
  const { blogs, loading, error, deleteBlog } = useRecentBlogs();
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedBlogs = [...(blogs || [])].sort((a, b) => {
    if (!sortField) return 0;

    let valueA, valueB;

    if (sortField === "title") {
      valueA = a.title.toLowerCase();
      valueB = b.title.toLowerCase();
    } else if (sortField === "status") {
      valueA = a.status;
      valueB = b.status;
    } else if (sortField === "publishedAt") {
      valueA = new Date(a.publishedAt).getTime();
      valueB = new Date(b.publishedAt).getTime();
    } else if (sortField === "updatedAt") {
      valueA = new Date(a.updatedAt).getTime();
      valueB = new Date(b.updatedAt).getTime();
    } else {
      return 0;
    }

    if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
    if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Blogs</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[500px] rounded-lg" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-0">
        {error ? (
          <div className="flex justify-center py-8 text-red-500">{error}</div>
        ) : (
          <div className="relative">
            {/* Sticky Header */}
            <div className="flex flex-col justify-center items-center">
              <Table className="bg-transparent">
                <TableHeader className="sticky top-0 z-10">
                  <TableRow className="text-xs sm:text-sm md:text-base border-none hover:bg-transparent lg:text-base">
                    <TableHead className="w-[45%] lg:w-[20%] text-left">
                      <span className="flex md:hidden lg:hidden">Title</span>
                      <button
                        onClick={() => handleSort("title")}
                        className="hidden md:flex lg:flex items-center space-x-1 hover:text-primary transition-colors"
                      >
                        <span>Title</span>
                        <ArrowUpDown
                          className={`h-4 w-4 ${sortField === "title" ? "text-primary" : "text-muted-foreground"}`}
                        />
                      </button>
                    </TableHead>
                    <TableHead className="w-[37%] lg:w-[20%] text-left">
                      <span className="flex md:hidden lg:hidden">Status</span>
                      <button
                        onClick={() => handleSort("status")}
                        className="hidden md:flex lg:flex items-center space-x-1 hover:text-primary transition-colors"
                      >
                        <span>Status</span>
                        <ArrowUpDown
                          className={`h-4 w-4 ${sortField === "status" ? "text-primary" : "text-muted-foreground"}`}
                        />
                      </button>
                    </TableHead>
                    <TableHead className="hidden md:hidden lg:table-cell w-[30%] text-left">
                      <button
                        onClick={() => handleSort("publishedAt")}
                        className="flex items-center space-x-1 hover:text-primary transition-colors"
                      >
                        <span>Published</span>
                        <ArrowUpDown
                          className={`h-4 w-4 ${sortField === "publishedAt" ? "text-primary" : "text-muted-foreground"}`}
                        />
                      </button>
                    </TableHead>
                    <TableHead className="hidden md:hidden lg:table-cell w-[20%] text-left">
                      <button
                        onClick={() => handleSort("updatedAt")}
                        className="flex items-center space-x-1 hover:text-primary transition-colors"
                      >
                        <span>Updated</span>
                        <ArrowUpDown
                          className={`h-4 w-4 ${sortField === "updatedAt" ? "text-primary" : "text-muted-foreground"}`}
                        />
                      </button>
                    </TableHead>
                    <TableHead className="w-[18%] text-right">
                      <span>Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
              </Table>
            </div>

            {/* Scrollable Table Body */}
            <ScrollArea className="h-[30rem]">
              <Table>
                <TableBody>
                  {sortedBlogs.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        No blogs found. Create your first blog post!
                      </TableCell>
                    </TableRow>
                  ) : (
                    sortedBlogs.map((blog) => (
                      <TableRow key={blog.id} className="hover:bg-muted/50">
                        <TableCell className="w-[45%] lg:w-[20%] font-medium text-sm sm:text-base text-left">
                          <div className="truncate max-w-[150px] sm:max-w-[200px] lg:max-w-[250px]">
                            <Link
                              href={`/admin/dashboard/blogs/${blog.id}`}
                              className="break-all hover:underline"
                            >
                              {blog.title}
                            </Link>
                          </div>
                        </TableCell>

                        <TableCell className="w-[37%] lg:w-[20%] text-sm sm:text-base text-left">
                          <Badge
                            variant={
                              blog.status === "active"
                                ? "default"
                                : blog.status === "inactive"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className="text-xs sm:text-sm"
                          >
                            {blog.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell w-[30%] text-sm lg:text-base text-left">
                          {formatDistanceToNow(new Date(blog.publishedAt), {
                            addSuffix: true,
                          })}
                        </TableCell>
                        <TableCell className="hidden lg:table-cell w-[20%] text-sm lg:text-base text-left">
                          {formatDistanceToNow(new Date(blog.updatedAt), {
                            addSuffix: true,
                          })}
                        </TableCell>
                        <TableCell className="w-[18%] text-right text-sm sm:text-base">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem asChild>
                                <Link href={`/admin/dashboard/blogs/${blog.id}`}>
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link href={`/blog/${blog.id}`} target="_blank">
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="text-destructive focus:text-destructive"
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      `Are you sure you want to delete "${blog.title}"?`
                                    )
                                  ) {
                                    deleteBlog(blog.id);
                                  }
                                }}
                              >
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
