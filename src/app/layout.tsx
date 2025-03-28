import type React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "./ThemeProvider";
import SectionPrimaryNavigationBar from "@/components/sections/NavBar/ui/SectionPrimaryNavigationBar";
import SectionSecondaryNavigationBar from "@/components/sections/NavBar/ui/SectionSecondaryNavigationBar";
import SectionFooter from "@/components/sections/SectionFooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunvolt - La seule offre solaire avec garantie d'économies incluse",
  description: "Découvrez nos solutions photovoltaïques avec garantie d'économies incluse. Panneaux solaires, batteries et plus encore."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-[#d1d1d1]">
      <body className={`${inter.className} light bg-white`}>
        <ThemeProviderWrapper>

          <SectionPrimaryNavigationBar />
          <div className="sticky top-0 z-50 shadow-md">
            <SectionSecondaryNavigationBar />
          </div>

          <div className="min-h-screen flex  flex-col ">{children}</div>

          <SectionFooter />

        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
