import GetStartButton from "./Hero/GetStartButton";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="relative md:h-[512px] h-[575px] z-0 p-0 m-0 w-full flex items-center justify-center bg-cover bg-center">
      <Image
        src="/images/pages/home/Hero.png"
        alt="Hero"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-[#00061b] opacity-40"></div>

      <div className="relative container p-0 m-0 md:w-[75%] w-[90%] flex items-center text-white">
        <div className=" w-[80%] flex flex-col gap-[2rem] md:gap-[4.5rem] mb-5">
          <h1
            className="text-6xl p-0 m-0 text-[2.3rem] md:text-[3.30rem] w-[17rem] md:w-auto font-semibold"
            style={{
              fontWeight: 600, // Equivalent to font-semibold
            }}
          >
            La seule offre solaire <br /> avec garantie d'économies incluse
          </h1>
          <div>
            <GetStartButton
              text="Prendre RDV avec un expert solaire"
              href="demande-devis-panneau-solaire"
            />
            <p
              style={{
                fontSize: "14px",
                paddingLeft: "34px",
                boxSizing: "border-box",
              }}
            >
              Gratuit et sans engagement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
