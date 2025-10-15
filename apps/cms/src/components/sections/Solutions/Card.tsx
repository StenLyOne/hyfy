"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ButtonArrow } from "src/components/ui/Button/ButtonArrow";
import { CardLink } from "src/lib/types/sections/solutions";
import clsx from "clsx";
import { useScreenSize } from "src/hooks/useScreenSize";

export function Card({ card }: { card: CardLink }) {
  const { gradient_start, gradient_end, heading, link, media, paragraph } =
    card;

  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useScreenSize().width <= 768;

  const inView = useInView(ref, {
    margin: "-60% 0px -60% 0px",
    amount: "some",
  });
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div
        ref={ref}
        className={clsx(
          "relative group/card rounded-[20px] p-5 h-[280px]",
          inView && isMobile && "is-active"
        )}
      >
        {/* белая подложка */}
        <div className="absolute inset-0 bg-white transition-opacity duration-300 group-hover/card:opacity-0 rounded-[20px]" />

        {/* градиент */}
        {gradient_start && gradient_end && (
          <div
            className={clsx(
              "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 rounded-[20px]",
              inView && isMobile && "opacity-100"
            )}
            style={{
              background: `linear-gradient(to top right, #${gradient_start}, #${gradient_end})`,
            }}
          />
        )}

        {/* контент */}
        <div className="relative flex flex-col justify-between h-full">
          {heading && (
            <h3
              className={clsx(
                "h3-default transition-colors duration-300 group-hover/card:text-white",
                inView && isMobile && "text-white"
              )}
            >
              {heading}
            </h3>
          )}
          <div className="flex justify-between items-end gap-10">
            {paragraph && (
              <p
                className={clsx(
                  "text-balance transition-colors duration-300 group-hover/card:text-transparent",
                  inView && isMobile && "text-transparent"
                )}
              >
                {paragraph}
              </p>
            )}

            <ButtonArrow
              className={clsx(
                "bg-primary text-white border-2 border-primary",
                "group-hover/card:bg-white group-hover/card:text-primary",
                inView && isMobile && "bg-white text-primary"
              )}
              isActive={inView && isMobile}
            />
          </div>
          {/* картинка */}
          {media?.url && (
            <div
              className={clsx(
                "absolute opacity-0 group-hover/card:opacity-100 group-hover/card:scale-125 translate-y-1/6 left-1/6 group-hover/card:-translate-y-[20px] duration-300",
                isMobile &&
                  inView &&
                  "translate-y-5/10 opacity-100 -translate-x-1/4 h-[160px] scale-115"
              )}
            >
              <Image
                alt={media?.alt || "Media Image"}
                src={media?.url}
                width={500}
                height={500}
                className="h-auto max-h-[160px] md:max-h-[240px] object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
