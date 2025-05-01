"use client";

import { useState } from "react";
import { useApi } from "@/services/Api";

export function useForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { data, loading, error } = useApi<
    { message: string },
    { email: string }
  >({
    url: "/api/auth/forgot-password",
    method: "POST",
    body: { email },
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };
  return {
    email,
    setEmail,
    loading: submitted && loading,
    success: submitted && !!data && !loading && !error,
    error: submitted ? error : "",
    handleSubmit,
  };
}
