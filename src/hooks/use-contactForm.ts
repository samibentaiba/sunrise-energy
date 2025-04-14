// hooks/use-contactForm.ts
import { useState } from "react"
import { useReCAPTCHA } from "@/hooks/use-reCAPTCHA"  // Assuming you already have use-reCAPTCHA as a custom hook

export const useContactForm = () => {
  const { recaptchaRef, recaptchaToken, handleRecaptchaChange, resetRecaptcha } = useReCAPTCHA();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "message") {
      setCharCount(value.length);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Veuillez valider le reCAPTCHA.");
      return;
    }

    setSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Votre message a été envoyé avec succès!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
      setCharCount(0);
      resetRecaptcha();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Une erreur est survenue lors de l'envoi du formulaire.");
    } finally {
      setSubmitting(false);
    }
  }

  return {
    recaptchaRef,
    recaptchaToken,
    handleRecaptchaChange,
    formData,
    handleChange,
    handleSubmit,
    submitting,
    charCount,
  };
}
