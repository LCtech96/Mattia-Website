import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Mattia Orlando",
  description: "Informativa sulla privacy e trattamento dei dati personali di Mattia Orlando.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="heading-1">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString("it-IT")}
          </p>
          
          <h2 className="heading-3">1. Titolare del Trattamento</h2>
          <p className="text-body">
            Il titolare del trattamento dei dati personali è Mattia Orlando, con email di contatto: info@mattiaorlando.com
          </p>
          
          <h2 className="heading-3">2. Dati Raccolti</h2>
          <p className="text-body">
            I dati personali raccolti attraverso questo sito web includono:
          </p>
          <ul className="text-body">
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono (opzionale)</li>
            <li>Messaggi inviati tramite il form di contatto</li>
            <li>Dati di navigazione e cookie (come specificato nella Cookie Policy)</li>
          </ul>
          
          <h2 className="heading-3">3. Finalità del Trattamento</h2>
          <p className="text-body">
            I dati personali vengono trattati per le seguenti finalità:
          </p>
          <ul className="text-body">
            <li>Rispondere alle richieste di contatto e consulenza</li>
            <li>Fornire i servizi richiesti</li>
            <li>Migliorare l&apos;esperienza di navigazione sul sito</li>
            <li>Analisi statistiche e di marketing (con consenso)</li>
          </ul>
          
          <h2 className="heading-3">4. Base Giuridica</h2>
          <p className="text-body">
            Il trattamento dei dati si basa sul consenso dell&apos;interessato e sull&apos;esecuzione di misure precontrattuali.
          </p>
          
          <h2 className="heading-3">5. Conservazione dei Dati</h2>
          <p className="text-body">
            I dati personali vengono conservati per il tempo necessario alle finalità per cui sono stati raccolti,
            salvo obblighi di legge che richiedano una conservazione più lunga.
          </p>
          
          <h2 className="heading-3">6. Diritti dell&apos;Interessato</h2>
          <p className="text-body">
            Ai sensi del GDPR, l&apos;interessato ha diritto a:
          </p>
          <ul className="text-body">
            <li>Accedere ai propri dati personali</li>
            <li>Richiedere la rettifica o la cancellazione</li>
            <li>Opporsi al trattamento</li>
            <li>Richiedere la limitazione del trattamento</li>
            <li>Richiedere la portabilità dei dati</li>
            <li>Revocare il consenso in qualsiasi momento</li>
          </ul>
          
          <h2 className="heading-3">7. Contatti</h2>
          <p className="text-body">
            Per esercitare i propri diritti o per qualsiasi domanda sulla privacy, è possibile contattare:
            <br />
            <strong>Email:</strong> info@mattiaorlando.com
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

