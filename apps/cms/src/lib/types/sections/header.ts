import { Button } from "../ui/button";

export type LinkType = "anchor" | "external" | "internal";

export interface HeaderLink {
  label: string;
  type: LinkType;
  url: string;
}

export interface HeaderData {
  links: HeaderLink[];
  cta: Button
}
