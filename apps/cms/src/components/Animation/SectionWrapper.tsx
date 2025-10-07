"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SectionWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start start"], // когда секция входит и выходит
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const borderRadius = useTransform(scrollYProgress, [0.9, 1], [40, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ scale, y, borderRadius }}
      className="relative z-3 bg-white rounded-[20px] shadow-[0_-7px_33px_rgba(53,239,217,0.31)] overflow-hidden"
    >
      {children}
    </motion.section>
  );
}
