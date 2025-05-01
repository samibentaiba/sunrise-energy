"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeProviderWrapper({
  children,
}: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>; // ✅ إصلاح مشكلة SSR

  return (
    <ThemeProvider  attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}
