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
    <section className="section-container bg-sage-700 text-beige-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-2 text-beige-50 mb-16">Perché Fidarti di Me</h2>
        <div className="space-y-12">
          {punti.map((punto, index) => (
            <div key={index} className="border-b border-sage-600 pb-12 last:border-0 last:pb-0">
              <h3 className="heading-3 text-beige-50 mb-4">{punto.title}</h3>
              <p className="text-elegant text-beige-200">{punto.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

