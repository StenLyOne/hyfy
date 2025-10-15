export interface Media {
  url: string;
  alt: string;
}

export type MediaFile = {
  url: string;
};
export interface MediaData {
  placeholder?: MediaFile;
  video?: MediaFile;
}
