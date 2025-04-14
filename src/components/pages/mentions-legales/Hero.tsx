import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center">
      {/* Hero Banner */}
      <div className="relative w-full h-[200px] md:h-[300px]">
        <Image
          src="/images/pages/mentions-legales/Hero.png"
          alt="Mentions légales banner"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
