import Image from "next/image";

export default function SectionTrust() {
  return (
    <div className=" bg-gray-50 p-20 flex justify-center flex-col items-center align-middle">
      <h2 className="p-5"
        style={{
          fontFamily: "&quot",
          fontStyle: "normal",
          fontWeight: 700,
          margin: 0,
          fontSize: "2em",
          letterSpacing: "var(--awb-typography1-letter-spacing)",
          lineHeight: "var(--awb-typography1-line-height)",
          boxSizing: "border-box",
          flexGrow: 0,
          color: "rgb(4, 9, 34)",
          textAlign: "center",
          marginTop: "0px",
          marginBottom: "0px",
          textTransform: "none",
        }}
      >
        Ils nous font confiance pour accompagner leur clients
      </h2>
      <div className="flex justify-center p-5 items-center gap-5">
        <Image
          src="/images/Logos.png"
          alt="logo sunvolt"
          width={300}
          height={100}
        />
        <Image
          src="/images/TrustCompany.png"
          alt="logo sunvolt"
          width={170}
          height={100}
        />
      </div>
    </div>
  );
}
