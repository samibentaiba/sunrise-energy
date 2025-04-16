"use client";

import Image from "next/image";
import { ReactElement } from "react";

export default function HeroTerms({
  title = "title",
  backgroundImage = "/images/modules/Terms.jpeg",
}: {
  title: string;
  backgroundImage?: string;
}): ReactElement {
  return (
    <div
      className="relative md:h-[420px] h-[500px] z-0 p-0 m-0 w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-blend-overlay"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundColor: "#0a1b70",
      }}
    >
      <div className="relative p-0 m-0 w-full h-full flex items-center justify-center text-white">
        {/* Yellow Overlay */}
        <div className="absolute flex justify-center items-center inset-0 h-full">
          <Image
            src={"/images/modules/hero/YellowShape.svg"}
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

        <h1 className="text-3xl sm:text-4xl md:text-[2.3rem] lg:text-[3rem] w-[50%] text-center font-semibold leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
}
