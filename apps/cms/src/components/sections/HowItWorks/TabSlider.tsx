"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { howItWorksCard } from "src/lib/types/sections/howItWorks";

export function TabSlider({ card }: { card: howItWorksCard[] }) {
  const [activ, setActiv] = useState(0);

  return (
    <div className="flex gap-5">
      <div className="space-y-4 max-[768px]:w-full max-[1300px]:w-1/2">
        {card.length > 0 &&
          card.map((c, index) => (
            <div
              onClick={() => setActiv(index)}
              className={clsx(
                "md:max-w-[586px] p-4 md:px-5 rounded-[28px] cursor-pointer",
                index === activ
                  ? "bg-[#D6F7F4] py-4 md:py-5"
                  : "bg-gray-50 md:bg-transparent"
              )}
              key={index}
            >
              <div className="flex items-center gap-5">
                <span className="w-13 min-w-13 h-13 min-h-13 bg-white md:bg-gray-50 rounded-full flex items-center justify-center">
                  <img src={c.icon?.url} alt={c.icon?.alt} />
                </span>{" "}
                <h4 className="font-medium">{c.heading}</h4>
              </div>
              <p
                className={clsx(
                  "min-lg:pl-[72px] overflow-hidden transition-all duration-600 ease-in-out",
                  index === activ
                    ? "opacity-100 max-h-40 mt-3 md:mt-0"
                    : "opacity-0 max-h-0"
                )}
              >
                {c.paragraph}
              </p>

              {c.media?.url && (
                <div
                  className={clsx(
                    "relative w-full h-[400px] rounded-[20px] md:hidden overflow-hidden mt-5",
                    index === activ ? "block" : "hidden"
                  )}
                >
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === activ ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={c.media?.url}
                      alt={c.media?.alt || ""}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
      </div>
      {card.length > 0 && (
        <div className="hidden md:block w-full max-[1300px]:w-1/2 max-w-[820px] h-[440px] relative rounded-[20px] overflow-hidden">
          {card.map(
            (image, index) =>
              image.media?.url && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activ ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={image.media?.url}
                    alt={image.media?.alt || ""}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )
          )}
        </div>
      )}
    </div>
  );
}
