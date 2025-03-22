export default function NumbersSection() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-16">
      <div className="text-center p-6 bg-gray-50 rounded-lg">
        <div className="text-4xl font-bold text-blue-800">5</div>
        <div className="text-sm text-gray-600 mt-2">ans d'expérience</div>
      </div>

      <div className="text-center p-6 bg-gray-50 rounded-lg">
        <div className="text-4xl font-bold text-blue-800">3000</div>
        <div className="text-sm text-gray-600 mt-2">installations réalisées</div>
      </div>

      <div className="text-center p-6 bg-gray-50 rounded-lg">
        <div className="text-4xl font-bold text-blue-800">38571</div>
        <div className="text-sm text-gray-600 mt-2">tonnes de CO2 économisées</div>
      </div>
    </div>
  );
}
