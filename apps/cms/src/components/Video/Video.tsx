"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useHasMounted } from "src/hooks/useHasMounted";

type MediaData = {
  video?: { url: string };
  placeholder?: { url: string; blurDataURL?: string };
};

export function Video({ video }: { video: MediaData }) {
  const mounted = useHasMounted();
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // IO создаётся только после монтирования
  useEffect(() => {
    if (!mounted || !ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "300px 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [mounted]);

  useEffect(() => {
    if (mounted && inView && !shouldLoad) setShouldLoad(true);
  }, [mounted, inView, shouldLoad]);

  console.log(`shouldLoad: ${shouldLoad}`);
  console.log(`inView: ${inView}`);
  const preview = video.placeholder?.url || "/images/preview.webp";

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
      <Image
        src={preview}
        alt="preview"
        fill
        className={`object-cover ${
          !ready ? "opacity-100 z-10" : "opacity-0 z-0"
        } transition-opacity duration-500`}
        sizes="100vw"
        priority
      />

      <video
        src={shouldLoad ? video.video?.url : undefined}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          ready ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        onLoadedData={() => setReady(true)}
        autoPlay={mounted}
        muted
        playsInline
        loop
        preload="metadata"
        disableRemotePlayback
        style={{
          transform: "translateZ(0)",
          willChange: "opacity, transform",
        }}
      />
    </div>
  );
}
