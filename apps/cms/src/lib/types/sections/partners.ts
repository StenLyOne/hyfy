import { Button } from "../ui/button";
import { Media } from "../ui/media";

export interface PartnersData {
  title?: string;
  text?: string;
  ctas?: Button[];
  logos: Media[];
}
