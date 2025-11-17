"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Verifica se l'immagine esiste solo in client-side
    if (typeof window === 'undefined') return;
    
    // Controlla se l'immagine esiste prima di renderizzarla
    const checkImage = async () => {
      try {
        const img = new window.Image();
        const fullSrc = `${window.location.origin}/assets/penna-hero.png`;
        
        await new Promise((resolve, reject) => {
          img.onload = () => {
            setImageLoaded(true);
            setImageError(false);
            resolve(true);
          };
          img.onerror = () => {
            setImageError(true);
            setImageLoaded(false);
            reject(false);
          };
          img.src = fullSrc;
        });
      } catch {
        setImageError(true);
        setImageLoaded(false);
      }
    };
    
    checkImage();
  }, []);

  const scrollToContatti = () => {
    const element = document.getElementById("contatti");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-[95vh] flex items-center overflow-hidden">
      {/* Background Image - Penna come sfondo */}
      <div className="absolute inset-0 z-0">
        {/* Immagine della penna come background */}
        {imageLoaded && !imageError ? (
          <div className="absolute inset-0">
            <Image
              src="/assets/penna-hero.png"
              alt=""
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="100vw"
              style={{ objectPosition: 'right bottom' }}
              onError={() => {
                setImageError(true);
                setImageLoaded(false);
              }}
            />
          </div>
        ) : null}
        
        {/* Overlay leggero solo per la leggibilità del testo a sinistra */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/30 via-charcoal-800/10 to-transparent"></div>
      </div>
      
      {/* Contenuto sopra l'immagine */}
      <div className="section-container w-full relative z-10 py-12 md:py-16 lg:py-24">
        <div className="max-w-5xl">
          <p className="text-sm sm:text-base md:text-lg text-beige-100/95 mb-6 md:mb-8 max-w-2xl leading-relaxed">
            Soluzioni personalizzate di pianificazione patrimoniale per garantire sicurezza ai tuoi cari e tranquillità al tuo domani.
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-beige-50 mb-8 md:mb-12 max-w-4xl leading-tight" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}>
            Proteggi il tuo patrimonio,<br />
            costruisci il tuo futuro
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button onClick={scrollToContatti} className="bg-beige-50 text-charcoal-800 px-6 py-3 sm:px-8 sm:py-4 rounded-none font-medium tracking-wide hover:bg-beige-100 transition-all duration-300 uppercase text-xs sm:text-sm">
              Prenota una consulenza
            </button>
            <Link href="/chi-sono" className="bg-transparent border-2 border-beige-50 text-beige-50 px-6 py-3 sm:px-8 sm:py-4 rounded-none font-medium hover:bg-beige-50 hover:text-charcoal-800 transition-all duration-300 uppercase text-xs sm:text-sm tracking-wide text-center">
              Scopri di più
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

