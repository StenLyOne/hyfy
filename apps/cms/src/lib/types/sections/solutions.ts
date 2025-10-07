import { Button } from "../ui/button";
import { CardLink } from "../ui/card";

export interface SolutionsData {
  title: string;
  subtitle: string;
  text: string;
  ctas: Button[];
  cards: CardLink[]
}
