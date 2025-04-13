// /hooks/use-searchDynamicImport.ts
"use client";

import { useEffect, useState, Suspense } from "react";
import { componentMap } from "@/data/componentMap";
import type { ComponentType } from "react";

export function useSearchDynamicImport(path: string | null) {
  const [Component, setComponent] = useState<ComponentType | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      console.log(`Attempting to load component from: ${path}`);

      if (!path || !(path in componentMap)) {
        console.log("Invalid or missing path in componentMap.");
        setComponent(null);
        return;
      }

      try {
        const mod = await componentMap[path as keyof typeof componentMap]();
        setComponent(() => mod.default);
      } catch (error) {
        console.error("Error during component loading:", error);
        setComponent(null);
      }
    };

    loadComponent();
  }, [path]);

  return Component;
}
