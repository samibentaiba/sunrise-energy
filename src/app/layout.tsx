import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunvolt - La seule offre solaire avec garantie d'économies incluse",
  description:
    "Découvrez nos solutions photovoltaïques avec garantie d'économies incluse. Panneaux solaires, batteries et plus encore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="border-t mt-12 pt-8 text-sm">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <Link href="/" className="flex items-center mb-4">
                  <div className="flex items-center">
                    <span className="text-blue-800 font-bold text-xl">sun</span>
                    <span className="text-yellow-500 font-bold text-xl">
                      volt
                    </span>
                  </div>
                </Link>
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-4 w-4 text-yellow-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-600">(4.8/5)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Entreprise certifiée QualiPV RGE 2023
                  <br />
                  Siret : 12345678900001
                </p>
                <p className="text-gray-600">Programme de parrainage</p>
              </div>

              <div>
                <h4 className="font-bold mb-4">Mentions légales</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-gray-900">
                      Conditions générales de vente
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900">
                      Politique de confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center text-gray-500 border-t pt-6">
              <p>
                © 2024 SunVolt - Tous droits réservés | Conception et
                réalisation par SunVolt Digital
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <Link href="#" aria-label="Facebook">
                  <svg
                    className="h-5 w-5 text-gray-400 hover:text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="Twitter">
                  <svg
                    className="h-5 w-5 text-gray-400 hover:text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <svg
                    className="h-5 w-5 text-gray-400 hover:text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
