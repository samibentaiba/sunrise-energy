import GetStartButton from "./GetStartButton";
import Image from "next/image";
export default function BlahBlahBlah() {
  return (
    <div className="flex h-[20rem] bg-white w-full overflow-clip px-50"
    style={{
      justifyContent: "space-between",
      alignContent: "space-between",
      alignItems: "space-between",
      justifyItems: "space-between",
      justifySelf: "space-between",
      alignSelf: "space-between"
    }}
    >
      <div
        className="flex flex-col w-[46%] h-full  gap-x-10"
        style={{
          justifyContent: "space-between",
          alignContent: "space-between",
          alignItems: "space-between",
          justifyItems: "space-between",
          justifySelf: "space-between",
          alignSelf: "space-between"
        }}>
        <h2 style={{ fontSize: "40px", color: "rgb(4, 9, 34)", textAlign: "left", fontFamily: "Lato, Arial, Helvetica, sans-serif", fontWeight: 700, lineHeight: "50px", fontStyle: "normal" }}>SunVolt France ; le leader du solaire intelligent depuis 2019</h2>
        <p className="text-gray-800">SunVolt est un acteur de référence dans les énergies renouvelables avec plus de 3000 installations photovoltaïques réalisées en France. Nous nous sommes donnés pour objectif de rendre le solaire accessible à tous, en offrant le meilleur compromis entre prix, rentabilité et performance.</p>
        <GetStartButton text="En savoir plus" isIcon={false} href="/solutions-photovoltaiques" />
      </div>

      <Image src="/images/installationpanneausolairelarochelle.jpeg" alt="Solar panels on roof" width={600} height={600} />
    </div>
  );
}
