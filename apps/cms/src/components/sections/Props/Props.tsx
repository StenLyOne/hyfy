import { SubTitle } from "src/components/ui/Subtitle/SubTitle";
import { PropsData } from "src/lib/types/sections/props";
import { Card } from "./Card";

export function Props({ data }: { data: PropsData }) {
  const { cards, subtitle, text, title } = data;

  function getCardStyles(index: number) {
    const h = 160;
    const s = 30;
    const l = 95 - index * 2;

    // базовый цвет
    const base = `${h} ${s}% ${l}%`;

    // стопы
    const color0 = `hsl(${base} / 0)`; // центр прозрачный
    const color05 = `hsl(${base} / 0.5)`; // полупрозрачный на 39%
    const color1 = `hsl(${base} / 1)`; // полностью видимый на 100%

    const gradient = `radial-gradient(circle, ${color0} 0%, ${color05} 50%, ${color1} 65%)`;

    return { color: `hsl(${base})`, gradient };
  }

  const dataSvg = [
    "/svg/props.validation.svg",
    "/svg/props.monitoring.svg",
    "/svg/props.factor.svg",
    "/svg/props.validation.svg",
    "/svg/props.validation.svg",
  ];

  return (
    <section className="w-full bg-white  z-3 relative">
      <div className="container !px-0 md:!px-10">
        <div>
          {subtitle && <SubTitle label={subtitle} />}
          {title && <h2>{title}</h2>}
          {text && <p>{text}</p>}
        </div>
        <div className="space-y-10">
          {cards.map((card, index) => (
            <Card
              data={card}
              key={index}
              styles={getCardStyles(index)}
              svg={dataSvg[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
