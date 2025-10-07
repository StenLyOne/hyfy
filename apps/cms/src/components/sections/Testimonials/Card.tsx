import Image from "next/image";
import { RatingCircle } from "src/components/ui/RatingCircle/RatingCircle";
import { CardData } from "src/lib/types/ui/card";

export function Card({ testimonial }: { testimonial: CardData }) {
  const { title, id, media, text, subtitle } = testimonial;
  return (
    <div className="space-y-6 p-4 md:p-6 h-full w-full bg-white rounded-[20px]">
      <div className="flex gap-3">
        {media && (
          <Image
            src={media?.url}
            alt={media?.alt}
            width={50}
            height={50}
            className="rounded-full min-w-[50px] min-h-[50px]"
          />
        )}
        <div>
          <h5 className="body-medium font-mediu line-clamp-1">{title}</h5>
          <p className="body-small font-normal text-gray-500 line-clamp-1">{subtitle}</p>
        </div>
        {id && (
          <div className="ml-auto">
            <RatingCircle value={id} />
          </div>
        )}
      </div>
      <p className="body-medium">{text}</p>
    </div>
  );
}
