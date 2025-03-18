import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SectionMain() {
  return (
    <div className="bg-white py-4 border-b">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-32">
            <div className="flex items-center">
              <span className="text-blue-800 font-bold text-2xl">sun</span>
              <span className="text-yellow-500 font-bold text-2xl">volt</span>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex space-x-8">
          <div className="relative group">
            <button className="flex items-center text-gray-800 font-medium">
              Solutions photovoltaïques
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <Link href="#" className="text-gray-800 font-medium">
            Garanties
          </Link>
          <Link href="#" className="text-gray-800 font-medium">
            Aides
          </Link>
          <Link href="#" className="text-gray-800 font-medium">
            Avis
          </Link>
        </div>

        <div className="hidden md:block">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-6">
            <span className="mr-2">»</span> Demander un devis personnalisé
          </Button>
        </div>

        <button className="md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
