const punti = [
  {
    title: "Opero con la solidità del Gruppo Vitanuova",
    description: "La forza di un gruppo consolidato al servizio della tua tranquillità.",
  },
  {
    title: "Approccio umano + analisi tecnica",
    description: "Combinazione perfetta tra relazione personale e competenza professionale.",
  },
  {
    title: "Strategia orientata al lungo periodo",
    description: "Pianificazione che guarda al futuro, non solo al presente.",
  },
];

export default function PercheFidarmiSection() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-2 text-center mb-12">Perché Fidarti di Me</h2>
        <div className="space-y-8">
          {punti.map((punto, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{punto.title}</h3>
                <p className="text-gray-700 text-lg">{punto.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

