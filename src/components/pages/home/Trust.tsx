import Image from "next/image";
import { ReactElement } from "react";
export default function Trust() :ReactElement{
  return (
    <div className=" bg-gray-50 md:px-20 md:py-20 px-5 pb-20 pt-10 flex justify-center flex-col items-center align-middle">
      <h2 className="md:p-5 pb-10 text-[2em] font-bold text-[rgb(4,9,34)]  text-center m-0 box-border flex-grow-0 normal-case">Ils nous font confiance pour accompagner leur clients</h2>
      <div className="flex justify-center md:p-5 md:flex-row flex-col items-center gap-5">
        <Image src="/images/pages/home/Trust/Logos.png" alt="logo Sunrise" width={300} height={100} />
        <Image src="/images/pages/home/Trust/Logos.png" alt="logo Sunrise" width={170} height={100} />
      </div>
    </div>
  );
}
