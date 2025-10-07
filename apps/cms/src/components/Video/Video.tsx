"use client";

import { useState } from "react";
import Image from "next/image";

export function Video({ img, video }: { img: string; video: string }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div>
      {!isReady && (
        <Image
          src={img}
          alt=""
          fill
          className="absolute inset-0 object-cover"
          priority
        />
      )}

      <video
        src={video}
        poster={img}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-1 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
        onCanPlayThrough={() => setIsReady(true)}
        autoPlay
        muted
        playsInline
        loop
      />
    </div>
  );
}
