import { ReactElement } from "react";
export default function Touch(): ReactElement {
  return (
    <div id="team" className="w-full">
      <div className="absolute left-0 hidden md:block w-full z-10">
        <SVGComponent />
      </div>
      <div
        className="w-screen py-[130px] md:py-40 px-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(11,104,164,0.85) 0%, rgba(11,104,164,0.95) 80%), url('/images/pages/qui-sommes-nous/Touch.jpeg')",
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-center">
          <div
            className="w-full md:w-3/4 animate-fadeIn"
            style={{ animationDuration: "0.8s" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[45px] font-bold text-white leading-tight text-center">
              Nous existons pour rendre le solaire simple, sans risque,
              performant et accessible à tous
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
const SVGComponent: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    transform="matrix(1,0,0,-1,0,0)"
    version="1.1"
  >
    <path fill="#fff" d="M0 0v300C990 0 1000 500 2500 200v4750L0 320Z"></path>
  </svg>
);
