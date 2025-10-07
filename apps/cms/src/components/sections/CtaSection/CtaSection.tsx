"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "src/components/Animation/AnimatedText";
import { Button } from "src/components/ui/Button/Button";
import { Video } from "src/components/Video/Video";
import { useScreenSize } from "src/hooks/useScreenSize";
import { CtaSectionData } from "src/lib/types/sections/ctaSection";

export function CtaSection({ data }: { data: CtaSectionData }) {
  const { ctas, text, title, video } = data;
  const { width } = useScreenSize();

  const refContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ["start start", "end end"],
  });

  const videoWitdh = useTransform(
    scrollYProgress,
    [0, 0.7],
    width >= 768 ? ["60%", "100%"] : ["80%", "100%"]
  );
  const videoHeight = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["60vh", "100vh"]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.7],
    width >= 768 ? ["90%", "100%"] : ["100%", "100%"]
  );
  const radius = useTransform(scrollYProgress, [0, 0.7], ["50px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "100%"]);

  return (
    <section
      ref={refContainer}
      className="relative w-full h-[350vh] bg-white" // секция выше, чем экран
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="relative rounded-[20px] overflow-hidden"
          style={{
            width: videoWitdh,
            height: videoHeight,
            scale: scale,
            borderRadius: radius,
          }}
        >
          <Video img="/images/preview.png" video={video} />
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#184242]/60 to-[#184242]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#184242]/60 to-[#184242]/60" />
          <AnimatedText className="max-w-[750px] mx-auto text-center space-y-6 flex flex-col items-center justify-center h-full relative z-10">
            {title && (
              <motion.h2
                style={{ opacity: opacity }}
                className="h2-large text-white text-balance"
              >
                {title}
              </motion.h2>
            )}
            {text && (
              <motion.p
                style={{ opacity: opacity }}
                className="body-large text-white text-balance"
              >
                {text}
              </motion.p>
            )}
            {ctas && (
              <motion.div style={{ opacity: opacity }} className="space-x-5">
                {ctas.map((cta, i) => (
                  <Button key={i} data={cta} />
                ))}
              </motion.div>
            )}
          </AnimatedText>
        </motion.div>
      </div>
    </section>
  );
}
