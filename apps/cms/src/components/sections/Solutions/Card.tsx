import Image from "next/image";
import { ButtonArrow } from "src/components/ui/Button/ButtonArrow";
import { CardLink } from "src/lib/types/ui/card";

export function Card({ card }: { card: CardLink }) {
  const { gradient, link, media, text, title } = card;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative group rounded-[20px] p-5 h-[280px] ">
        {/* градиент */}
        <div className="absolute inset-0 bg-white transition-opacity duration-300 group-hover:opacity-0 rounded-[20px]" />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[20px]"
          style={{
            background: `linear-gradient(to top right, #${gradient.colorEnd}, #${gradient.colorStart})`,
          }}
        />

        {/* контент */}
        <div className="relative flex flex-col justify-between h-full">
          <h3 className="h3-default transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>
          <div className="flex justify-between items-end gap-10">
            <p className="text-balance transition-colors duration-300 group-hover:text-transparent">
              {text}
            </p>
            <ButtonArrow
              className="
            bg-primary text-white border-2 border-primary
            group-hover:bg-white group-hover:text-primary
          "
            />
          </div>
          {/* белый фон */}

          <div className="absolute opacity-0 group-hover:opacity-100 group-hover:scale-125 translate-y-1/6 left-1/6 group-hover:-translate-y-[20px] duration-300 ">
            <Image
              alt={media.alt}
              src={media.url}
              width={500}
              height={500}
              className="h-auto max-h-[240px] object-contain"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
