export default function SectionTrust() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">
          Ils nous font confiance pour accompagner leur clients
        </h2>
        <div className="flex justify-center space-x-8">
          {[1, 2, 3, 4, 5].map((partner) => (
            <div key={partner} className="w-24 h-12 bg-gray-200 rounded">
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
