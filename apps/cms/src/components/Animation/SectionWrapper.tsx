"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width:${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);
  return isMobile;
}

export function SectionWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isMobile = useIsMobile();

  // стартуем раньше, чтобы на мобиле было видно «вылезание»
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 10%"],
  });

  // мягкий масштаб
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  // на мобиле вылет меньше (чтобы не дергало), на десктопе больше
  const startY = isMobile ? -35 : 25;
  const y = useTransform(scrollYProgress, [0, 1], [startY, 0]);

  // скругление чуть раньше
  // const borderRadius = useTransform(scrollYProgress, [0.9, 1], [32, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ scale, y }}
      className="
        relative z-20 
      
        md:min-h-[100dvh]    
        min-h-[100svh]     
        transform-gpu will-change-[transform]
        [contain:layout_paint_style]
        -mt-[12vh] sm:-mt-[16vh] 
        
      "
    >
      {children}
    </motion.section>
  );
}
