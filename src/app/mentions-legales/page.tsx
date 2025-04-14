"use client";
import Hero from "@/components/pages/mentions-legales/Hero";
import About from "@/components/pages/mentions-legales/About";
export default function MentionsLegales() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <Hero />
      <About />
    </div>
  );
}
