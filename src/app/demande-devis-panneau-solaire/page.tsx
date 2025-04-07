"use client";
import dynamic from "next/dynamic";
// Dynamically import the client component
const Form = dynamic(
  () => import("@/components/pages/demande-devis-panneau-solaire/Form"),
  {
    ssr: false, // <-- CRUCIAL: disables server-side rendering
  }
);
export default function DemandeDevisPanneauSolaire() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Form />
    </div>
  );
}
