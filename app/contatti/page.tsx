import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti - Mattia Orlando | Prenota una Consulenza",
  description: "Contatta Mattia Orlando per una consulenza patrimoniale gratuita. Compila il form o prenota direttamente un appuntamento tramite Calendly.",
};

export default function ContattiPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 text-center mb-4">Contatti</h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Compila il form o prenota direttamente un appuntamento. Ti risponderò al più presto.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="heading-3 mb-6">Informazioni di Contatto</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:info@mattiaorlando.com"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    info@mattiaorlando.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Orari</h3>
                  <p className="text-gray-700">
                    Lunedi - Venerdì: 9:00 - 18:00<br />
                    Sabato: Su appuntamento
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="heading-3 mb-6">Prenota con Calendly</h2>
              <CalendlyEmbed />
            </div>
          </div>
          
          <div>
            <h2 className="heading-3 mb-6 text-center">Invia un Messaggio</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

