"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ProfileImage({ src, alt, className, priority, sizes }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Verifica se l'immagine esiste solo in client-side
    if (typeof window === 'undefined') return;
    
    const img = new window.Image();
    img.onload = () => {
      setImageLoaded(true);
      setImageError(false);
    };
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(false);
    };
    // Usa il percorso completo per il controllo
    const fullSrc = src.startsWith('/') ? `${window.location.origin}${src}` : src;
    img.src = fullSrc;
  }, [src]);

  // Mostra placeholder se c'è un errore o l'immagine non è ancora caricata
  if (imageError || !imageLoaded) {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-beige-200 to-beige-300 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-charcoal-700 text-5xl font-normal mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>MO</div>
          <div className="text-charcoal-600 text-sm font-medium">Mattia Orlando</div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}

