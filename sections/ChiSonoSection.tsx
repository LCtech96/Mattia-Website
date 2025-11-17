import ProfileImage from "@/components/ProfileImage";

export default function ChiSonoSection() {
  return (
    <section id="chi-sono" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-2 text-center mb-12">Chi Sono</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
            <ProfileImage
              src="/assets/mattia-profile.jpg"
              alt="Mattia Orlando - Consulente Patrimoniale"
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <p className="text-body">
              Sono <strong>Mattia Orlando</strong>, il tuo consulente dedicato per la pianificazione e protezione del patrimonio.
              Opero con la solidità del <strong>Gruppo Vitanuova</strong>, combinando esperienza consolidata nel settore immobiliare
              con un approccio innovativo orientato al futuro.
            </p>
            <p className="text-body">
              La mia missione è affiancarti nella costruzione di una strategia patrimoniale solida, che protegga il tuo futuro
              e quello della tua famiglia, utilizzando strumenti all'avanguardia e un approccio umano e personalizzato.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">Esperienza Real Estate</h3>
                  <p className="text-gray-700">Competenza consolidata nel settore immobiliare per valutazioni e investimenti strategici.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">Focus Innovazione (AI/Tech)</h3>
                  <p className="text-gray-700">Utilizzo di tecnologie avanzate e intelligenza artificiale per analisi e strategie ottimizzate.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">Strategia 360°</h3>
                  <p className="text-gray-700">Approccio completo che considera tutti gli aspetti: protezione, crescita e successione patrimoniale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

