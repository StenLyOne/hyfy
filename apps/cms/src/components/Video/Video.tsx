"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useHasMounted } from "src/hooks/useHasMounted";

type MediaData = {
  video?: { url: string };
  placeholder?: { url: string; blurDataURL?: string };
};

const isBlobCdn = (u: string) => u.includes("vercel-storage.com");

// export function Video({ video }: { video: MediaData }) {
//   const [url, setUrl] = useState(video?.video?.url ?? "");
//   const mounted = useHasMounted();
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [inView, setInView] = useState(false);
//   const [ready, setReady] = useState(false);
//   const [shouldLoad, setShouldLoad] = useState(false);

//   useEffect(() => {
//     let aborted = false;

//     async function sync() {
//       const base = video?.video?.url ?? "";
//       if (!base || isBlobCdn(base)) {
//         setReady(isBlobCdn(base));
//         return;
//       }

//       try {
//         const r = await fetch(`/api/blob?src=${encodeURIComponent(base)}`, {
//           method: "GET",
//         });
//         if (!r.ok) throw new Error("blob api failed");
//         const { url: newUrl } = await r.json();

//         if (aborted) return;

//         // Если сервер вернул CDN — отлично; если вернул исходник/пусто — остаёмся на исходнике/постере
//         if (newUrl && isBlobCdn(newUrl)) {
//           setUrl(newUrl);
//           setReady(true);
//         } else {
//           // остались на исходнике или пустой строке — показываем постер/заглушку
//           setUrl(base);
//           setReady(isBlobCdn(base));
//         }
//       } catch {
//         // тихо фейлимся — остаемся на исходнике/постере
//         if (!aborted) {
//           setUrl(base);
//           setReady(isBlobCdn(base));
//         }
//       }
//     }

//     sync();
//     return () => {
//       aborted = true;
//     };
//   }, [video?.video?.url]);

//   // IO создаётся только после монтирования
//   useEffect(() => {
//     if (!mounted || !ref.current) return;
//     const io = new IntersectionObserver(
//       ([entry]) => setInView(entry.isIntersecting),
//       { rootMargin: "300px 0px" }
//     );
//     io.observe(ref.current);
//     return () => io.disconnect();
//   }, [mounted]);

//   useEffect(() => {
//     if (mounted && inView && !shouldLoad) setShouldLoad(true);
//   }, [mounted, inView, shouldLoad]);

//   const preview = video.placeholder?.url || "/images/preview.png";

//   return (
//     <div ref={ref} className="relative w-full h-full overflow-hidden">
//       <Image
//         src={preview}
//         alt="preview"
//         fill
//         className={`object-cover ${
//           !ready ? "opacity-100 z-10" : "opacity-0 z-0"
//         } transition-opacity duration-500`}
//         sizes="100vw"
//         priority
//       />
//        <video
//         src={shouldLoad && url ? url : undefined}
//         className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//           ready ? "opacity-100 z-10" : "opacity-0 z-0"
//         }`}
//         onLoadedData={() => setReady(true)}
//         autoPlay={ready}
//         muted
//         playsInline
//         loop
//         preload="metadata"
//         disableRemotePlayback
//         style={{
//           transform: "translateZ(0)",
//           willChange: "opacity, transform",
//         }}
//       />

//       <video
//         src={shouldLoad ? url : undefined}
//         className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//           ready ? "opacity-100 z-10" : "opacity-0 z-0"
//         }`}
//         onLoadedData={() => setReady(true)}
//         autoPlay={mounted}
//         muted
//         playsInline
//         loop
//         preload="metadata"
//         disableRemotePlayback
//         style={{
//           transform: "translateZ(0)",
//           willChange: "opacity, transform",
//         }}
//       />
//     </div>
//   );
// }

export function Video({ video }: { video: MediaData }) {
  const [url, setUrl] = useState(video?.video?.url ?? "");
  const [ready, setReady] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [inView, setInView] = useState(false);
  const mounted = useHasMounted();
  const ref = useRef<HTMLDivElement | null>(null);

  // IO
  useEffect(() => {
    if (!mounted || !ref.current) return;
    const node = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "300px 0px" }
    );
    io.observe(node);
    return () => {
      io.unobserve(node);
      io.disconnect();
    };
  }, [mounted]);

  useEffect(() => {
    if (mounted && inView && !shouldLoad) setShouldLoad(true);
  }, [mounted, inView, shouldLoad]);

  // Sync с Blob, но только если реально видим
  useEffect(() => {
    if (!shouldLoad) return;
    let aborted = false;

    async function sync() {
      const base = video?.video?.url ?? "";
      setReady(false);
      if (!base || isBlobCdn(base)) {
        setUrl(base);
        return;
      }

      try {
        const r = await fetch(`/api/blob?src=${encodeURIComponent(base)}`);
        if (!r.ok) throw new Error("blob api failed");
        const { url: newUrl } = await r.json();
        if (aborted) return;
        setUrl(newUrl || base);
      } catch {
        if (!aborted) setUrl(base);
      }
    }

    sync();
    return () => {
      aborted = true;
    };
  }, [video?.video?.url, shouldLoad]);

  const preview = video.placeholder?.url || "/images/preview.png";

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
      <Image
        src={preview}
        alt="preview"
        fill
        className={`object-cover transition-opacity duration-500 ${
          !ready ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        sizes="100vw"
        priority
      />

      <video
        src={shouldLoad && url ? url : undefined}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          ready ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        onLoadedData={() => setReady(true)}
        autoPlay={ready || mounted}
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
