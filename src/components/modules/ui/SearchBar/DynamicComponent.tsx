"use client";

import { Suspense, useState, useEffect } from "react";
import { componentMap } from "@/data/componentMap";
import type { ComponentType, ReactElement } from "react";

const Loading = () => <div>Loading...</div>;

export function DynamicComponent({
  path,
}: {
  path: string | null;
}): ReactElement {
  const [Component, setComponent] = useState<ComponentType | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      console.log(`Attempting to load component from: ${path}`);

      if (!path || !(path in componentMap)) {
        console.error("Invalid or missing path in componentMap.");
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

  return (
    <div className="mt-4 border rounded-md p-4 bg-gray-50">
      <Suspense fallback={<Loading />}>
        {Component ? <Component /> : <div>Component failed to load.</div>}
      </Suspense>
    </div>
  );
}
