"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type MediaData = {
  video?: { url: string };
  placeholder?: { url: string; blurDataURL?: string };
};

export function Video({ video }: { video: MediaData }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false); // увидели блок — только тогда даём src
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      rootMargin: "300px",
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const preview = video.placeholder?.url || "/images/preview.webp";

  return (
    <div ref={ref} className=" w-full h-full overflow-hidden">
      {!ready && (
        <Image
          src={preview}
          alt="preview"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="(max-width:768px) 100vw, (max-width:1280px) 80vw, 1200px"
          quality={68}
        />
      )}

      <video
        src={inView ? video.video?.url : undefined}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setReady(true)} // срабатывает раньше, чем canplaythrough
        autoPlay
        muted
        playsInline
        loop
        preload="none"
      />
    </div>
  );
}
