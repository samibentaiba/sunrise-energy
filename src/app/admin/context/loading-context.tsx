"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";

interface LayoutLoadingContextType {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

const LayoutLoadingContext = createContext<LayoutLoadingContextType>({
  isLoading: true,
  setLoading: () => {},
});

export const LayoutLoadingProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Trigger loading on route change
    setIsLoading(true);

    // Simulate "load complete" delay (you can replace this)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200); // adjust this if you have data fetching logic

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <LayoutLoadingContext.Provider value={{ isLoading, setLoading: setIsLoading }}>
      {children}
    </LayoutLoadingContext.Provider>
  );
};

export const useLayoutLoading = () => useContext(LayoutLoadingContext);
