"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function ContattoSection() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section id="contatti" className="section-container bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-2 text-center mb-4">Richiedi una Consulenza</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Compila il form o prenota direttamente un appuntamento
        </p>
        
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowCalendly(!showCalendly)}
            className="btn-secondary mb-8"
          >
            {showCalendly ? "Mostra Form Contatto" : "Prenota con Calendly"}
          </button>
        </div>

        {showCalendly ? (
          <CalendlyEmbed />
        ) : (
          <ContactForm />
        )}
      </div>
    </section>
  );
}

