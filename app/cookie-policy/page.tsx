import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Mattia Orlando",
  description: "Informativa sull'utilizzo dei cookie sul sito web di Mattia Orlando.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="heading-1">Cookie Policy</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString("it-IT")}
          </p>
          
          <h2 className="heading-3">Cosa sono i Cookie</h2>
          <p className="text-body">
            I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web.
            Vengono utilizzati per migliorare l&apos;esperienza di navigazione e per raccogliere informazioni statistiche.
          </p>
          
          <h2 className="heading-3">Tipi di Cookie Utilizzati</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie Tecnici</h3>
          <p className="text-body">
            Cookie necessari per il funzionamento del sito. Non richiedono consenso.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie Analitici</h3>
          <p className="text-body">
            Utilizziamo Google Analytics per analizzare il traffico del sito. Questi cookie raccolgono informazioni
            in forma aggregata e anonima.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie di Marketing</h3>
          <p className="text-body">
            Utilizziamo Meta Pixel per misurare l&apos;efficacia delle campagne pubblicitarie. Questi cookie richiedono
            il tuo consenso.
          </p>
          
          <h2 className="heading-3">Gestione dei Cookie</h2>
          <p className="text-body">
            Puoi gestire le preferenze dei cookie attraverso le impostazioni del tuo browser. Tuttavia, disabilitare
            alcuni cookie potrebbe limitare la funzionalità del sito.
          </p>
          
          <h2 className="heading-3">Cookie di Terze Parti</h2>
          <p className="text-body">
            Questo sito utilizza servizi di terze parti che potrebbero impostare cookie:
          </p>
          <ul className="text-body">
            <li><strong>Google Analytics:</strong> Analisi del traffico</li>
            <li><strong>Meta Pixel:</strong> Misurazione campagne pubblicitarie</li>
            <li><strong>Calendly:</strong> Prenotazione appuntamenti</li>
          </ul>
          
          <h2 className="heading-3">Contatti</h2>
          <p className="text-body">
            Per domande sui cookie, contatta: info@mattiaorlando.com
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

