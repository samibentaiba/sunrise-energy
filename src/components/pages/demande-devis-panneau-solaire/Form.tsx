"use client";
import React, { ReactElement } from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { CustomGoogleForm } from "@/services/GoogleForm";

export default function Home(): ReactElement {
  useEffect(() => {
    // Dynamically load the compiled cgf.js script
    const script = document.createElement("script");
    script.src = "https://cdn.customgform.com/cgf.js"; // Path to the compiled cgf.js
    script.async = true;
    script.onload = () => {
      console.log("Custom Google Form script loaded");
    };
    document.body.appendChild(script);

    // Cleanup: Remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1a2b7b] to-[#111111] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Votre histoire commence ici...
              </h1>
              <p className="text-lg">
                Faites comme Jonathan. Prenez rendez-vous en quelques clics avec
                l&apos;un de nos experts, obtenez votre devis panneau solaire et
                découvrez vos économies, le montant des aides auxquelles vous
                avez droit.
              </p>
            </div>

            {/* Video Testimonial for Desktop */}
            <div className=" relative">
              <div className="relative aspect-video bg-teal-900 rounded-lg overflow-hidden cursor-pointer">
                <ReactPlayer
                  url="https://youtu.be/y4iMWlxVKDA"
                  playing={true}
                  controls
                  width="100%"
                  height="100%"
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl  py-8">
        <CustomGoogleForm formId="cm969dzza000gwn31txnij2tr" />
      </div>
    </section>
  );
}
