import ProfileImage from "@/components/ProfileImage";

export default function ChiSonoSection() {
  return (
    <section id="chi-sono" className="section-container bg-beige-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-elegant text-charcoal-600 max-w-3xl">
            Da oltre vent&apos;anni affianchiamo famiglie, imprenditori e professionisti nella gestione e trasmissione del patrimonio. 
            Il nostro team multidisciplinare unisce competenze legali, fiscali e finanziarie, offrendo consulenze su misura e aggiornate 
            alle normative nazionali e internazionali.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square overflow-hidden">
            <ProfileImage
              src="/assets/mattia-profile.jpg"
              alt="Mattia Orlando - Consulente Patrimoniale"
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-8">
            <p className="text-body text-charcoal-700">
              Sono <strong className="text-charcoal-900">Mattia Orlando</strong>, il tuo consulente dedicato per la pianificazione e protezione del patrimonio.
              Opero con la solidità del <strong className="text-charcoal-900">Gruppo Vitanuova</strong>, combinando esperienza consolidata nel settore immobiliare
              con un approccio innovativo orientato al futuro.
            </p>
            <p className="text-body text-charcoal-700">
              La mia missione è affiancarti nella costruzione di una strategia patrimoniale solida, che protegga il tuo futuro
              e quello della tua famiglia, utilizzando strumenti all&apos;avanguardia e un approccio umano e personalizzato.
            </p>
            <div className="space-y-6 pt-6">
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-charcoal-700 rounded-full"></div>
                </div>
                <div>
                  <h3 className="heading-3 text-charcoal-900 mb-2">Esperienza Real Estate</h3>
                  <p className="text-elegant text-charcoal-600">Competenza consolidata nel settore immobiliare per valutazioni e investimenti strategici.</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-charcoal-700 rounded-full"></div>
                </div>
                <div>
                  <h3 className="heading-3 text-charcoal-900 mb-2">Focus Innovazione (AI/Tech)</h3>
                  <p className="text-elegant text-charcoal-600">Utilizzo di tecnologie avanzate e intelligenza artificiale per analisi e strategie ottimizzate.</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-charcoal-700 rounded-full"></div>
                </div>
                <div>
                  <h3 className="heading-3 text-charcoal-900 mb-2">Strategia 360°</h3>
                  <p className="text-elegant text-charcoal-600">Approccio completo che considera tutti gli aspetti: protezione, crescita e successione patrimoniale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

