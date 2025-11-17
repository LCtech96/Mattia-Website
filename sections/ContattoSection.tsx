"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function ContattoSection() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section id="contatti" className="section-container bg-beige-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-2 mb-8">Restiamo in contatto</h2>
        <p className="text-elegant text-charcoal-600 mb-12 max-w-2xl">
          Prenota una consulenza senza impegno per scoprire come le nostre soluzioni possono tutelare il tuo patrimonio e semplificare il passaggio generazionale.
        </p>
        
        <div className="mb-12">
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

