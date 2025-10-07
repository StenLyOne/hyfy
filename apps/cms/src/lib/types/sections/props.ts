import { Button } from "../ui/button";
import { CardData } from "../ui/card";

export interface PropsData {
  title?: string;
  subtitle?: string;
  text?: string;
  ctas?: Button[];
  cards: CardData[];
}
