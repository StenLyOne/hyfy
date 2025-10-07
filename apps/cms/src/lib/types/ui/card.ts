import { Media } from "./media";

export interface CardData {
  id?: number;
  title: string;
  subtitle?: string;
  text?: string;
  media?: Media;
  icon?: string;
}

export interface CardLink {
  title: string;
  text: string;
  link: string;
  media: Media;
  gradient: {
    colorStart: string;
    colorEnd: string;
  };
}
