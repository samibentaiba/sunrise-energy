"use client";

import Link from "next/link";
import { ArrowUpDown } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import ClientTime from "@/components/admin/dashboard/client-time";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { useRecentProducts } from "@/hooks/use-recent-products";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export function RecentProducts() {
  const { products, loading, error, deleteProduct } = useRecentProducts();

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

  const sortedProducts = [...(products || [])].sort((a, b) => {
    if (!sortField) return 0;

    let valueA, valueB;

    if (sortField === "name") {
      valueA = a.name.toLowerCase();
      valueB = b.name.toLowerCase();
    } else if (sortField === "status") {
      valueA = a.status;
      valueB = b.status;
    } else if (sortField === "price") {
      valueA = Number.parseFloat(a.price);
      valueB = Number.parseFloat(b.price);
    } else if (sortField === "stock") {
      valueA = a.stock;
      valueB = b.stock;
    } else if (sortField === "availableAt") {
      valueA = new Date(a.availableAt).getTime();
      valueB = new Date(b.availableAt).getTime();
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
        <Skeleton className="h-[500px] rounded-lg" />
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
                <TableHeader className="sticky top-0 z-10 border-none ">
                  <TableRow className="text-xs sm:text-sm border-none md:text-base hover:bg-transparent lg:text-base">
                    <TableHead className="w-1/4 text-left">
                      <span className="flex md:hidden lg:hidden">Name</span>
                      <button
                        onClick={() => handleSort("name")}
                        className="hidden md:flex lg:flex items-center space-x-1 hover:text-primary transition-colors"
                      >
                        <span>Name</span>
                        <ArrowUpDown
                          className={`h-4 w-4 ${sortField === "name" ? "text-primary" : "text-muted-foreground"}`}
                        />
                      </button>
                    </TableHead>
                    <TableHead className="w-1/6 text-left">
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
                    <TableHead className="w-1/6 hidden lg:table-cell text-left">
                      <button
                        onClick={() => handleSort("price")}
                        className="flex items-center space-x-1 hover:text-primary transition-colors"
                      >
                        <span>Price</span>
                        <ArrowUpDown
                          className={`h-4 w-4 ${sortField === "price" ? "text-primary" : "text-muted-foreground"}`}
                        />
                      </button>
                    </TableHead>
                    <TableHead className="w-1/6 text-left">
                      <button
                        onClick={() => handleSort("stock")}
                        className="flex items-center space-x-1 hover:text-primary transition-colors"
                      >
                        <span>Stock</span>
                        <ArrowUpDown
                          className={`h-4 w-4 ${sortField === "stock" ? "text-primary" : "text-muted-foreground"}`}
                        />
                      </button>
                    </TableHead>
                    <TableHead className="w-1/6 hidden lg:table-cell text-left">
                      <button
                        onClick={() => handleSort("availableAt")}
                        className="flex items-center space-x-1 hover:text-primary transition-colors"
                      >
                        <span>Available</span>
                        <ArrowUpDown
                          className={`h-4 w-4 ${
                            sortField === "availableAt"
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    </TableHead>
                    <TableHead className="w-1/6 text-right">
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
                  {sortedProducts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">
                        No products found. Create your first product!
                      </TableCell>
                    </TableRow>
                  ) : (
                    sortedProducts.map((product) => (
                      <TableRow key={product.id} className="hover:bg-muted/50">
                        <TableCell className="w-1/4 font-medium text-left">
                          <Link
                            href={`/admin/dashboard/products/${product.id}`}
                            className="hover:underline"
                          >
                            {product.name}
                          </Link>
                        </TableCell>
                        <TableCell className="w-1/6 text-left">
                          <Badge
                            variant={
                              product.status === "active"
                                ? "default"
                                : product.status === "inactive"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="w-1/6 hidden lg:table-cell text-left">
                          ${Number.parseFloat(product.price).toFixed(2)}
                        </TableCell>
                        <TableCell className="w-1/6 text-left">
                          {product.stock}
                        </TableCell>
                        <TableCell className="w-1/6 hidden lg:table-cell text-left">
                          <ClientTime date={product.availableAt} />
                        </TableCell>
                        <TableCell className="w-1/6 text-right">
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
                                <Link
                                  href={`/admin/dashboard/products/${product.id}`}
                                >
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/products/${product.id}`}
                                  target="_blank"
                                >
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="text-destructive focus:text-destructive"
                                onClick={() => deleteProduct(product.id)}
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
