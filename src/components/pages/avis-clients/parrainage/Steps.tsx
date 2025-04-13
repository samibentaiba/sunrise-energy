import type { ReactElement } from "react";
export default function Steps(): ReactElement {
  const steps = [
    {
      number: 1,
      title: "Proposition du parrainage",
      description:
        "En tant que parrain, complétez le formulaire ci-dessous en précisant qui vous souhaitez parrainer. Vous pouvez en proposer autant que vous le souhaitez.",
    },
    {
      number: 2,
      title: "Étude de leur projet",
      description:
        "Nos experts solaires les contactent et réalisent avec eux l'étude de leur projet, d'un point de vue technique et économique.",
    },
    {
      number: 3,
      title: "Démarches et installation",
      description:
        "Nous nous occupons de toutes les démarches administratives et mandatons un techniciens RGE pour la réalisation du chantier.",
    },
    {
      number: 4,
      title: "Mise en service",
      description:
        "Dès la mise en service de l'installation effectuée, le parrainage est validé : parrain et filleul sont récompensés.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold">
          Le parrainage,
          <br />
          comment ça marche ?
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white p-6 rounded-lg shadow-xl flex flex-col h-full"
            style={{ boxShadow: "0px 10px 51px 3px rgba(4,9,34,0.17)" }}
          >
            <div className="mb-4">
              <span
                className="inline-block text-white text-3xl font-bold px-3 py-1"
                style={{ background: "#0b68a4" }}
              >
                {step.number}
              </span>
            </div>
            <h4 className="text-lg font-bold mb-2">{step.title}</h4>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
