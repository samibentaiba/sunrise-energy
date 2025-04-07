import Image from "next/image";
export default function About() {
  return (
    <div className="bg-white flex justify-center py-10 h-200 md:py-20 w-full">
      <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-4 md:space-y-6 md:max-w-[32rem]">
          <p
            className="text-blue-800"
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              boxSizing: "border-box",
            }}
          >
            Une marque du groupe QAIR


          </p>
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#040922] leading-tight md:leading-[50px] font-['Lato',_Arial,_Helvetica,_sans-serif]">
            Le rachat de surplus de production non consommée
          </h2>
          <p className="text-gray-800">
          SunVolt France ; le leader de l’autoconsommation solaire
          intelligente depuis 2019
          </p>

          <p className="text-gray-800">
            SunVolt est une filiale du groupe QAIR, groupe international de
            référence dans les énergies renouvelables. SunVolt France s’est
            donné pour objectif de rendre le solaire accessible à tous, en
            offrant le meilleur compromis entre prix, rentabilité et
            performance.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-[550px]">
          <Image
            src="/images/pages/demande-devis-panneau-solaire/About.webp"
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
