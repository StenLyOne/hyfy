import Image from "next/image";
import type { CardData } from "src/lib/types/ui/card";

export function CardItem({ card }: { card: CardData }) {
  const { title, media, text } = card;
  return (
    <div
      id={title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // заменяем всё, кроме латиницы и цифр, на "-"
        .replace(/(^-|-$)/g, "")}
      className="relative max-w-[1074px] w-full min-h-[400px] md:h-[400px] p-5 md:p-10 bg-gray-100  flex items-center justify-center rounded-[20px] overflow-hidden"
    >
      <div className="z-3 max-w-[600px] space-y-4 mr-auto mt-auto">
        {title && <h3 className="h3-default text-white font-semibold">{title}</h3>}
        {text && <p className="text-white font-semibold body-medium">{text}</p>}
      </div>

      {media && (
        <Image
          src={media?.url}
          alt={media.alt}
          fill
          className="z-1 absolute inset-0 w-full h-full object-cover"
        ></Image>
      )}
      <div className="z-2 absolute inset-0 w-full h-full object-cover bg-gradient-to-r from-[#0D4F47]/80 to-transparent"></div>
    </div>
  );
}
