import GetStartButton from "./Hero/GetStartButton";

export default function SectionHeroAlt() {
  return (
    <div className="relative md:h-[512px] h-[575px] z-0 p-0 m-0 w-full flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/solar-house.jpeg')" }}>
      {/* Black overlay with 10% opacity */}
      <div className="absolute inset-0 bg-[#00061b]  opacity-40"></div>
      <div className="relative p-0 m-0 md:w-[75%] w-[90%] flex items-center text-white">
  {/* Blue Overlay */}
  <div className="absolute inset-0  rounded-[50%] left-100 h-[110rem] w-[160rem] top-[-600px] bg-[#0042ff] opacity-60 "></div>
  <div className="absolute inset-0  rounded-[50%] left-100 h-[110rem] w-[160rem] top-[-600px] bg-[#000000] opacity-80 "></div>

  <div className="relative w-[80%] h-[50%] flex flex-col p-[4.8rem] gap-[2rem] left-100 md:gap-[3rem] mb-5">
    <h1
      className="text-6xl p-0 m-0 text-[2.3rem] md:text-[3.30rem] w-[2rem] md:w-auto font-semibold"
      style={{
        fontWeight: 600, // Equivalent to font-semibold
      }}
    >
      Le photovoltaïque au juste prix,
      <br /> sans compromis sur la qualité
    </h1>
    <p className="mt-0 mb-0 text-[1.3rem] w-[85%] box-border">
      Avec les offres SunVolt, vous bénéficiez du prix le plus juste pour un matériel de qualité et des garanties étendues
    </p>

    <div>
      <GetStartButton isIcon={false} text="Je demande un RDV avec un conseiller" href="demande-devis-panneau-solaire" />
    </div>
  </div>
</div>

    </div>
  );
}
