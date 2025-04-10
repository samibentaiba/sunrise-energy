import { ReactElement } from "react";

export default function NumbersSection():ReactElement {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-42 bg-white justify-center items-center py-10 md:py-20 px-4 md:px-0">
      <div className="text-center w-full md:w-58 bg-gray-100 px-6 md:px-10 py-5 max-w-xs">
        <div className="text-[2.5rem] md:text-[3rem] font-normal text-black">5</div>
        <div className="text-sm text-black">ans d'expertise solaire</div>
      </div>

      <div className="text-center w-full md:w-58 bg-gray-100 px-6 md:px-10 py-5 max-w-xs">
        <div className="text-[2.5rem] md:text-[3rem] font-normal text-black">3000</div>
        <div className="text-sm text-black">installation solaires réalisées</div>
      </div>

      <div className="text-center w-full md:w-58 bg-gray-100 px-6 md:px-10 py-5 max-w-xs">
        <div className="text-[2.5rem] md:text-[3rem] font-normal text-black">38571</div>
        <div className="text-sm text-black">panneaux solaires installés</div>
      </div>
    </div>
  )
}

