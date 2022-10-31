export interface ContentData {
  title: string;
  description: string;
  img: {
    src: string;
    alt: string;
  }[];
  breakdown: string;
  objective: string[];
  progression: string;
}