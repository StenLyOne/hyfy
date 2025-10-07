import { SubTitle } from "src/components/ui/Subtitle/SubTitle";
import { TabSlider } from "./TabSlider";
import type { HowItWorksData } from "src/lib/types/sections/howItWorks";

export function HowItWorks({ data }: { data: HowItWorksData }) {
  const { cards, subtitle, text, title } = data;
  return (
    <section className="bg-white z-3 relative">
      <div className="container space-y-15">
        <div className="text-center max-w-[900px] mx-auto flex flex-col items-center space-y-6">
          {subtitle && <SubTitle label={subtitle} />}
          {title && <h2 className="h2-large">{title}</h2>}
          {text && <p className="body-medium">{text}</p>}
        </div>
        <TabSlider cards={cards} />
      </div>
    </section>
  );
}
