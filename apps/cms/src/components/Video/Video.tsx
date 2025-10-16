"use client";

import { useState } from "react";
import Image from "next/image";
import { MediaData } from "src/lib/types/ui/media";

export function Video({ video }: { video: MediaData }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className=" w-full h-full z-100">
      {!isReady && (
        <Image
          src={video.placeholder?.url || "/images/preview.png"}
          alt="preview"
          fill
          className="absolute inset-0 object-cover"
          priority
          fetchPriority="high"
        />
      )}

      <video
        src={video.video?.url}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-1 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
        onCanPlayThrough={() => setIsReady(true)}
        autoPlay
        muted
        playsInline
        loop
        poster={video.placeholder?.url || "/images/preview.png"}
        preload="none"
      />
    </div>
  );
}
