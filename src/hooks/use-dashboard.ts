"use client";

import { useEffect, useState } from "react";
import { parseISO } from "date-fns";
import { fetchDashboardData } from "@/services/dashboard";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  productImages: string[];
  availableAt: string;
  status: "active" | "inactive" | "archived";
}

interface Blog {
  id: number;
  title: string;
  content: string;
  blogImages: string[];
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
  status: "active" | "inactive" | "archived";
}

function isInMonth(dateString: string, year: number, month: number) {
  const date = parseISO(dateString);
  return date.getFullYear() === year && date.getMonth() === month;
}

function getPercentageChange(current: number, previous: number): string {
  if (previous === 0) return current > 0 ? "+100%" : "0%";
  const change = ((current - previous) / previous) * 100;
  return `${change >= 0 ? "+" : ""}${change.toFixed(0)}%`;
}

export function useDahboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { products, blogs } = await fetchDashboardData();
        setProducts(products);
        setBlogs(blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const totalProducts = products.length;
  const activeProducts = products.filter((p) => p.status === "active").length;
  const currentMonthProducts = products.filter((p) =>
    isInMonth(p.availableAt, currentYear, currentMonth)
  ).length;
  const lastMonthProducts = products.filter((p) =>
    isInMonth(p.availableAt, lastMonthYear, lastMonth)
  ).length;
  const productChange = getPercentageChange(
    currentMonthProducts,
    lastMonthProducts
  );
  const totalBlogs = blogs.length;
  const activeBlogs = blogs.filter((b) => b.status === "active").length;
  const currentMonthBlogs = blogs.filter((b) =>
    isInMonth(b.publishedAt, currentYear, currentMonth)
  ).length;
  const lastMonthBlogs = blogs.filter((b) =>
    isInMonth(b.publishedAt, lastMonthYear, lastMonth)
  ).length;
  const blogChange = getPercentageChange(currentMonthBlogs, lastMonthBlogs);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthlyData = Array.from({ length: 12 }, (_, month) => {
    const productsInMonth = products.filter((p) =>
      isInMonth(p.availableAt, currentYear, month)
    ).length;
    const blogsInMonth = blogs.filter((b) =>
      isInMonth(b.publishedAt, currentYear, month)
    ).length;
    return {
      name: months[month],
      products: productsInMonth,
      blogs: blogsInMonth,
    };
  });
  return {
    loading,
    totalProducts,
    activeProducts,
    productChange,
    totalBlogs,
    activeBlogs,
    blogChange,
    monthlyData,
  };
}
