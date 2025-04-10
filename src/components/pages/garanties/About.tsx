import Image from "next/image";
import { ReactElement } from "react";
export default function About() :ReactElement{
  return (
    <div className="bg-white flex justify-center py-10 md:py-20 w-full">
      <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-4 md:space-y-6 md:max-w-[35rem]">
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#040922] leading-tight md:leading-[50px] font-['Lato',_Arial,_Helvetica,_sans-serif]">
            Des techniciens agréés audités et évalués après chaque intervention
          </h2>
          <p className="text-gray-800">
            Nos 350 techniciens locaux agréées interviennent partout en France,
            avec les meilleures garanties de prestation de pose
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-[550px]">
          <Image
            src="/images/pages/garanties/About.jpeg"
            alt="Solar panels on roof"
            width={550}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
