"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-beige-50/98 backdrop-blur-md border-b border-beige-300 shadow-sm' 
        : 'bg-charcoal-900/40 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className={`text-lg sm:text-xl md:text-2xl font-normal tracking-wide transition-colors ${
            isScrolled ? 'text-charcoal-800' : 'text-beige-50'
          }`} style={{ fontFamily: 'Playfair Display, serif' }}>
            Mattia Orlando
          </Link>
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/chi-sono" className={`transition-colors text-sm tracking-wide uppercase ${
              isScrolled ? 'text-charcoal-700 hover:text-charcoal-900' : 'text-beige-100 hover:text-beige-50'
            }`}>
              Chi Sono
            </Link>
            <Link href="/servizi" className={`transition-colors text-sm tracking-wide uppercase ${
              isScrolled ? 'text-charcoal-700 hover:text-charcoal-900' : 'text-beige-100 hover:text-beige-50'
            }`}>
              Servizi
            </Link>
            <Link href="/contatti" className={`transition-colors text-sm tracking-wide uppercase ${
              isScrolled ? 'text-charcoal-700 hover:text-charcoal-900' : 'text-beige-100 hover:text-beige-50'
            }`}>
              Contatti
            </Link>
          </div>
          <button className={`md:hidden transition-colors ${
            isScrolled ? 'text-charcoal-700' : 'text-beige-50'
          }`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

