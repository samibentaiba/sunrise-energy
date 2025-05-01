"use client";

import { useEffect, useState } from "react";
import { Session } from "next-auth";

export function useLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const [isLayoutLoading, setIsLayoutLoading] = useState(true);
  const [isChildrenLoading, setIsChildrenLoading] = useState(true);
  const [isSession, setIsSession] = useState(true);
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/user");
        if (!res.ok) {
          console.error("Failed to fetch session:", res.statusText);
          return;
        }
        const data = await res.json();
        if (data?.session) {
          
          setSession(data.session);
          setIsLayoutLoading(false);
        } else {
          setSession(null);
          setIsSession(false);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };
    fetchSession();
  }, []);
  useEffect(() => {
    if (!isLayoutLoading) {
      const timeout = setTimeout(() => setIsChildrenLoading(false), 100);
      return () => clearTimeout(timeout);
    }
  }, [isLayoutLoading]);
  return {
    session,
    isLayoutLoading,
    isChildrenLoading,
    isSession,
  };
}
