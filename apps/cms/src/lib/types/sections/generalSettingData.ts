import { Media } from "../ui/media";

export type Target = "x" | "facebook" | "youtube" | "linkedin" | "insagram";

export interface SocialMedia {
  target: Target;
  link: string;
}

export interface GeneralSettingData {
  logo_full?: Media;
  logo_icon?: Media;
  social_media?: SocialMedia[];
}