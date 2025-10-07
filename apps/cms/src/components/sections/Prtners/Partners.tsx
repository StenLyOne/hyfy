"use client";

import { motion } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";
import { AnimatedText } from "src/components/Animation/AnimatedText";
import { PartnersData } from "src/lib/types/sections/partners";

export function   Partners({ data }: { data: PartnersData }) {
  const { logos, text, title } = data;
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current && contentRef.current) {
      setDistance(
        containerRef.current.scrollWidth - contentRef.current.offsetWidth
      );
    }
  }, [logos]);

  return (
    <section className="bg-white overflow-hidden z-3 relative">
      <div className="pt-[140px] flex flex-col gap-10 md:gap-20">
        <AnimatedText className="container !py-0  space-y-4 min-w-[277px] px-4 md:px-0 bg-white z-1">
          <h2 className="h2-large">{title}</h2>
          <p>{text}</p>
        </AnimatedText>

        {/* Внешняя маска */}
        <div ref={containerRef} className="relative overflow-hidden w-[150%] ">
          {/* Двигающаяся лента */}
          <motion.div
            ref={contentRef}
            className="grid items-center grid-flow-col auto-cols-max gap-10 md:gap-[200px]"
            animate={{ x: [0, -distance] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20, // скорость (сек)
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.url}
                alt={logo.alt}
                className="w-auto h-auto max-w-none"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
