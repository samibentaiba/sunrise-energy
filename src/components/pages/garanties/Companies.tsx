import Image from "next/image";
import Trinsolar from "@/images/pages/garanties/Trinasolar.png";
import Sunpower from "@/images/pages/garanties/Sunpower.jpg"
import { useEffect } from "react";
export default function Companies() {
  return (
    <div className="flex mx-auto gap-4 md:gap-10 flex-col md:flex-row justify-center items-center py-10 md:py-20 w-full">
      <Image src={Trinsolar} alt="sunpower" width={400} height={150} />
      <Image src={Sunpower} alt="trinsolar" width={400} height={150} />
    </div>
  );
}
