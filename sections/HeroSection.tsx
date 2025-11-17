"use client";

import Link from "next/link";

export default function HeroSection() {
  const scrollToContatti = () => {
    const element = document.getElementById("contatti");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 min-h-[90vh] flex items-center">
      <div className="section-container w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 text-primary-900 mb-6">
            Il Tuo Consulente Personale per il Patrimonio
          </h1>
          <p className="text-body text-gray-700 mb-8 max-w-2xl mx-auto">
            Affiancamento strategico per proteggere e far crescere il tuo futuro.
            Pianificazione patrimoniale, protezione assicurativa e investimenti con un approccio umano e innovativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToContatti} className="btn-primary text-lg px-8 py-4">
              Prenota la Prima Consulenza Gratuita
            </button>
            <Link href="/chi-sono" className="btn-secondary text-lg px-8 py-4">
              Scopri di Più
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

