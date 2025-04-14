import type React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
    <html lang="fr" className="text-black bg-[#d1d1d1]">
      <body className={`${inter.className} light bg-white`}>
        
          <ThemeProviderWrapper>
            <SectionPrimaryNavigationBar />
            <div className="sticky top-0 z-50 shadow-md">
              <SectionSecondaryNavigationBar />
            </div>
            <div className=" flex bg-white flex-col ">{children}</div>
            <SectionFooter />
          </ThemeProviderWrapper>
        
      </body>
    </html>
  );
}
