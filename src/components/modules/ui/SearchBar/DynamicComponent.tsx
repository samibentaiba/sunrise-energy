// ui/SearchBar/DynamicComponent
"use client";

import { Suspense } from "react";
import { useSearchDynamicImport } from "@/hooks/use-searchDynamicImport";

const Loading = () => <div>Loading...</div>;

export function DynamicComponent({ path }: { path: string | null }) {
  const Component = useSearchDynamicImport(path);

  return (
    <div className="mt-4 border rounded-md p-4 bg-gray-50">
      <Suspense fallback={<Loading />}>
        {Component ? <Component /> : <div>Component failed to load.</div>}
      </Suspense>
    </div>
  );
}
