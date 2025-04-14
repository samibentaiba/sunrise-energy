// use-referralForm.ts
import { useState } from "react";
import { useReCAPTCHA } from "./use-reCAPTCHA"; // Import the custom hook for reCAPTCHA

export const useReferralForm = () => {
  const { recaptchaRef, recaptchaToken, handleRecaptchaChange, resetRecaptcha } = useReCAPTCHA();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    referralName: "",
    referralPhone: "",
    referralEmail: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Veuillez valider le reCAPTCHA.");
      return;
    }

    setSubmitting(true);

    const payload = { ...formData, recaptchaToken };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (res.ok && result.success) {
      alert("Message envoyé !");
      resetRecaptcha();
      setFormData({
        name: "",
        email: "",
        referralName: "",
        referralPhone: "",
        referralEmail: "",
      });
    } else {
      alert(result.message || "Erreur lors de l'envoi du formulaire.");
    }

    setSubmitting(false);
  };

  return {
    recaptchaRef,
    recaptchaToken,
    handleRecaptchaChange,
    formData,
    handleChange,
    handleSubmit,
    submitting,
  };
};
