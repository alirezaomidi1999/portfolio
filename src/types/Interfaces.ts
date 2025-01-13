export interface Item {
  title: string;
  description: string;
  Icon: React.ElementType;
}
export interface TimeLineDetails {
  title: string;
  description: string;
  year?: string;
  hasLine?: boolean;
  link?: string;
  image?: string;
  hasImage?: boolean;
  projects?: string[];
}
export type Position = {
  lat: number;
  lng: number;
};

export interface ProjectItem {
  src: string;
  alt: string;
  link: string;
}
