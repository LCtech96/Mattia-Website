"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ProfileImage({ src, alt, className, priority, sizes }: ProfileImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`relative bg-primary-100 flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <div className="text-primary-600 text-4xl font-bold mb-2">MO</div>
          <div className="text-primary-700 text-sm">Mattia Orlando</div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => {
        setHasError(true);
      }}
    />
  );
}

