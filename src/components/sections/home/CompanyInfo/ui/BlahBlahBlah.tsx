import GetStartButton from "./GetStartButton";
import Image from "next/image";
export default function BlahBlahBlah() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 style={{ margin: 0, boxSizing: "border-box", flexGrow: 0, padding: "0px", fontSize: "40px", color: "rgb(4, 9, 34)", textAlign: "left", marginTop: "0px", marginBottom: "0px", fontFamily: "Lato, Arial, Helvetica, sans-serif", fontWeight: 700, lineHeight: "48px", letterSpacing: "normal", textTransform: "none", fontStyle: "normal" }}>SunVolt France ; le leader du solaire intelligent depuis 2019</h2>
        <p className="text-gray-800 mb-6">Sunvolt est une entreprise française spécialisée dans l'installation de panneaux solaires pour les particuliers et les professionnels. Notre mission est de rendre l'énergie solaire accessible à tous, grâce à des solutions sur-mesure, innovantes et économiques.</p>
        <GetStartButton text="En savoir plus" isIcon={false} href="/solutions-photovoltaiques" />
      </div>

      <div>
        <Image src="/images/installationpanneausolairelarochelle.jpeg" alt="Solar panels on roof" width={500} height={400} className="rounded-lg object-cover" />
      </div>
    </div>
  );
}
