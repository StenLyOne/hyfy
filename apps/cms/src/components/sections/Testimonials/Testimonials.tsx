import { TestimonialsData } from "src/lib/types/sections/testimonials";
import { CardsWrapper } from "./CardsWrapper";
import { SubTitle } from "../../ui/Subtitle/SubTitle";
import { AnimatedText } from "src/components/Animation/AnimatedText";
import { Button } from "src/components/ui/Button/Button";

export function Testimonials({ data }: { data: TestimonialsData }) {
  const { cards, ctas, subtitle, text, title } = data;
  return (
    <section className="bg-gray-50 overflow-hidden  z-3 relative">
      <div className="container !px-0 md:!px-10 space-y-10">
        <div>
          <AnimatedText className="space-y-6 px-4 md:px-0">
            {subtitle && <SubTitle label={subtitle} />}
            {title && <h2 className="h2-large">{title}</h2>}
            {text && <p className="text-balance">{text}</p>}
            {ctas?.length != 0 &&
              ctas &&
              ctas.map((ele, index) => <Button key={index} data={ele} />)}
          </AnimatedText>
        </div>
        <CardsWrapper cards={cards} />
      </div>
    </section>
  );
}
