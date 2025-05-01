import React, { ReactElement, useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export default function FeatureCard({
  title="title",
  description="description",
  delay = 0,
}: {
  title: string;
  description: string;
  delay?: number;
}): ReactElement {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), delay);
  }, [delay]);

  return (
    <div
      className={cn(
        "p-6 md:p-6 border-t-4  border-blue-500  shadow-lg h-80 transition-opacity duration-700 border-t-4-  bg-white ",
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
      </div>
    </div>
  );
}

// export default FeatureCard; (removed to avoid multiple default exports)
