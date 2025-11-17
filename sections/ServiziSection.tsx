import Link from "next/link";

const servizi = [
  {
    title: "Pianificazione Patrimoniale",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description: "Analisi completa della tua situazione patrimoniale e definizione di una strategia personalizzata per raggiungere i tuoi obiettivi.",
  },
  {
    title: "Protezione Assicurativa",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "Soluzioni assicurative su misura per proteggere te e la tua famiglia da imprevisti e garantire serenità futura.",
  },
  {
    title: "Investimenti",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description: "Consulenza per investimenti mirati e diversificati, con analisi approfondita delle opportunità di mercato.",
  },
  {
    title: "Pianificazione Successoria",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    description: "Pianificazione della successione patrimoniale per garantire un passaggio generazionale sereno e ottimizzato.",
  },
  {
    title: "Consulenza con Approccio AI",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: "Utilizzo di tecnologie avanzate e intelligenza artificiale per analisi predittive e ottimizzazione delle strategie.",
  },
  {
    title: "Consulenza Real Estate",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    description: "Valutazione e consulenza per investimenti immobiliari strategici, con analisi di mercato approfondite.",
  },
];

export default function ServiziSection() {
  return (
    <section id="servizi" className="section-container bg-beige-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-2 mb-8">I Miei Servizi</h2>
        <p className="text-elegant text-charcoal-600 mb-16 max-w-2xl">
          Soluzioni personalizzate per ogni esigenza patrimoniale
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {servizi.map((servizio, index) => (
            <div
              key={index}
              className="bg-beige-50 border-b-2 border-charcoal-200 pb-8 hover:border-charcoal-700 transition-colors duration-300"
            >
              <div className="text-charcoal-700 mb-6">{servizio.icon}</div>
              <h3 className="heading-3 mb-4">{servizio.title}</h3>
              <p className="text-elegant text-charcoal-600">{servizio.description}</p>
            </div>
          ))}
        </div>
        <div className="text-left">
          <Link href="/contatti" className="btn-primary inline-block">
            Prenota una consulenza
          </Link>
        </div>
      </div>
    </section>
  );
}

