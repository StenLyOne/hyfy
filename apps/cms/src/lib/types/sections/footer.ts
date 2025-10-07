export type LinkType = "anchor" | "external" | "internal";

export interface FooterLink {
  label: string;
  type: LinkType;
  url: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  columns: FooterColumn[];
}
