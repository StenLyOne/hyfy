import { ServicesData } from "src/lib/types/sections/services";
import CardsWrapper from "./CardsWrapper";
import { SubTitle } from "src/components/ui/Subtitle/SubTitle";

export function Services({ data }: { data: ServicesData }) {
  const { cards, title, subtitle, text } = data;
  return (
    <section className=" bg-white w-full  z-3 relative">
      <div className="container !py-0 md:!pt-[140px] !pt-[100px] space-y-6 md:space-y-20 ">
        <div className="ml-auto max[1120px]:w-[1074px] space-y-6">
          {subtitle && <SubTitle label={subtitle} />}
          {title && <h2 className="h2-large text-balance">{title}</h2>}
          {text && <p>{text}</p>}
        </div>
        <CardsWrapper cards={cards} />
      </div>
    </section>
  );
}
