// use-reCAPTCHA.ts
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const useReCAPTCHA = () => {
  const recaptchaRef = useRef<InstanceType<typeof ReCAPTCHA>>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const resetRecaptcha = () => {
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  return {
    recaptchaRef,
    recaptchaToken,
    handleRecaptchaChange,
    resetRecaptcha,
  };
};
