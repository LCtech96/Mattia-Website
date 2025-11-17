import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi Sono - Mattia Orlando | Consulente Patrimoniale",
  description: "Scopri chi è Mattia Orlando, consulente patrimoniale con esperienza nel real estate, focus su innovazione AI/Tech e strategia 360° per la protezione e crescita del patrimonio.",
};

export default function ChiSonoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 text-center mb-12">Chi Sono</h1>
          
          <div className="mb-12">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-8">
              <Image
                src="/assets/mattia-profile.jpg"
                alt="Mattia Orlando"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="heading-3">La Mia Storia</h2>
              <p className="text-body mb-6">
                Sono <strong>Mattia Orlando</strong>, consulente patrimoniale dedicato con una passione per aiutare le persone
                a proteggere e far crescere il proprio patrimonio. Opero con la solidità e l'esperienza del <strong>Gruppo Vitanuova</strong>,
                un punto di riferimento nel settore della consulenza patrimoniale.
              </p>
              
              <h2 className="heading-3 mt-8">Background Real Estate</h2>
              <p className="text-body mb-6">
                La mia esperienza nel settore immobiliare mi ha fornito una comprensione approfondita del mercato e delle
                opportunità di investimento. Questa competenza mi permette di offrire consulenza strategica per valutazioni
                e investimenti immobiliari che si integrano perfettamente con una pianificazione patrimoniale completa.
              </p>
              
              <h2 className="heading-3 mt-8">Approccio Tech e AI</h2>
              <p className="text-body mb-6">
                Credo fermamente nell'innovazione come strumento per offrire consulenza di qualità superiore. Utilizzo tecnologie
                avanzate e intelligenza artificiale per analisi predittive, ottimizzazione delle strategie e valutazioni più precise.
                Questo approccio mi permette di combinare l'esperienza umana con la potenza dell'analisi tecnica.
              </p>
              
              <h2 className="heading-3 mt-8">I Miei Valori</h2>
              <ul className="space-y-4 text-body">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span><strong>Trasparenza:</strong> Comunicazione chiara e onesta in ogni fase del processo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span><strong>Personalizzazione:</strong> Ogni strategia è studiata su misura per le tue esigenze specifiche.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span><strong>Orientamento al lungo termine:</strong> Pianificazione che guarda al futuro, non solo al presente.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span><strong>Approccio umano:</strong> La relazione con il cliente è al centro di tutto ciò che faccio.</span>
                </li>
              </ul>
              
              <h2 className="heading-3 mt-8">La Mia Mission</h2>
              <p className="text-body mb-6">
                La mia missione è affiancarti nella costruzione di una strategia patrimoniale solida che protegga il tuo futuro
                e quello della tua famiglia. Utilizzo strumenti all'avanguardia e un approccio umano e personalizzato per garantire
                che ogni decisione sia presa con consapevolezza e serenità.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

