import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servizi - Mattia Orlando | Consulenza Patrimoniale Completa",
  description: "Pianificazione patrimoniale, protezione assicurativa, investimenti, successione e consulenza con approccio AI. Scopri tutti i servizi di Mattia Orlando.",
};

const serviziDettagliati = [
  {
    id: "pianificazione-patrimoniale",
    title: "Pianificazione Patrimoniale",
    icon: "📊",
    description: "Analisi completa della tua situazione patrimoniale attuale e definizione di una strategia personalizzata per raggiungere i tuoi obiettivi a breve, medio e lungo termine.",
    dettagli: [
      "Valutazione della situazione patrimoniale attuale",
      "Definizione di obiettivi chiari e misurabili",
      "Strategia personalizzata su misura",
      "Monitoraggio e revisione periodica",
    ],
  },
  {
    id: "protezione-assicurativa",
    title: "Protezione Assicurativa",
    icon: "🛡️",
    description: "Soluzioni assicurative su misura per proteggere te e la tua famiglia da imprevisti e garantire serenità futura.",
    dettagli: [
      "Analisi dei rischi e delle esigenze di protezione",
      "Soluzioni assicurative personalizzate",
      "Protezione vita e invalidità",
      "Assicurazioni patrimoniali",
    ],
  },
  {
    id: "investimenti",
    title: "Investimenti",
    icon: "📈",
    description: "Consulenza per investimenti mirati e diversificati, con analisi approfondita delle opportunità di mercato e gestione del rischio.",
    dettagli: [
      "Analisi del profilo di rischio",
      "Diversificazione del portafoglio",
      "Monitoraggio delle performance",
      "Ottimizzazione fiscale degli investimenti",
    ],
  },
  {
    id: "pianificazione-successoria",
    title: "Pianificazione Successoria",
    icon: "👨‍👩‍👧‍👦",
    description: "Pianificazione della successione patrimoniale per garantire un passaggio generazionale sereno e ottimizzato dal punto di vista fiscale.",
    dettagli: [
      "Analisi della situazione successoria",
      "Ottimizzazione fiscale della successione",
      "Pianificazione testamentaria",
      "Consulenza per donazioni e trust",
    ],
  },
  {
    id: "consulenza-ai",
    title: "Consulenza con Approccio AI",
    icon: "🤖",
    description: "Utilizzo di tecnologie avanzate e intelligenza artificiale per analisi predittive e ottimizzazione delle strategie patrimoniali.",
    dettagli: [
      "Analisi predittiva con AI",
      "Ottimizzazione algoritmica delle strategie",
      "Monitoraggio automatizzato dei mercati",
      "Reportistica avanzata e dashboard personalizzate",
    ],
  },
  {
    id: "consulenza-real-estate",
    title: "Consulenza Real Estate",
    icon: "🏠",
    description: "Valutazione e consulenza per investimenti immobiliari strategici, con analisi di mercato approfondite e supporto nella gestione.",
    dettagli: [
      "Valutazione immobiliare professionale",
      "Analisi di mercato e opportunità",
      "Consulenza per acquisti e vendite",
      "Gestione patrimoni immobiliari",
    ],
  },
];

export default function ServiziPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="section-container bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading-1 text-center mb-4">I Miei Servizi</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Soluzioni personalizzate per ogni esigenza patrimoniale. Ogni servizio è studiato per integrarsi perfettamente
            in una strategia complessiva di pianificazione e protezione del patrimonio.
          </p>
          
          <div className="space-y-16">
            {serviziDettagliati.map((servizio) => (
              <div
                key={servizio.id}
                id={servizio.id}
                className="bg-gray-50 rounded-2xl p-8 md:p-12"
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className="text-5xl">{servizio.icon}</div>
                  <div className="flex-1">
                    <h2 className="heading-2 text-3xl mb-4">{servizio.title}</h2>
                    <p className="text-body mb-6">{servizio.description}</p>
                    <ul className="space-y-3">
                      {servizio.dettagli.map((dettaglio, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-3 mt-1">•</span>
                          <span className="text-gray-700">{dettaglio}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/contatti" className="btn-primary text-lg px-8 py-4 inline-block">
              Prenota una Consulenza Gratuita
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

