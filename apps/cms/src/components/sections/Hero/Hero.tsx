"use client";

import { AnimatedText } from "src/components/Animation/AnimatedText";
import { Button } from "src/components/ui/Button/Button";
import { Video } from "src/components/Video/Video";
import { HeroData } from "src/lib/types/sections/hero";

export function Hero({ data }: { data: HeroData }) {
  const { cta, sub_heading, content, heading, media } = data;

  return (
    <main id="hero" className="fixed inset-0 px-4 z-0">
      <div className="relative  z-2 w-full h-full mx-auto  max-w-[1440px] text-center">
        <AnimatedText className="w-full h-full flex flex-col items-center justify-center mx-auto">
          {sub_heading && (
            <div className="w-max mx-auto rounded-full border border-white/30 bg-white/10 backdrop-blur-lg shadow-[0_1px_4px_0_rgba(0,0,0,1)]]">
              <p className="px-6 py-4 max-[360px]:text-[14px] text-[16px] md:text-[20px] tracking-[0.8px] font-semibold  max-[360px]:leading-5 max-[500px]:leading-6 lg:leading-5 text-white uppercase">
                {sub_heading}
              </p>
            </div>
          )}

          <h1 className="text-[30px] md:text-[80px] leading-[114%] font-semibold text-white mt-6 mb-5">
            {heading}
          </h1>
          {content && (
            <div className="space-y-5">
              {content.map((c, index) => (
                <p
                  key={index}
                  className=" max-[678px]:!text-[16px] !text-[24px] max-[678px]:!leading-[24px] text-center text-balance text-white/90 font-semibold"
                >
                  {c.paragraph}
                </p>
              ))}
            </div>
          )}

          {cta && (
            <div className="mt-12 flex flex-wrap gap-4 items-center justify-center">
              {cta.map((c, index) => (
                <Button data={c} key={index} />
              ))}
            </div>
          )}
        </AnimatedText>
      </div>

      {media?.video && (
        // <div className="absolute inset-0 z-0  ">
        <Video video={media} />
        // </div>
      )}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#184242]/60 to-[#184242]/60"></div>
    </main>
  );
}
