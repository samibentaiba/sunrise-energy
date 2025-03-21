import GetStartButton from "./ui/GetStartButton";

export default function SectionHero() {
  return (
    <div
      className="relative h-[512px] z-0  p-0 m-0  w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/herosection.png')" }}
    >
      {/* Black overlay with 10% opacity */}
      <div className="absolute inset-0 bg-[#00061b] opacity-40"></div>

      <div className="relative container p-0 m-0 w-[75%]  flex items-center text-white">
        <div className=" w-[80%] flex flex-col  gap-[4.5rem] mb-5">
          <h1
            className="text-6xl p-0 m-0  font-semibold"
            style={{
              fontSize: "3.30rem", // Equivalent to Tailwind's text-6xl
              padding: 0,
              margin: 0,
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
