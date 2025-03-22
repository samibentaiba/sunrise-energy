"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactElement } from "react";

export default function SectionPrimaryNavigationBar(): ReactElement {
  return (
    <div className="border-none bg-[#f9f9f9] ">
      <div
        className=" text-black flex justify-between pr-4 items-center text-sm h-full "
        style={{
          fontSize: "13.3px",
          transform: "scaleY(1)",
          fontWeight: 350,
        }}
      >
        <div
          className="flex h-full"
          style={{
            fontWeight: 400,
          }}
        >
          <Link
            href="#"
            className=" px-4 py-4 pl-6 pr-6 bg-white"
          >
            Particulier
          </Link>
          <Link
            href="#"
            className="font-light px-4 py-4 pl-6 pr-6"
          >
            Entreprise
          </Link>
        </div>
        <div className="flex justify-center pr-4 items-center space-x-6">
          <div className="hidden  md:flex space-x-6">
            <Link
              href="#"
              className="text-muted-foreground transition-colors duration-300 hover:text-[#127a4c]"
            >
              Guides
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors duration-300 hover:text-[#127a4c]"
            >
              Qui sommes nous ?
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors duration-300 hover:text-[#127a4c]"
            >
              Carrières
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors duration-300 hover:text-[#127a4c]"
            >
              Nous contacter
            </Link>
          </div>

          <div className="flex items-center">
            <Link href="" className="">
              <Image
                src="/images/Numero.png"
                alt="logo sunvolt"
                width={180}
                height={100}
                priority
                style={{
                  borderStyle: "none",
                  verticalAlign: "top",
                  maxWidth: "100%",
                  height: "auto",
                  boxSizing: "border-box",
                  boxShadow: "none",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
