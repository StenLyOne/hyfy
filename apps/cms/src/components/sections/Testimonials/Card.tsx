import Image from "next/image";
import { TestimonialCard } from "src/lib/types/sections/testimonials";

export function Card({ testimonial }: { testimonial: TestimonialCard }) {
  const { avatar, name, paragraph, role } = testimonial;
  return (
    <div className="space-y-6 p-4 md:p-6 h-full w-full bg-white rounded-[20px]">
      <div className="flex gap-3">
        {avatar && (
          <Image
            src={avatar?.url || "/avatars/avatar.png"}
            alt={avatar?.alt ?? "avatar"}
            width={50}
            height={50}
            className="rounded-full min-w-[50px] min-h-[50px]"
          />
        )}
        <div>
          {name && (
            <p className="body-large font-semibold line-clamp-1">{name}</p>
          )}
          {role && (
            <p className="body-small text-gray-500 line-clamp-1">{role}</p>
          )}
        </div>
        {/* {rating && (
          <div className="ml-auto">
            <RatingCircle value={rating} />
          </div>
        )} */}
      </div>
      <p className="body-medium">{paragraph}</p>
    </div>
  );
}
