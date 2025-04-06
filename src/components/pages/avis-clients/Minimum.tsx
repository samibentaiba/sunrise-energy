"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TVA() {
  return (
    <section
      className="w-full py-12 md:py-[50px] overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right, #007ecc, #0094e4)",
        backgroundPosition: "right top",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1248px" }}>
        <div className="flex flex-wrap items-center justify-center">
          {/* Left Column with Image */}
          <motion.div
            className="w-full md:w-1/2 lg:w-[50%] px-2 md:pr-[72px] md:pl-[3.84%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            <div className="relative" style={{ aspectRatio: "100/80" }}>
              <div
                className="w-full h-full"
                style={{
                  maskImage: "url('/images/pages/aides/TVA/mask-15.svg')",
                  WebkitMaskImage: "url('/images/pages/aides/TVA/mask-15.svg')",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
              >
                <Image
                  src="/images/pages/aides/TVA/Hero.webp"
                  alt="Couple heureux dans leur maison"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column with Text */}
          <motion.div
            className="w-full md:w-1/2 lg:w-[50%] px-2 md:pl-[55px] md:pr-[3.84%]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
          >
            <div className="mt-5 md:mt-[20px] mb-6 md:mb-[30px]">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold m-0">
                Une TVA réduite à 10% dans certains cas
              </h2>
            </div>
            <div className="text-white mb-12 md:mb-[50px]">
              <p>
                Les centrales photovoltaïques dont la puissance est inférieure
                ou égale à 3 kWc bénéficient d&apos;un taux de TVA réduit à 10%.
                Pour des installations au-delà de ces 3 kWc, le taux passe à
                20%.
              </p>
            </div>

            <GetStartButton
              isIcon={false}
              text="Programme de parrainage"
              href="Programme de parrainage"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";
import { ReactElement } from "react";

function GetStartButton({
  text,
  hoveredText,
  href,
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
