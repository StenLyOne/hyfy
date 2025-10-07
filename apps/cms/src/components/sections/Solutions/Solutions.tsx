import { SubTitle } from "src/components/ui/Subtitle/SubTitle";
import { SolutionsData } from "src/lib/types/sections/solutions";
import { Card } from "./Card";
import { AnimatedText } from "src/components/Animation/AnimatedText";
import { Button } from "src/components/ui/Button/Button";

export function Solutions({ data }: { data: SolutionsData }) {
  const { cards, ctas, subtitle, text, title } = data;
  
  return (
    <section className="bg-[#D6F5F3]  z-3 relative">
      <div className="container space-y-15">
        <AnimatedText className="space-y-5">
          {subtitle && <SubTitle label={subtitle} />}
          {title && <h2 className="h2-default">{title}</h2>}
          {text && <p className="body-medium">{text}</p>}
          <div className="space-y-5">
            {ctas.map((cta, index) => (
              <Button data={cta} key={index} />
            ))}
          </div>
        </AnimatedText>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
