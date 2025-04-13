import React, { ReactElement, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/libs/utils";

export default function FeatureCard({
  title = "title",
  description = "description",
  linkText = "linkText",
  linkHref = "linkHref",
  children,
  delay = 0,
}: {
  title: string;
  description: string;
  linkText?: string;
  linkHref: string;
  children?: React.ReactNode;
  delay?: number;
}): ReactElement {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), delay);
  }, [delay]);

  return (
    <div
      className={cn(
        "p-6 md:p-6 border-0 shadow-lg h-80 transition-opacity duration-700  bg-white md:mt-[-10rem]",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="flex border-none flex-col gap-5 h-70 justify-center item-center text-center">
        <div className="flex flex-col gap-5 justify-around h-70 item-center">
          <h3
            className="text-black text-[1.35rem] flex min-h-[5rem] items-start text-start justify-start leading-tight"
            style={{ letterSpacing: -0.5, fontWeight: 550 }}
          >
            {title}
          </h3>
          <p
            className="text-[#31394a]  mt-[-30px] text-[1.05rem] flex item-center  mb-4 text-start"
            style={{ letterSpacing: -0.5 }}
          >
            {description}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <a
            href={linkHref}
            className={`flex items-center text-black font-medium group w-fit  ${
              linkText
                ? "border-b-2 border-yellow-500 hover:border-yellow-700"
                : ""
            }transition-all`}
          >
            {linkText || "BIEN"}
            {linkText ? (
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            ) : (
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            )}
          </a>
          {children}
        </div>
      </div>
    </div>
  );
}
