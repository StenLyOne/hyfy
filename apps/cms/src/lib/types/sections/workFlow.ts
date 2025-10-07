import { Button } from "../ui/button";
import { CardData } from "../ui/card";

export interface WorkFlowData {
  title?: string;
  subtitle?: string;
  text?: string;
  ctas?: Button[];
  cards: CardData[]
}
