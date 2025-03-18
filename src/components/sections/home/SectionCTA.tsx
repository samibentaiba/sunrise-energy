import Image from "next/image";

export default function SectionCTA() {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Solar expert"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-2xl font-bold mb-4">
              Achetez sans risque une installation de panneaux solaires
              performante 100% garantie
            </h2>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-yellow-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Garantie de performance pendant 10 ans</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-yellow-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Panneaux solaires de haute qualité</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-yellow-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Installation par des professionnels certifiés</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
