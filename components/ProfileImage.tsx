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
    // Verifica se l'immagine esiste
    const img = new window.Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = src;
  }, [src]);

  // Mostra placeholder se c'è un errore o l'immagine non è ancora caricata
  if (imageError || !imageLoaded) {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-primary-600 text-5xl font-bold mb-2">MO</div>
          <div className="text-primary-700 text-sm font-medium">Mattia Orlando</div>
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

