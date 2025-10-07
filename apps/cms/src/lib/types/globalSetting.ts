export interface GlobalSettingData {
  logo: string;
  shortLogo: string;
  socialMedia: SocialMedia[];
}

export interface SocialMedia {
  label: "youTube" | "x" | "linkedin";
  link: string;
}
