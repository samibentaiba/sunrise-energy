"use client"
import dynamic from "next/dynamic"
import FranceMap from "./Proches/FranceMap"
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => <p>Loading video...</p>,
});

export default function Proches() {
  return (
    <section className="py-8 md:py-14 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
        Découvrez nos installations proches de chez vous !
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
        <ReactPlayer
            url="https://youtu.be/y4iMWlxVKDA"
            controls
            width="504px"
            height="283px"
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
            title="Solar Panel Installation Video"
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <FranceMap />
        </div>
      </div>
    </section>
  )
}

