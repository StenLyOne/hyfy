import Image from "next/image";
import type { CardData } from "src/lib/types/ui/card";

type CardStyles = { color: string; gradient: string };

export function Card({
  data,
  styles,
  svg,
}: {
  data: CardData;
  styles: CardStyles;
  svg: string;
}) {
  const { title, media, subtitle, text } = data;
  const { color, gradient } = styles;

  return (
    <div
      className="sticky top-12 md:top-25 flex flex-col md:flex-row justify-end w-full h-auto lg:h-[580px] rounded-[20px]"
      style={{ backgroundColor: color }}
    >
      <div className="w-full md:w-1/2 px-5 md:px-10 py-10">
        {subtitle && <h5 className="max-[768px]:mb-1 max-[768px]:!text-[14px] md:pb-[180px]">{subtitle}</h5>}
        <div className="space-y-5">
          {title && <h3 className="h3-default font-medium">{title}</h3>}
          {text && <p>{text}</p>}
        </div>
      </div>

      <div className="w-full md:w-1/2 relative overflow-hidden">
        {/* <div className="absolute inset-0 z-12">
          <img src={svg} alt="" className="z-[100] w-full h-full object-cover" />
        </div> */}
        {media?.url && (
          <Image
            src={media.url}
            alt={media.alt}
            width={676}
            height={582}
            className="w-full  object-cover rounded-[20px] min-h-[450px] md:h-full z-0"
          />
        )}
        <div
          className="absolute inset-0 translate-x-[15%] scale-150 rounded-[20px] z-10"
          // style={{ background: gradient }}
        />
      </div>
    </div>
  );
}
