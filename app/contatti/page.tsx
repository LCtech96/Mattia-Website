import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti - Mattia Orlando | Prenota una Consulenza",
  description: "Contatta Mattia Orlando per una consulenza patrimoniale gratuita. Compila il form o contattaci via WhatsApp.",
};

export default function ContattiPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 text-center mb-4">Contatti</h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Compila il form o contattaci via WhatsApp. Ti risponderò al più presto.
          </p>
          
          <div className="mb-12">
            <h2 className="heading-3 mb-6 text-center">Invia un Messaggio</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

