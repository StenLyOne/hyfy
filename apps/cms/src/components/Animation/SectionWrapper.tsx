"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useScreenSize } from "src/hooks/useScreenSize";

export function SectionWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { width } = useScreenSize();

  // стартуем раньше, чтобы на мобиле было видно «вылезание»
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 10%"],
  });

  // мягкий масштаб
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  // на мобиле вылет меньше (чтобы не дергало), на десктопе больше
  const startY = width <= 768 ? 55 : 25;
  const y = useTransform(scrollYProgress, [0, 1], [startY, 0]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: width >= 768 ? scale : undefined,
        y,
      }}
      className="
        relative z-20 
      
        md:min-h-[100dvh]    
        min-h-[100svh]     
        transform-gpu will-change-[transform]
     
        -mt-[12vh] sm:-mt-[16vh] 
        
      "
      //  [contain:layout_paint_style]
    >
      {children}
    </motion.section>
  );
}
