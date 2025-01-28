export type Item = {
  title: string;
  description: string;
  Icon: React.ElementType;
};
export type TimeLineDetails = {
  title: string;
  description: string;
  year?: string;
  hasLine?: boolean;
  link?: string;
  image?: string;
  hasImage?: boolean;
  projects?: string[];
};
