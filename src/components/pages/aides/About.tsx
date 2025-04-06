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
            Un coup de pouce sur 20 ans
          </p>
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#040922] leading-tight md:leading-[50px] font-['Lato',_Arial,_Helvetica,_sans-serif]">
            Le rachat de surplus de production non consommée
          </h2>
          <p className="text-gray-800">
            Lors de la conception de votre projet, votre expert en énergie
            SunVolt identifie avec vous s’il vaut mieux consommer la totalité de
            votre production d’électricité ou si vous devrez en injecter, tout
            ou partie, sur le réseau public.
          </p>

          <p className="text-gray-800">
            Si vous optez pour la vente de surplus, nos équipes s’occuperont de
            la déclaration de votre installation solaire auprès d’Enedis ou de
            votre ELD en tant que « centrale d’autoconsommation avec revente de
            surplus ». Au premier trimestre 2023, le tarif d’achat du kWh est
            fixé à 0,1313 € par kWh réinjecté pendant une durée contractuelle de
            20 années, pour toute installation photovoltaïque dont la puissance
            totale est inférieure ou égale à 9kWc.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-[550px]">
          <Image
            src="/images/pages/aides/about.webp"
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
