import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ReactElement } from "react";

export default function CTA(): ReactElement {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/pages/avis-clients/parrainage/CTA.webp"
                alt="Maison avec panneaux solaires au coucher du soleil"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              Pour <span className="bg-[#0b68a4] text-white px-2">Vous</span>
            </h2>

            <p className="text-gray-700 mb-6">
              En tant que parrain, votre confiance et votre implication sont
              récompensées.
            </p>

            <div className="mb-8">
              <p className="text-lg">
                Percevez{" "}
                <span className="relative inline-block">
                  <span className="font-semibold relative z-10">
                    500€ par filleul
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#fbac18] z-0"></span>
                </span>{" "}
                qui installe une centrale solaire SunVolt
              </p>
            </div>
            <GetStartButton text="" hoveredText="" href="" />
          </div>
        </div>
      </section>
    </main>
  );
}
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";

function GetStartButton({
  text = "text",
  hoveredText = "hoveredText",
  href = "href",
  isIcon = true,
}: {
  text: string;
  hoveredText?: string;
  href: string;
  isIcon?: boolean;
}): ReactElement {
  return (
    <div className="w-full flex justify-start items-start">
      <Link
        href={href}
        className="
    group relative inline-flex gap-2 items-center justify-center 
    px-7 py-4 bg-[#fbac18] text-white font-medium rounded-full 
    hover:bg-[#0B476F] overflow-hidden"
        style={{
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        {isIcon ? (
          <FaAngleDoubleRight className="text-white text-2xl" size={15} />
        ) : null}
        {/* First text, disappears on hover */}
        <span
          className="transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-1"
          style={{ fontSize: "13.4px", fontWeight: 600 }}
        >
          {text}
        </span>
        {/* Second text, appears after hover effect */}
        <div className="absolute transition-all duration-500 opacity-1 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="group relative inline-flex items-center justify-center ">
            {isIcon ? (
              <FaAngleDoubleRight
                className="text-white opacity-0 text-2xl"
                size={15}
              />
            ) : null}
            <span
              className=" translate-y-[0px] translate-x-[0px] "
              style={{ fontSize: "13.4px", fontWeight: 600 }}
            >
              {text || hoveredText}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
