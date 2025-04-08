"use client";

import GetStartButton from "./Hero/GetStartButton";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero({
  title,
  description,
  backgroundImage = "/images/pages/garanties/Hero.jpeg",
  fButtonText,
  sButtonText,
}: {
  title: string;
  description: string;
  backgroundImage: string;
  fButtonText: string;
  sButtonText: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="relative md:h-[420px] h-[500px] z-0 p-0 m-0 w-full flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-[#00061b] opacity-40"></div>
      <div className="relative p-0 m-0 w-full h-full flex items-center text-white">
        {/* Blue Overlay */}
        <div className="absolute left-[-5rem] md:left-0  inset-0  h-full">
          <Image
            src={"/images/modules/hero/BlueShape.svg"}
            alt="Blue background shape"
            fill
            style={{
              objectFit: "cover",
              zIndex: -1,
              opacity: 0.85,
            }}
            priority
          />
        </div>

        {/* Mobile-optimized content container */}
        {isMobile ? (
          <div className="relative w-full px-6 py-8 flex flex-col items-start justify-center">
            <div className="max-w-[90%]">
              <h1
                className="text-2xl sm:text-3xl font-semibold  leading-tight mb-4"
                style={{ fontWeight: 600 }}
              >
                {title}
              </h1>

              <p className="text-sm leading-relaxed mb-6">{description}</p>

              <GetStartButton
                isIcon={false}
                text={fButtonText}
                href={fButtonText}
              />
              <WhiteButton
                isIcon={false}
                text={sButtonText}
                href={sButtonText}
              />
            </div>
          </div>
        ) : (
          /* Desktop layout - unchanged from user's working version */
          <div className="relative h-full flex left-[20%] md:left-[40%] w-full">
            <div
              className="absolute h-full flex flex-col justify-center pl-4 sm:pl-8 md:pl-[4.8rem] pr-4 sm:pr-8 md:pr-16 gap-2 md:gap-[1rem] lg:gap-[1rem]"
              style={{ width: "100%", maxWidth: "1200px" }}
            >
              <span className="box-border px-2 w-22 bg-white text-xs text-[rgb(4,9,34)]">
                Avis Sunrise
              </span>

              <h1
                className="text-3xl sm:text-4xl md:text-[2.3rem] lg:text-[3rem] w-[70%] font-semibold leading-tight"
                style={{ fontWeight: 600 }}
              >
                {title}
              </h1>

              <p className="text-base w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
                {description}
              </p>

              <div className=" flex w-[80%] justify-end items-center mt-6">
                <GetStartButton
                  isIcon={false}
                  text={fButtonText}
                  href={fButtonText}
                />
                <WhiteButton
                  isIcon={false}
                  text={sButtonText}
                  href={sButtonText}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";
import { ReactElement } from "react";
function WhiteButton({
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
    <div className="w-[90%] flex justify-start items-start">
      <Link
        href={href}
        className="
    group relative inline-flex gap-2 items-center justify-center 
    px-7 py-4 bg-gray-300 text-black font-medium rounded-full  hover:text-white
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
