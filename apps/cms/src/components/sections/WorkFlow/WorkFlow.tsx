import { Button } from "src/components/ui/Button/Button";
import { SubTitle } from "src/components/ui/Subtitle/SubTitle";
import { WorkFlowData } from "src/lib/types/sections/workFlow";
import { Card } from "./Card";
import { AnimatedText } from "src/components/Animation/AnimatedText";

const shapePositions = [
  {
    0: "top-1/2 -translate-y-1/2 -left-[300px]",
    1: "top-1/2 -translate-y-1/2 -right-[300px]",
  },
  {
    0: "top-0 -translate-y-1/2 -right-[300px]",
    1: "bot-0 -translate-y-1/2  -left-[300px]",
  },
  {
    0: "top-0 -translate-y-1/2 -left-[300px]",
    1: "bottom-0 translate-y-1/2 -right-[300px]",
  },
  {
    0: "-top-[300px] -translate-x-1/2 left-1/2",
    1: "-bottom-[300px] -translate-x-1/2 left-1/2 ",
  },
];

export function WorkFlow({ data }: { data: WorkFlowData }) {
  const { cards, ctas, subtitle, text, title } = data;
  return (
    <section id="workflow" className="bg-gray-50">
      <div className="container space-y-15 bg-gra">
        <AnimatedText className="text-center text-balance">
          {subtitle && (
            <div className="mx-auto w-max">
              <SubTitle label={subtitle} />
            </div>
          )}
          <h2 className="h2-default my-6">{title}</h2>
          <p>{text}</p>
          {ctas && (
            <div className="mt-10 space-x-6">
              {ctas.map((cta, index) => (
                <Button data={cta} key={index} />
              ))}
            </div>
          )}
        </AnimatedText>
        <div className="flex  gap-5 md:gap-0 flex-col sm:flex-row pt-4 md:pt-6 pb-10 bg-white px-4 md:pl-5 pl-4 md:pr-0 rounded-[26px]">
          {cards.map((card, index) => (
            <div className="flex flex-col sm:flex-row items-center" key={index}>
              <Card data={card} position={shapePositions[index]} />
              {index !== 3 && (
                <svg
                  width="25"
                  height="32"
                  viewBox="0 0 25 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block"
                >
                  <path
                    d="M24.5303 6.47125C24.8232 6.17835 24.8232 5.70348 24.5303 5.41059L19.7574 0.637617C19.4645 0.344723 18.9896 0.344723 18.6967 0.637617C18.4038 0.93051 18.4038 1.40538 18.6967 1.69828L22.9393 5.94092L18.6967 10.1836C18.4038 10.4765 18.4038 10.9513 18.6967 11.2442C18.9896 11.5371 19.4645 11.5371 19.7574 11.2442L24.5303 6.47125ZM0 5.94092V6.69092H24V5.94092V5.19092H0V5.94092Z"
                    fill="#2E3542"
                  />
                  <path
                    d="M24.5303 26.4712C24.8232 26.1784 24.8232 25.7035 24.5303 25.4106L19.7574 20.6376C19.4645 20.3447 18.9896 20.3447 18.6967 20.6376C18.4038 20.9305 18.4038 21.4054 18.6967 21.6983L22.9393 25.9409L18.6967 30.1836C18.4038 30.4765 18.4038 30.9513 18.6967 31.2442C18.9896 31.5371 19.4645 31.5371 19.7574 31.2442L24.5303 26.4712ZM0 25.9409V26.6909H24V25.9409V25.1909H0V25.9409Z"
                    fill="#2E3542"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
