"use client";
import dynamic from "next/dynamic";
// Dynamically import the client component
const CustomGForm = dynamic(
  () => import("@customgform-lib/react-customgform"),
  {
    ssr: false, // <-- CRUCIAL: disables server-side rendering
  }
);

import ReactPlayer from "react-player";
export default function SolarLandingPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="bg-[#2a3990] text-white py-16">
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

              {/* Video Testimonial for Mobile */}
              <div className="md:hidden relative">
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

            {/* Video Testimonial for Desktop */}
            <div className="hidden md:block relative">
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
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl py-8">
        <div className="md:col-start-2">
          <CustomGForm formId="cm969dzza000gwn31txnij2tr" />
        </div>
      </div>
    </div>
  );
}
