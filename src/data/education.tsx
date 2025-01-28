import { TimeLineDetails } from "@/types/types";

export type ResumeSection = Pick<TimeLineDetails, "title" | "description">;

export const educations: ResumeSection[] = [
  {
    title: "Computer Engineering",
    description: "Bachelor Degree at Azad University",
  },
];
