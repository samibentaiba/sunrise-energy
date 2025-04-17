"use client";

import { ReactElement } from "react";

export default function Hero({
  title = "title",
  description = "",
  children,
  backgroundImage = "/images/pages/qui-sommes-nous/offres-emploi/Hero.jpeg",
}: {
  title?: string;
  description?: string;
  backgroundImage?: string;
  children?: ReactElement;
}): ReactElement {
  return (
    <div
      className="relative md:h-[420px] h-[500px] z-0 p-0 m-0 w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-blend-overlay"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundColor: "#0a1b70",
      }}
    >
      <div className="relative p-0 m-0 w-full h-full flex flex-col gap-8 items-center justify-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-[2.3rem] lg:text-[3rem] w-[30%] text-center font-semibold leading-tight">
          {title}
        </h1>
        <p className="box-border my-0">{description}</p>
        {children}
      </div>
    </div>
  );
}
