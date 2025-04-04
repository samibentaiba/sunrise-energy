import GetStartButton from "./Hero/GetStartButton";
import Image from "next/image";
export default function Hero() {
  return (
    <div
      className="relative md:h-[420px] h-[450px] z-0 p-0 m-0 w-full flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/pages/panneaux-solaires/Hero/Hero.jpeg')",
      }}
    >
      {/* Black overlay with 10% opacity */}
      <div className="absolute inset-0 bg-[#00061b]  opacity-40"></div>
      <div className="relative p-0 m-0 w-full h-full flex items-center text-white">
        {/* Blue Overlay */}{" "}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/pages/panneaux-solaires/Hero/BlueShape.svg"
            alt="Blue background shape"
            fill
            style={{
              objectFit: "cover",
              zIndex: -1,
              opacity: 0.85,
            }}
            priority
          />
        </div>
        <div className="relative w-[80%] h-full  flex flex-col p-[4.8rem] gap-[2rem] left-170 md:gap-[3rem] mb-5">
          <h1
            className="text-6xl p-0 m-0 text-[2.3rem] md:text-[3rem] w-[2rem] md:w-auto font-semibold"
            style={{
              fontWeight: 600, // Equivalent to font-semibold
            }}
          >
            Le photovoltaïque au juste prix,
            <br /> sans compromis sur la qualité
          </h1>
          <p className="mt-0 mb-0 text-[1rem] w-[50%] box-border">
            Avec les offres SunVolt, vous bénéficiez du prix le plus juste pour
            un matériel de qualité et des garanties étendues
          </p>

          <div>
            <GetStartButton
              isIcon={false}
              text="Je demande un RDV avec un conseiller"
              href="demande-devis-panneau-solaire"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
