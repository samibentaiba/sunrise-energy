"use client";

import { useContactForm } from "@/hooks/use-contactForm"; // Import the custom hook
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import { Facebook, Youtube, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactForm() {
  const {
    recaptchaRef,
    //recaptchaToken,
    handleRecaptchaChange,
    formData,
    handleChange,
    handleSubmit,
    submitting,
    charCount,
  } = useContactForm();

  return (
    <section className="max-w-7xl mx-auto py-12  px-4 md:px-6 md:py-16 lg:py-20 text-black bg-gray-50">
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left column with image and contact info */}
        <div className="lg:col-span-5">
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-t-lg">
            <Image
              src="/images/pages/contact/contact.jpeg"
              alt="Service client"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="bg-[#106ca4] text-white p-8 md:p-10 rounded-b-lg">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Heures d&apos;ouverture
              </h3>
              <p>
                Du lundi au vendredi
                <br />
                de 9h à 12h et de 14h à 18h
              </p>
            </div>

            <div className="w-full h-px bg-blue-400/30 my-6"></div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Siège social</h3>
              <p>
                541 Avenue Méliès
                <br />
                34000 MONTPELLIER
                <br />
                FRANCE
              </p>
            </div>

            <div className="w-full h-px bg-blue-400/30 my-6"></div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Nous suivre</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.youtube.com"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  <Youtube size={20} />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://www.instagram.com"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right column with form */}
        <div className="lg:col-span-7">
          <div className="h-full flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Discutons de votre projet !
            </h1>
            <p className="text-gray-600 mb-8">
              Posez nous toutes vos questions et nos équipes se feront un
              plaisir de vous répondre dans les meilleurs délais.
            </p>

            <form onSubmit={handleSubmit} className="flex-1  flex flex-col">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Prénom
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border-1 border-gray-300 shadow-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border-1 border-gray-300 shadow-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-1 border-gray-300 shadow-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Raison sociale
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border-1 border-gray-300 shadow-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Commentaires <span className="text-red-500">*</span>
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Dites nous en plus sur votre demande.
                </p>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={600}
                  rows={6}
                  className="w-full bg-white border-gray-300 resize-none"
                />
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {charCount} sur 600 caractères maximum
                </div>
              </div>

              <div className="mb-6">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="bg-[#106ca4] hover:bg-[#004570] text-white font-medium px-8 py-2 rounded-full self-start"
              >
                {submitting ? "Envoi..." : "Envoyer"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
