import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProviderWrapper from "./ThemeProvider";
import SectionPrimaryNavigationBar from "@/components/modules/PNavBar";
import SectionSecondaryNavigationBar from "@/components/modules/SNavBar";
import SectionFooter from "@/components/modules/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sunrise - La seule offre solaire avec garantie d'économies incluse",
  description:
    "Découvrez nos solutions photovoltaïques avec garantie d'économies incluse. Panneaux solaires, batteries et plus encore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="w-screen flex flox-col items-center  justify-center bg-white"
      style={{
        fontFamily: "inter",
      }}
    >
      <div
        className={`${inter.className} light w-screen flex flex-col items-center`}
      >
        <ThemeProviderWrapper>
          <div className="max-w-[1920px] w-full">
            <SectionPrimaryNavigationBar />
            <div className="sticky top-0 z-50 shadow-md">
              <SectionSecondaryNavigationBar />
            </div>
          </div>
          <div className=" flex bg-white w-screen  flex-col ">{children}</div>
          <SectionFooter />
        </ThemeProviderWrapper>
      </div>
    </div>
  );
}
