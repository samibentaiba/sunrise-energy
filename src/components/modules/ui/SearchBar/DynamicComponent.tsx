"use client";
import { Suspense, useState, useEffect } from "react";

export function DynamicComponent({ path }: { path: string }) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(
    null
  );

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Dynamically import the component
        console.log(path.endsWith(".tsx") ? path.slice(0, -4) : path);
        const importedComponent = await import("src/components/modules/SNavBar"); // it works on src/components/modules/Blog
        // Extract the default or named export as a React component
        setComponent(() => importedComponent.default ); // Use the default export or fallback
      } catch (error) {
        setComponent(null); // If the component fails to load, set it to null
      }
    };

    loadComponent();
  }, [path]);

  return (
    <div className="mt-4 border rounded-md p-4 bg-gray-50">
      <Suspense fallback={<div>Chargement…</div>}>
        {Component ? <Component /> : <div>Component failed to load.</div>}
      </Suspense>
    </div>
  );
}
