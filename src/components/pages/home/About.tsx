import GetStartButton from "./About/GetStartButton";
import Image from "next/image";
import AboutImage from "@/images/pages/home/About.jpeg"
export default function About() {
  return (
    <div className="bg-white flex justify-center py-10 md:py-20 w-full">
      <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-4 md:space-y-6 md:max-w-[35rem]">
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#040922] leading-tight md:leading-[50px] font-['Lato',_Arial,_Helvetica,_sans-serif]">
            SunVolt France ; le leader du solaire intelligent depuis 2019
          </h2>
          <p className="text-gray-800">
            SunVolt est un acteur de référence dans les énergies renouvelables avec plus de 3000 installations
            photovoltaïques réalisées en France. Nous nous sommes donnés pour objectif de rendre le solaire accessible à
            tous, en offrant le meilleur compromis entre prix, rentabilité et performance.
          </p>
          <div className="pt-2">
            <GetStartButton text="En savoir plus" isIcon={false} href="/solutions-photovoltaiques" />
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-[550px]">
          <Image
            src={AboutImage}
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
